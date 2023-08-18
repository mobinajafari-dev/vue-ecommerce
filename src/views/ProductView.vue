<template>
  <NavbarSection />
  <div class="product-page">
    <div class="product-info">
      <h2 class="product-name">لورم اپیسوم</h2>
      <p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است
      </p>
      <p>100.000 تومان</p>
      <button>Add</button>
    </div>
    <img src="@/assets/black-sweater.jpg" alt="black-sweater" />
  </div>
  <div class="description">
    <span>رنگ های موجود</span>
    <span>صورتی ، سفید ، مشکی</span> <br />
    <span>سایز ها:</span>
    <span>فری</span> <br />
    <span>جنس :</span>
    <span>نخی</span> <br />
    <span>دسته :</span>
    <span>اسپرت</span> <br />
    <span>موجودی :</span>
    <span>10 عدد</span>
  </div>
  <div class="comment">
    <div class="comment-img">
      <img
        width="50"
        height="50"
        src="https://img.icons8.com/ios/50/user-male-circle--v1.png"
        alt="user-male-circle--v1"
      />
    </div>
    <div class="comments-content">
      <h4>username</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis,
        saepe.
      </p>
    </div>
  </div>
  <div class="faqs">
    <h4 class="faqs__title">سوالات متداول</h4>
    <FAQ
      v-for="(faq, i) in faqs"
      :key="i"
      :faq="faq"
      :index="i"
      :open="faq.open"
    />
  </div>
  <div class="recommend">
    <h2 class="recommend-title">محصولات مشابه</h2>
    <div class="post-wrapper">
      <div class="post">
        <img src="@/assets/black-sweater.jpg" alt="sweater" />
        <h4>Black sweater</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          facere dolorem placeat quae voluptatum? Numquam?
        </p>
        <p class="btn">10 $</p>
        <button>Add</button>
      </div>
      <div class="post">
        <img src="@/assets/black-sweater.jpg" alt="sweater" />
        <h4>Black sweater</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          facere dolorem placeat quae voluptatum? Numquam?
        </p>
        <p class="btn">10 $</p>
        <button>Add</button>
      </div>
      <div class="post">
        <img src="@/assets/black-sweater.jpg" alt="sweater" />
        <h4>Black sweater</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          facere dolorem placeat quae voluptatum? Numquam?
        </p>
        <p class="btn">10 $</p>
        <button>Add</button>
      </div>
    </div>
  </div>
  <FooterSection />
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import FAQ from "@/components/FAQ.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "ProductView",
  components: {
    NavbarSection,
    FAQ,
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
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}

.description {
  margin: 5px auto;
  line-height: 3rem;
}

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

.btn {
  display: inline-block;
}
/* responsive */
</style>
