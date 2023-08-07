<template>
  <NavbarSection />
  <div class="user m-auto">
    <img src="../assets/password.jpg" alt="password" class="user__img" />
    <div class="user__content">
      <img src="@/assets/logo.webp" alt="logo" class="user__logo" />
      <h2 class="user__title">یک کلمه عبور مطمئن را انتخاب کنید</h2>
      <form class="form m-auto">
        <fieldset class="form__box">
          <legend class="form__title">رمز عبور :</legend>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="رمز عبور خود را وارد کنید"
            class="form__input"
          />
        </fieldset>
        <fieldset class="form__box">
          <legend class="form__title">تکرار رمز عبور :</legend>
          <input
            type="password"
            name="password"
            id="password"
            class="form__input"
            placeholder="رمز عبور خود را وارد کنید"
          />
        </fieldset>
      </form>
      <router-link
        :to="{ name: 'confirm-password' }"
        class="user__btn single-btn m-auto"
        >بعدی</router-link
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
  name: "Password",
  components: {
    NavbarSection,
  },
};
</script>

<style></style>
