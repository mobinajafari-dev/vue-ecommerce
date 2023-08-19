<template>
  <input
    class="otp"
    maxlength="6"
    placeholder="******"
    v-model="code"
    required
  />
  <p class="otp__alert">{{ alert[index] }}</p>
</template>

<script>
export default {
  name: "otp",
  data() {
    return {
      code: "",
      index: 0,
      alert: [
        "لطفا کد ارسال شده را وارد نمایید",
        "کد ارسال شده را به صورت عدد وارد نمایید",
        "لطفا عدد ارسال شده را به صورت کامل وارد نمایید",
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
$char-w: 1ch;
$gap: 0.5 * $char-w;
$n-char: 6;
$in-w: $n-char * ($char-w + $gap);

.otp {
  display: block;
  margin: 1rem auto;
  border: none;
  padding: 0;
  width: $in-w;
  direction: ltr;
  background: repeating-linear-gradient(
      90deg,
      dimgrey 0,
      dimgrey $char-w,
      transparent 0,
      transparent $char-w + $gap
    )
    0 100% / #{$in-w - $gap} 2px no-repeat;
  font: 5ch droid sans mono, consolas, monospace;
  letter-spacing: $gap;

  &:focus {
    outline: none;
    color: #555;
  }
}
</style>
