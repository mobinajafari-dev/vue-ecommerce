<template>
  <div class="product-card">
    <h3>لورم اپیسوم</h3>
    <p>لورم ایپسوم متن ساختگی</p>
    <div class="image__wrapper">
      <img src="../assets/black-sweater.jpg" alt="" class="product-card__img" />
    </div>
    <div class="product-card__txt">
      <button class="product-card__btn">مشاهده بیشتر</button>
      <p class="product-card__price">100.000 تومان</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "productCard",
  components: {},
  data() {},
};
</script>

<style>
.product-card {
  width: 300px;
  padding: 1rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  line-height: 1.8rem;
  margin: 10px;
}

.image__wrapper {
  text-align: center;
}

.product-card__img {
  width: 200px;
}

.product-card__txt {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.product-card__price {
}

.product-card__btn {
  padding: 0.3rem;
  border-radius: 20px;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.3ms ease-in;
}

/* hover */
.product-card__btn:hover {
  background-color: #000;
  color: #fff;
}

/* responsive */
@media only screen and (min-width: 920px) {
  .product-card {
    width: 280px;
  }
}
@media only screen and (min-width: 1200px) {
  .product-card {
    width: 300px;
  }
}
</style>
