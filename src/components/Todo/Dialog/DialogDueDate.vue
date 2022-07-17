<template>
  <v-dialog
    ref="dialog"
    :value="true"
    :return-value.sync="date"
    persistent
    width="290px"
  >
    <v-date-picker v-model="date" scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="closeDialog"> Cancel </v-btn>
      <v-btn text color="primary" @click="saveDueDate"> OK </v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  props: ["task"],
  emits: ["onCloseDialog"],
  data: () => ({
    date: null,
  }),
  methods: {
    closeDialog() {
      this.$emit("onCloseDialog", "dueDate");
    },
    saveDueDate() {
      const payload = {
        id: this.task.id,
        dueDate: this.date,
      };
      this.$store.dispatch("editTask", payload);
      this.$emit("onCloseDialog", "dueDate");
    },
  },
  mounted() {
    if (this.task.dueDate) {
      this.date = this.task.dueDate;
    }
  },
};
</script>

<style lang="scss" scoped></style>
