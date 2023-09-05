<template>
  <NavbarSection />
  <div class="user">
    <img src="../assets/sign-in.jpg" alt="sign-in" class="user__img" />
    <div class="user__content">
      <h2 class="user__title">ثبت نام</h2>
      <form class="sign-in__form m-auto">
        <div class="double-input">
          <textInput
            title="نام"
            type="text"
            placeholder="reza"
            class="text-input"
            @update-data="handleFirstName($event)"
          />
          <textInput
            title="نام خانوادگی"
            type="text"
            placeholder="rezaee"
            class="text-input"
            @update-data="handleLastName($event)"
          />
        </div>

        <div class="double-input">
          <textInput
            title="شماره همراه"
            type="text"
            placeholder="09305497319"
            class="text-input"
            @update-data="handlePhone($event)"
          />
          <textInput
            title="ایمیل"
            type="email"
            placeholder="ahsion@gmail.com"
            class="text-input"
            @update-data="handleEmail($event)"
          />
        </div>
        <div class="double-btn">
          <textInput
            title="کد ملی"
            type="text"
            placeholder="09305497319"
            class="text-input"
            @update-data="handleNationalCode($event)"
          />
          <div class="gender">
            <select
              name="gender"
              id="gender"
              class="gender__select"
              v-model="gender"
            >
              <option value="female" class="gender__option">آقا</option>
              <option value="" class="gender__option" selected>جنسیت</option>
              <option value="male" class="gender__option">خانم</option>
            </select>
          </div>
        </div>
        <div class="city-btn">
          <city
            @update-city="handleCity($event)"
            @update-province="handleProvince($event)"
          />
        </div>
        <div class="double-btn">
          <textInput
            type="text"
            title="آدرس"
            placeholder="خیابان... کوچه...پلاک0"
            class=""
            @update-data="handleAddress($event)"
          />
          <div class="birthdate">
            <date-picker v-model="birthdate"></date-picker>
          </div>
        </div>
      </form>
      <button @click="register" class="single-btn user__btn m-auto">
        تکمیل اطلاعات
      </button>
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
import Swal from "sweetalert";
import axios from "axios";

export default {
  name: "Signin",
  components: {
    NavbarSection,
    textInput,
    city,
    DatePicker,
  },
  props: ["baseURL"],
  methods: {
    handleFirstName(data) {
      return (this.firstName = data);
    },
    handleLastName(data) {
      return (this.lastName = data);
    },
    handleEmail(data) {
      return (this.email = data);
    },
    handleNationalCode(data) {
      return (this.nationalCode = data);
    },
    handlePhone(data) {
      return (this.phone = data);
    },
    handleAddress(data) {
      return (this.address = data);
    },
    handleCity(selectedCity) {
      return (this.city = selectedCity);
    },
    handleProvince(selectedProvince) {
      return (this.province = selectedProvince);
    },
    async register(e) {
      const register = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        nationalCode: this.nationalCode,
        phone: this.phone,
        address: this.address,
        birthdate: this.birthdate,
        gender: this.gender,
        city: this.city,
        province: this.province,
      };
      console.log(register);
      await axios
        .post(`${this.baseURL}/auth/register`, register)
        .then(() => {
          this.$router.replace("/password");
        })
        .catch((err) =>
          swal({
            text: "لطفا تمامی فیلد ها را پر کنید",
            icon: "error",
          })
        );
    },
  },
  data() {
    return {
      birthdate: "",
      gender: "",
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

.city-btn {
  margin: 0 auto;
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
  .text-input {
    padding: 10px;
    margin: 1rem auto;
  }
}
</style>
