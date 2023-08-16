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
  <FAQs /> <br />
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
import FAQs from "@/components/FAQs.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "ProductView",
  components: {
    NavbarSection,
    FAQs,
    FooterSection,
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
