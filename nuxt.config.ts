// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    public: {
      apiBase: '',
      cookiesSecret: process.env.COOKIES_SECRET
    },
  },
  auth: {
    provider: {
      type: 'local',
      pages: {
        login: '/',
      },
      token: {
        signInResponseTokenPointer: '/token',
        type: 'Bearer',
        headerName: 'Authorization',
        maxAgeInSeconds: 15000,
      },
      sessionDataType: {
        id: 'string',
        name: 'string',
        phone_number: 'string',
        email: 'string',
        image_url: 'string',
      },
    },
    globalAppMiddleware: {
      isEnabled: true,
      allow404WithoutAuth: false,
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    shim: false,
    strict: true,
  },
  runtimeConfig: {
    apiSecret: "",
    public: {
      apiBase: "/api",
    },
  },
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@kevinmarrec/nuxt-pwa",
    "@vueuse/nuxt",
    "@sidebase/nuxt-auth",
  ],
  pwa: {
    workbox: {
      enabled: false,
    },
  },
});
