import { NuxtAxiosInstance } from '@nuxtjs/axios'

import { endpointsStruct } from '@/api/config/endpoints'

export const pagesModule = (axios: NuxtAxiosInstance, endpoints: endpointsStruct) => {
    const loadHome = () => axios.$get(endpoints.pages.home.path)
    return {
        loadHome
    }
}
