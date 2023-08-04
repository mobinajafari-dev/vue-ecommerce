<template>
  <footer class="footer">
    <div class="media-wrapper">
      <img src="@/assets/logo.webp" alt="logo" class="footer-logo" />
      <div class="media">
        <div class="icon-box">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios/50/instagram-new--v1.png"
            alt="instagram-new--v1"
            class="media-icon"
          />
        </div>
        <div class="icon-box">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/material-outlined/24/facebook-f.png"
            alt="facebook-f"
            class="media-icon"
          />
        </div>
        <div class="icon-box">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios/50/pinterest--v1.png"
            alt="pinterest--v1"
            class="media-icon pinterest"
          />
        </div>
        <div class="icon-box">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios/50/twitter--v1.png"
            alt="twitter--v1"
            class="media-icon"
          />
        </div>
      </div>
    </div>
    <div class="links">
      <h4 class="links__title">مطالب مرتبط</h4>
      <a href="#" class="links__txt">درباره ما</a> <br />
      <a href="#" class="links__txt">سوالات متداول</a> <br />
      <a href="#" class="links__txt">جدیدترین محصولات</a> <br />
      <a href="#" class="links__txt">ارسال محصولات</a>
    </div>
    <div class="opening-hours">
      <h4 class="opening-hours__title">ساعات کاری</h4>
      <p class="opening-hours__day">شنبه تا چهاشنبه :</p>
      <p>9 صبح تا 9 شب</p>
      <p class="opening-hours__day">پنچ شنبه و جمعه :</p>
      <p>4 عصر تا 9 شب</p>
    </div>

    <div class="contact">
      <div class="contact__title">
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/ios/50/000000/marker--v1.png"
          alt="marker--v1"
        />
        <p>آدرس</p>
      </div>
      <p>بلوار خیام ، کوچه قدوسی ، پلاک 20</p>
      <br />
      <div class="contact__title">
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/ios/50/000000/phone--v1.png"
          alt="phone--v1"
        />
        <p>با ما تماس بگیرید</p>
      </div>
      <p>+000 000 0000</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>

<style>
/*  footer   */

.footer {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  background-color: #555;
  padding: 3rem;
  color: #eee;
  padding-bottom: 4rem;
}

/* logo and media */

.footer-logo {
  margin-bottom: 1rem;
}

.media {
  display: flex;
}

.icon-box {
  margin: 0 5px;
  border-radius: 50%;
  box-shadow: 2px 5px 4px 2px rgba(0, 0, 0, 0.2);
  padding: 0.75rem;
  background-color: #fff;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
}

.pinterest {
  border-radius: 50% !important;
}

.icon-box::before {
  content: "";
  border-radius: 50%;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #888;
  top: -100px;
  right: -80px;
}

.icon-box:hover:before {
  animation: MoveToBottom 1s forwards;
}

.media-icon {
  transition: all 0.5s;
  border-radius: 10px;
}

.icon-box:hover {
  transform: scale(1.1);
}

.icon-box:hover .media-icon {
  background-color: #fff;
  transform: scale(1.1);
}

/* link  */

.links {
  line-height: 30px;
}

.links__title {
  margin-bottom: 1rem;
  font-weight: 500;
  font-size: 18px;
}

.links__txt {
  color: #eee;
  line-height: 10px;
  text-decoration: none;
}

/* opening hours */

.opening-hours__title {
  margin-bottom: 0.75rem;
  font-weight: 500;
  font-size: 18px;
}

.opening-hours__day {
  padding-top: 0.5rem;
  font-size: 16px;
  font-weight: 500;
}

/* contact */

.contact {
  text-align: center;
}

.contact__title {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  justify-content: space-evenly;
}

/* responsive */

@media screen and (max-width: 920px) {
  .contact {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .opening-hours {
    display: none;
  }
}
@media screen and (max-width: 480px) {
  .links {
    margin-top: 2rem;
  }
  .footer {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

/* animation */

@keyframes MoveToBottom {
  0% {
    top: -100px;
    right: -80px;
  }
  70% {
    top: 20px;
    right: 20px;
  }
  100% {
    top: 0;
    right: 0;
  }
}
</style>
