<template>
  <div class="main-box">
    <div class="image-one">
      <imagess-transition />
    </div>
  </div>
</template>

<script>
import imagessTransition from "../components/imagessTransition.vue";
export default {
  components: { imagessTransition },
};
</script>
<style scoped>
.main-box {
  position: relative;
  width: 100%;
  height: 500px;
  padding: 30px;
  margin-top: 200px;
}
.main-box .image-one {
  position: absolute;
  left: 250px;
  top: 0;
}
</style>