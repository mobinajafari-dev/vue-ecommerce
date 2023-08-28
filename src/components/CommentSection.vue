<template>
  <div class="comment">
    <div class="comment__img">
      <img
        width="50"
        height="50"
        src="https://img.icons8.com/ios/50/user-male-circle--v1.png"
        alt="user-male-circle--v1"
      />
    </div>
    <div class="comments__content">
      <h4 class="comment__username">{{ comment.user }}</h4>
      <p class="comment__txt">{{ comment.text }}</p>
    </div>
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
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem;
  margin: 0.5rem 0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  max-width: 920px;
  width: 100%;
}

.comment__img {
  padding: 0.5rem;
}

.comments__content {
  padding: 0.5rem;
}
.comment__username {
  margin-bottom: 0.5rem;
  font-weight: 700;
  font-size: 18px;
}
.comment__txt {
  font-size: 16px;
}
</style>
