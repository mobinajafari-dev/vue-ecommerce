<template>
  <NavbarSection />
  <div class="user m-auto">
    <img src="../assets/password.jpg" alt="password" class="user__img" />
    <div class="user__content m-auto">
      <img src="@/assets/logo.webp" alt="logo" class="user__logo" />
      <h2 class="user__title">یک کلمه عبور مطمئن را انتخاب کنید</h2>
      <div class="form m-auto">
        <passwordInput title="رمز عبور" v-model="newPassword" />
        <passwordInput title="تکرار رمز عبور" v-model="confirmPassword" />
      </div>
      <div class="double-btn m-auto">
        <button @click="console.log(newPassword)" class="user__btn single-btn">
          بعدی
        </button>
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
      newPassword: "",
      confirmPassword: "",
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    handleInputChange(valueName, value) {
      this[valueName] = value;
    },
  },
};
</script>

<style>
/* responsive */

@media only screen and (max-width: 567px) {
  .user__content {
    margin: 0 auto;
  }
  .user__title {
    margin-top: 40px;
  }
}
</style>
