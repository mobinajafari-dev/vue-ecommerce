<template>
  <NavbarSection/>
  <HomeMain/>
  <FooterSection/>
</template>

<script>
// @ is an alias to /src
import  NavbarSection from '@/components/NavbarSection.vue'
import  HomeMain from '@/components/HomeMain.vue'
import FooterSection from '@/components/FooterSection.vue'

export default {
  name: 'HomeView',
  components: {
    NavbarSection,
    HomeMain,
    FooterSection,
  }
}
</script>
