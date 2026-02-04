import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'
import { locales, defaultLocale, pathnames } from './config'

export const routing = defineRouting({
  locales,
  defaultLocale,
  pathnames,
  localePrefix: 'always',
})

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
