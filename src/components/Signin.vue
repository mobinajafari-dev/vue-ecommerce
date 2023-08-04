<template>
  <NavbarSection />
  <div class="login">
    <img src="../assets/sign-in.jpg" alt="login" class="login__img" />
    <div class="login__content">
      <img src="@/assets/logo.webp" alt="logo" class="login__logo" />
      <h2 class="login__title">ثبت نام</h2>
      <div class="input-wrapper">
        <div class="login__input">
          <p class="input__title">نام :</p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="نام خود را وارد کنید"
            class="input__box"
          />
        </div>
        <div class="login__input">
          <p class="input__title">نام خانوادگی :</p>
          <input
            type="password"
            name="password"
            id="password"
            class="input__box"
            placeholder="نام خانوادگی خود را وارد کنید"
          />
        </div>
        <div class="login__input">
          <p class="input__title">ایمیل :</p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="ایمیل خود را وارد کنید"
            class="input__box"
          />
        </div>
        <div class="login__input">
          <p class="input__title">شماره همراه :</p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="شماره همراه خود را وارد کنید"
            class="input__box"
          />
        </div>
        <div class="login__input">
          <p class="input__title">رمزعبور :</p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="رمز عبور خود را وارد کنید"
            class="input__box"
          />
        </div>
        <div class="login__input">
          <p class="input__title">شهر :</p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="شهر خود را وارد کنید"
            class="input__box"
          />
        </div>
        <div class="login__input">
          <p class="input__title">آدرس :</p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="آدرس خود را وارد کنید"
            class="input__box"
          />
        </div>
      </div>
      <div class="btn-wrapper">
        <button @click="back()" class="login__btn">بازگشت</button>
        <button class="login__btn">ثبت نام</button>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
export default {
  name: "Signin",
  components: {
    NavbarSection,
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
  setup() {
    return {};
  },
};
</script>
