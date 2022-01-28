import { defineStore } from 'pinia'

interface Count {
  count: number
}
export const computedCount = defineStore({
  id: 'uf-count',
  state: (): Count => ({
    count: 0,
  }),
  getters: {
    getCount(state) {
      return state.count
    },
  },
  actions: {
    handleCount() {
      this.count++
    },
  },
})
