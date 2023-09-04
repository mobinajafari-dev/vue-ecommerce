<template>
  <NavbarSection />
  <div class="user-profile">
    <div class="user__sidebar">
      <div class="user-profile__img">
        <img
          width="120"
          height="120"
          src="https://img.icons8.com/ios-glyphs/90/737373/user-male-circle.png"
          alt="user-male-circle"
        />
      </div>
      <button
        @click="activeLink = 'profilePicture'"
        class="profile-picture__btn"
      >
        تغییر عکس پروفایل
      </button>
      <br />
      <div class="sidebar__menu">
        <button class="sidebar__link" @click="activeLink = 'updateUserInfo'">
          تغییر مشخصات کاربری
        </button>
        <button class="sidebar__link" @click="activeLink = 'changePassword'">
          تغییر رمز عبور
        </button>
        <button class="sidebar__link">
          <router-link :to="{ name: 'shopping-card' }" class="sidebar__link"
            >سبد خرید</router-link
          >
        </button>
        <button class="sidebar__link" @click="logout">خروج</button>
      </div>
    </div>

    <div class="user__content">
      <div v-show="activeLink === 'welcome'"></div>
      <div v-show="activeLink === 'profilePicture'">
        <input type="image" src="" alt="profile-picture" />
      </div>
      <div v-show="activeLink === 'changePassword'" class="change-password">
        <h3>تغییر رمز عبور</h3>
        <passwordInput title="رمز فعلی" />
        <passwordInput title="رمز جدید" />
        <passwordInput title="تکرار رمز جدید" />
        <button @click="changepassword" class="user-btn">تغییر رمز عبور</button>
      </div>
      <div v-show="activeLink === 'updateUserInfo'"></div>
    </div>
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import passwordInput from "@/components/passwordInput.vue";
export default {
  name: "UserProfile",
  data() {
    return {
      activeLink: "changePassword",
    };
  },
  components: {
    NavbarSection,
    passwordInput,
  },
};
</script>

<style>
/* total  */

/* btn */
.user-btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 10px;
  background-color: #555;
  color: #fff;
  cursor: pointer;
  margin: 2rem;
  font-size: 17px;
}
/* whole page */
.user-profile {
  display: flex;
  align-items: center;
  justify-content: right;
  width: 100%;
  height: vh;
}
/* profile */
.user-profile__img {
  padding-top: 2rem;
}
.profile-picture__btn {
  border: none;
  background-color: #fff;
}
/* sidebar menu */
.user__sidebar {
  top: 0;
  right: 0;
  background-color: #fff;
  width: 250px;
  padding: 0.5rem 2rem;
  height: 100%;
  text-align: center;
}
.sidebar__menu {
  margin-top: 2rem;
}
.sidebar__link {
  text-decoration: none;
  list-style: none;
  padding: 0.5rem 0;
  font-size: 16px;
  font-family: "Vazir-Thin";
  cursor: pointer;
  color: #000;
  border: none;
  background-color: #fff;
  display: block;
}
/* change password section */
.change-password {
  top: 25vh;
  right: 500px;
  position: absolute;
}
</style>
