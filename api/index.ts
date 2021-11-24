import { NuxtAxiosInstance } from '@nuxtjs/axios'

import { pagesModule } from '@/api/modules/pages'

let $axios: NuxtAxiosInstance

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
    $axios = axiosInstance
}

export const modules = {
    pagesModule
}

export { endpoints } from '@/api/config/endpoints'

export { $axios }
