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
      </ul>
    </div>
    <div class="nav-center">
      <img src="@/assets/logo.webp" alt="logo" />
    </div>
    <div class="nav-right">
      <router-link class="border icon" :to="{ name: 'search' }">
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
      <router-link class="border icon" :to="{ name: 'user-profile' }">
        <img
          width="32"
          height="32"
          src="https://img.icons8.com/windows/32/gender-neutral-user.png"
          alt="gender-neutral-user"
        />
      </router-link>
      <div class="icon icon-bars .nav-left--open" @click="nav()" ref="open">
        <img
          width="32"
          height="32"
          src="https://img.icons8.com/ios/50/menu--v1.png"
          alt="menu--v1"
        />
      </div>
      <div class="border icon icon-x" ref="closed">
        <img
          width="32"
          height="32"
          src="https://img.icons8.com/ios-filled/50/x.png"
          alt="x"
        />
      </div>

      <router-view />
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarSection",
  setup() {
    return {
      navBtn: document.querySelector(".nav-left"),
      menuIcon: document.querySelector(".icon-bars"),
      mobileView: false,
      showNav: false,
    };
  },
  methods: {
    nav() {
      if (this.navOpen) {
        this.navBtn.style.left = 0;
        this.menuIcon.style.display = "none";
        this.closedIcon.style.display = "flex";
        this.navOpen = false;
      } else {
        this.navBtn.style.left = "-50%";
        this.menuIcon.style.display = "flex";
        this.closedIcon.style.display = "none";
        this.navOpen = true;
      }
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

.lan {
  border: none;
  font-size: 20px;
  font-family: "Vazirmatn", sans-serif;
  color: #000;
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

/* language */

.lan {
  padding: 10px;
  transition: all 0.3s;
  cursor: pointer;
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

.icon-x {
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

@media only screen and (max-width: 768px) {
  .nav-left {
    position: fixed;
    top: 0;
    left: -50%;
    bottom: 0;
    background-color: #aaa;
    width: 50%;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 2rem 0;
    line-height: 4rem;
    transition: all 250ms ease-in-out;
  }
  .lan {
    background-color: #aaa;
    border: none;
  }
  .icon-bars {
    display: flex;
  }
}
</style>
