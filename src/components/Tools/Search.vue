<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-text-field
    v-model="$store.state.search"
    placeholder="Search"
    filled
    dense
    clearable
    prepend-inner-icon="mdi-magnify"
    class="expanding-search mt-1"
    :class="{ closed: searchClosed && !$store.state.search }"
    @input="$store.commit('setSearch', $event)"
    @focus="searchClosed = false"
    @blur="searchClosed = true"
  ></v-text-field>
</template>

<script>
export default {
  data: () => ({
    searchClosed: true,
  }),
};
</script>

<style lang="scss" scoped>
.expanding-search {
  transition: max-width 0.3s linear;
  &.closed {
    max-width: 45px;
  }
}
</style>
