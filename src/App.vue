<template>
  <router-link :to="{ name: 'home' }"></router-link>
  <router-view />
</template>

<script>
import HomeView from "./views/HomeView.vue";
export default {
  components: { HomeView },
  name: "App",
  component: {
    HomeView,
  },
};
</script>

<style>
/* fonts */

@import url("https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;200;300;400;500;700&display=swap");

/* total styles */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Vazirmatn", sans-serif;
  direction: rtl;
}
</style>
