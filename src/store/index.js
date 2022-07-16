import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        tasks: [
            {
                id: 1, title: 'Wake Up', done: false,
            },
            {
                id: 2, title: 'Brush teeth', done: false,
            },
            {
                id: 3, title: 'Eat Breakfast', done: false,
            },
        ],
    },
    mutations: {
    },
    actions: {
    },
    getters: {

    },
})

export default store;