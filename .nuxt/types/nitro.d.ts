// Generated by nitro
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/_content/query/:qid': Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/server/api/query').default>>
    '/api/_content/query': Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/server/api/query').default>>
    '/api/_content/cache': Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/server/api/cache').default>>
    '/api/_content/navigation/:qid': Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/server/api/navigation').default>>
    '/api/_content/navigation': Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/server/api/navigation').default>>
    '/api/_content/highlight': Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxt+content@2.0.1/node_modules/@nuxt/content/dist/runtime/server/api/highlight').default>>
  }
}
declare global {
  const appendHeader: typeof import('h3')['appendHeader']
  const appendHeaders: typeof import('h3')['appendHeaders']
  const appendResponseHeader: typeof import('h3')['appendResponseHeader']
  const appendResponseHeaders: typeof import('h3')['appendResponseHeaders']
  const assertMethod: typeof import('h3')['assertMethod']
  const cachedEventHandler: typeof import('#internal/nitro')['cachedEventHandler']
  const cachedFunction: typeof import('#internal/nitro')['cachedFunction']
  const callHandler: typeof import('h3')['callHandler']
  const createApp: typeof import('h3')['createApp']
  const createAppEventHandler: typeof import('h3')['createAppEventHandler']
  const createError: typeof import('h3')['createError']
  const createEvent: typeof import('h3')['createEvent']
  const createRouter: typeof import('h3')['createRouter']
  const defaultContentType: typeof import('h3')['defaultContentType']
  const defineCachedEventHandler: typeof import('#internal/nitro')['defineCachedEventHandler']
  const defineCachedFunction: typeof import('#internal/nitro')['defineCachedFunction']
  const defineEventHandler: typeof import('h3')['defineEventHandler']
  const defineHandle: typeof import('h3')['defineHandle']
  const defineHandler: typeof import('h3')['defineHandler']
  const defineLazyEventHandler: typeof import('h3')['defineLazyEventHandler']
  const defineLazyHandler: typeof import('h3')['defineLazyHandler']
  const defineMiddleware: typeof import('h3')['defineMiddleware']
  const defineNitroPlugin: typeof import('#internal/nitro')['defineNitroPlugin']
  const defineRenderHandler: typeof import('#internal/nitro')['defineRenderHandler']
  const deleteCookie: typeof import('h3')['deleteCookie']
  const dynamicEventHandler: typeof import('h3')['dynamicEventHandler']
  const eventHandler: typeof import('h3')['eventHandler']
  const getCookie: typeof import('h3')['getCookie']
  const getHeader: typeof import('h3')['getHeader']
  const getHeaders: typeof import('h3')['getHeaders']
  const getMethod: typeof import('h3')['getMethod']
  const getQuery: typeof import('h3')['getQuery']
  const getRequestHeader: typeof import('h3')['getRequestHeader']
  const getRequestHeaders: typeof import('h3')['getRequestHeaders']
  const getResponseHeader: typeof import('h3')['getResponseHeader']
  const getResponseHeaders: typeof import('h3')['getResponseHeaders']
  const getRouterParam: typeof import('h3')['getRouterParam']
  const getRouterParams: typeof import('h3')['getRouterParams']
  const handleCacheHeaders: typeof import('h3')['handleCacheHeaders']
  const isError: typeof import('h3')['isError']
  const isEvent: typeof import('h3')['isEvent']
  const isEventHandler: typeof import('h3')['isEventHandler']
  const isMethod: typeof import('h3')['isMethod']
  const isStream: typeof import('h3')['isStream']
  const lazyEventHandler: typeof import('h3')['lazyEventHandler']
  const lazyHandle: typeof import('h3')['lazyHandle']
  const nitroPlugin: typeof import('#internal/nitro')['nitroPlugin']
  const parseCookies: typeof import('h3')['parseCookies']
  const promisifyHandle: typeof import('h3')['promisifyHandle']
  const promisifyHandler: typeof import('h3')['promisifyHandler']
  const readBody: typeof import('h3')['readBody']
  const readRawBody: typeof import('h3')['readRawBody']
  const send: typeof import('h3')['send']
  const sendError: typeof import('h3')['sendError']
  const sendRedirect: typeof import('h3')['sendRedirect']
  const sendStream: typeof import('h3')['sendStream']
  const setCookie: typeof import('h3')['setCookie']
  const setHeader: typeof import('h3')['setHeader']
  const setHeaders: typeof import('h3')['setHeaders']
  const setResponseHeader: typeof import('h3')['setResponseHeader']
  const setResponseHeaders: typeof import('h3')['setResponseHeaders']
  const toEventHandler: typeof import('h3')['toEventHandler']
  const useBase: typeof import('h3')['useBase']
  const useBody: typeof import('h3')['useBody']
  const useCookie: typeof import('h3')['useCookie']
  const useCookies: typeof import('h3')['useCookies']
  const useMethod: typeof import('h3')['useMethod']
  const useNitroApp: typeof import('#internal/nitro')['useNitroApp']
  const useQuery: typeof import('h3')['useQuery']
  const useRawBody: typeof import('h3')['useRawBody']
  const useRuntimeConfig: typeof import('#internal/nitro')['useRuntimeConfig']
  const useStorage: typeof import('#internal/nitro')['useStorage']
}
export {}