import { VueConstructor } from 'vue/types'

const png = '/assets/png/'

// const jpg = '/assets/jpg/'

const assets = {
    /* Crear el colorKey si es necesario */
    black: {},
    white: {},
    social: {
        whatsapp: png + 'whatsapp-logo.png',
        messenger: png + 'messenger-logo.png',
        twitter: png + 'twitter-logo.png',
        telegram: png + 'telegram-logo.png'
    }
}
declare module 'vue/types/vue' {
    interface Vue {
        $assets: typeof assets
    }
}
export default {
    install: (Vue: VueConstructor) => {
        Vue.prototype.$assets = assets
    }
}
