<template>
  <main class="main">
    <header class="header">
      <div class="header-title">
        <h1>New Arrivals</h1>
        <h2>Summer Collection</h2>
        <div class="shop-btn">
          <p class="shop-now">Shop Now</p>
        </div>
      </div>
    </header>
    <div class="new-arrivals">
      <h2 class="new-arrivals-title">New Arrivals</h2>
      <div class="post-wrapper">
        <div class="post">
          <img src="@/assets/black-sweater.jpg" alt="sweater" />
          <h4>Black sweater</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
            beatae officia possimus aliquid facere exercitationem consequatur
            suscipit magni, eveniet sapiente!
          </p>
          <p class="btn">10 $</p>
          <button>Add</button>
        </div>
        <div class="post">
          <img src="@/assets/black-sweater.jpg" alt="sweater" />
          <h4>Black sweater</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
            beatae officia possimus aliquid facere exercitationem consequatur
            suscipit magni, eveniet sapiente!
          </p>
          <p class="btn">10 $</p>
          <button>Add</button>
        </div>
        <div class="post">
          <img src="@/assets/black-sweater.jpg" alt="sweater" />
          <h4>Black sweater</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
            beatae officia possimus aliquid facere exercitationem consequatur
            suscipit magni, eveniet sapiente!
          </p>
          <p class="btn">10 $</p>
          <button>Add</button>
        </div>
        <div class="post">
          <img src="@/assets/black-sweater.jpg" alt="sweater" />
          <h4>Black sweater</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
            beatae officia possimus aliquid facere exercitationem consequatur
            suscipit magni, eveniet sapiente!
          </p>
          <p class="btn">10 $</p>
          <button>Add</button>
        </div>
      </div>
    </div>
    <div class="off">
      <div class="gradient">
        <h1>50% off</h1>
        <h3>This Weekend</h3>
      </div>
    </div>
    <div class="trends">
      <div class="best-sellers">
        <h2>Best Sellers</h2>
        <br />
        <div class="sell-wrapper">
          <div class="product-wrapper">
            <div class="product">
              <img
                src="@/assets/black-sweater.jpg"
                alt="best-selling"
                class="product-photo"
              />
              <div class="product-info">
                <b> black sweater </b>
                <p>10 $</p>
              </div>
            </div>
            <div class="product">
              <img
                src="@/assets/black-sweater.jpg"
                alt="best-selling"
                class="product-photo"
              />
              <div class="product-info">
                <b> black sweater </b>
                <p>10 $</p>
              </div>
            </div>
            <div class="product">
              <img
                src="@/assets/black-sweater.jpg"
                alt="best-selling"
                class="product-photo"
              />
              <div class="product-info">
                <b> black sweater </b>
                <p>10 $</p>
              </div>
            </div>
            <div class="product">
              <img
                src="@/assets/black-sweater.jpg"
                alt="best-selling"
                class="product-photo"
              />
              <div class="product-info">
                <b> black sweater </b>
                <p>10 $</p>
              </div>
            </div>
            <div class="product">
              <img
                src="@/assets/black-sweater.jpg"
                alt="best-selling"
                class="product-photo"
              />
              <div class="product-info">
                <b> black sweater </b>
                <p>10 $</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="trendings">
        <h2>Most trendings of this week</h2>
        <br />
        <div class="post">
          <img src="@/assets/black-sweater.jpg" alt="sweater" />
          <h4>Black sweater</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
            beatae officia possimus aliquid facere exercitationem consequatur
            suscipit magni, eveniet sapiente!
          </p>
          <p class="btn">10 $</p>
          <button>Add</button>
        </div>
      </div>
    </div>
    <div class="services">
      <div class="service">
        <img
          width="64"
          height="64"
          src="https://img.icons8.com/pastel-glyph/64/online-support.png"
          alt="online-support"
        />
        <div class="service-info">
          <b>24/7 Support</b>
          <p>any time you can ask us</p>
        </div>
      </div>
      <div class="service">
        <img
          width="64"
          height="64"
          src="https://img.icons8.com/pastel-glyph/64/fast-delivery--v2.png"
          alt="fast-delivery--v2"
        />
        <div class="service-info">
          <b>Free Shipping</b>
          <p>any where you are</p>
        </div>
      </div>
      <div class="service">
        <img
          width="64"
          height="64"
          src="https://img.icons8.com/pastel-glyph/64/cardboard-box.png"
          alt="cardboard-box"
        />
        <div class="service-info">
          <b>7 Days Return</b>
          <p>don't love it? return it!</p>
        </div>
      </div>
      <div class="service">
        <img
          width="64"
          height="64"
          src="https://img.icons8.com/pastel-glyph/64/t-shirt--v3.png"
          alt="t-shirt--v3"
        />
        <div class="service-info">
          <b>Over 1000 styles</b>
          <p>a collection for any taste</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "HomeMain",
};
</script>

<style>
/* ----  header ---- */

.header {
  max-width: 100%;
  background-image: url("@/assets/new-arrivals.jpg");
  background-repeat: no-repeat;
  background-position: center;
  height: 95vh;
  text-align: center;
}

.header-title {
  line-height: 3.5rem;
  padding: 210px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.shop-btn {
  border: 2px solid #222;
  width: 110px;
  margin-top: 1rem;
  cursor: pointer;
  border-radius: 5px;
}

/* ---- new arrivals ---- */

.new-arrivals {
  margin: 20px;
}
.new-arrivals-title {
  margin-top: 20px;
  text-align: center;
  padding: 20px 0;
}
.post {
  border-radius: 5px;
  max-width: 250px;
}
.post-wrapper {
  display: flex;
  justify-content: space-around;
}
.btn {
  display: inline-block;
}

/* ----  off banner ---- */

.off {
  max-width: 100%;
  background-image: url("@/assets/off.jpg");
  background-repeat: no-repeat;
  background-position: center;
  height: 60vh;
  z-index: 8;
}

.gradient {
  width: 100%;
  height: 100%;
  z-index: 12;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: linear-gradient(top, 0, 0);
}

/* ---- trends ---- */

.trends {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 20px 0;
  align-items: flex-start;
}

.product {
  display: flex;
  margin: 20px 0;
  align-items: center;
}

.product-photo {
  max-width: 80px;
}

.product-info {
  line-height: 10px;
  padding-left: 15px;
}

/* ----  our services ----  */
.services {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 30px 20px;
}
.service {
  margin: auto;
  display: flex;
  align-items: center;
}
.service-info {
  padding-left: 15px;
}

/* hover */

.shop-btn:hover {
  background-color: #222;
  color: #fff;
  transition: all 0.5ms;
}

.gradient:hover {
  background: linear-gradient(rgba(59, 55, 53, 0.5));
  z-index: 5;
}
</style>
