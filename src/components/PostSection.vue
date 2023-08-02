<template>
  <div class="post">
    <img alt="img-post" src="@/assets/black-sweater.jpg" class="post__img" />
    <h4 class="post__title">Black sweater</h4>
    <p class="post__info">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
      beatae officia possimus aliquid facere exercitationem consequatur suscipit
      magni, eveniet sapiente!
    </p>
    <p class="post__price">10 $</p>
    <div class="post-btn__wrapper">
      <router-link class="detail-btn" :to="{ name: 'product' }"
        >See More</router-link
      >
      <button class="add-btn">Add</button>
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
</style>
