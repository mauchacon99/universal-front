import { GetterTree, MutationTree } from 'vuex/types'

export const state = () => ({
  home: null,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  getHome: ({ home }) => home,
}

export const mutations: MutationTree<RootState> = {
  setHome: (state, home) => (state.home = home),
}
