<template>
  <div class="product">
    <img
      src="@/assets/black-sweater.jpg"
      alt="best-selling"
      class="product__photo"
    />
    <div class="product__info">
      <b class="product__title"> black sweater </b>
      <div class="d-f">
        <p class="product__price">10 $</p>
        <router-link :to="{ name: 'product' }" class="product__btn--more"
          ><img
            width="25"
            height="25"
            src="https://img.icons8.com/ios-glyphs/30/more.png"
            alt="more"
        /></router-link>
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/material-sharp/24/plus-math--v1.png"
          alt="plus-math--v1"
        />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
};
</script>

<style>
.product {
  display: flex;
  margin: 20px 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  padding: 1px 50px 1px 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.product__photo {
  max-width: 80px;
  border-radius: 1rem;
}

.product__info {
  line-height: 10px;
  padding: 20px 10px;
}

.d-f {
  margin-top: 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.product__price {
  margin: 10px 0;
  font-weight: 700;
  font-size: 16px;
}

.product__btn--add {
  background-color: #fff;
  border: none;
  margin: 0 5px;
}

.product__btn--more {
  text-decoration: none;
  border-radius: 5px;
  margin: 0 5px;
  cursor: pointer;
}

/* hover */

.product:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3);
}
</style>
