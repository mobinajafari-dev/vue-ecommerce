<template>
  <NavbarSection />
  <div class="user">
    <img src="../assets/sign-in.jpg" alt="sign-in" class="user__img" />
    <div class="user__content">
      <h2 class="user__title">ثبت نام</h2>
      <form class="sign-in__form">
        <div class="double-input">
          <fieldset class="form__box">
            <legend class="form__title">نام و نام خانوادگی :</legend>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="ashion.com"
              class="form__input"
            />
          </fieldset>
          <fieldset class="form__box">
            <legend class="form__title">ایمیل :</legend>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="ashion@gmail.com"
              class="form__input"
            />
          </fieldset>
        </div>
        <div class="double-input">
          <fieldset class="form__box">
            <legend class="form__title">شماره همراه :</legend>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="09305497319"
              class="form__input"
            />
          </fieldset>
          <fieldset class="form__box">
            <legend class="form__title">تاریخ تولد :</legend>
            <input
              type="date"
              name="birthday"
              id="password"
              class="form__input"
              placeholder=""
            />
          </fieldset>
        </div>
        <div class="double-input">
          <fieldset class="form__box">
            <legend class="form__title">جنسیت :</legend>
            <select name="gender" id="gender" class="select-input">
              <option value="man">مرد</option>
              <option value="woman">زن</option>
            </select>
          </fieldset>
          <fieldset class="form__box">
            <legend class="form__title">کد ملی :</legend>
            <input
              type="text"
              name="natinal-code"
              id="natinal-code"
              placeholder="09010901738"
              class="form__input"
            />
          </fieldset>
        </div>
        <div class="double-input">
          <fieldset class="form__box">
            <legend class="form__title">استان :</legend>
            <select name="province" id="province" class="select-input">
              <option value="tehran" selected>تهران</option>
              <option value="markazi">مرکزی</option>
              <option value="azarbayejan-sharghi">آذربایجان شرقی</option>
              <option value="azarbayejan-gharbi">آذربایجان غربی</option>
              <option value="golesta">گلستان</option>
              <option value="mazandaran">مازندران</option>
              <option value="yazd">یزد</option>
              <option value="hamedan">همدان</option>
              <option value="fars">فارس</option>
              <option value="qom">قم</option>
              <option value="semnan">سمنان</option>
              <option value="kerman">کرمان</option>
              <option value="kordestan">کردستان</option>
            </select>
          </fieldset>
          <fieldset class="form__box">
            <legend class="form__title">شهر :</legend>
            <select class="select-input">
              <option value="tehran" selected>تهران</option>
            </select>
          </fieldset>
        </div>
        <fieldset class="form__box">
          <legend class="form__title">آدرس :</legend>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،"
            class="address__input"
          />
        </fieldset>
      </form>
      <div class="btn-wrapper mt-1">
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
export default {
  name: "Signin",
  components: {
    NavbarSection,
  },
  methods: {},
  setup() {
    return {};
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
.double-input {
  display: flex;
}
.form__box {
  margin: 5px;
}
.address__input {
  padding: 2rem;
  border: none;
  background-color: #eee;
  border-radius: 10px;
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
