/**
 * Created by caiyuhao on 2017/4/28.
 * mutations
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import base from './modules/base'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    base
  },
  actions,
  getters,
  strict: debug
})
