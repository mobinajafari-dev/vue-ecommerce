<template>
  <input
    class="otp"
    maxlength="6"
    placeholder="******"
    v-model="otpCode"
    required
    autofocus
    @keydown="otpValidation"
  />
  <p>{{ helperText }}</p>
</template>

<script>
export default {
  name: "otp",
  validation: "",
  helperText: "",
  data() {
    return {};
  },
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
