<template>
  <NavbarSection />
  <div class="user m-auto">
    <img
      src="../assets/confirm-password.jpg"
      alt="confirm-password"
      class="user__img"
    />
    <div class="user__content">
      <img src="@/assets/logo.webp" alt="logo" class="user__logo" />
      <h2 class="user__title">کد دریافتی را وارد نمایید</h2>
      <form class="form m-auto">
        <input type="text" name="code" id="code" maxlength="6" />
        <p class="user__alert">تا دریافت کد بعدی</p>
      </form>
      <button class="user__btn single-btn m-auto">ثبت نهایی</button>
      <div class="password__link mt-1">
        <p>کد فعال سازی را دریافت نکرده اید؟</p>
        <router-link :to="{ name: 'forget-password' }" class="pr user__link"
          >دوباره امتحان کنید</router-link
        >
      </div>
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
  name: "ConfirmPassword",
  components: {
    NavbarSection,
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
