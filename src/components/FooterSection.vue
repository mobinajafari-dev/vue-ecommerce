<template>
  <footer class="footer">
    <div class="media-wrapper">
      <img src="@/assets/logo.png" alt="logo" class="footer-logo" />
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
            class="media-icon"
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
      <h4>Useful Links</h4>
      <a href="#" class="normal white">About Us</a> <br />
      <a href="#" class="normal white">FAQs</a> <br />
      <a href="#" class="normal white">Categories</a> <br />
      <a href="#" class="normal white">Shipping</a>
    </div>
    <div class="contact">
      <h4>Opening Hours</h4>
      <b>sat - wed : </b> <br />
      <p>10 A.M - 9 P.M</p>
      <b>thu - fri : </b> <br />
      <p>4 P.M - 9 P.M</p>
    </div>
    <div class="phone">
      <img
        width="30"
        height="30"
        src="https://img.icons8.com/ios/100/marker--v1.png"
        alt="marker--v1"
      />
      <b>Location :</b>
      <p>Somewhere on the earth;)</p>
      <img
        width="30"
        height="30"
        src="https://img.icons8.com/ios/50/000000/phone--v1.png"
        alt="phone--v1"
      />
      <b>Call Us Now :</b>
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
  background-color: #555;
  font-family: "Lato";
  padding: 3rem;
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
  border-radius: 40%;
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
.white {
  color: #000;
}
@media screen and (max-width: 768px) {
  .phone {
    display: none;
  }
}
@media screen and (max-width: 480px) {
  .contact {
    display: none;
  }
  .footer {
    flex-wrap: wrap;
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
