<template>
  <NavbarSection />
  <div class="user m-auto">
    <img
      src="../assets/forget-password.jpg"
      alt="forget-password"
      class="user__img"
    />
    <div class="user__content">
      <img src="@/assets/logo.webp" alt="logo" class="user__logo" />
      <h2 class="user__title">بازیابی رمز عبور</h2>
      <p class="user__info">
        در صورت فراموش کردن رمز عبور کافی است ایمیل یا شماره همراه خود را وارد
        کنید تا کد بازیابی رمز عبور برای شما ارسال گردد
      </p>
      <form class="form m-auto">
        <textInput
          type="text"
          title="شماره همراه / ایمیل"
          placeholder="ashion@gmail.com"
        />
      </form>
      <router-link
        :to="{ name: 'confirm-password' }"
        class="user__btn single-btn m-auto"
        >ارسال کد</router-link
      >
      <br />
      <router-link :to="{ name: 'home' }" class="user__link m-auto"
        >بازگشت به خانه ←</router-link
      >
      <router-view />
    </div>
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import textInput from "@/components/textInput.vue";
export default {
  name: "ForgetPassword",
  components: {
    NavbarSection,
    textInput,
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

.m-auto {
  margin: 1rem auto !important;
}

/* text */

.user__info {
  margin: 1rem;
}

/* responsive */

@media only screen and (max-width: 992px) {
  .user__content {
    margin: 0 auto;
  }
}
</style>
