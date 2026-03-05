import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'nl'],
  defaultLocale: 'en',
  localePrefix: 'never', // URL bez /en/ /nl/ — zostaje fiord.dev/
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
