<template>
  <h2 class="comment-out__title">ارسال نظرات</h2>
  <div class="comment-out__wrapper">
    <div class="comment-out">
      <label for="" class="comment-out__title">نام کاربری :</label>
      <textInput title="نام کاربری" type="text" placeholder="rezarezaee" />
    </div>
    <div class="comment-out">
      <label for="" class="comment-out__title">ایمیل :</label>
      <textInput title="ایمیل" type="email" placeholder="ashion@gmail.com" />
    </div>
    <div class="comment-out">
      <label for="" class="comment-out__title">متن :</label>
      <textarea
        name=""
        id=""
        cols="30"
        rows="5"
        class="comment-out__txt"
      ></textarea>
    </div>
    <button class="comment-out__btn">ارسال</button>
  </div>
</template>

<script>
import textInput from "@/components/textInput.vue";
export default {
  name: "CommentOut",
  components: {
    textInput,
  },
};
</script>

<style>
.comment-out__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  justify-content: space-around;
}
.comment-out {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 0;
}

.comment-out__title {
  padding: 1.2rem;
}

.comment-out__txt {
  margin: 0.5rem 2rem;
  padding: 1rem;
  border-radius: 10px;
  outline: none;
}

.comment-out__btn {
  padding: 0.5rem 4rem;
  border-radius: 10px;
  border: none;
  background-color: #555;
  color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.1ms linear;
  margin: 1rem 0;
}

.comment-out__btn:hover {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}
</style>
