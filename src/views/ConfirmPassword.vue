<template>
  <NavbarSection />
  <div class="user m-auto">
    <img
      src="../assets/confirm-password.jpg"
      alt="confirm-password"
      class="user__img"
    />
    <div class="user__content m-auto">
      <img src="@/assets/logo.webp" alt="logo" class="user__logo" />
      <h2 class="user__title">کد دریافتی را وارد نمایید</h2>
      <form class="form m-auto">
        <otp v-model="otpCode" />
      </form>
      <countdown />
      <button class="user__btn single-btn m-auto">ثبت نهایی</button>
      <div class="password__link mt-1 double-btn">
        <p @click="back" class="pr user__link">→ بازگشت</p>
        <router-link :to="{ name: 'home' }" class="user__link m-auto pr normal"
          >بازگشت به خانه ←</router-link
        >
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import otp from "@/components/otp.vue";
import countdown from "@/components/countdown.vue";

export default {
  name: "ConfirmPassword",
  data() {
    return {
      otpCode: "",
      validation: false,
    };
  },
  components: {
    NavbarSection,
    otp,
    countdown,
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
/* total */
.mt-1 {
  margin-top: 1rem;
}

/* timer */
.user__alert {
  padding-top: 1rem;
  text-align: center;
}
</style>
