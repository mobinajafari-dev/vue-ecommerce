<template>
  <router-link :to="{ name: 'home' }"></router-link>
  <router-view />
</template>

<script>
import HomeView from "./views/HomeView.vue";
export default {
  components: { HomeView },
  data() {
    return {
      baseURL: "http://localhost:80/api/v1/fa/",
    };
  },
  name: "App",
  component: {
    HomeView,
  },
};
</script>

<style>
/* total styles */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  direction: rtl;
  font-family: "vazir";
  max-width: 100%;
}
</style>
