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
            type="text"
            placeholder="09305497319"
          />
          <textInput title="کد ملی" type="text" placeholder="09305497319" />
        </div>
        <div class="double-btn">
          <div class="gender">
            <select name="gender" id="gender" class="gender__select">
              <option value="female" class="gender__option">آقا</option>
              <option value="" class="gender__option" selected>جنسیت</option>
              <option value="male" class="gender__option">خانم</option>
            </select>
          </div>
          <city />
        </div>
        <div class="double-btn">
          <textInput
            type="text"
            title="آدرس"
            placeholder="خیابان... کوچه...پلاک0"
            class=""
          />
          <div class="birthdate">
            <date-picker v-model="birthdate"></date-picker>
          </div>
        </div>
      </form>
      <router-link
        :to="{ name: 'password' }"
        class="user__btn normal mt-1 m-auto"
        >تکمیل اطلاعات</router-link
      >
      <router-link :to="{ name: 'home' }" class="user__link password__link"
        >بازگشت به خانه ←</router-link
      >
    </div>
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import textInput from "@/components/textInput.vue";
import city from "@/components/city.vue";
import DatePicker from "vue3-persian-datetime-picker";

export default {
  name: "Signin",
  components: {
    NavbarSection,
    textInput,
    city,
    DatePicker,
  },
  methods: {},
  setup() {
    return {
      birthdate: "",
    };
  },
};
</script>

<style>
/*total style */

span {
  transform: none !important;
}

/* sign in form */

.sign-in__form {
  flex-wrap: wrap;
  max-width: 500px;
}
.sign-in__form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

/* birthdate */

.birthdate {
  display: inline;
  max-width: 316px;
  padding: 10px !important;
}

.birthdate__title {
  display: inline;
}

span:nth-child(2) {
  margin-left: 0;
}
/* gender */

.gender {
  margin: 0 1.5rem;
}

.gender__select {
  border: 0;
  outline: none;
  width: 120px;
}

.gender__option {
  background: #eee;
}

/* 2 inputs */

.double-input {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
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
