<template>
  <v-list flat class="pt-0">
    <Task v-for="task in $store.getters.tasksFiltered" :key="task.id" :task="task" />
  </v-list>
</template>

<script>
import Task from "./Todo/Task.vue";
export default {
  components: { Task },
};
</script>

<style lang="scss" scoped></style>
