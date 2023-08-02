<template>
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
  align-items: center;
}

.product-photo {
  max-width: 80px;
}

.product-info {
  line-height: 10px;
  padding-left: 15px;
}
</style>
