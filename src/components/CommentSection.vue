<template>
  <div class="comment">
    <div class="comment__title">
      <div class="comment__img">
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios/50/user-male-circle--v1.png"
          alt="user-male-circle--v1"
          class="comment-img"
        />
      </div>
      <h4 class="comment__username">{{ comment.user }}</h4>
    </div>
    <p class="comment__txt">{{ comment.text }}</p>
  </div>
</template>

<script>
export default {
  name: "CommentSection",
  props: ["comment", "index"],
};
</script>

<style>
/* comments */

.comment {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0.5rem;
  margin: 0.8rem 0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  max-width: 920px;
  width: 100%;
}

.comment__title {
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.comment__username {
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
  font-weight: 700;
  font-size: 18px;
}
.comment__txt {
  font-size: 16px;
}
/* responsive */
@media only screen and (max-width: 576px) {
  .comment__title {
    padding: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
}
</style>
