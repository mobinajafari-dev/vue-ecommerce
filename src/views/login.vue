<template>
  <NavbarSection />
  <div class="user">
    <img src="../assets/login.jpg" alt="login" class="user__img" />
    <div class="user__content m-auto">
      <img src="@/assets/logo.webp" alt="logo" class="user__logo pt-1" />
      <h2 class="user__title">ورود و ثبت نام</h2>
      <form class="form mr-5">
        <textInput
          text="text"
          placeholder="rezarezaee"
          title="نام کاربری"
          class="text-input"
          @update-data="handleUsername($event)"
        />
        <passwordInput
          title="رمز عبور"
          class="text-input"
          @update-password="handlePassword($event)"
        />
        <br />
        <div class="checkbox">
          <input
            type="checkbox"
            name="remind"
            id="remind"
            class="form__checkbox"
            v-model="remind"
          />
          <label for="remind" class="form__text">مرا به خاطر بسپار !</label>
        </div>
      </form>
      <div class="double-btn">
        <button class="user__btn single-btn" @click="login">ورود</button>
        <router-link class="user__btn single-btn" :to="{ name: 'sign-in' }"
          >ثبت نام</router-link
        >
      </div>

      <br />
      <div class="password__link">
        <p>رمز عبور خود را فراموش کرده اید؟</p>
        <router-link :to="{ name: 'forget-password' }" class="pr user__link"
          >بازیابی رمز عبور</router-link
        >
      </div>
      <router-link :to="{ name: 'home' }" class="user__link password__link"
        >بازگشت به خانه ←</router-link
      >
      <router-view />
    </div>
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import passwordInput from "@/components/passwordInput.vue";
import textInput from "@/components/textInput.vue";
import Swal from "sweetalert";
import axios from "axios";

export default {
  name: "login",
  components: {
    NavbarSection,
    passwordInput,
    textInput,
  },
  props: ["baseURL"],
  data() {
    return {
      remind: "",
    };
  },
  methods: {
    handleUsername(data) {
      return (this.username = data);
    },
    handlePassword(password) {
      return (this.password = password);
    },
    async login(e) {
      const user = {
        username: this.username,
        password: this.password,
      };
      console.log(user);
      await axios
        .post(`${this.baseURL}/auth/login`, user)
        .then(() => {
          this.$router.replace("/user-profile");
          swal({
            text: "شما با موفقیت وارد سایت شدید!",
            icon: "success",
          });
        })
        .catch((err) =>
          swal({
            text: "شما در سایت ثبت نام نکرده اید!",
            icon: "error",
          })
        );
    },
  },
  computed() {},
};
</script>

<style>
/* total */

.mr-5 {
  margin-right: 5px;
}

.pr {
  padding-right: 10px;
}

/* user page */

.user {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  max-width: 980px;
  margin: 1rem auto;
}

/* image */

.user__img {
  max-width: 400px;
  border-radius: 0 10px 10px 0;
}

/* context box- left */

.user__content {
  margin-right: 3rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

/* logo */

.user__logo {
  margin-bottom: 2rem;
}

/* title */

.user__title {
  margin: 0.5rem;
}
/* form */

.form__box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;
  border-radius: 10px;
  background-color: #eee;
}
.form__input {
  background-color: #eee;
  border: none;
  border-radius: 10px;
  text-align: center;
  padding: 0.5rem 2rem;
  font-size: 14px;
  width: 100%;
}

/* checkbox input */

.checkbox {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem 0;
}

.form__checkbox {
  margin-left: 10px;
}

/* button */

.user__btn {
  border-radius: 8px;
  padding: 0.5rem;
  margin: 0.5rem 1rem;
  border: none;
  background-color: #aaa;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.2ms linear;
}

.double-btn {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.single-btn {
  margin: 1rem !important;
  padding: 0.5rem 3rem !important;
  color: #000;
  text-decoration: none;
}

/* livks */

.user__link {
  color: #000;
  font-size: 16px;
  cursor: pointer;
}

.password__link {
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  align-items: center;
}

/* hover */
.user__btn:hover {
  background-color: #000;
  color: #fff;
}

/* responsive */
@media only screen and (max-width: 576px) {
  .user {
    box-shadow: none;
  }
  .form__box {
    margin-top: 20px 0;
  }
  .user__img {
    display: none;
  }
  .double-btn {
    justify-content: center;
    align-items: center;
    margin-top: 15px;
  }
  .user__logo {
    display: none;
  }
  .user__content {
    margin: 1rem 2rem;
  }
  .checkbox {
    margin-top: 15px;
  }
  .password__link {
    justify-content: center;
  }
  .user__link {
    margin: 10px auto;
  }
  .form {
    margin: 1rem auto;
  }
}

@media only screen and (min-width: 576px) {
  .user__img {
    display: none;
  }
  .user__logo {
    display: none;
  }
  .user {
    margin: 3rem auto;
    max-width: 450px;
    padding: 1rem;
  }
  .form {
    margin: 0 auto;
  }
}
@media only screen and (min-width: 992px) {
  .user__logo {
    display: block;
  }
  .user__img {
    display: inline;
    max-width: 400px;
    border-radius: 0 10px 10px 0;
  }
  .user {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    max-width: 980px;
    margin: 1rem auto;
    padding: 0;
  }
  .user__content {
    margin-right: 3rem;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
