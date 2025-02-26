<template>
  <div ref="lottieContainer" style="width: 100px; height: 100px"></div>
</template>

<script>
import lottie from "lottie-web";

export default {
  name: "LottieIcon",
  props: {
    animationPath: {
      type: String,
      required: true,
    },
    loop: {
      type: Boolean,
      default: true,
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    lottie.loadAnimation({
      container: this.$refs.lottieContainer,
      renderer: "svg",
      loop: this.loop,
      autoplay: this.autoplay,
      path: this.animationPath, // Path to the animation JSON file
    });
  },
};
</script>

<style scoped>
/* Optionally, add styles here */
</style>
