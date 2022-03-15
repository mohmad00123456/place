<template>
  <div>
    <h2>Invoicessss</h2>
  </div>
</template>

<script>
import { onBeforeRouteLeave } from "vue-router";
export default {
  setup() {
    onBeforeRouteLeave(() => {
      const ans = window.confirm("are you sure");
      if (!ans) return false;
    });
  },
};
</script>