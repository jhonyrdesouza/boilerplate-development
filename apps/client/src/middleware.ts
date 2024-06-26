import createMiddleware from 'next-intl/middleware';
import { defaultLocale, localePrefix, locales } from './plugins/i18n/config';

export default createMiddleware({ locales, defaultLocale, localePrefix });

export const config = { matcher: ['/', '/(br|en)/:path*'] };
