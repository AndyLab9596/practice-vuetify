import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        tasks: [
            {
                id: 1, title: 'Wake Up', done: false, dueDate: '2022-07-17',
            },
            {
                id: 2, title: 'Brush teeth', done: false, dueDate: '2022-07-17',
            },
            {
                id: 3, title: 'Eat Breakfast', done: false, dueDate: '2022-07-17',
            },
        ],
        snackbar: {
            show: false,
            text: '',
        },
        search: '',
    },
    mutations: {
        addTask(state, newTask) {
            state.tasks.push(newTask);
        },
        deleteTask(state, id) {
            state.tasks = state.tasks.filter((task) => task.id !== id);
        },
        doneTask(state, id) {
            const taskIndex = state.tasks.findIndex((task) => task.id === id);
            state.tasks[taskIndex].done = !state.tasks[taskIndex].done
        },
        showSnackBar(state, text) {
            state.snackbar.show = true;
            state.snackbar.text = text;
        },
        hideSnackBar(state) {
            state.snackbar.show = false;
            state.snackbar.text = '';
        },
        editTask(state, payload) {
            const taskIndex = state.tasks.findIndex((task) => task.id === payload.id);
            const taskKey = Object.keys(payload);
            state.tasks[taskIndex][taskKey[1]] = payload[taskKey[1]]
        },
        setSearch(state, value) {
            state.search = value;
        }
    },
    actions: {
        addTask(context, newTask) {
            context.commit('addTask', newTask);
            context.dispatch('showSnackBar', 'Add Task Successfully')
        },
        deleteTask(context, id) {
            context.commit('deleteTask', id);
            context.dispatch('showSnackBar', 'Delete Task Successfully')
        },
        doneTask(context, id) {
            context.commit('doneTask', id);
        },
        hideSnackBar(context) {
            setTimeout(() => {
                context.commit('hideSnackBar')
            }, 1500)
        },
        showSnackBar(context, text) {
            context.commit('showSnackBar', text);
            context.dispatch('hideSnackBar');
        },
        editTask(context, payload) {
            context.commit('editTask', payload);
            context.dispatch('showSnackBar', 'Edit Task Successfully')
        }
    },
    getters: {
        tasksFiltered(state) {
            if (!state.search) {
                return state.tasks
            }
            return state.tasks.filter((task) => task.title.toLocaleLowerCase().includes(state.search.toLocaleLowerCase()))
        }
    },
})

export default store;