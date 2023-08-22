<template>
  <div class="double-btn countdown" v-if="countdown >= 0">
    <p class="user__alert">{{ countdown }}</p>
    <p class="user__alert">ثانیه تا دریافت کد بعدی</p>
  </div>
</template>

<script>
export default {
  name: "countdown",
  data() {
    return {
      countdown: 120,
    };
  },
  methods: {
    startCountdown() {
      setInterval(() => {
        this.countdown--;
        if (this.countdown === 0) {
          clearInterval(); // Stop the countdown when it reaches zero
        }
      }, 1000); // Update the countdown every second (1000 milliseconds)
    },
  },
  mounted() {
    this.startCountdown();
  },
};
</script>

<style>
.countdown {
  margin: 0 auto 1rem;
}
</style>
