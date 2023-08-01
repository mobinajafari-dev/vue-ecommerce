<template>
  <div class="product-page">
    <img src="@/assets/black-sweater.jpg" alt="product" />
    <div class="product-info">
      <h2 class="product-name">Sweater</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos at
        molestias ut quaerat soluta error.
      </p>
      <p>10 $</p>
      <button>Add</button>
    </div>
  </div>
  <div class="description">
    <span>colors :   </span>
    <span>Black , white , pink</span> <br>
    <span>size :   </span>
    <span>free</span> <br>
    <span>material :   </span>
    <span>cotton</span> <br>
    <span>Categories :   </span>
    <span>casual</span> <br>
    <span>Available :   </span>
    <span>yes</span>
  </div>
  <div class="comment">
    <div class="comment-img"><img src="@/assets/user.png" alt="user"/></div>
    <div class="comments-content"><h4>username</h4>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis,
      saepe.
    </p></div>
  </div>
  <div class="recommend">
    <h2 class="recommend-title">You might also like ...</h2>
    <div class="post-wrapper">
      <div class="post">
        <img src="@/assets/black-sweater.jpg" alt="sweater" />
        <h4>Black sweater</h4>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis facere dolorem placeat quae voluptatum? Numquam?
        </p>
        <p class="btn">10 $</p>
        <button>Add</button>
      </div>
      <div class="post">
        <img src="@/assets/black-sweater.jpg" alt="sweater" />
        <h4>Black sweater</h4>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis facere dolorem placeat quae voluptatum? Numquam?
        </p>
        <p class="btn">10 $</p>
        <button>Add</button>
      </div>
      <div class="post">
        <img src="@/assets/black-sweater.jpg" alt="sweater" />
        <h4>Black sweater</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis facere dolorem placeat quae voluptatum? Numquam?
        </p>
        <p class="btn">10 $</p>
        <button>Add</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductMain",
};
</script>

<style>
.product-page{
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}

.description{
  margin: 5px auto;
  line-height: 3rem;
}

.comment{
  display: flex;
}

.comment-img{
  width: 32px;
}

.recommend-title{
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
</style>
