// import { Context } from '@nuxt/types'

import {
  GetterTree,
  MutationTree,
  ActionTree /* , ActionContext  */,
} from 'vuex/types'

export const state = () => ({
  modal: {
    type: '',
    info: {},
  },
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  getModal: (state) => state.modal,
}

export const mutations: MutationTree<RootState> = {
  setModal: (state, newModal: typeof state.modal) => {
    state.modal.type = newModal.type
    state.modal.info = newModal.info
  },
}
export const actions: ActionTree<RootState, RootState> = {
  /* nuxtServerInit: async (context: ActionContext<RootState, RootState>, appContext: Context) => {
       Inicializar data en el servidor
    } */
}
