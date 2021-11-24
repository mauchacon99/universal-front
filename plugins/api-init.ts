import { Plugin } from '@nuxt/types'

import { modules, endpoints } from '@/api/index'

declare module '@nuxt/types' {
    interface Context {
        $api: {
            pages: {
                loadHome: () => Promise<any>
            }
        }
    }
}

const api: Plugin = (ctx) => {
    ctx.$api = {
        pages: modules.pagesModule(ctx.$axios, endpoints)
    }
}

export default api
