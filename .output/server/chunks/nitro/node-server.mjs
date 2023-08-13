globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { klona } from 'klona';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';
import gracefulShutdown from 'http-graceful-shutdown';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "apiBase": "/api",
    "persistedState": {
      "storage": "cookies",
      "debug": false,
      "cookieOptions": {}
    },
    "pwaManifest": {
      "name": "Nuxt PWA",
      "short_name": "",
      "description": "",
      "lang": "en",
      "start_url": "/?standalone=true",
      "display": "standalone",
      "background_color": "#ffffff",
      "theme_color": "#000000",
      "icons": [
        {
          "src": "/_nuxt/icons/64x64.8be4fc28.png",
          "type": "image/png",
          "sizes": "64x64",
          "purpose": "any"
        },
        {
          "src": "/_nuxt/icons/64x64.maskable.8be4fc28.png",
          "type": "image/png",
          "sizes": "64x64",
          "purpose": "maskable"
        },
        {
          "src": "/_nuxt/icons/120x120.8be4fc28.png",
          "type": "image/png",
          "sizes": "120x120",
          "purpose": "any"
        },
        {
          "src": "/_nuxt/icons/120x120.maskable.8be4fc28.png",
          "type": "image/png",
          "sizes": "120x120",
          "purpose": "maskable"
        },
        {
          "src": "/_nuxt/icons/144x144.8be4fc28.png",
          "type": "image/png",
          "sizes": "144x144",
          "purpose": "any"
        },
        {
          "src": "/_nuxt/icons/144x144.maskable.8be4fc28.png",
          "type": "image/png",
          "sizes": "144x144",
          "purpose": "maskable"
        },
        {
          "src": "/_nuxt/icons/152x152.8be4fc28.png",
          "type": "image/png",
          "sizes": "152x152",
          "purpose": "any"
        },
        {
          "src": "/_nuxt/icons/152x152.maskable.8be4fc28.png",
          "type": "image/png",
          "sizes": "152x152",
          "purpose": "maskable"
        },
        {
          "src": "/_nuxt/icons/192x192.8be4fc28.png",
          "type": "image/png",
          "sizes": "192x192",
          "purpose": "any"
        },
        {
          "src": "/_nuxt/icons/192x192.maskable.8be4fc28.png",
          "type": "image/png",
          "sizes": "192x192",
          "purpose": "maskable"
        },
        {
          "src": "/_nuxt/icons/384x384.8be4fc28.png",
          "type": "image/png",
          "sizes": "384x384",
          "purpose": "any"
        },
        {
          "src": "/_nuxt/icons/384x384.maskable.8be4fc28.png",
          "type": "image/png",
          "sizes": "384x384",
          "purpose": "maskable"
        },
        {
          "src": "/_nuxt/icons/512x512.8be4fc28.png",
          "type": "image/png",
          "sizes": "512x512",
          "purpose": "any"
        },
        {
          "src": "/_nuxt/icons/512x512.maskable.8be4fc28.png",
          "type": "image/png",
          "sizes": "512x512",
          "purpose": "maskable"
        }
      ]
    },
    "auth": {
      "computed": {
        "origin": "",
        "pathname": "/api/auth",
        "fullBaseUrl": "/api/auth"
      },
      "isEnabled": true,
      "session": {
        "enableRefreshPeriodically": false,
        "enableRefreshOnWindowFocus": true
      },
      "globalAppMiddleware": {
        "isEnabled": true,
        "allow404WithoutAuth": false,
        "addDefaultCallbackUrl": true
      },
      "provider": {
        "type": "local",
        "pages": {
          "login": "/"
        },
        "endpoints": {
          "signIn": {
            "path": "/login",
            "method": "post"
          },
          "signOut": {
            "path": "/logout",
            "method": "post"
          },
          "signUp": {
            "path": "/register",
            "method": "post"
          },
          "getSession": {
            "path": "/session",
            "method": "get"
          }
        },
        "token": {
          "signInResponseTokenPointer": "/token",
          "type": "Bearer",
          "headerName": "Authorization",
          "maxAgeInSeconds": 15000,
          "sameSiteAttribute": "lax"
        },
        "sessionDataType": {
          "id": "string",
          "name": "string",
          "phone_number": "string",
          "email": "string",
          "image_url": "string"
        }
      }
    }
  },
  "apiSecret": ""
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const _Pp0F2gD2G8 = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(
      [
        "<script>",
        "if ('serviceWorker' in navigator) {",
        "  navigator.serviceWorker.getRegistrations().then((registrations) => {",
        "    for (const registration of registrations) {",
        "      console.info('[PWA] Unregistering Service Worker:', registration)",
        "      registration.unregister()",
        "    }",
        "  })",
        "}",
        "if ('caches' in window) {",
        "  caches.keys()",
        "    .then((keys) => {",
        "      if (keys.length) {",
        "        console.info('[PWA] Cleaning cache for:', keys.join(', '))",
        "        for (const key of keys) {",
        "          caches.delete(key)",
        "        }",
        "      }",
        "    })",
        "}",
        "<\/script>"
      ].join("\n")
    );
  });
});

const plugins = [
  _Pp0F2gD2G8
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function trapUnhandledNodeErrors() {
  {
    process.on(
      "unhandledRejection",
      (err) => console.error("[nitro] [unhandledRejection] " + err)
    );
    process.on(
      "uncaughtException",
      (err) => console.error("[nitro]  [uncaughtException] " + err)
    );
  }
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(html);
});

const assets = {
  "/icon-avatar-add.svg": {
    "type": "image/svg+xml",
    "etag": "\"2ec-uz1hbcCijtUPWYsBUqlUVmdFT1c\"",
    "mtime": "2023-08-13T20:28:27.480Z",
    "size": 748,
    "path": "../public/icon-avatar-add.svg"
  },
  "/icon.png": {
    "type": "image/png",
    "etag": "\"15b8e-Y2Ef0fVWMBfTn2PaPHuwQSDMLAk\"",
    "mtime": "2023-08-13T20:28:27.480Z",
    "size": 88974,
    "path": "../public/icon.png"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": "\"63d-80CCP3YBFOXM8wG1u1GIvkCpFDo\"",
    "mtime": "2023-08-13T20:28:27.464Z",
    "size": 1597,
    "path": "../public/manifest.json"
  },
  "/readme.md": {
    "type": "text/markdown; charset=utf-8",
    "etag": "\"40-fvsnC3K0RcGBtBWR1KlbY/npfqc\"",
    "mtime": "2023-08-13T20:28:27.478Z",
    "size": 64,
    "path": "../public/readme.md"
  },
  "/_nuxt/ErrorMessage.vue.26c60b68.js": {
    "type": "application/javascript",
    "etag": "\"22c-qH1rakQ3VB+JgDCz7Mi+NXPm7CQ\"",
    "mtime": "2023-08-13T20:28:27.478Z",
    "size": 556,
    "path": "../public/_nuxt/ErrorMessage.vue.26c60b68.js"
  },
  "/_nuxt/_plugin-vue_export-helper.c27b6911.js": {
    "type": "application/javascript",
    "etag": "\"5b-eFCz/UrraTh721pgAl0VxBNR1es\"",
    "mtime": "2023-08-13T20:28:27.477Z",
    "size": 91,
    "path": "../public/_nuxt/_plugin-vue_export-helper.c27b6911.js"
  },
  "/_nuxt/dashboard.327fe1e7.js": {
    "type": "application/javascript",
    "etag": "\"1ad-gM6NCvU4Be+gxAMaNnMckiMc0MM\"",
    "mtime": "2023-08-13T20:28:27.477Z",
    "size": 429,
    "path": "../public/_nuxt/dashboard.327fe1e7.js"
  },
  "/_nuxt/datatable.3e0f7902.js": {
    "type": "application/javascript",
    "etag": "\"bf9-wU3h7CVNoZfssdHovNaXGuWQo1g\"",
    "mtime": "2023-08-13T20:28:27.477Z",
    "size": 3065,
    "path": "../public/_nuxt/datatable.3e0f7902.js"
  },
  "/_nuxt/default.260a0f6e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"c8-aZO/WiTkONgkK7hWgxSWqwXTQFE\"",
    "mtime": "2023-08-13T20:28:27.477Z",
    "size": 200,
    "path": "../public/_nuxt/default.260a0f6e.css"
  },
  "/_nuxt/default.826d9f55.js": {
    "type": "application/javascript",
    "etag": "\"40fb-DLh1nx0YiWfFwHv8+qR8kyw4UtU\"",
    "mtime": "2023-08-13T20:28:27.477Z",
    "size": 16635,
    "path": "../public/_nuxt/default.826d9f55.js"
  },
  "/_nuxt/entry.76d01983.js": {
    "type": "application/javascript",
    "etag": "\"61b72-SPNRKPABfzVs3sXefcebWVCxHc8\"",
    "mtime": "2023-08-13T20:28:27.476Z",
    "size": 400242,
    "path": "../public/_nuxt/entry.76d01983.js"
  },
  "/_nuxt/entry.949b109d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"13b43-Bsp+q2oYuLuEGjTnAq/IjeqD90Q\"",
    "mtime": "2023-08-13T20:28:27.475Z",
    "size": 80707,
    "path": "../public/_nuxt/entry.949b109d.css"
  },
  "/_nuxt/error-404.07b1d8b2.js": {
    "type": "application/javascript",
    "etag": "\"907-HppDEAoDJtU9eKA4Mh6nFu7xD7c\"",
    "mtime": "2023-08-13T20:28:27.475Z",
    "size": 2311,
    "path": "../public/_nuxt/error-404.07b1d8b2.js"
  },
  "/_nuxt/error-404.7fc72018.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-iNt1cqPQ0WDudfCTZVQd31BeRGs\"",
    "mtime": "2023-08-13T20:28:27.475Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.7fc72018.css"
  },
  "/_nuxt/error-500.aa68c09a.js": {
    "type": "application/javascript",
    "etag": "\"78b-WXX+ABcsBvdn5jjmr0SK6sG05Ho\"",
    "mtime": "2023-08-13T20:28:27.474Z",
    "size": 1931,
    "path": "../public/_nuxt/error-500.aa68c09a.js"
  },
  "/_nuxt/error-500.c5df6088.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-ByRo+49BgcevWdRjJy3CMx2IA5k\"",
    "mtime": "2023-08-13T20:28:27.474Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.c5df6088.css"
  },
  "/_nuxt/front.e512653a.js": {
    "type": "application/javascript",
    "etag": "\"193-FQwt5cQct8ldy9HZOpY+/lL81D8\"",
    "mtime": "2023-08-13T20:28:27.474Z",
    "size": 403,
    "path": "../public/_nuxt/front.e512653a.js"
  },
  "/_nuxt/general.64a3fe3c.js": {
    "type": "application/javascript",
    "etag": "\"f77-B/oSZLqFQdC+TG4M2HFvrIEZeps\"",
    "mtime": "2023-08-13T20:28:27.474Z",
    "size": 3959,
    "path": "../public/_nuxt/general.64a3fe3c.js"
  },
  "/_nuxt/index.0dfe4d0a.js": {
    "type": "application/javascript",
    "etag": "\"270-mI0qaq42068iwZBU0f2pspkFFHY\"",
    "mtime": "2023-08-13T20:28:27.474Z",
    "size": 624,
    "path": "../public/_nuxt/index.0dfe4d0a.js"
  },
  "/_nuxt/index.14cdcfa9.js": {
    "type": "application/javascript",
    "etag": "\"171d-6oYeHkN5WpCYvah2FerOiHuZSxQ\"",
    "mtime": "2023-08-13T20:28:27.473Z",
    "size": 5917,
    "path": "../public/_nuxt/index.14cdcfa9.js"
  },
  "/_nuxt/index.15117875.js": {
    "type": "application/javascript",
    "etag": "\"bc5-7r0TFY6xSpkCp5YUbfsl9iACcwQ\"",
    "mtime": "2023-08-13T20:28:27.473Z",
    "size": 3013,
    "path": "../public/_nuxt/index.15117875.js"
  },
  "/_nuxt/index.18d76bc4.js": {
    "type": "application/javascript",
    "etag": "\"5f0-NKNoYlFRtJ00fvBs/hZEl8pN7nw\"",
    "mtime": "2023-08-13T20:28:27.473Z",
    "size": 1520,
    "path": "../public/_nuxt/index.18d76bc4.js"
  },
  "/_nuxt/index.22f57fa2.js": {
    "type": "application/javascript",
    "etag": "\"15e11-ZA2YkUhG72blnYg2bI9EIuhEk5A\"",
    "mtime": "2023-08-13T20:28:27.473Z",
    "size": 89617,
    "path": "../public/_nuxt/index.22f57fa2.js"
  },
  "/_nuxt/index.3af776bc.js": {
    "type": "application/javascript",
    "etag": "\"7a3-haRmYH0+BD8d6oMXeAUyow7lamI\"",
    "mtime": "2023-08-13T20:28:27.473Z",
    "size": 1955,
    "path": "../public/_nuxt/index.3af776bc.js"
  },
  "/_nuxt/index.3ca18d62.js": {
    "type": "application/javascript",
    "etag": "\"114-qTFs61rKdaKGNiXANls7WHbtbQ0\"",
    "mtime": "2023-08-13T20:28:27.472Z",
    "size": 276,
    "path": "../public/_nuxt/index.3ca18d62.js"
  },
  "/_nuxt/index.521e8676.js": {
    "type": "application/javascript",
    "etag": "\"d32-N2pI0Sl+au8SlEHKR+0xMuQRV/Y\"",
    "mtime": "2023-08-13T20:28:27.472Z",
    "size": 3378,
    "path": "../public/_nuxt/index.521e8676.js"
  },
  "/_nuxt/index.5805429f.js": {
    "type": "application/javascript",
    "etag": "\"677-09nxtRV1xXmp6KOZdtKuH/WVuXo\"",
    "mtime": "2023-08-13T20:28:27.472Z",
    "size": 1655,
    "path": "../public/_nuxt/index.5805429f.js"
  },
  "/_nuxt/index.5ad773df.js": {
    "type": "application/javascript",
    "etag": "\"1180-xzbEZOh9ls316d8N8MW+xu2zrjA\"",
    "mtime": "2023-08-13T20:28:27.472Z",
    "size": 4480,
    "path": "../public/_nuxt/index.5ad773df.js"
  },
  "/_nuxt/index.5f624512.js": {
    "type": "application/javascript",
    "etag": "\"88e-uIS2STErW+11KQjUjauV9URG3Ao\"",
    "mtime": "2023-08-13T20:28:27.471Z",
    "size": 2190,
    "path": "../public/_nuxt/index.5f624512.js"
  },
  "/_nuxt/index.67a7d836.js": {
    "type": "application/javascript",
    "etag": "\"130-p8JNaLARzNeDhdp1d1wIzQPmniQ\"",
    "mtime": "2023-08-13T20:28:27.471Z",
    "size": 304,
    "path": "../public/_nuxt/index.67a7d836.js"
  },
  "/_nuxt/index.74747493.js": {
    "type": "application/javascript",
    "etag": "\"cff-Ancr/G1RyCvAR8C9kNGGfpDP94c\"",
    "mtime": "2023-08-13T20:28:27.471Z",
    "size": 3327,
    "path": "../public/_nuxt/index.74747493.js"
  },
  "/_nuxt/index.7ddb1c72.js": {
    "type": "application/javascript",
    "etag": "\"7f7-H2lkGbaq+rRzw85Cyt5Jv7kFkHg\"",
    "mtime": "2023-08-13T20:28:27.471Z",
    "size": 2039,
    "path": "../public/_nuxt/index.7ddb1c72.js"
  },
  "/_nuxt/index.ac97a428.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"119-XB3uKib8yst0b0fsS/EUgR3JrrA\"",
    "mtime": "2023-08-13T20:28:27.471Z",
    "size": 281,
    "path": "../public/_nuxt/index.ac97a428.css"
  },
  "/_nuxt/index.ad10159f.js": {
    "type": "application/javascript",
    "etag": "\"be3-88p5wRPoBg8R3EVOOBrjhDUCbe0\"",
    "mtime": "2023-08-13T20:28:27.470Z",
    "size": 3043,
    "path": "../public/_nuxt/index.ad10159f.js"
  },
  "/_nuxt/index.d391a967.js": {
    "type": "application/javascript",
    "etag": "\"ce-OMGpKD1nobvboF/tferr62iZ5cE\"",
    "mtime": "2023-08-13T20:28:27.470Z",
    "size": 206,
    "path": "../public/_nuxt/index.d391a967.js"
  },
  "/_nuxt/index.f0697914.js": {
    "type": "application/javascript",
    "etag": "\"3de-SQGtrucEALe983QvlfN/+ZBuXEk\"",
    "mtime": "2023-08-13T20:28:27.470Z",
    "size": 990,
    "path": "../public/_nuxt/index.f0697914.js"
  },
  "/_nuxt/nuxt-link.fcfe651d.js": {
    "type": "application/javascript",
    "etag": "\"10ff-LCfA/uMb44onakPj7bgdy7H6ONA\"",
    "mtime": "2023-08-13T20:28:27.470Z",
    "size": 4351,
    "path": "../public/_nuxt/nuxt-link.fcfe651d.js"
  },
  "/_nuxt/sidebar-active-wave-dark.91fab1b5.svg": {
    "type": "image/svg+xml",
    "etag": "\"17b-5rY7Xbd6WoaZamPW4qHFZmvApyg\"",
    "mtime": "2023-08-13T20:28:27.470Z",
    "size": 379,
    "path": "../public/_nuxt/sidebar-active-wave-dark.91fab1b5.svg"
  },
  "/_nuxt/sidebar-active-wave.4dafdbf2.svg": {
    "type": "image/svg+xml",
    "etag": "\"17b-5WYBotZPwzUb0/AW666eSbKL4aI\"",
    "mtime": "2023-08-13T20:28:27.469Z",
    "size": 379,
    "path": "../public/_nuxt/sidebar-active-wave.4dafdbf2.svg"
  },
  "/_nuxt/simple.399bb6f4.js": {
    "type": "application/javascript",
    "etag": "\"a4b-2xJX4yOuUyyjxtcwdT8IS8VMiDg\"",
    "mtime": "2023-08-13T20:28:27.469Z",
    "size": 2635,
    "path": "../public/_nuxt/simple.399bb6f4.js"
  },
  "/_nuxt/tambah.211c0729.js": {
    "type": "application/javascript",
    "etag": "\"f90-ODh2VpoDAsDHNg7DfJuU6mgmjlU\"",
    "mtime": "2023-08-13T20:28:27.469Z",
    "size": 3984,
    "path": "../public/_nuxt/tambah.211c0729.js"
  },
  "/images/rocket.png": {
    "type": "image/png",
    "etag": "\"fe48-gqg+8S3hTv94DWZLHO89GxNwpsM\"",
    "mtime": "2023-08-13T20:28:27.479Z",
    "size": 65096,
    "path": "../public/images/rocket.png"
  },
  "/_nuxt/icons/120x120.8be4fc28.png": {
    "type": "image/png",
    "etag": "\"4cec-4yDkA8XyaF6K73YU3SF1aWdYpUY\"",
    "mtime": "2023-08-13T20:28:27.468Z",
    "size": 19692,
    "path": "../public/_nuxt/icons/120x120.8be4fc28.png"
  },
  "/_nuxt/icons/120x120.maskable.8be4fc28.png": {
    "type": "image/png",
    "etag": "\"2918-UYNMmdzHYIu3uqLH0YPu6FQ05uo\"",
    "mtime": "2023-08-13T20:28:27.468Z",
    "size": 10520,
    "path": "../public/_nuxt/icons/120x120.maskable.8be4fc28.png"
  },
  "/_nuxt/icons/144x144.8be4fc28.png": {
    "type": "image/png",
    "etag": "\"646d-3QkBOk4dWdpsFUsMA64kqacW1qU\"",
    "mtime": "2023-08-13T20:28:27.468Z",
    "size": 25709,
    "path": "../public/_nuxt/icons/144x144.8be4fc28.png"
  },
  "/_nuxt/icons/144x144.maskable.8be4fc28.png": {
    "type": "image/png",
    "etag": "\"364b-X43+mcDqtldwaTOKZ+BEWV6ZU8o\"",
    "mtime": "2023-08-13T20:28:27.468Z",
    "size": 13899,
    "path": "../public/_nuxt/icons/144x144.maskable.8be4fc28.png"
  },
  "/_nuxt/icons/152x152.8be4fc28.png": {
    "type": "image/png",
    "etag": "\"6ed1-KVb6sye16zLbVbZxMF/RqFmToLQ\"",
    "mtime": "2023-08-13T20:28:27.467Z",
    "size": 28369,
    "path": "../public/_nuxt/icons/152x152.8be4fc28.png"
  },
  "/_nuxt/icons/152x152.maskable.8be4fc28.png": {
    "type": "image/png",
    "etag": "\"3ba3-rzReRb6Qba+4jP7DWvzZVGxvgqI\"",
    "mtime": "2023-08-13T20:28:27.467Z",
    "size": 15267,
    "path": "../public/_nuxt/icons/152x152.maskable.8be4fc28.png"
  },
  "/_nuxt/icons/192x192.8be4fc28.png": {
    "type": "image/png",
    "etag": "\"9f75-2VJtf/vfBThZBietTbRC9nJsmHY\"",
    "mtime": "2023-08-13T20:28:27.467Z",
    "size": 40821,
    "path": "../public/_nuxt/icons/192x192.8be4fc28.png"
  },
  "/_nuxt/icons/192x192.maskable.8be4fc28.png": {
    "type": "image/png",
    "etag": "\"572e-bjgUpHrZyVmFOaLACP4qzIFmVLo\"",
    "mtime": "2023-08-13T20:28:27.467Z",
    "size": 22318,
    "path": "../public/_nuxt/icons/192x192.maskable.8be4fc28.png"
  },
  "/_nuxt/icons/384x384.8be4fc28.png": {
    "type": "image/png",
    "etag": "\"1d41e-gItoyB08o08K7yKPsM1c8Aie7SE\"",
    "mtime": "2023-08-13T20:28:27.466Z",
    "size": 119838,
    "path": "../public/_nuxt/icons/384x384.8be4fc28.png"
  },
  "/_nuxt/icons/384x384.maskable.8be4fc28.png": {
    "type": "image/png",
    "etag": "\"10d01-lDMtDZeZTkv+TkQjDbg67/R2fiE\"",
    "mtime": "2023-08-13T20:28:27.466Z",
    "size": 68865,
    "path": "../public/_nuxt/icons/384x384.maskable.8be4fc28.png"
  },
  "/_nuxt/icons/512x512.8be4fc28.png": {
    "type": "image/png",
    "etag": "\"2e950-psZq5Gw6tk3rK7sf6trDsRqMta8\"",
    "mtime": "2023-08-13T20:28:27.466Z",
    "size": 190800,
    "path": "../public/_nuxt/icons/512x512.8be4fc28.png"
  },
  "/_nuxt/icons/512x512.maskable.8be4fc28.png": {
    "type": "image/png",
    "etag": "\"1ab5d-bi5TllF9jFgGWlSD6QyiFtXuEOg\"",
    "mtime": "2023-08-13T20:28:27.465Z",
    "size": 109405,
    "path": "../public/_nuxt/icons/512x512.maskable.8be4fc28.png"
  },
  "/_nuxt/icons/64x64.8be4fc28.png": {
    "type": "image/png",
    "etag": "\"1c53-hrMAI/KTwCrlSy/D4pR1amzMo0M\"",
    "mtime": "2023-08-13T20:28:27.465Z",
    "size": 7251,
    "path": "../public/_nuxt/icons/64x64.8be4fc28.png"
  },
  "/_nuxt/icons/64x64.maskable.8be4fc28.png": {
    "type": "image/png",
    "etag": "\"f06-+mooSnq4tOTiF7ETVZvEbrJIooc\"",
    "mtime": "2023-08-13T20:28:27.465Z",
    "size": 3846,
    "path": "../public/_nuxt/icons/64x64.maskable.8be4fc28.png"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_VVHe15 = () => import('../_..._.mjs');
const _lazy_yE3yYu = () => import('../handlers/renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/api/auth/**', handler: _lazy_VVHe15, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_yE3yYu, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_yE3yYu, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT, 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  gracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((err) => {
          console.error(err);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const listener = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
