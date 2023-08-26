<template>
  <NavbarSection />
  <section class="product-page">
    <div class="product-info">
      <h2 class="product__name">لورم اپیسوم</h2>
      <p class="product__content">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است
      </p>
      <p class="product__content">100.000 تومان</p>
      <button class="product__btn">اضافه کردن به سبد خرید</button>
      <div class=""></div>
    </div>
    <div class="product-img">
      <img src="../assets/black-sweater.jpg" alt="product" />
    </div>
  </section>

  <section>
    <productTab />
  </section>

  <section class="faqs">
    <h4 class="faqs__title">سوالات متداول</h4>
    <FAQ
      v-for="(faq, i) in faqs"
      :key="i"
      :faq="faq"
      :index="i"
      :open="faq.open"
    />
  </section>

  <section class="recommend">
    <h2 class="recommend-title">محصولات مشابه</h2>
    <div class="post-wrapper">
      <productCard />
    </div>
  </section>
  <FooterSection />
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import FAQ from "@/components/FAQ.vue";
import productTab from "@/components/productTab.vue";
import productCard from "@/components/productCard.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "ProductView",
  components: {
    NavbarSection,
    FAQ,
    productTab,
    productCard,
    FooterSection,
  },
  data() {
    return {
      faqs: [
        {
          question: `ارسال رایگان در چه صورت به سبد کالا تعلق می گیره؟`,
          answer: `برای خرید های بالای 500 هزار تومان هزینه ارسال رایگان محاسبه میشود`,
          isOpen: false,
        },
        {
          question: `چطوری محصول رو ارجاع بدم؟`,
          answer: `تا بعد از 7 روز از گرفتن مرسوله می توانید محصول را درصورت عدم
              رضایت ارجاع دهید ، کافی است با این شماره تماس بگیرید (0900000000)
            `,
          isOpen: false,
        },
        {
          question: `کی سفارش به دستم میرسه؟`,
          answer: `معمولا با پست معمولی بین 7 الی 10 روز و با پست پیشتاز بین 3 الی 4
              روز زمان می برد. ضمنا شما می توانید ازریق کد مرسوله وضعیت سفارش
              خود را چک فرمایید.
            `,
          isOpen: false,
        },
      ],
    };
  },
};
</script>

<style>
.product-page {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* first section */
.product-info {
  max-width: 500px;
  margin-left: 8rem;
}

.product__name {
  margin-bottom: 1rem;
}

.product__content {
  line-height: 2rem;
  margin: 5px 0;
}

/* add btn */

.product__btn {
  border: none;
  border-radius: 10px;
  background-color: #555;
  color: #fff;
  font-size: 16px;
  margin: 1rem;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.5ms ease-in-out;
}

/* description */

.description {
  margin: 5px auto;
  line-height: 3rem;
}

/* comments */

.comment {
  display: flex;
}

.comment-img {
  width: 32px;
}

/* faqs */

.faqs {
  margin: 0 auto;
}
.faqs__title {
  font-weight: 900;
  font-size: 24px;
  margin: 2rem 7rem;
}

/* recommendation */

.recommend-title {
  text-align: center;
  padding: 20px 0;
}

.post {
  border-radius: 5px;
  max-width: 250px;
}

.post-wrapper {
  margin: 20px 0;
  display: flex;
  justify-content: space-around;
}

/* animation */
.product__btn:hover {
  background: #fff;
  color: #555;
  border: 1px solid #555;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

/* responsive */
</style>
