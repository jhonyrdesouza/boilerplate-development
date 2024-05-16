/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 */

export const PUBLIC_ROUTES = ['/', '/terms', '/privacy', '/pricing', '/login', '/signup', '/reset-password'];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to `DEFAULT_LOGIN_REDIRECT`
 */

export const AUTH_ROUTES = ['/login', '/signup', '/reset-password', '/auth/error'];

/**
 * The default redirect path after a user logs in
 */

export const DEFAULT_LOGIN_REDIRECT = '/workspace';
