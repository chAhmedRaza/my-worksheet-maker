import Vue from 'vue'
import Vuex from 'vuex'
import questions from './questions'

Vue.use(Vuex)


export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      questions
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}
