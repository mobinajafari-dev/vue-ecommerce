<template>
  <input
    class="otp"
    placeholder="******"
    v-model="otp"
    type="text"
    required
    autofocus
    @input="otpValidation"
    @keydown="$emit('update-otp', otp)"
  />
</template>

<script>
export default {
  name: "otp",
  data() {
    return {
      otp: "",
    };
  },
  methods: {
    otpValidation() {
      this.otp = this.otp.replace(/\D/g, "");
      if (this.otp.length > 6) {
        this.otp = this.otp.slice(0, 6);
      }
    },
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
