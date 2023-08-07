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
        <fieldset class="form__box">
          <legend class="form__title">ایمیل / شماره همراه :</legend>
          <input
            type="text"
            name="forget-password"
            id="forget-password"
            placeholder="ashion@gmail.com"
            class="form__input"
            required
          />
        </fieldset>
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
export default {
  name: "ForgetPassword",
  components: {
    NavbarSection,
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
  margin: 0 0 1rem 1.2rem;
}

/* responsive */

@media only screen and (max-width: 567px) {
}
</style>
