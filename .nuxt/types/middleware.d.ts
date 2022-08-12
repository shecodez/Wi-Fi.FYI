import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/nuxt@3.0.0-rc.6/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}