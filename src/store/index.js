import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import base from './modules/base'
import home from './modules/home'
import student from './modules/student'
import teacher from './modules/teacher'
import classroom from './modules/classroom'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    base,
    home,
    student,
    teacher,
    classroom
  },
  actions,
  getters,
  strict: debug
})
