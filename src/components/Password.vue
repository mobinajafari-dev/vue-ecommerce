<template>
  <NavbarSection />
  <div class="forget-password">
    <div class="forget-password__content">
      <h2 class="forget-password__title">بازیابی رمز عبور</h2>
      <p>
        در صورت فراموش کردن رمز عبور کافی است ایمیل یا شماره همراه خود را وارد
        کنید تا کد بازیابی رمز عبور برای شما ارسال گردد
      </p>
    </div>

    <div class="btn-wrapper">
      <p class="forget-password__info">ایمیل / شماره همراه :</p>
      <input
        type="text"
        class="forget-password__input"
        placeholder="ایمیل/شماره همراه خود را وارد کنید"
      />
    </div>
    <div class="btn-wrapper">
      <button @click="back()" class="login__btn">بازگشت</button>
      <button class="login__btn">ارسال</button>
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
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
.forget-password {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  max-width: 80vh;
  margin: 15vh auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: self-start;
}

.forget-password__content {
  margin: 20px 0;
}

.btn-wrapper {
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.forget-password__input {
  padding: 0.8rem 3.5rem;
  margin-right: 0.5rem;
  border: none;
  border-radius: 8px;
  background-color: #eee;
  text-align: right;
}

.forget-password__title {
  margin-bottom: 20px;
}
</style>
