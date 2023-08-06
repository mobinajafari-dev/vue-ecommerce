<template>
  <div class="post">
    <img alt="img-post" src="@/assets/black-sweater.jpg" class="post__img" />
    <h4 class="post__title">نام محصول</h4>
    <p class="post__info">
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
      طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
      که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
      هدف بهبود حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد
    </p>
    <p class="post__price">500.000 تومان</p>
    <div class="post-btn__wrapper">
      <router-link class="detail-btn" :to="{ name: 'product' }"
        >مشاهده</router-link
      >
      <button class="add-btn">اضافه</button>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "PostSection",
};
</script>

<style>
.post {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 15px;
  cursor: pointer;
  max-width: 320px !important;
  transition: all 0.3s ease;
  margin: 1rem;
}

.post__img {
  width: 250px;
}

.post__title {
  padding-top: 5px;
}

.post__info {
  padding-top: 10px;
}

.post__price {
  padding: 8px 0;
}

.detail-btn {
  border-radius: 1rem;
  border: 1px solid #aaa;
  padding: 8px;
  background-color: #aaa;
  text-decoration: none;
  color: #000;
  display: inline;
  transition: all 0.3s ease-in;
}

.add-btn {
  background-color: #fff;
  border-radius: 1rem;
  padding: 8px;
  margin: 8px;
  cursor: pointer;
  display: inline;
  transition: all 0.3s ease-in;
}

/* hover */
.post:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3);
}

.add-btn:hover {
  background-color: #000;
  color: #fff;
}

.detail-btn:hover {
  background-color: #000;
  color: #fff;
}
/* responsive */
@media only screen and (max-width: 576px) {
  .post {
    font-size: 12px;
  }
}
</style>
