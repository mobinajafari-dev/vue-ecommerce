<template>
  <NavbarSection />
  <div class="login">
    <img src="../assets/password.jpg" alt="login" class="login__img" />
    <div class="login__content">
      <img src="@/assets/logo.webp" alt="logo" class="login__logo" />
      <h2 class="login__title">یک کلمه عبور مطمئن را انتخاب کنید</h2>
      <form class="input-wrapper">
        <div class="login__input">
          <p class="input__title">رمز عبور :</p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="رمز عبور خود را وارد کنید"
            class="input__box"
          />
        </div>
        <div class="login__input">
          <p class="input__title">تکرار رمز عبور :</p>
          <input
            type="password"
            name="password"
            id="password"
            class="input__box"
            placeholder="رمز عبور خود را وارد کنید"
          />
        </div>
      </form>
      <button class="login__btn single-btn">ثبت نهایی</button>
      <br />
      <div class="sign-in__link"></div>
      <router-view />
    </div>
  </div>
</template>
<script>
import NavbarSection from "./NavbarSection.vue";
export default {
  name: "Password",
  components: {
    NavbarSection,
  },
};
</script>

<style></style>
