<template>
  <div class="home">
    <FieldAndTask />
    <ListTask v-if="$store.state.tasks.length" />
    <NoTask v-else />
  </div>
</template>

<script>
import FieldAndTask from "../components/Todo/FieldAndTask.vue";
import ListTask from "../components/ListTask.vue";
import NoTask from "@/components/Todo/NoTask.vue";

export default {
  name: "HomeView",
  components: { FieldAndTask, ListTask, NoTask },
};
</script>
