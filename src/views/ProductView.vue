<template>
  <NavbarSection />
  <ProductMain />
  <FooterSection />
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import ProductMain from "@/components/ProductMain.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "ProductView",
  components: {
    NavbarSection,
    ProductMain,
    FooterSection,
  },
};
</script>

<style>
/* responsive */
</style>
