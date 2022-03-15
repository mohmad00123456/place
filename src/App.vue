<template>
  <navigatio />
  <side-bar />
  <div class="container">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import Navigatio from "./components/Navigatio.vue";
import SideBar from "./components/SideBar.vue";
export default {
  components: {
    Navigatio,
    SideBar,
  },
};
</script>

<style scoped>
.fade-enter-active {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.fade-leave-active {
  animation: fadeOut 0.3s ease-out;
}

@keyframes fadeOut {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-400px);
  }
}
</style>
