<template>
  <NavbarSection />
  <div id="search">
    <div class="search-box">
      <input type="search" name="search" class="search-title" />
      <img
        width="32"
        height="32"
        src="https://img.icons8.com/ios/50/search--v1.png"
        alt="search--v1"
      />
    </div>
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
export default {
  name: "SearchView",
  components: {
    NavbarSection,
  },
  setup() {
    return {};
  },
};
</script>

<style></style>
