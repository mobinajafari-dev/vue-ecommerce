<template>
  <NavbarSection />
  <div class="user m-auto">
    <img src="../assets/password.jpg" alt="password" class="user__img" />
    <div class="user__content">
      <img src="@/assets/logo.webp" alt="logo" class="user__logo" />
      <h2 class="user__title">یک کلمه عبور مطمئن را انتخاب کنید</h2>
      <div class="form m-auto">
        <passwordInput title="رمز عبور" />
        <passwordInput title="تکرار رمز عبور" />
      </div>
      <div class="double-btn m-auto">
        <router-link
          :to="{ name: 'confirm-password' }"
          class="user__btn single-btn"
          >بعدی</router-link
        >
        <button @click="back" class="pr user__btn single-btn">بازگشت</button>
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
import passwordInput from "@/components/passwordInput.vue";
export default {
  name: "Password",
  components: {
    NavbarSection,
    passwordInput,
  },
  data() {
    return {
      inputs: [{ title: "رمز عبور" }, { title: "تکرار رمز عبور" }],
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style></style>
