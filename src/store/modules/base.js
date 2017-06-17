/**
 * Created by caiyuhao on 2017/5/10.
 */
import * as types from '../mutation-types'

const state = {
  showCard: false
}

const mutations = {
  [types.STUDENT_CARD_CHANGE] (state, { showCard }) {
    state.showCard = showCard
  }
}

const getters = {
  getShowCard: state => state.showCard
}

const actions = {
  toggleShowCard ({ commit }, showCard) {
    commit(types.STUDENT_CARD_CHANGE, { showCard })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
