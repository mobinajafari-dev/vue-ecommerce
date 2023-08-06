<template>
  <NavbarSection />
  <div class="login">
    <img src="../assets/login.jpg" alt="login" class="login__img" />
    <div class="login__content">
      <img src="@/assets/logo.webp" alt="logo" class="login__logo" />
      <h2 class="login__title">خوش آمدید !</h2>
      <div class="input-wrapper">
        <div class="login__input">
          <p class="input__title">نام کاربری :</p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="نام کاربری را وارد کنید"
            class="input__box"
          />
        </div>
        <div class="login__input">
          <p class="input__title">رمز عبور :</p>
          <input
            type="password"
            name="password"
            id="password"
            class="input__box"
            placeholder="رمز عبور خود را وارد کنید"
          />
        </div>
      </div>
      <button class="login__btn single-btn">ورود</button>
      <br />
      <div class="sign-in__link">
        <p>حساب کاربری ندارید؟</p>
        <router-link :to="{ name: 'sign-in' }" class="pr login__link"
          >ثبت نام</router-link
        >
      </div>
      <router-link
        :to="{ name: 'forget-password' }"
        class="login__link sign-in__link"
        >فراموشی رمز عبور</router-link
      >
      <router-view />
    </div>
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
export default {
  name: "UserProfileView",
  components: {
    NavbarSection,
  },
  setup() {
    return {};
  },
};
</script>

<style>
/* total */

.single-btn {
  margin: 1rem auto !important;
  padding: 0.5rem 3rem !important;
}

/* login page */
.login {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  max-width: 1000px;
  margin: 1rem auto;
}
.login__img {
  max-width: 400px;
  border-radius: 0 10px 10px 0;
}
.login__content {
  margin-right: 3rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.login__logo {
  margin-bottom: 2rem;
}
.login__title {
  margin-bottom: 2rem;
}
.login__input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;
}
.input__title {
  padding-right: 10px;
}
.input__box {
  border-radius: 1rem;
  border: none;
  background-color: #eee;
  text-align: center;
  padding: 0.5rem 2rem;
  font-size: 14px;
  margin-right: 1rem;
}

.login__btn {
  border-radius: 8px;
  padding: 0.5rem;
  margin: 0.5rem 1rem;
  border: none;
  background-color: #aaa;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.2ms linear;
}

.pr {
  padding-right: 10px;
}

.login__link {
  color: #000;
  font-size: 16px;
}

.sign-in__link {
  display: flex;
  margin: 0 auto;
}

/* hover */
.login__btn:hover {
  background-color: #000;
  color: #fff;
}
</style>
