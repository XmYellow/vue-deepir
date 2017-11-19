export const ADD = 'ADD'

const state = {

}

const actions = {
  async get () {
    const aaa = await fetch.get('')
      .catch(err => console.log(err))

    const bbb = await fetch.get('', aaa.data.name)
      .catch(err => console.log(err))

    const ccc = await fetch.get('')
      .catch(err => console.log(err))
    return 'aa'
  },
  set ({dispatch}) {
    dispatch('get').then(result => {
      console.log(result) // 'aa'
    })
      .catch(err => console.log(err))
  }
}
const getters = {
}

const mutations = {

}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
