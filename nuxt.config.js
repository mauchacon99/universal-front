export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'obituarios-el-universal',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'title', content: 'Obituarios | El Universal' },
            { name: 'description', content: 'Obituarios | El Universal' }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/css/tailwind.pcss', '~/assets/css/animations.pcss'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/server-init.ts' },
        { src: '~/plugins/client-init.ts', ssr: false },
        { src: '~/plugins/utils-init.ts' },
        { src: '~/plugins/axios-init.ts' },
        { src: '~/plugins/api-init.ts' }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: [
        '~/components',
        { path: '~/components/misc', prefix: 'misc' },
        { path: '~/components/template', prefix: 'template' },
        { path: '~/components/main', prefix: 'main' }
    ],

    // https://tailwindcss.nuxtjs.org/options
    tailwindcss: {
        viewer: false,
        cssPath: '~/assets/css/tailwind.css',
        configPath: '~/tailwind.config.js',
        exposeConfig: false,
        config: {}
    },

    env: {
        SITE_NAME: 'Obituarios El Universal'
    },

    loading: '~/components/misc/GlobalLoader.vue',

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios'
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}
