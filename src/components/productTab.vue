<template>
  <div class="tab__wrapper">
    <div class="tab__btns">
      <button
        @click="activeTab = 'tab1'"
        :class="{ active: activeTab === 'tab1' }"
        class="tab__btn"
      >
        مشخصات محصول
      </button>
      <button
        @click="activeTab = 'tab2'"
        :class="{ active: activeTab === 'tab2' }"
        class="tab__btn"
      >
        نظرات
      </button>
    </div>

    <div v-if="activeTab === 'tab1'" class="tab__content">
      <div class="description">
        <p>
          رنگ های موجود :
          <span class="description__info">صورتی ، مشکی ، سفید</span>
        </p>
        <p>سایز ها: <span class="description__info">فری سایز</span></p>
        <p>جنس :<span class="description__info">نخی</span></p>
        <p>قد :<span class="description__info">100 سانتی متر</span></p>
        <p>موجودی : <span class="description__info">2 عدد</span></p>
        <p>قیمت کالا: <span class="description__info">100.000 تومان</span></p>
      </div>
    </div>

    <div v-else-if="activeTab === 'tab2'" class="tab__content">
      <div class="comment__wrapper">
        <CommentSection
          v-for="(comment, i) in comments"
          :key="i"
          :index="i"
          :comment="comment"
        />
        <CommentOut />
      </div>
    </div>
  </div>
</template>

<script>
import CommentSection from "@/components/CommentSection.vue";
import CommentOut from "@/components/CommentOut.vue";
export default {
  name: "productTab",
  components: {
    CommentSection,
    CommentOut,
  },
  data() {
    return {
      activeTab: "tab1",
      comments: [
        {
          user: `لورم اپیسوم`,
          text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
        },
        {
          user: `لورم اپیسوم`,
          text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
        },
        {
          user: `لورم اپیسوم`,
          text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
        },
      ],
    };
  },
};
</script>

<style>
.tab__wrapper {
  margin: 0 5rem;
}

/* tab button */
.tab__btns {
  display: flex;
  justify-items: space-between;
}

.tab__btn {
  border: none;
  outline: none;
  padding: 1rem;
  margin-left: 1rem;
  background: #fff;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
}

/* tab content */

.tab__content {
  padding: 1rem;
  margin: 1rem;
}

/* description */
.description {
  max-width: 920px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 20px;
  line-height: 3rem;
}

.description__info {
  padding-right: 10px;
}

/* comment */

.comment__wrapper {
  display: block;
  margin: 1rem 5;
}

/* animation */

button.active {
  border-bottom: 2px solid #555;
}
/* responsive */
@media only screen and (max-width: 576px) {
  .tab__wrapper {
    margin: 0 0.2rem;
  }
}
</style>
