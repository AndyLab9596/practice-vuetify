<template>
  <div class="home">
    <v-text-field v-model="newTaskTitle" class="pa-2" outlined label="Add Task" append-icon="mdi-plus" hide-details
      clearable @click:append="addTask" @keyup.enter="addTask"></v-text-field>
    <v-list flat class="pt-0" v-if="$store.state.tasks.length">
      <div v-for="task in $store.state.tasks" :key="task.id">
        <v-list-item @click="doneTask(task.id)" :class="{ 'blue lighten-5': task.done }">
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title :class="{ 'text-decoration-line-through': task.done }">{{ task.title }}
              </v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn icon @click.stop="deleteTask(task.id)">
                <v-icon color="primary lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
    <div v-else class="pa-2 d-flex flex-column justify-center align-center">
      <v-icon large color="green darken-2">mdi-check</v-icon>
      <p class="text-h6 primary--text mb-0 pr-2 ">No Tasks At The Moment</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data: () => ({
    newTaskTitle: '',
    
  }),

  methods: {
    doneTask(id) {
      let task = this.tasks.find((task) => task.id === id);
      task.done = !task.done;
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    addTask() {
      const newTaskCreated = {
        id: this.tasks.length + 1,
        title: this.newTaskTitle,
        done: false,
      };
      this.tasks.push(newTaskCreated);
      this.newTaskTitle = '';
    }
  },
}
</script>
