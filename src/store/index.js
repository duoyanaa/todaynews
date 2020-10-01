import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vue.Store({
    state: {
        imgurl: ""
    },
    mutations: {
        choosecity(state) {
            state.imgurl =JSON.parse(localStorage.getItem("userid")).imgurl
        }
    }
})