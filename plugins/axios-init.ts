import { Plugin } from '@nuxt/types'

import { initializeAxios } from '@/api/index'

const accessor: Plugin = ({ $axios }) => initializeAxios($axios)

export default accessor
