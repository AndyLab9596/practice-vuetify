<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Vuetify Todo </v-list-item-title>
          <v-list-item-subtitle> Best Todo Ever! </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
      src="https://picsum.photos/1920/1080?random"
      height="180"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-container class="pa-0 mt-3">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <Search />
        </v-row>
        <v-row class="">
          <v-app-bar-title class="ml-3 title text-h4"
            >Vuetify Todo</v-app-bar-title
          >
        </v-row>
        <v-row>
          <LiveDateAndTime />
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
      <Snackbar />
    </v-main>
  </v-app>
</template>

<script>
import Snackbar from "@/components/Shared/Snackbar.vue";
import Search from "./components/Tools/Search.vue";
import LiveDateAndTime from "./components/Tools/LiveDateAndTime.vue";

export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "Todo", icon: "mdi-ab-testing", to: "/" },
      { title: "About", icon: "mdi-help-box", to: "/about" },
    ],
  }),
  component: {
    snackbar: require("@/components/Shared/Snackbar.vue").default,
    search: require("@/components/Tools/Search.vue").default,
  },
  components: { Snackbar, Search, LiveDateAndTime },
};
</script>

<style scoped>
.title {
  width: 250px;
}
</style>
