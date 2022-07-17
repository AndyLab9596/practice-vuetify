<template>
  <div>
    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn light icon v-bind="attrs" v-on="on" color="primary">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click="handleClickTaskMenu(i)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <!-- Dialog Edit -->
    <DialogEdit
      :task="task"
      v-if="dialogs.edit"
      @onCloseDialog="handleCloseDialog"
    />
    <!-- Dialog Delete -->
    <DialogDelete
      :task="task"
      v-if="dialogs.delete"
      @onCloseDialog="handleCloseDialog"
    />
    <!-- Dialog DueDate -->
    <DialogDueDate
      :task="task"
      v-if="dialogs.dueDate"
      @onCloseDialog="handleCloseDialog"
    />
  </div>
</template>

<script>
import DialogDelete from "./Dialog/DialogDelete.vue";
import DialogEdit from "./Dialog/DialogEdit.vue";
import DialogDueDate from "./Dialog/DialogDueDate.vue";

export default {
  emits: ["onOpenDeleteDialog"],
  props: ["task"],
  data: () => ({
    items: [
      {
        title: "Edit",
        icon: "mdi-pencil",
        click() {
          this.dialogs.edit = true;
        },
      },
      {
        title: "Due Date",
        icon: "mdi-calendar",
        click() {
          this.dialogs.dueDate = true;
        },
      },
      {
        title: "Delete",
        icon: "mdi-delete",
        click() {
          this.dialogs.delete = true;
        },
      },
    ],
    dialogs: {
      delete: false,
      edit: false,
      dueDate: false,
    },
  }),
  methods: {
    handleClickTaskMenu(index) {
      this.items[index].click.call(this);
    },
    handleCloseDialog(type) {
      this.dialogs[type] = false;
    },
  },
  components: {
    DialogDelete,
    DialogEdit,
    DialogDueDate,
  },
};
</script>

<style lang="scss" scoped></style>
