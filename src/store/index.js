import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'


const store = new Vuex.Store({
  modules: {
    user
  },
  getters
})

export default store
