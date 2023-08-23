<template>
  <nav class="navbar">
    <div>
      <ul class="nav-left">
        <li>
          <div>
            <router-link to="/" class="normal nav-left__link">خانه</router-link>
          </div>
        </li>
        <li>
          <router-link :to="{ name: 'about-us' }" class="normal nav-left__link"
            >درباره ما</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'search' }"
            class="normal nav-left__link search-xs"
            >جستجو</router-link
          >
        </li>
      </ul>
    </div>
    <div class="nav-center">
      <img src="@/assets/logo.webp" alt="logo" />
    </div>
    <div class="nav-right">
      <router-link class="border icon search-icon" :to="{ name: 'search' }">
        <img
          width="32"
          height="32"
          src="https://img.icons8.com/ios/50/search--v1.png"
          alt="search--v1"
        />
      </router-link>
      <router-link class="border icon" :to="{ name: 'shopping-card' }"
        ><img
          width="32"
          height="32"
          src="https://img.icons8.com/ios/50/shopping-bag--v1.png"
          alt="shopping-bag--v1"
      /></router-link>
      <router-link class="border icon" :to="{ name: 'login' }">
        <img
          width="32"
          height="32"
          src="https://img.icons8.com/windows/32/gender-neutral-user.png"
          alt="gender-neutral-user"
        />
      </router-link>
      <div class="icon icon-bars">
        <MenuIcon @click="toggelMobileNav()" />
      </div>
      <div v-show="mobileNav">
        <ul class="dropdown-nav">
          <li>
            <router-link to="/" class="normal nav-left__link">خانه</router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'about-us' }"
              class="normal nav-left__link"
              >درباره ما</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'search' }"
              class="normal nav-left__link search-xs"
              >جستجو</router-link
            >
          </li>
          <li><p @click="back()" class="normal nav-left__link">بازگشت</p></li>
        </ul>
      </div>
      <router-view />
    </div>
  </nav>
</template>

<script>
import MenuIcon from "@/components/MenuIcon.vue";
export default {
  name: "NavbarSection",
  components: {
    MenuIcon,
  },
  data() {
    return {
      mobileNav: false,
    };
  },
  methods: {
    toggelMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
/* total style */

.normal {
  text-decoration: none;
  font-size: 20px;
  color: #000;
}

/* navbar */

.navbar {
  max-width: 100%;
  margin: 2px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

/* navbar right */

.nav-right {
  display: flex;
  align-items: center;
  padding: 10px;
}

/* navbar left */

.nav-left {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
}

.nav-left__link {
  padding: 10px;
  transition: all 0.3s;
  cursor: pointer;
}

.search-xs {
  display: none;
}

/* icons */

.icon {
  padding: 10px;
  display: flex;
  cursor: pointer;
  transition: all 0.3s;
}

.icon-bars {
  display: none;
}

/* navigation menu */
.dropdown-nav {
  display: none;
}

/* hovers */

.icon:hover {
  background-color: #ccc;
  border-radius: 100%;
  color: #fff;
  transition: all 0.5s;
}

.lan:hover {
  background-color: #ccc;
  border-radius: 10px;
  color: #000;
  transition: all 0.5s;
  cursor: pointer;
}

.nav-left__link:hover {
  background-color: #ccc;
  border-radius: 10px;
  color: #000;
  transition: all 0.5s;
  cursor: pointer;
}

/* router link exact link style */

.navbar a.router-link-exact-active {
  border-bottom: 3px solid #aaa;
}

/* responsive */
@media only screen and (max-width: 567px) {
  .search-icon {
    display: none;
  }
  .search-xs {
    display: block;
  }
}

@media only screen and (max-width: 768px) {
  .icon-bars {
    display: block;
  }
  .nav-left {
    display: none;
  }
  .dropdown-nav {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #aaa;
    width: 50%;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 2rem 0;
    line-height: 4rem;
    transition: all 250ms ease-in-out;
    z-index: 99;
    display: block;
  }
}
</style>
