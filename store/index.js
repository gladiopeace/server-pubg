import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import createPersistedState from "vuex-persistedstate"
import axios from 'axios'
Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        count: 0,
        todos: [],
        product : []
    },
    getters,
    mutations,
    actions,
    plugins : [createPersistedState()]
})
