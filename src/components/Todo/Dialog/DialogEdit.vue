<template>
  <v-dialog :value="true" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5"> Edit Task? </v-card-title>
      <v-card-text>
        Edit the title of this task?
        <v-text-field
          v-model="editedTitle"
          @keyup.enter="editTask"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="closeDialog"> Cancel </v-btn>
        <v-btn
          color="green darken-1"
          text
          @click="editTask"
          :disabled="isButtonDisable"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["task"],
  emits: ["onCloseDialog"],
  data() {
    return {
      editedTitle: "",
    };
  },
  computed: {
    isButtonDisable() {
      if (this.editedTitle === "") return true;
      if (this.editedTitle === this.task.title) return true;
      return false;
    },
  },
  methods: {
    editTask() {
      if (this.isButtonDisable) return;
      const payload = {
        id: this.task.id,
        title: this.editedTitle,
      };
      this.$store.dispatch("editTask", payload);
      this.$emit("onCloseDialog", "edit");
    },
    closeDialog() {
      this.$emit("onCloseDialog", "edit");
    },
  },

  mounted() {
    this.editedTitle = this.task.title;
  },
};
</script>

<style lang="scss" scoped></style>
