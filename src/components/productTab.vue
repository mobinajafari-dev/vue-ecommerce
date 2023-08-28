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
      <div>kfjwofijoe</div>
    </div>
    <div v-else-if="activeTab === 'tab2'" class="tab__content">
      <div class="comment__wrapper">
        <CommentSection
          v-for="(comment, i) in comments"
          :key="i"
          :index="i"
          :comment="comment"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CommentSection from "@/components/CommentSection.vue";
export default {
  name: "productTab",
  components: { CommentSection },
  data() {
    return {
      activeTab: "tab2",
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

/* comment */

.comment__wrapper {
  display: block;
  margin: 1rem 5;
}

/* animation */

button.active {
  border-bottom: 2px solid #555;
}
</style>
