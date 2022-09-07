import { ref, onServerPrefetch, getCurrentInstance, inject, computed, defineAsyncComponent, defineComponent, provide, h, Suspense, Transition, reactive, toRefs, Text, resolveComponent, watch, useSlots, useSSRContext, unref, watchEffect, markRaw, mergeProps, withCtx, createVNode, toDisplayString, withAsyncContext, createTextVNode, shallowRef, createApp, toRef, isRef, onErrorCaptured } from 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/vue@3.2.38/node_modules/vue/index.mjs';
import { $fetch as $fetch$1 } from 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/ohmyfetch@0.4.18/node_modules/ohmyfetch/dist/node.mjs';
import { withBase, withLeadingSlash, withoutTrailingSlash, joinURL, hasProtocol, isEqual as isEqual$1, parseURL } from 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/ufo@0.8.5/node_modules/ufo/dist/index.mjs';
import { createHooks } from 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/hookable@5.3.0/node_modules/hookable/dist/index.mjs';
import { getContext, executeAsync } from 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/unctx@1.2.0/node_modules/unctx/dist/index.mjs';
import { RouterView, createMemoryHistory, createRouter } from 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/vue-router@4.1.5_vue@3.2.38/node_modules/vue-router/dist/vue-router.node.mjs';
import destr from 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/destr@1.1.1/node_modules/destr/dist/index.mjs';
import { appendHeader, createError as createError$1, sendRedirect } from 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/h3@0.7.21/node_modules/h3/dist/index.mjs';
import defu, { defuFn } from 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/defu@6.1.0/node_modules/defu/dist/defu.mjs';
import { isFunction } from 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/@vue+shared@3.2.38/node_modules/@vue/shared/index.js';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderSuspense } from 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/vue@3.2.38/node_modules/vue/server-renderer/index.mjs';
import { pascalCase } from 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/scule@0.2.1/node_modules/scule/dist/index.mjs';
import { find, html } from 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/index.js';
import htmlTags from 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/html-tags@3.2.0/node_modules/html-tags/index.js';
import { ArrowLeftIcon, ArrowRightIcon } from 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/@heroicons+vue@1.0.6/node_modules/@heroicons/vue/outline/index.js';
import { hash, isEqual } from 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/ohash@0.1.5/node_modules/ohash/dist/index.mjs';
import { parse, serialize } from 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/cookie-es@0.5.0/node_modules/cookie-es/dist/index.mjs';
import { TagIcon } from 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/@heroicons+vue@1.0.6/node_modules/@heroicons/vue/solid/index.js';
import { a as useRuntimeConfig$1 } from '../nitro/nitro-prerenderer.mjs';
import 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/node-fetch-native@0.1.4/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/radix3@0.1.2/node_modules/radix3/dist/index.mjs';
import 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/unenv@0.6.2/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/unstorage@0.4.2/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/unstorage@0.4.2/node_modules/unstorage/dist/drivers/fs.mjs';
import 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/pathe@0.3.3/node_modules/pathe/dist/index.mjs';
import 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/remark-emoji@3.0.2/node_modules/remark-emoji/index.js';
import 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/rehype-slug@5.0.1/node_modules/rehype-slug/index.js';
import 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/remark-squeeze-paragraphs@5.0.1/node_modules/remark-squeeze-paragraphs/index.js';
import 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/rehype-external-links@1.0.1/node_modules/rehype-external-links/index.js';
import 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/remark-gfm@3.0.1/node_modules/remark-gfm/index.js';
import 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/rehype-sort-attribute-values@4.0.0/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/rehype-sort-attributes@4.0.0/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/rehype-raw@6.1.1/node_modules/rehype-raw/index.js';
import 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/js-yaml@4.1.0/node_modules/js-yaml/dist/js-yaml.mjs';
import 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/flat@5.0.2/node_modules/flat/index.js';
import 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/unified@10.1.2/node_modules/unified/index.js';
import 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/remark-parse@10.0.1/node_modules/remark-parse/index.js';
import 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/remark-rehype@10.1.0/node_modules/remark-rehype/index.js';
import 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/unist-util-visit@4.1.0/node_modules/unist-util-visit/index.js';
import 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/stringify-entities@4.0.3/node_modules/stringify-entities/index.js';
import 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/parse-entities@4.0.0/node_modules/parse-entities/index.js';
import 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/micromark-util-character@1.1.0/node_modules/micromark-util-character/index.js';
import 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/micromark-factory-space@1.0.0/node_modules/micromark-factory-space/index.js';
import 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/micromark-factory-whitespace@1.0.0/node_modules/micromark-factory-whitespace/index.js';
import 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/index.js';
import 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/mdast-util-to-hast@12.2.0/node_modules/mdast-util-to-hast/index.js';
import 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/detab@3.0.1/node_modules/detab/index.js';
import 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/unist-builder@3.0.0/node_modules/unist-builder/index.js';
import 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/mdurl@1.0.1/node_modules/mdurl/index.js';
import 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/unist-util-position@4.0.3/node_modules/unist-util-position/index.js';
import 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/slugify@1.6.5/node_modules/slugify/slugify.js';
import 'file:///Users/nicole/dev/vvifi-fyi/node_modules/.pnpm/shiki-es@0.1.2/node_modules/shiki-es/dist/shiki.node.mjs';

const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const buildAssetsDir = () => appConfig.buildAssetsDir;
const buildAssetsURL = (...path) => joinURL(publicAssetsURL(), buildAssetsDir(), ...path);
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
};
globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const nuxtAppCtx = getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    _asyncData: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      var _a;
      if (prop === "public") {
        return target.public;
      }
      return (_a = target[prop]) != null ? _a : target.public[prop];
    },
    set(target, prop, value) {
      {
        return false;
      }
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide: provide2 } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide2 && typeof provide2 === "object") {
    for (const key in provide2) {
      nuxtApp.provide(key, provide2[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  for (const plugin of plugins2) {
    await applyPlugin(nuxtApp, plugin);
  }
}
function normalizePlugins(_plugins2) {
  const plugins2 = _plugins2.map((plugin) => {
    if (typeof plugin !== "function") {
      return null;
    }
    if (plugin.length > 1) {
      return (nuxtApp) => plugin(nuxtApp, nuxtApp.provide);
    }
    return plugin;
  }).filter(Boolean);
  return plugins2;
}
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxtAppCtx.callAsync(nuxt, fn);
  }
}
function useNuxtApp() {
  const nuxtAppInstance = nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    const vm = getCurrentInstance();
    if (!vm) {
      throw new Error("nuxt instance unavailable");
    }
    return vm.appContext.app.$nuxt;
  }
  return nuxtAppInstance;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const getDefault = () => null;
function useAsyncData(...args) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  options.server = (_a = options.server) != null ? _a : true;
  options.default = (_b = options.default) != null ? _b : getDefault;
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = (_d = (_c = options.lazy) != null ? _c : options.defer) != null ? _d : false;
  options.initialCache = (_e = options.initialCache) != null ? _e : true;
  const nuxt = useNuxtApp();
  const useInitialCache = () => (nuxt.isHydrating || options.initialCache) && nuxt.payload.data[key] !== void 0;
  if (!nuxt._asyncData[key]) {
    nuxt._asyncData[key] = {
      data: ref(useInitialCache() ? nuxt.payload.data[key] : (_g = (_f = options.default) == null ? void 0 : _f.call(options)) != null ? _g : null),
      pending: ref(!useInitialCache()),
      error: ref((_h = nuxt.payload._errors[key]) != null ? _h : null)
    };
  }
  const asyncData = { ...nuxt._asyncData[key] };
  asyncData.refresh = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      return nuxt._asyncDataPromises[key];
    }
    if (opts._initial && useInitialCache()) {
      return nuxt.payload.data[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      var _a2, _b2;
      asyncData.error.value = error;
      asyncData.data.value = unref((_b2 = (_a2 = options.default) == null ? void 0 : _a2.call(options)) != null ? _b2 : null);
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (fetchOnServer) {
    const promise = initialFetch();
    onServerPrefetch(() => promise);
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = useNuxtApp();
  const state = toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = useNuxtApp();
    nuxtApp.callHook("app:error", err);
    const error = useError();
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
const CookieDefaults = {
  path: "/",
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a, _b;
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts) || {};
  const cookie = ref((_b = cookies[name]) != null ? _b : (_a = opts.default) == null ? void 0 : _a.call(opts));
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (!isEqual(cookie.value, cookies[name])) {
        writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", writeFinalCookieValue);
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  var _a;
  {
    return parse(((_a = useRequestEvent()) == null ? void 0 : _a.req.headers.cookie) || "", opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return serialize(name, value, { ...opts, maxAge: -1 });
  }
  return serialize(name, value, opts);
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (getCurrentInstance()) {
    return inject("_route", useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options = {}) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : to.path || "/";
  const isExternal = hasProtocol(toPath, true);
  if (isExternal && !options.external) {
    throw new Error("Navigating to external URL is not allowed by default. Use `nagivateTo (url, { external: true })`.");
  }
  if (isExternal && parseURL(toPath).protocol === "script:") {
    throw new Error("Cannot navigate to an URL with script protocol.");
  }
  if (!isExternal && isProcessingMiddleware()) {
    return to;
  }
  const router = useRouter();
  {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = isExternal ? toPath : joinURL(useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => sendRedirect(nuxtApp.ssrContext.event, redirectLocation, options.redirectCode || 301));
    }
  }
  if (isExternal) {
    if (options.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    return Promise.resolve();
  }
  return options.replace ? router.replace(to) : router.push(to);
};
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  return defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const to = computed(() => {
        return props.to || props.href || "";
      });
      const isExternal = computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || hasProtocol(to.value, true);
      });
      return () => {
        var _a, _b, _c;
        if (!isExternal.value) {
          return h(
            resolveComponent("RouterLink"),
            {
              to: to.value,
              activeClass: props.activeClass || options.activeClass,
              exactActiveClass: props.exactActiveClass || options.exactActiveClass,
              replace: props.replace,
              ariaCurrentValue: props.ariaCurrentValue,
              custom: props.custom
            },
            slots.default
          );
        }
        const href = typeof to.value === "object" ? (_b = (_a = router.resolve(to.value)) == null ? void 0 : _a.href) != null ? _b : null : to.value || null;
        const target = props.target || null;
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            route: router.resolve(href),
            rel,
            target,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { href, rel, target }, (_c = slots.default) == null ? void 0 : _c.call(slots));
      };
    }
  });
}
const __nuxt_component_0$3 = defineNuxtLink({ componentName: "NuxtLink" });
const inlineConfig = {};
defuFn(inlineConfig);
function useHead(meta2) {
  const resolvedMeta = isFunction(meta2) ? computed(meta2) : meta2;
  useNuxtApp()._useHead(resolvedMeta);
}
const preload = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
const components = {
  InfoBox: defineAsyncComponent(() => import('./_nuxt/InfoBox.05cd4cd4.mjs').then((c) => c.default || c)),
  ContentDoc: defineAsyncComponent(() => import('./_nuxt/ContentDoc.315c1b27.mjs').then((c) => c.default || c)),
  ContentList: defineAsyncComponent(() => Promise.resolve().then(() => ContentList).then((c) => c.default || c)),
  ContentNavigation: defineAsyncComponent(() => import('./_nuxt/ContentNavigation.b5a0e9a0.mjs').then((c) => c.default || c)),
  ContentQuery: defineAsyncComponent(() => Promise.resolve().then(() => ContentQuery$1).then((c) => c.default || c)),
  ContentRenderer: defineAsyncComponent(() => Promise.resolve().then(() => ContentRenderer).then((c) => c.default || c)),
  Markdown: defineAsyncComponent(() => import('./_nuxt/Markdown.d50caf66.mjs').then((c) => c.default || c)),
  MarkdownRenderer: defineAsyncComponent(() => Promise.resolve().then(() => MarkdownRenderer).then((c) => c.default || c)),
  ProseA: defineAsyncComponent(() => import('./_nuxt/ProseA.38f69124.mjs').then((c) => c.default || c)),
  ProseBlockquote: defineAsyncComponent(() => import('./_nuxt/ProseBlockquote.5b84d51e.mjs').then((c) => c.default || c)),
  ProseCode: defineAsyncComponent(() => import('./_nuxt/ProseCode.b5a83e98.mjs').then((c) => c.default || c)),
  ProseCodeInline: defineAsyncComponent(() => import('./_nuxt/ProseCodeInline.9a3262f9.mjs').then((c) => c.default || c)),
  ProseEm: defineAsyncComponent(() => import('./_nuxt/ProseEm.e66dd20f.mjs').then((c) => c.default || c)),
  ProseH1: defineAsyncComponent(() => import('./_nuxt/ProseH1.7c963b93.mjs').then((c) => c.default || c)),
  ProseH2: defineAsyncComponent(() => import('./_nuxt/ProseH2.d2269f93.mjs').then((c) => c.default || c)),
  ProseH3: defineAsyncComponent(() => import('./_nuxt/ProseH3.587f112a.mjs').then((c) => c.default || c)),
  ProseH4: defineAsyncComponent(() => import('./_nuxt/ProseH4.bf45747c.mjs').then((c) => c.default || c)),
  ProseH5: defineAsyncComponent(() => import('./_nuxt/ProseH5.b9148a6e.mjs').then((c) => c.default || c)),
  ProseH6: defineAsyncComponent(() => import('./_nuxt/ProseH6.1ea93d3a.mjs').then((c) => c.default || c)),
  ProseHr: defineAsyncComponent(() => import('./_nuxt/ProseHr.9fa9566f.mjs').then((c) => c.default || c)),
  ProseImg: defineAsyncComponent(() => import('./_nuxt/ProseImg.610bae40.mjs').then((c) => c.default || c)),
  ProseLi: defineAsyncComponent(() => import('./_nuxt/ProseLi.264497f2.mjs').then((c) => c.default || c)),
  ProseOl: defineAsyncComponent(() => import('./_nuxt/ProseOl.2c0feb5e.mjs').then((c) => c.default || c)),
  ProseP: defineAsyncComponent(() => import('./_nuxt/ProseP.60db510c.mjs').then((c) => c.default || c)),
  ProseStrong: defineAsyncComponent(() => import('./_nuxt/ProseStrong.334a03d5.mjs').then((c) => c.default || c)),
  ProseTable: defineAsyncComponent(() => import('./_nuxt/ProseTable.18a907dd.mjs').then((c) => c.default || c)),
  ProseTbody: defineAsyncComponent(() => import('./_nuxt/ProseTbody.836a81ce.mjs').then((c) => c.default || c)),
  ProseTd: defineAsyncComponent(() => import('./_nuxt/ProseTd.9114b4a5.mjs').then((c) => c.default || c)),
  ProseTh: defineAsyncComponent(() => import('./_nuxt/ProseTh.a3d03e9f.mjs').then((c) => c.default || c)),
  ProseThead: defineAsyncComponent(() => import('./_nuxt/ProseThead.539cc7db.mjs').then((c) => c.default || c)),
  ProseTr: defineAsyncComponent(() => import('./_nuxt/ProseTr.94b6910b.mjs').then((c) => c.default || c)),
  ProseUl: defineAsyncComponent(() => import('./_nuxt/ProseUl.460dd59d.mjs').then((c) => c.default || c))
};
const _nuxt_components_plugin_mjs_KR1HBZs4kY = defineNuxtPlugin((nuxtApp) => {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name]);
    nuxtApp.vueApp.component("Lazy" + name, components[name]);
  }
});
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];
var BODY_TAG_ATTR_NAME = `data-meta-body`;
var createElement = (tag, attrs, document) => {
  const el = document.createElement(tag);
  for (const key of Object.keys(attrs)) {
    if (key === "body" && attrs.body === true) {
      el.setAttribute(BODY_TAG_ATTR_NAME, "true");
    } else {
      let value = attrs[key];
      if (key === "key" || value === false) {
        continue;
      }
      if (key === "children") {
        el.textContent = value;
      } else {
        el.setAttribute(key, value);
      }
    }
  }
  return el;
};
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "noscript",
  "htmlAttrs",
  "bodyAttrs"
];
var renderTemplate = (template, title) => {
  if (template == null)
    return "";
  if (typeof template === "string") {
    return template.replace("%s", title != null ? title : "");
  }
  return template(unref(title));
};
var headObjToTags = (obj) => {
  const tags = [];
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (obj[key] == null)
      continue;
    switch (key) {
      case "title":
        tags.push({ tag: key, props: { children: obj[key] } });
        break;
      case "titleTemplate":
        break;
      case "base":
        tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
        break;
      default:
        if (acceptFields.includes(key)) {
          const value = obj[key];
          if (Array.isArray(value)) {
            value.forEach((item) => {
              tags.push({ tag: key, props: item });
            });
          } else if (value) {
            tags.push({ tag: key, props: value });
          }
        }
        break;
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document = window.document, type, tags) => {
  var _a, _b;
  const head = document.head;
  const body = document.body;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  let bodyMetaElements = body.querySelectorAll(`[${BODY_TAG_ATTR_NAME}]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldHeadElements = [];
  const oldBodyElements = [];
  if (bodyMetaElements) {
    for (let i = 0; i < bodyMetaElements.length; i++) {
      if (bodyMetaElements[i] && ((_a = bodyMetaElements[i].tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldBodyElements.push(bodyMetaElements[i]);
      }
    }
  }
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_b = j == null ? void 0 : j.tagName) == null ? void 0 : _b.toLowerCase()) === type) {
        oldHeadElements.push(j);
      }
    }
  } else {
    headCountEl = document.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => {
    var _a2;
    return {
      element: createElement(tag.tag, tag.props, document),
      body: (_a2 = tag.props.body) != null ? _a2 : false
    };
  });
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldHeadElements.length; i++) {
      const oldEl = oldHeadElements[i];
      if (isEqualNode(oldEl, newEl.element)) {
        oldHeadElements.splice(i, 1);
        return false;
      }
    }
    for (let i = 0; i < oldBodyElements.length; i++) {
      const oldEl = oldBodyElements[i];
      if (isEqualNode(oldEl, newEl.element)) {
        oldBodyElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldBodyElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  oldHeadElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    if (t.body === true) {
      body.insertAdjacentElement("beforeend", t.element);
    } else {
      head.insertBefore(t.element, headCountEl);
    }
  });
  headCountEl.setAttribute("content", "" + (headCount - oldHeadElements.length + newElements.filter((t) => !t.body).length));
};
var createHead = (initHeadObject) => {
  let allHeadObjs = [];
  let previousTags = /* @__PURE__ */ new Set();
  if (initHeadObject) {
    allHeadObjs.push(shallowRef(initHeadObject));
  }
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      const titleTemplate = allHeadObjs.map((i) => unref(i).titleTemplate).reverse().find((i) => i != null);
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(unref(objs));
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          if (titleTemplate && tag.tag === "title") {
            tag.props.children = renderTemplate(titleTemplate, tag.props.children);
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document.title = title;
      }
      setAttrs(document.documentElement, htmlAttrs);
      setAttrs(document.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
};
var tagToString = (tag) => {
  let isBodyTag = false;
  if (tag.props.body) {
    isBodyTag = true;
    delete tag.props.body;
  }
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}${isBodyTag ? `  ${BODY_TAG_ATTR_NAME}="true"` : ""}>`;
  }
  return `<${tag.tag}${attrs}${isBodyTag ? ` ${BODY_TAG_ATTR_NAME}="true"` : ""}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  let bodyTags = [];
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else if (tag.props.body) {
      bodyTags.push(tagToString(tag));
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    },
    get bodyTags() {
      return bodyTags.join("");
    }
  };
};
const node_modules__pnpm_nuxt_643_0_0_rc_9_node_modules_nuxt_dist_head_runtime_lib_vueuse_head_plugin_mjs_BtA3KEYchq = defineNuxtPlugin((nuxtApp) => {
  const head = createHead();
  nuxtApp.vueApp.use(head);
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    watchEffect(() => {
      head.updateDOM();
    });
  });
  nuxtApp._useHead = (_meta) => {
    const meta2 = ref(_meta);
    const headObj = computed(() => {
      const overrides = { meta: [] };
      if (meta2.value.charset) {
        overrides.meta.push({ key: "charset", charset: meta2.value.charset });
      }
      if (meta2.value.viewport) {
        overrides.meta.push({ name: "viewport", content: meta2.value.viewport });
      }
      return defu(overrides, meta2.value);
    });
    head.addHeadObjs(headObj);
    {
      return;
    }
  };
  {
    nuxtApp.ssrContext.renderMeta = () => {
      const meta2 = renderHeadToString(head);
      return {
        ...meta2,
        bodyScripts: meta2.bodyTags
      };
    };
  }
});
const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = defineComponent({
  name: "Script",
  inheritAttrs: false,
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    fetchpriority: String,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
const NoScript = defineComponent({
  name: "NoScript",
  inheritAttrs: false,
  props: {
    ...globalProps,
    title: String
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a;
    const noscript = { ...props };
    const textContent = (((_a = slots.default) == null ? void 0 : _a.call(slots)) || []).filter(({ children }) => children).map(({ children }) => children).join("");
    if (textContent) {
      noscript.children = textContent;
    }
    return {
      noscript: [noscript]
    };
  })
});
const Link = defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
const Base = defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
const Title = defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    var _a, _b, _c;
    const title = ((_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children) || null;
    return {
      title
    };
  })
});
const Meta = defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  },
  setup: setupForUseMeta((meta2) => ({
    meta: [meta2]
  }))
});
const Style = defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a, _b, _c;
    const style = { ...props };
    const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
    if (textContent) {
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
const Head = defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
const Html = defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
const Body = defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
const Components = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Script,
  NoScript,
  Link,
  Base,
  Title,
  Meta,
  Style,
  Head,
  Html,
  Body
}, Symbol.toStringTag, { value: "Module" }));
const appHead = { "meta": [], "link": [], "style": [], "script": [], "noscript": [], "charset": "utf-8", "viewport": "width=device-width, initial-scale=1" };
const appPageTransition = { "name": "page", "mode": "out-in" };
const appKeepalive = false;
const metaMixin = {
  created() {
    const instance = getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = useNuxtApp();
    const source = typeof options.head === "function" ? computed(() => options.head(nuxtApp)) : options.head;
    useHead(source);
  }
};
const node_modules__pnpm_nuxt_643_0_0_rc_9_node_modules_nuxt_dist_head_runtime_plugin_mjs_rUpm7ZiZXT = defineNuxtPlugin((nuxtApp) => {
  useHead(markRaw({ title: "", ...appHead }));
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name in Components) {
    nuxtApp.vueApp.component(name, Components[name]);
  }
});
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey = (override, routeProps) => {
  var _a;
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a2;
    return ((_a2 = m.components) == null ? void 0 : _a2.default) === routeProps.Component.type;
  });
  const source = (_a = override != null ? override : matchedRoute == null ? void 0 : matchedRoute.meta.key) != null ? _a : matchedRoute && interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const Fragment = defineComponent({
  setup(_props, { slots }) {
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? h(component, props === true ? {} : props, slots) : h(Fragment, {}, slots) };
};
const isNestedKey = Symbol("isNested");
const NuxtPage = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = useNuxtApp();
    const isNested = inject(isNestedKey, false);
    provide(isNestedKey, true);
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          var _a, _b;
          if (!routeProps.Component) {
            return;
          }
          const key = generateRouteKey(props.pageKey, routeProps);
          const transitionProps = (_a = routeProps.route.meta.pageTransition) != null ? _a : appPageTransition;
          return _wrapIf(
            Transition,
            transitionProps,
            wrapInKeepAlive(
              (_b = routeProps.route.meta.keepalive) != null ? _b : appKeepalive,
              isNested && nuxtApp.isHydrating ? h(Component, { key, routeProps, pageKey: key, hasTransition: !!transitionProps }) : h(Suspense, {
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
              }, { default: () => h(Component, { key, routeProps, pageKey: key, hasTransition: !!transitionProps }) })
            )
          ).default();
        }
      });
    };
  }
});
const Component = defineComponent({
  props: ["routeProps", "pageKey", "hasTransition"],
  setup(props) {
    const previousKey = props.pageKey;
    const previousRoute = props.routeProps.route;
    const route = {};
    for (const key in props.routeProps.route) {
      route[key] = computed(() => previousKey === props.pageKey ? props.routeProps.route[key] : previousRoute[key]);
    }
    provide("_route", reactive(route));
    return () => {
      return h(props.routeProps.Component);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$7 = {
  __name: "Toc",
  __ssrInlineRender: true,
  props: ["links"],
  setup(__props) {
    const flattenLinks = (links) => {
      let _links = links.map((link) => {
        let _link = [link];
        if (link.children) {
          let flattened = flattenLinks(link.children);
          _link = [link, ...flattened];
        }
        return _link;
      }).flat(1);
      return _links;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "toc" }, _attrs))} data-v-9549c680><header class="toc-header" data-v-9549c680><h3 class="text-xl font-bold" data-v-9549c680>Table of contents</h3></header><ul class="toc-links" data-v-9549c680><!--[-->`);
      ssrRenderList(flattenLinks(__props.links), (link) => {
        _push(`<li class="${ssrRenderClass(`toc-link _${link.depth}`)}" data-v-9549c680><a${ssrRenderAttr("href", `#${link.id}`)} data-v-9549c680>${ssrInterpolate(link.text)}</a></li>`);
      });
      _push(`<!--]--></ul></nav>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Toc.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-9549c680"]]);
const DEFAULT_SLOT = "default";
const rxOn = /^@|^v-on:/;
const rxBind = /^:|^v-bind:/;
const rxModel = /^v-model/;
const nativeInputs = ["select", "textarea", "input"];
const __nuxt_component_2 = defineComponent({
  name: "ContentRendererMarkdown",
  props: {
    value: {
      type: Object,
      required: true
    },
    excerpt: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props) {
    const { content: { tags = {} } } = useRuntimeConfig().public;
    const { tag: _t, value: _d, ...contentProps } = toRefs(props);
    return {
      tags,
      contentProps
    };
  },
  render(ctx) {
    var _a;
    const { tags, tag, value, contentProps } = ctx;
    if (!value) {
      return null;
    }
    let body = value.body || value;
    if (this.excerpt && value.excerpt) {
      body = value.excerpt;
    }
    const meta2 = {
      ...value,
      tags: {
        ...tags,
        ...(value == null ? void 0 : value.tags) || {}
      }
    };
    let component = meta2.component || tag;
    if (typeof meta2.component === "object") {
      component = meta2.component.name;
    }
    component = resolveVueComponent(component);
    const children = (body.children || []).map((child) => renderNode(child, h, meta2));
    return h(component, {
      ...contentProps,
      ...(_a = meta2.component) == null ? void 0 : _a.props,
      ...this.$attrs
    }, {
      default: createSlotFunction(children)
    });
  }
});
function renderNode(node, h2, documentMeta) {
  var _a;
  const originalTag = node.tag;
  const renderTag = typeof ((_a = node.props) == null ? void 0 : _a.__ignoreMap) === "undefined" && documentMeta.tags[node.tag] || node.tag;
  if (node.type === "text") {
    return h2(Text, node.value);
  }
  const component = resolveVueComponent(renderTag);
  if (typeof component === "object") {
    component.tag = originalTag;
  }
  return h2(component, propsToData(node, documentMeta), renderSlots(node, h2, documentMeta));
}
function renderSlots(node, h2, documentMeta) {
  const children = node.children || [];
  const slots = children.reduce((data, node2) => {
    if (!isTemplate(node2)) {
      data[DEFAULT_SLOT].push(renderNode(node2, h2, documentMeta));
      return data;
    }
    if (isDefaultTemplate(node2)) {
      data[DEFAULT_SLOT].push(...node2.children.map((child) => renderNode(child, h2, documentMeta)));
      return data;
    }
    const slotName = getSlotName(node2);
    data[slotName] = node2.children.map((child) => renderNode(child, h2, documentMeta));
    return data;
  }, {
    [DEFAULT_SLOT]: []
  });
  return Object.fromEntries(Object.entries(slots).map(([name, vDom]) => [name, createSlotFunction(vDom)]));
}
function propsToData(node, documentMeta) {
  const { tag = "", props = {} } = node;
  return Object.keys(props).reduce(function(data, key) {
    if (key === "__ignoreMap") {
      return data;
    }
    const value = props[key];
    if (rxModel.test(key) && !nativeInputs.includes(tag)) {
      return propsToDataRxModel(key, value, data, documentMeta);
    }
    if (key === "v-bind") {
      return propsToDataVBind(key, value, data, documentMeta);
    }
    if (rxOn.test(key)) {
      return propsToDataRxOn(key, value, data, documentMeta);
    }
    if (rxBind.test(key)) {
      return propsToDataRxBind(key, value, data, documentMeta);
    }
    const { attribute } = find(html, key);
    if (Array.isArray(value) && value.every((v) => typeof v === "string")) {
      data[attribute] = value.join(" ");
      return data;
    }
    data[attribute] = value;
    return data;
  }, {});
}
function propsToDataRxModel(key, value, data, documentMeta) {
  const number = (d) => +d;
  const trim = (d) => d.trim();
  const noop = (d) => d;
  const mods = key.replace(rxModel, "").split(".").filter((d) => d).reduce((d, k) => {
    d[k] = true;
    return d;
  }, {});
  const field = "value";
  const event = mods.lazy ? "change" : "input";
  const processor = mods.number ? number : mods.trim ? trim : noop;
  data[field] = evalInContext(value, documentMeta);
  data.on = data.on || {};
  data.on[event] = (e) => documentMeta[value] = processor(e);
  return data;
}
function propsToDataVBind(_key, value, data, documentMeta) {
  const val = evalInContext(value, documentMeta);
  data = Object.assign(data, val);
  return data;
}
function propsToDataRxOn(key, value, data, documentMeta) {
  key = key.replace(rxOn, "");
  data.on = data.on || {};
  data.on[key] = () => evalInContext(value, documentMeta);
  return data;
}
function propsToDataRxBind(key, value, data, documentMeta) {
  key = key.replace(rxBind, "");
  data[key] = evalInContext(value, documentMeta);
  return data;
}
const resolveVueComponent = (component) => {
  if (!htmlTags.includes(component)) {
    const componentFn = resolveComponent(pascalCase(component), false);
    if (typeof componentFn === "object") {
      return componentFn;
    }
  }
  return component;
};
function evalInContext(code, context) {
  const result = code.split(".").reduce((o, k) => typeof o === "object" ? o[k] : void 0, context);
  return typeof result === "undefined" ? destr(code) : result;
}
function getSlotName(node) {
  let name = "";
  for (const propName of Object.keys(node.props || {})) {
    if (!propName.startsWith("#") && !propName.startsWith("v-slot:")) {
      continue;
    }
    name = propName.split(/[:#]/, 2)[1];
    break;
  }
  return name || DEFAULT_SLOT;
}
function createSlotFunction(nodes) {
  return nodes.length ? () => nodes : void 0;
}
function isDefaultTemplate(node) {
  return isTemplate(node) && getSlotName(node) === DEFAULT_SLOT;
}
function isTemplate(node) {
  return node.tag === "template";
}
const MarkdownRenderer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_2
}, Symbol.toStringTag, { value: "Module" }));
const __nuxt_component_1$2 = defineComponent({
  props: {
    value: {
      type: Object,
      required: false,
      default: () => ({})
    },
    excerpt: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props) {
    watch(() => props.excerpt, (newExcerpt) => {
      var _a, _b, _c;
      if (newExcerpt && !((_a = props.value) == null ? void 0 : _a.excerpt)) {
        console.warn(`No excerpt found for document content/${(_b = props == null ? void 0 : props.value) == null ? void 0 : _b._path}.${(_c = props == null ? void 0 : props.value) == null ? void 0 : _c._extension}!`);
        console.warn("Make sure to use <!--more--> in your content if you want to use excerpt feature.");
      }
    }, {
      immediate: true
    });
  },
  render(ctx) {
    var _a, _b;
    const slots = useSlots();
    const { value, excerpt, tag } = ctx;
    if (value && (value == null ? void 0 : value._type) === "markdown" && ((_b = (_a = value == null ? void 0 : value.body) == null ? void 0 : _a.children) == null ? void 0 : _b.length)) {
      return h(__nuxt_component_2, {
        value,
        excerpt,
        tag,
        ...this.$attrs
      });
    }
    if (value && (slots == null ? void 0 : slots.default)) {
      return slots.default({ value, excerpt, tag, ...this.$attrs });
    } else if (slots == null ? void 0 : slots.empty) {
      return slots.empty({ value, excerpt, tag, ...this.$attrs });
    } else if (slots == null ? void 0 : slots.default) {
      return slots.default({ value, excerpt, tag, ...this.$attrs });
    }
    return h("pre", null, JSON.stringify({ message: "You should use slots with <ContentRenderer>", value, excerpt, tag }, null, 2));
  }
});
const ContentRenderer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_1$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {
  __name: "Comments",
  __ssrInlineRender: true,
  props: ["slug"],
  setup(__props) {
    useRuntimeConfig();
    const state = reactive({
      loading: false,
      error: null,
      comments: [],
      recaptchaSuccess: false
    });
    const comment = reactive({
      name: "",
      email: "",
      message: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col md:flex-row gap-2 my-6" }, _attrs))} data-v-6fb377d1><div class="w-full md:m-4" data-v-6fb377d1><h3 data-v-6fb377d1>Leave a comment</h3>`);
      if (state.error) {
        _push(`<div class="alert alert-error rounded my-2" data-v-6fb377d1><div class="flex-1 flex gap-2 justify-start" data-v-6fb377d1><label data-v-6fb377d1>${ssrInterpolate(state.error)}</label></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form class="comment-form" data-v-6fb377d1><div class="form-control required" data-v-6fb377d1><label for="message" data-v-6fb377d1>Message</label><textarea name="message" rows="4" placeholder="Your comment (Markdown accepted)" required data-v-6fb377d1>${ssrInterpolate(comment.message)}</textarea><span class="hint" data-v-6fb377d1> Learn now to write Markdown with this <a rel="nofollow" href="https://www.markdownguide.org/cheat-sheet" target="_blank" tabindex="-1" data-v-6fb377d1>Cheat Sheet</a>. </span></div><div class="form-control required" data-v-6fb377d1><label for="name" data-v-6fb377d1>Name</label><input${ssrRenderAttr("value", comment.name)} name="name" type="text" placeholder="Name" required data-v-6fb377d1></div><div class="form-control" data-v-6fb377d1><label for="email" data-v-6fb377d1>E-Mail</label><input${ssrRenderAttr("value", comment.email)} name="email" type="email" placeholder="E-Mail Address (optional)" data-v-6fb377d1><span class="hint" data-v-6fb377d1> Email is used to display <a rel="nofollow" href="https://gravatar.com/" target="_blank" tabindex="-1" data-v-6fb377d1>Gravatar</a>. </span></div><div class="form-control" data-v-6fb377d1></div><button type="submit" class="comment-btn" data-v-6fb377d1>${ssrInterpolate(state.loading ? "Loading..." : "Submit")}</button></form></div><div class="w-full md:m-4" data-v-6fb377d1><h3 data-v-6fb377d1>View Comments</h3>`);
      if (state.comments.length) {
        _push(`<ul data-v-6fb377d1><!--[-->`);
        ssrRenderList(state.comments, (comment2) => {
          _push(`<li data-v-6fb377d1>${ssrInterpolate(comment2)}</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<div data-v-6fb377d1><p data-v-6fb377d1>No comments yet.</p></div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Comments.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-6fb377d1"]]);
const _sfc_main$5 = {
  __name: "PrevNext",
  __ssrInlineRender: true,
  props: ["prev", "next"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "prev-next-cont" }, _attrs))} data-v-d9d75d92><li class="link-item prev" data-v-d9d75d92>`);
      if (__props.prev) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: __props.prev._path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(ArrowLeftIcon), { class: "icon stroke" }, null, _parent2, _scopeId));
              _push2(`<span class="block" data-v-d9d75d92${_scopeId}>${ssrInterpolate(__props.prev.title)}</span>`);
            } else {
              return [
                createVNode(unref(ArrowLeftIcon), { class: "icon stroke" }),
                createVNode("span", { class: "block" }, toDisplayString(__props.prev.title), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li class="link-item next" data-v-d9d75d92>`);
      if (__props.next) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: __props.next._path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="block" data-v-d9d75d92${_scopeId}>${ssrInterpolate(__props.next.title)}</span>`);
              _push2(ssrRenderComponent(unref(ArrowRightIcon), { class: "icon stroke" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", { class: "block" }, toDisplayString(__props.next.title), 1),
                createVNode(unref(ArrowRightIcon), { class: "icon stroke" })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</li></ul>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PrevNext.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-d9d75d92"]]);
const ensureArray = (value) => Array.isArray(value) ? value : value ? [value] : [];
const arrayParams = ["sort", "where", "only", "without"];
const createQuery = (fetcher, queryParams) => {
  const params = {
    ...queryParams
  };
  for (const key of arrayParams) {
    if (params[key]) {
      params[key] = ensureArray(params[key]);
    }
  }
  const $set = (key, fn = (v) => v) => {
    return (...values) => {
      params[key] = fn(...values);
      return query;
    };
  };
  const query = {
    params: () => Object.freeze(params),
    only: $set("only", ensureArray),
    without: $set("without", ensureArray),
    where: $set("where", (q) => [...ensureArray(params.where), q]),
    sort: $set("sort", (sort) => [...ensureArray(params.sort), ...ensureArray(sort)]),
    limit: $set("limit", (v) => parseInt(String(v), 10)),
    skip: $set("skip", (v) => parseInt(String(v), 10)),
    findOne: () => fetcher({ ...params, first: true }),
    find: () => fetcher(params),
    findSurround: (query2, options) => fetcher({ ...params, surround: { query: query2, ...options } }),
    locale: (_locale) => query.where({ _locale })
  };
  return query;
};
function jsonStringify(value) {
  return JSON.stringify(value, regExpReplacer);
}
function regExpReplacer(_key, value) {
  if (value instanceof RegExp) {
    return `--REGEX ${value.toString()}`;
  }
  return value;
}
const TEXT_TAGS = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "li"];
function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
function isText(vnode) {
  return isTag(vnode, "text") || typeof vnode.children === "string";
}
function nodeChildren(node) {
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof node.children.default === "function") {
    return node.children.default();
  }
  return [];
}
function nodeTextContent(node) {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.children || node.value;
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).join("");
  }
  return "";
}
function unwrap(vnode, tags = ["p"]) {
  if (Array.isArray(vnode)) {
    return vnode.flatMap((node) => unwrap(node, tags));
  }
  let result = vnode;
  if (tags.some((tag) => tag === "*" || isTag(vnode, tag))) {
    result = nodeChildren(vnode) || vnode;
    if (!Array.isArray(result) && TEXT_TAGS.some((tag) => isTag(vnode, tag))) {
      result = [result];
    }
  }
  return result;
}
function flatUnwrap(vnodes, tags = ["p"]) {
  vnodes = Array.isArray(vnodes) ? vnodes : [vnodes];
  if (!tags.length) {
    return vnodes;
  }
  return vnodes.flatMap((vnode) => flatUnwrap(unwrap(vnode, [tags[0]]), tags.slice(1))).filter((vnode) => !(isText(vnode) && nodeTextContent(vnode).trim() === ""));
}
const withContentBase = (url) => withBase(url, "/api/" + useRuntimeConfig().public.content.base);
const useUnwrap = () => ({
  unwrap,
  flatUnwrap
});
const queryFetch = (params) => {
  const apiPath = withContentBase(`/query/${hash(params)}`);
  {
    useHead({
      link: [
        { rel: "prefetch", href: apiPath }
      ]
    });
  }
  return $fetch(apiPath, {
    method: "GET",
    responseType: "json",
    params: {
      _params: jsonStringify(params),
      previewToken: useCookie("previewToken").value
    }
  });
};
function queryContent(query, ...pathParts) {
  if (typeof query === "string") {
    let path = withLeadingSlash(withoutTrailingSlash(joinURL(query, ...pathParts)));
    path = path.replace(/[-[\]{}()*+.,^$\s]/g, "\\$&");
    return createQuery(queryFetch).where({ _path: new RegExp(`^${path}`) });
  }
  return createQuery(queryFetch, query);
}
const meta$3 = void 0;
const _sfc_main$4 = {
  __name: "Tags",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const expanded = ref(false);
    const flatten = (tags, key) => {
      let _tags = tags.map((tag) => {
        let _tag = tag;
        if (tag[key]) {
          let flattened = flatten(tag[key]);
          _tag = flattened;
        }
        return _tag;
      }).flat(1);
      return _tags;
    };
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("tags", () => queryContent("blog").only(["tags"]).find(), "$eYuFoCmHW7")), __temp = await __temp, __restore(), __temp);
    const articleTags = [...new Set(flatten(data.value, "tags"))];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["tag-list", { active: expanded.value }]
      }, _attrs))} data-v-6334af2e><button class="tag-btn" data-v-6334af2e>`);
      _push(ssrRenderComponent(unref(TagIcon), { class: "icon w-6 solid" }, null, _parent));
      _push(`<span data-v-6334af2e>Tags</span></button><ul class="${ssrRenderClass([{ expanded: expanded.value }, "post-tags"])}" data-v-6334af2e><!--[-->`);
      ssrRenderList(articleTags, (tag, n) => {
        _push(`<li class="tag" data-v-6334af2e>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/blog/tags/${tag}`,
          class: "font-semibold"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(tag)}`);
            } else {
              return [
                createTextVNode(toDisplayString(tag), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tags.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-6334af2e"]]);
const ContentQuery = defineComponent({
  props: {
    path: {
      type: String,
      required: false,
      default: void 0
    },
    only: {
      type: Array,
      required: false,
      default: void 0
    },
    without: {
      type: Array,
      required: false,
      default: void 0
    },
    where: {
      type: Object,
      required: false,
      default: void 0
    },
    sort: {
      type: Object,
      required: false,
      default: void 0
    },
    limit: {
      type: Number,
      required: false,
      default: void 0
    },
    skip: {
      type: Number,
      required: false,
      default: void 0
    },
    locale: {
      type: String,
      required: false,
      default: void 0
    },
    find: {
      type: String,
      required: false,
      default: void 0
    }
  },
  async setup(props) {
    const {
      path,
      only,
      without,
      where,
      sort,
      limit,
      skip,
      locale,
      find: find2
    } = toRefs(props);
    const isPartial = computed(() => path.value.includes("/_"));
    const { data, refresh } = await useAsyncData(`content-query-${hash(props)}`, () => {
      let queryBuilder;
      if (path.value) {
        queryBuilder = queryContent(path.value);
      } else {
        queryBuilder = queryContent();
      }
      if (only.value) {
        queryBuilder = queryBuilder.only(only.value);
      }
      if (without.value) {
        queryBuilder = queryBuilder.without(without.value);
      }
      if (where.value) {
        queryBuilder = queryBuilder.where(where.value);
      }
      if (sort.value) {
        queryBuilder = queryBuilder.sort(sort.value);
      }
      if (limit.value) {
        queryBuilder = queryBuilder.limit(limit.value);
      }
      if (skip.value) {
        queryBuilder = queryBuilder.skip(skip.value);
      }
      if (locale.value) {
        queryBuilder = queryBuilder.where({ _locale: locale.value });
      }
      if (find2.value === "one") {
        return queryBuilder.findOne();
      }
      if (find2.value === "surround") {
        if (!path.value) {
          console.warn("[Content] Surround queries requires `path` prop to be set.");
          console.warn("[Content] Query without `path` will return regular `find()` results.");
          return queryBuilder.find();
        }
        return queryBuilder.findSurround(path);
      }
      return queryBuilder.find();
    }, "$Xa56j0728U");
    return {
      isPartial,
      data,
      refresh
    };
  },
  render(ctx) {
    var _a;
    const slots = useSlots();
    const {
      data,
      refresh,
      isPartial,
      path,
      only,
      without,
      where,
      sort,
      limit,
      skip,
      locale,
      find: find2
    } = ctx;
    const props = {
      path,
      only,
      without,
      where,
      sort,
      limit,
      skip,
      locale,
      find: find2
    };
    if (props.find === "one") {
      if (!data && (slots == null ? void 0 : slots["not-found"])) {
        return slots["not-found"]({ props, ...this.$attrs });
      }
      if (data._type && data._type === "markdown" && !((_a = data == null ? void 0 : data.body) == null ? void 0 : _a.children.length)) {
        return slots.empty({ props, ...this.$attrs });
      }
    } else if (!data || !data.length) {
      if (slots == null ? void 0 : slots["not-found"]) {
        return slots["not-found"]({ props, ...this.$attrs });
      }
    }
    if (slots == null ? void 0 : slots.default) {
      return slots.default({ data, refresh, isPartial, props, ...this.$attrs });
    }
    const emptyNode = (slot, data2) => h("pre", null, JSON.stringify({ message: "You should use slots with <ContentQuery>!", slot, data: data2 }, null, 2));
    return emptyNode("default", { data, props, isPartial });
  }
});
const ContentQuery$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ContentQuery
}, Symbol.toStringTag, { value: "Module" }));
const __nuxt_component_1$1 = defineComponent({
  props: {
    path: {
      type: String,
      required: false,
      default: "/"
    },
    query: {
      type: Object,
      required: false,
      default: void 0
    }
  },
  render(ctx) {
    const slots = useSlots();
    const { path, query } = ctx;
    const contentQueryProps = Object.assign(query || {}, { path });
    const emptyNode = (slot, data) => h("pre", null, JSON.stringify({ message: "You should use slots with <ContentList>", slot, data }, null, 2));
    return h(ContentQuery, contentQueryProps, {
      default: (slots == null ? void 0 : slots.default) ? ({ data, refresh, isPartial }) => slots == null ? void 0 : slots.default({ list: data, refresh, isPartial, ...this.$attrs }) : ({ data }) => emptyNode("default", data),
      empty: (bindings) => (slots == null ? void 0 : slots.empty) ? slots.empty(bindings) : ({ data }) => emptyNode("default", data),
      "not-found": (bindings) => {
        var _a;
        return (slots == null ? void 0 : slots["not-found"]) ? (_a = slots == null ? void 0 : slots["not-found"]) == null ? void 0 : _a.call(slots, bindings) : ({ data }) => emptyNode("not-found", data);
      }
    });
  }
});
const ContentList = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_1$1
}, Symbol.toStringTag, { value: "Module" }));
const meta$2 = {
  key: (route) => route.fullPath
};
const meta$1 = void 0;
const meta = void 0;
const routes = [
  {
    name: "blog-slug",
    path: "/blog/:slug(.*)*",
    file: "/Users/nicole/dev/vvifi-fyi/pages/blog/[...slug].vue",
    children: [],
    meta: meta$3,
    alias: [],
    component: () => import('./_nuxt/_...slug_.7003e839.mjs').then((m) => m.default || m)
  },
  {
    name: "blog",
    path: "/blog",
    file: "/Users/nicole/dev/vvifi-fyi/pages/blog/index.vue",
    children: [],
    meta: meta$2,
    alias: (meta$2 == null ? void 0 : meta$2.alias) || [],
    component: () => import('./_nuxt/index.49c86926.mjs').then((m) => m.default || m)
  },
  {
    name: "blog-tags-slug",
    path: "/blog/tags/:slug",
    file: "/Users/nicole/dev/vvifi-fyi/pages/blog/tags/[slug].vue",
    children: [],
    meta: meta$1,
    alias: [],
    component: () => import('./_nuxt/_slug_.573495f5.mjs').then((m) => m.default || m)
  },
  {
    name: "index",
    path: "/",
    file: "/Users/nicole/dev/vvifi-fyi/pages/index.vue",
    children: [],
    meta,
    alias: [],
    component: () => import('./_nuxt/index.30730983.mjs').then((m) => m.default || m)
  }
];
const configRouterOptions = {};
const routerOptions = {
  ...configRouterOptions
};
const globalMiddleware = [];
const namedMiddleware = {};
const node_modules__pnpm_nuxt_643_0_0_rc_9_node_modules_nuxt_dist_pages_runtime_router_mjs_3IY1B1EStA = defineNuxtPlugin(async (nuxtApp) => {
  let __temp, __restore;
  nuxtApp.vueApp.component("NuxtPage", NuxtPage);
  nuxtApp.vueApp.component("NuxtNestedPage", NuxtPage);
  nuxtApp.vueApp.component("NuxtChild", NuxtPage);
  const baseURL2 = useRuntimeConfig().app.baseURL;
  const routerHistory = createMemoryHistory(baseURL2);
  const initialURL = nuxtApp.ssrContext.url;
  const router = createRouter({
    ...routerOptions,
    history: routerHistory,
    routes
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const _route = shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _route.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    var _a, _b, _c, _d;
    if (((_b = (_a = to.matched[0]) == null ? void 0 : _a.components) == null ? void 0 : _b.default) === ((_d = (_c = from.matched[0]) == null ? void 0 : _c.components) == null ? void 0 : _d.default)) {
      syncCurrentRoute();
    }
  });
  const route = {};
  for (const key in _route.value) {
    route[key] = computed(() => _route.value[key]);
  }
  nuxtApp._route = reactive(route);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  useError();
  try {
    if (true) {
      ;
      [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
      ;
    }
    ;
    [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
    ;
  } catch (error2) {
    callWithNuxt(nuxtApp, showError, [error2]);
  }
  const initialLayout = useState("_layout", "$14u7rrTx6F");
  router.beforeEach(async (to, from) => {
    var _a, _b;
    to.meta = reactive(to.meta);
    if (nuxtApp.isHydrating) {
      to.meta.layout = (_a = initialLayout.value) != null ? _a : to.meta.layout;
    }
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry2 of componentMiddleware) {
          middlewareEntries.add(entry2);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry2 of middlewareEntries) {
      const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b = namedMiddleware[entry2]) == null ? void 0 : _b.call(namedMiddleware).then((r) => r.default || r)) : entry2;
      if (!middleware) {
        throw new Error(`Unknown route middleware: '${entry2}'.`);
      }
      const result = await callWithNuxt(nuxtApp, middleware, [to, from]);
      {
        if (result === false || result instanceof Error) {
          const error2 = result || createError$1({
            statusMessage: `Route navigation aborted: ${initialURL}`
          });
          return callWithNuxt(nuxtApp, showError, [error2]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (to.matched.length === 0) {
      callWithNuxt(nuxtApp, showError, [createError$1({
        statusCode: 404,
        fatal: false,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (to.matched[0].name === "404" && nuxtApp.ssrContext) {
      nuxtApp.ssrContext.event.res.statusCode = 404;
    } else {
      const currentURL = to.fullPath || "/";
      if (!isEqual$1(currentURL, initialURL)) {
        await callWithNuxt(nuxtApp, navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        force: true
      });
    } catch (error2) {
      callWithNuxt(nuxtApp, showError, [error2]);
    }
  });
  return { provide: { router } };
});
const node_modules__pnpm__64nuxt_43content_642_0_1_node_modules__64nuxt_content_dist_runtime_plugin_mjs_HlcFiC2ECt = defineNuxtPlugin(() => {
  useRuntimeConfig().public;
});
const _plugins = [
  preload,
  _nuxt_components_plugin_mjs_KR1HBZs4kY,
  node_modules__pnpm_nuxt_643_0_0_rc_9_node_modules_nuxt_dist_head_runtime_lib_vueuse_head_plugin_mjs_BtA3KEYchq,
  node_modules__pnpm_nuxt_643_0_0_rc_9_node_modules_nuxt_dist_head_runtime_plugin_mjs_rUpm7ZiZXT,
  node_modules__pnpm_nuxt_643_0_0_rc_9_node_modules_nuxt_dist_pages_runtime_router_mjs_3IY1B1EStA,
  node_modules__pnpm__64nuxt_43content_642_0_1_node_modules__64nuxt_content_dist_runtime_plugin_mjs_HlcFiC2ECt
];
const _sfc_main$3 = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const ErrorComponent = defineAsyncComponent(() => import('./_nuxt/error-component.a7b8c2be.mjs'));
    const nuxtApp = useNuxtApp();
    provide("_route", useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        callWithNuxt(nuxtApp, showError, [err]);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_App = resolveComponent("App");
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else {
            _push(ssrRenderComponent(_component_App, null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/nuxt@3.0.0-rc.9/node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$3;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "site-header" }, _attrs))} data-v-6f6231da><div class="wrapper" data-v-6f6231da>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "no-underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<figure class="site-logo" data-v-6f6231da${_scopeId}><h1 data-v-6f6231da${_scopeId}>VviFi</h1></figure>`);
      } else {
        return [
          createVNode("figure", { class: "site-logo" }, [
            createVNode("h1", null, "VviFi")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<nav class="site-nav" data-v-6f6231da><ul class="links" data-v-6f6231da><li class="link" data-v-6f6231da>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/blog" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Blog`);
      } else {
        return [
          createTextVNode("Blog")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav></div></header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-6f6231da"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "site-footer" }, _attrs))} data-v-de0c8a5c><p data-v-de0c8a5c><span data-v-de0c8a5c>\xA9 ${ssrInterpolate(new Date().getFullYear())} \xA0</span><a href="https://shecodez.com" target="_blank" data-v-de0c8a5c>shecodez</a></p></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-de0c8a5c"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      meta: [
        { name: "p:domain_verify", content: "fe34bfe97aff276718eecaae512c3517" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      const _component_NuxtPage = resolveComponent("NuxtPage");
      const _component_Footer = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<div class="flex-1">`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch$1.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main$3);
    vueApp.component("App", _sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);

export { ContentQuery as C, _export_sfc as _, useRoute as a, __nuxt_component_1$2 as b, useHead as c, useCookie as d, entry$1 as default, useAsyncData as e, __nuxt_component_0$3 as f, __nuxt_component_0$2 as g, __nuxt_component_2 as h, __nuxt_component_3 as i, jsonStringify as j, __nuxt_component_4 as k, __nuxt_component_0$1 as l, __nuxt_component_1$1 as m, queryContent as q, useUnwrap as u, withContentBase as w };
//# sourceMappingURL=server.mjs.map
