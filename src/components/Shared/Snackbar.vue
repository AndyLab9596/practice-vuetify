<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-snackbar v-model="$store.state.snackbar.show">
    {{ $store.state.snackbar.text }}
    <template v-slot:action="{ attrs }">
      <v-btn color="pink" text v-bind="attrs" @click="closeSnackBarManually">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  methods: {
    closeSnackBarManually () {
      this.$store.commit('hideSnackBar');
    }
  }
};
</script>

<style lang="scss" scoped></style>
