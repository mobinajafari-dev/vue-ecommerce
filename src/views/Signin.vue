<template>
  <NavbarSection />
  <div class="user">
    <img src="../assets/sign-in.jpg" alt="sign-in" class="user__img" />
    <div class="user__content">
      <h2 class="user__title">ثبت نام</h2>
      <form class="sign-in__form">
        <div class="double-input">
          <textInput
            title="نام و نام خانوادگی"
            type="text"
            placeholder="rezarezaee"
          />
          <textInput
            title="ایمیل"
            type="email"
            placeholder="ahsion@gmail.com"
          />
        </div>
        <div class="double-input">
          <textInput
            title="شماره همراه"
            type="number"
            placeholder="09305497319"
          />
          <textInput title="کد ملی" type="number" placeholder="09305497319" />
        </div>
        <div class="double-btn">
          <textInput title="تاریخ تولد" type="date" />
          <div class="gender">
            <label for="gender" class="gender__title">جنسیت</label>
            <select name="gender" id="gender" class="gender__select">
              <option value="female" class="gender__option">آقا</option>
              <option value="male" selected class="gender__option">خانم</option>
            </select>
          </div>
        </div>
        <city />
        <textInput
          type="text"
          title="آدرس"
          placeholder="خیابان... کوچه...پلاک0"
        />
      </form>
      <div class="double-btn mt-1 m-auto">
        <router-link :to="{ name: 'password' }" class="user__btn normal mt-1"
          >تکمیل اطلاعات</router-link
        >
        <router-link
          :to="{ name: 'home' }"
          class="user__link password__link mt-1"
          >بازگشت به خانه ←</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import textInput from "@/components/textInput.vue";
import city from "@/components/city.vue";

export default {
  name: "Signin",
  components: {
    NavbarSection,
    textInput,
    city,
  },
  methods: {},
  setup() {
    return {
      textInputs: [{ title: "نام و نام خانوادگی" }],
    };
  },
};
</script>

<style>
.sign-in__form {
  flex-wrap: wrap;
  max-width: 450px;
}
.sign-in__form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

/* gender */

.gender {
}

.gender__title {
  margin: 10px;
}

.gender__select {
  border: 0;
  outline: none;
  width: 80px;
}

.gender__option {
  background: #eee;
}

/* 2 inputs */

.double-input {
  display: flex;
  align-items: center;
}
.form__box {
  margin: 5px;
}
.select-input {
  border: none;
  border-radius: 10px;
  background-color: #eee;
  padding: 5px;
}

/* responsive */

@media only screen and (max-width: 576px) {
  .sign-in__form {
    max-width: 100%;
  }
  .double-input {
    flex-wrap: wrap;
  }
}
</style>
