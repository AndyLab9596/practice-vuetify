<template>
  <v-text-field
    v-model="newTaskTitle"
    class="pa-2"
    outlined
    label="Add Task"
    hide-details
    clearable
    @keyup.enter="addTask"
  >
    <template v-slot:append>
      <v-icon @click="addTask" color="primary" :disabled="isDisabledAddTask">mdi-plus</v-icon>
    </template>
  </v-text-field>
</template>

<script>
export default {
  data: () => ({
    newTaskTitle: "",
  }),
  methods: {
    addTask() {
      if(this.isDisabledAddTask) return;
      const newTaskCreated = {
        id: this.$store.state.tasks.length + 1,
        title: this.newTaskTitle,
        done: false,
      };
      this.$store.dispatch("addTask", newTaskCreated);
      this.newTaskTitle = "";
    },
  },
  computed: {
    isDisabledAddTask () {
      return !this.newTaskTitle;
    }
  }
};
</script>

<style lang="scss" scoped></style>
