export const ADD = 'ADD'

const state = {
  cart: {
    name: '我是车子'
  },
  list: ['1', '2', 3, 4, 5],
  money: 0
}

const actions = {
  SET_CART ({ state, commit, dispatch }, cart) {
    commit('SET_CART', {cart})
  },
  CLEAR_CART () {
  }
}
const getters = {
  cart: state => state.cart,
  list: state => state.list,
  money: state => state.money
}

const mutations = {
  SET_CART (state, payload = {}) {
    state.cart = payload.cart
  },
  RESET_CART (state, payload) {

  },
  CLEAR_CART (state) {
    state.cart = {}
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
