import { localeString } from './objects/localeString'
import { localePortableText } from './objects/localePortableText'
import { localeSlug } from './objects/localeSlug'
import { room } from './room'
import { diningVenue } from './diningVenue'
import { conferenceRoom } from './conferenceRoom'
import { spa } from './spa'
import { activity } from './activity'
import { faqItem } from './faqItem'
import { award } from './award'
import { event } from './event'
import { homepage } from './homepage'
import { siteSettings } from './siteSettings'
import { historyPage } from './historyPage'
import { videoGallery } from './videoGallery'
import { liveCameraPage } from './liveCameraPage'

export const schemaTypes = [
  // Object types
  localeString,
  localePortableText,
  localeSlug,
  // Document types
  room,
  diningVenue,
  conferenceRoom,
  spa,
  activity,
  faqItem,
  award,
  event,
  homepage,
  siteSettings,
  historyPage,
  videoGallery,
  liveCameraPage,
]
