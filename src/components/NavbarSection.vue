<template>
    <nav class="navbar d-f">
      <div>
        <ul class="ls-n nav-left">
          <li><router-link to="/" class="normal black">Home</router-link></li>
          <li>
            <a href="#" class="normal black">Language</a>
            </li><img
              width="15"
              height="15"
              src="https://img.icons8.com/material-rounded/24/chevron-down.png"
              alt="chevron-down"
            />
        </ul>
      </div>
      <div class="nav-center">
        <img src="@/assets/logo.png" alt="logo" />
      </div>
      <div class="nav-right">
        <router-link class="border icon" :to="{name:'search'}">
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/ios/50/search--v1.png"
            alt="search--v1"
          />
        </router-link>
        <router-link class="border icon" :to="{name:'shopping-card'}"
          ><img
            width="32"
            height="32"
            src="https://img.icons8.com/ios/50/shopping-bag--v1.png"
            alt="shopping-bag--v1"
        /></router-link>
        <router-link class="border icon" :to="{name:'user-profile'}">
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/windows/32/gender-neutral-user.png"
            alt="gender-neutral-user"
          />
        </router-link>
        <i class="border icon icon-bars">
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/ios/50/menu--v1.png"
            alt="menu--v1"
          />
        </i>
        <router-view/>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "NavbarSection",
  };
  </script>
  
  <style>
  
  /* navbar */
  
  .navbar {
    font-family: "Lato";
    max-width: 100%;
    margin: 1rem 0;
  }
  
  .nav-right {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .nav-left{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  
  .icon {
    padding: 10px;
  }
  
  .pr-20 {
    padding-right: 20px;
  }
  
  .normal {
    text-decoration: none;
    font-size: 20px;
  }
  
  .black {
    color: #000;
  }
  
  .ls-n {
    list-style-type: none;
  }
  
  .d-f {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  
  .icon-bars {
    display: none;
  }
  
  /* hovers */
  
  .icon:hover {
    background-color: #ccc;
    border-radius: 50rem;
    color: #fff;
    transition: all 0.5ms;
  }

  /* router link exact link style */

  .navbar a.router-link-exact-active{
    border-bottom: 2px solid #ccc;
  }

  /* responsive */
  
  @media only screen and (max-width: 768px) {
    .nav-left {
      display: none !important;
    }
    .bars-icon {
      display: inline;
    }
    .icon-bars {
      display: inline;
    }
  }
  </style>