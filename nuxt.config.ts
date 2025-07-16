// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/main.css'],
  modules: [],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
   app: {
    baseURL: "/dessert/",
    buildAssetsDir: "assets", // Ganti <nama-repo> dengan nama repositori GitHub kamu
  },
   nitro: {
    preset: "static",
    prerender: {
      ignore: [],
    },
  },
})