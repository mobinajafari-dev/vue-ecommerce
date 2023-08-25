<template>
  <NavbarSection />
  <div id="user-profile">
    <div class="user__sidebar">
      <img src="" alt="" />
      <div class="sidebar__menu">
        <ul>
          <li class="normal"></li>
          <li class="normal"></li>
          <li class="normal"></li>
          <li class="normal"></li>
          <li class="normal"></li>
        </ul>
        <button class="single-btn normal">Log Out</button>
      </div>
    </div>
    <div class="user__content">
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </div>
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
export default {
  name: "UserProfile",
  components: {
    NavbarSection,
  },
};
</script>

<style>
#user-profile {
  display: flex;
  align-items: center;
  justify-content: right;
  width: 100%;
  position: relative;
}
.user__sidebar {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 30%;
  background-color: #aaa;
}
</style>
