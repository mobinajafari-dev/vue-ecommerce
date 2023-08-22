<template>
  <p :time="timerCount">{{ timerCount }}</p>
</template>

<script>
export default {
  name: "countdown",
  props: ["timerCount"],
  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        }
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
  },
};
</script>

<style></style>
