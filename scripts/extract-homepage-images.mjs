import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

// Collect all image URLs loaded via network
const imageUrls = new Set();

page.on('response', async (response) => {
  const url = response.url();
  const contentType = response.headers()['content-type'] || '';
  if (
    contentType.startsWith('image/') ||
    /\.(jpg|jpeg|png|webp|svg|gif|avif)(\?|$)/i.test(url)
  ) {
    // Skip tiny assets, tracking pixels, and things we already have
    if (
      !url.includes('googletagmanager') &&
      !url.includes('google.com') &&
      !url.includes('facebook') &&
      !url.includes('chimpstatic') &&
      !url.includes('star-') &&
      !url.includes('emoji')
    ) {
      imageUrls.add(url);
    }
  }
});

// Also collect video URLs
const videoUrls = new Set();
page.on('response', async (response) => {
  const url = response.url();
  const contentType = response.headers()['content-type'] || '';
  if (
    contentType.startsWith('video/') ||
    /\.(mp4|webm|ogg|m3u8)(\?|$)/i.test(url)
  ) {
    videoUrls.add(url);
  }
});

console.log('Loading homepage...');
await page.goto('https://telefericgrandhotel.ro', {
  waitUntil: 'networkidle',
  timeout: 60000,
});

// Scroll the entire page to trigger lazy-loaded images
console.log('Scrolling page to trigger lazy loading...');
await page.evaluate(async () => {
  const delay = (ms) => new Promise((r) => setTimeout(r, ms));
  const height = document.body.scrollHeight;
  for (let y = 0; y < height; y += 500) {
    window.scrollTo(0, y);
    await delay(300);
  }
  window.scrollTo(0, 0);
});

// Wait for any remaining network activity
await page.waitForTimeout(5000);

// Also extract from DOM directly (img src, srcset, background-image, video src)
const domImages = await page.evaluate(() => {
  const urls = new Set();

  // img elements
  document.querySelectorAll('img').forEach((img) => {
    if (img.src) urls.add(img.src);
    if (img.dataset.src) urls.add(img.dataset.src);
    if (img.srcset) {
      img.srcset.split(',').forEach((s) => {
        const url = s.trim().split(' ')[0];
        if (url) urls.add(url);
      });
    }
  });

  // background-image in computed styles
  document.querySelectorAll('*').forEach((el) => {
    const bg = getComputedStyle(el).backgroundImage;
    if (bg && bg !== 'none') {
      const match = bg.match(/url\(["']?(.*?)["']?\)/);
      if (match && match[1]) urls.add(match[1]);
    }
  });

  // video elements
  document.querySelectorAll('video, video source').forEach((el) => {
    if (el.src) urls.add('VIDEO: ' + el.src);
    if (el.dataset.src) urls.add('VIDEO: ' + el.dataset.src);
  });

  // Smart Slider data attributes
  document.querySelectorAll('[data-slide-bg], [data-background]').forEach((el) => {
    const bg = el.dataset.slideBg || el.dataset.background;
    if (bg) urls.add(bg);
  });

  return [...urls];
});

domImages.forEach((u) => {
  if (u.startsWith('VIDEO: ')) {
    videoUrls.add(u.replace('VIDEO: ', ''));
  } else if (
    !u.includes('data:') &&
    !u.includes('googletagmanager') &&
    !u.includes('star-') &&
    !u.includes('emoji')
  ) {
    imageUrls.add(u);
  }
});

console.log('\n=== IMAGES FOUND (' + imageUrls.size + ') ===\n');
[...imageUrls].sort().forEach((url) => console.log(url));

if (videoUrls.size > 0) {
  console.log('\n=== VIDEOS FOUND (' + videoUrls.size + ') ===\n');
  [...videoUrls].sort().forEach((url) => console.log(url));
} else {
  console.log('\n=== NO VIDEOS FOUND ===');
}

await browser.close();
