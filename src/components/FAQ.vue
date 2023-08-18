<template>
  <div class="faq">
    <div class="faq__quiz" @click="toggleOpen()">
      <div class="faq__question">{{ faq.question }}</div>
      <div class="faq__icon">
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/material/24/chevron--v1.png"
          alt="chevron--v1"
        />
      </div>
    </div>
    <div class="faq__answer" v-show="faq.isOpen">
      <p>{{ faq.answer }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FAQ",
  props: ["faq", "index", "faq.isOpen"],
  methods: {
    toggleOpen() {
      this.faq.isOpen = !this.faq.isOpen;
      return this.faq;
    },
  },
};
</script>

<style>
.faq__quiz {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 750px;
  margin: 15px 5.5rem;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  cursor: pointer;
  font-size: 20px;
}

.faq__question {
  color: #3c3c3c;
  font-size: 20px;
  transition: all 0.4s linear;
}

.faq__answer {
  width: 100%;
  max-width: 750px;
  font-size: 18px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  background-color: #777;
  color: #fff;
  border-radius: 8px;
  transition: all 0.2s ease-in;
  padding: 15px;
  margin: 15px;
  font-family: "Vazir-Thin";
  font-weight: 200;
}

/* animations */
.faq__quiz:hover {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  transform: scaleX(1.02);
}
</style>
