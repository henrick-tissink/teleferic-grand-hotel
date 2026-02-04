import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

const videoUrls = new Set();
const iframeUrls = new Set();
const imageUrls = new Set();

page.on('response', async (response) => {
  const url = response.url();
  const contentType = response.headers()['content-type'] || '';
  if (
    contentType.startsWith('video/') ||
    /\.(mp4|webm|ogg|m3u8)(\?|$)/i.test(url)
  ) {
    videoUrls.add(url);
  }
  if (url.includes('youtube.com') || url.includes('youtu.be') || url.includes('vimeo.com')) {
    videoUrls.add(url);
  }
});

console.log('Loading video gallery...');
await page.goto('https://telefericgrandhotel.ro/galerie-video/', {
  waitUntil: 'networkidle',
  timeout: 60000,
});

// Scroll page
console.log('Scrolling...');
await page.evaluate(async () => {
  const delay = (ms) => new Promise((r) => setTimeout(r, ms));
  const height = document.body.scrollHeight;
  for (let y = 0; y < height; y += 500) {
    window.scrollTo(0, y);
    await delay(300);
  }
});
await page.waitForTimeout(3000);

// Extract iframes, video elements, YouTube/Vimeo embeds from DOM
const domMedia = await page.evaluate(() => {
  const results = [];

  // iframes
  document.querySelectorAll('iframe').forEach((iframe) => {
    if (iframe.src) results.push({ type: 'iframe', url: iframe.src });
    if (iframe.dataset.src) results.push({ type: 'iframe-lazy', url: iframe.dataset.src });
  });

  // video elements
  document.querySelectorAll('video, video source').forEach((el) => {
    if (el.src) results.push({ type: 'video', url: el.src });
    if (el.dataset.src) results.push({ type: 'video-lazy', url: el.dataset.src });
  });

  // Links to video files
  document.querySelectorAll('a[href*="youtube"], a[href*="youtu.be"], a[href*="vimeo"]').forEach((a) => {
    results.push({ type: 'link', url: a.href });
  });

  // data attributes that might contain video URLs
  document.querySelectorAll('[data-video], [data-youtube], [data-vimeo], [data-src*="youtube"], [data-src*="vimeo"]').forEach((el) => {
    const url = el.dataset.video || el.dataset.youtube || el.dataset.vimeo || el.dataset.src;
    if (url) results.push({ type: 'data-attr', url });
  });

  // Smart Slider video references
  document.querySelectorAll('[data-video-mp4], [data-video-webm]').forEach((el) => {
    if (el.dataset.videoMp4) results.push({ type: 'slider-mp4', url: el.dataset.videoMp4 });
    if (el.dataset.videoWebm) results.push({ type: 'slider-webm', url: el.dataset.videoWebm });
  });

  // Any element with onclick or href containing video references
  document.querySelectorAll('[onclick*="video"], [onclick*="youtube"], [onclick*="play"]').forEach((el) => {
    results.push({ type: 'onclick', content: el.getAttribute('onclick') });
  });

  // Look for Elementor video widgets
  document.querySelectorAll('.elementor-video, .elementor-video-iframe, [data-settings]').forEach((el) => {
    const settings = el.dataset.settings;
    if (settings) {
      try {
        const parsed = JSON.parse(settings);
        if (parsed.youtube_url) results.push({ type: 'elementor-youtube', url: parsed.youtube_url });
        if (parsed.vimeo_url) results.push({ type: 'elementor-vimeo', url: parsed.vimeo_url });
        if (parsed.hosted_url) results.push({ type: 'elementor-hosted', url: parsed.hosted_url.url || parsed.hosted_url });
        if (parsed.video_url) results.push({ type: 'elementor-video-url', url: parsed.video_url });
      } catch (e) {}
    }
  });

  // Get all text content that looks like YouTube URLs
  const bodyText = document.body.innerHTML;
  const ytMatches = bodyText.match(/https?:\/\/(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[a-zA-Z0-9_-]+/g);
  if (ytMatches) ytMatches.forEach((url) => results.push({ type: 'regex-youtube', url }));

  const vimeoMatches = bodyText.match(/https?:\/\/(www\.)?vimeo\.com\/\d+/g);
  if (vimeoMatches) vimeoMatches.forEach((url) => results.push({ type: 'regex-vimeo', url }));

  // Also get page structure for context
  const headings = [...document.querySelectorAll('h1, h2, h3, h4')].map((h) => h.textContent.trim());

  return { media: results, headings };
});

console.log('\n=== PAGE HEADINGS ===');
domMedia.headings.forEach((h) => console.log('  ' + h));

console.log('\n=== MEDIA FROM DOM (' + domMedia.media.length + ') ===');
domMedia.media.forEach((m) => console.log(`  [${m.type}] ${m.url || m.content}`));

if (videoUrls.size > 0) {
  console.log('\n=== VIDEOS FROM NETWORK (' + videoUrls.size + ') ===');
  [...videoUrls].sort().forEach((url) => console.log('  ' + url));
}

// Now try clicking on video thumbnails/play buttons to trigger loading
console.log('\n=== TRYING TO CLICK PLAY BUTTONS ===');
const playButtons = await page.$$('.elementor-custom-embed-play, .play-button, [class*="play"], .elementor-video, a[href*="youtube"], a[href*="vimeo"]');
console.log('Found ' + playButtons.length + ' potential play buttons');

for (const btn of playButtons.slice(0, 10)) {
  try {
    await btn.click();
    await page.waitForTimeout(2000);
  } catch (e) {}
}

// Check for any new iframes that appeared after clicking
const postClickIframes = await page.evaluate(() => {
  return [...document.querySelectorAll('iframe')].map((f) => f.src).filter(Boolean);
});

if (postClickIframes.length > 0) {
  console.log('\n=== IFRAMES AFTER CLICKING ===');
  postClickIframes.forEach((url) => console.log('  ' + url));
}

// Also try the live camera page
console.log('\n\n=== NOW CHECKING LIVE CAMERA PAGE ===');
await page.goto('https://telefericgrandhotel.ro/camera-live/', {
  waitUntil: 'networkidle',
  timeout: 60000,
});
await page.waitForTimeout(3000);

const cameraMedia = await page.evaluate(() => {
  const results = [];
  document.querySelectorAll('iframe').forEach((f) => {
    if (f.src) results.push({ type: 'iframe', url: f.src });
  });
  document.querySelectorAll('video, video source').forEach((el) => {
    if (el.src) results.push({ type: 'video', url: el.src });
  });
  document.querySelectorAll('[data-settings]').forEach((el) => {
    try {
      const s = JSON.parse(el.dataset.settings);
      if (s.youtube_url) results.push({ type: 'youtube', url: s.youtube_url });
      if (s.video_url) results.push({ type: 'video-url', url: s.video_url });
    } catch (e) {}
  });
  return results;
});

console.log('Camera page media:');
cameraMedia.forEach((m) => console.log(`  [${m.type}] ${m.url}`));

await browser.close();
