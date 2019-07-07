import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		notExactTitle:''
  },
	getters:{
		vuexTitle:state=>state.notExactTitle
	},
  mutations: {
		set_notExactTitle(state,str){
			state.notExactTitle=str
		}

  },
  actions: {

  }
})
