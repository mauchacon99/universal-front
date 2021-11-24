import { VueConstructor } from 'vue/types'

declare module 'vue/types/vue' {
    interface Vue {
        $bp: {
            mb: boolean
            sm: boolean
            md: boolean
            lg: boolean
            xl: boolean
        }
    }
}

export default {
    install: (Vue: VueConstructor) => {
        Vue.prototype.$bp = {
            mb: matchMedia('(max-width: 479px)').matches,
            sm: matchMedia('(min-width: 480px) and (max-width: 767px)').matches,
            md: matchMedia('(min-width: 768px) and (max-width: 1023px)').matches,
            lg: matchMedia('(min-width: 1024px) and (max-width: 1279px)').matches,
            xl: matchMedia('(min-width: 1280px)').matches
        }
    }
}
