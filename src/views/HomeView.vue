<template>
  <NavbarSection />
  <main class="main">
    <header class="header">
      <div class="header-title">
        <h1>تازه ترین محصولات</h1>
        <h2>کالکشن تابستانه</h2>
        <Button />
      </div>
    </header>
    <div class="new-arrivals">
      <h2 class="new-arrivals-title">تازه ترین ها</h2>
      <div class="post-wrapper">
        <PostSection />
        <PostSection />
        <PostSection />
        <PostSection />
      </div>
    </div>
    <div class="off">
      <div class="off__content">
        <h1>50% تخفیف</h1>
        <h3>حراج تابستانه</h3>
      </div>
    </div>
    <div class="trends">
      <div class="best-sellers">
        <h2 class="best-sellers__title">پر فروش ترین ها</h2>
        <br />
        <div class="sell-wrapper">
          <div class="product-wrapper">
            <ProductList />
            <ProductList />
            <ProductList />
            <ProductList />
            <ProductList />
          </div>
        </div>
      </div>
      <div class="trendings">
        <h2>بهترین های این هفته</h2>
        <br />
        <PostSection />
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
          <b>پشتیبانی 24 ساعته</b>
          <p>هر زمانی می تونید با ما در ارتباط باشید</p>
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
          <b>ارسال رایگان</b>
          <p>به هر کجایی که هستید</p>
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
          <b>بازگشت محصول</b>
          <p>تا 7 روز بعد میتونید مرجوعش کنید</p>
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
          <b>بیش از 100 مدل لباس</b>
          <p>فروشگاهی برای هر نوع سلیقه ایی</p>
        </div>
      </div>
    </div>
  </main>
  <FooterSection />
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import Button from "@/components/Button.vue";
import PostSection from "@/components/PostSection.vue";
import ProductList from "@/components/ProductList.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "HomeView",
  components: {
    NavbarSection,
    Button,
    PostSection,
    ProductList,
    FooterSection,
  },
};
</script>

<style>
/* ----  header ---- */

.header {
  max-width: 100%;
  background-image: url("@/assets/new-arrivals.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 95vh;
  text-align: center;
}

.header-title {
  line-height: 3.5rem;
  padding: 40vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

/* ---- new arrivals ---- */

.new-arrivals {
  margin: 20px;
}
.new-arrivals-title {
  margin-top: 20px;
  text-align: center;
  padding: 20px 0px;
}

.post-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 2rem;
  width: 100%;
}

/* ----  off banner ---- */

.off {
  max-width: 100%;
  background: url("@/assets/off.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 60vh;
  cursor: pointer;
}

.off__content {
  width: 100%;
  height: 100%;
  z-index: 12;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  text-shadow: 1px 1px 2px black, 0 0 25px rgb(126, 126, 139),
    0 0 5px rgb(120, 120, 142);
  transition: all 0.2s ease-in-out;
}

/* ---- trends ---- */

.trends {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 20px 0;
  align-items: flex-start;
}

.best-sellers__title {
}

/* ----  our services ----  */
.services {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 30px 20px 0 20px;
  padding: 1rem;
}
.service {
  margin: auto;
  display: flex;
  align-items: center;
}
.service-info {
  padding-right: 15px;
}

/* hover */
.off:hover {
  z-index: 5;
  background: linear-gradient(1deg, rgba(0, 0, 0, 1), rgba(120, 120, 120, 0.1)),
    url("@/assets/off.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: #fff;
}

.off__content:hover {
  font-size: 30px;
}

/* responsive */
@media only screen and (max-width: 600px) {
  .service {
    margin: 1rem;
  }
}

@media only screen and (min-width: 600px) {
  .service {
    margin: 1rem;
  }
}

@media only screen and (min-width: 768px) {
  .service {
    margin: 2rem;
    flex-shrink: 2;
  }
}

@media only screen and (min-width: 992px) {
  .service {
    margin: 2rem;
  }
}

@media only screen and (min-width: 1200px) {
}
</style>
