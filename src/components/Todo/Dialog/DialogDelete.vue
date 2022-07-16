<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5"> Delete Task? </v-card-title>
      <v-card-text> Are you sure? </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="closeDialog"> No </v-btn>
        <v-btn color="green darken-1" text @click="deleteTask"> Yes </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["task"],
  emits: ["onCloseDialog"],
  methods: {
    deleteTask() {
      this.$store.dispatch("deleteTask", this.task.id);
    },
    closeDialog() {
      this.$emit("onCloseDialog", "delete");
    },
  },
};
</script>

<style lang="scss" scoped></style>
