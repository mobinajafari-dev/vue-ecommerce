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
      <div></div>
    </div>
    <div v-else-if="activeTab === 'tab2'" class="tab__content">
      <div class="comment">
        <div class="comment-img">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/user-male-circle--v1.png"
            alt="user-male-circle--v1"
          />
        </div>
        <div class="comments-content">
          <h4>username</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, saepe.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productTab",
  data() {
    return {
      activeTab: "tab1",
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

/* animation */

button.active {
  border-bottom: 2px solid #555;
}
</style>
