<template>
  <div>
    <section v-if="destination" class="destination">
      <go-back />
      <h2>{{ destination.name }}</h2>
      <div class="destination-details">
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
        <p>{{ destination.description }}</p>
      </div>
    </section>
    <section class="experiences">
      <h2>top experiences {{ destination.name }}</h2>
      <div class="cards">
        <experiencess
          v-for="experience in destination.experiences"
          :key="experience.slug"
          :experiencee="experience"
          :iddd="destination.id"
          :slugout="destination.slug"
        />
      </div>
      <router-view v-slot="{ Component }">
        <transition mode="in-out" name="fadee">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </section>
  </div>
</template>

<script>
import sourceData from "@/data.json";
import Experiencess from "../components/Experiencess.vue";
import GoBack from "../components/GoBack.vue";
export default {
  components: { Experiencess, GoBack },
  props: {
    id: { type: String, required: true },
  },
  computed: {
    // destinationId() {
    //   return parseInt(this.$route.params.id);
    // },
    destination() {
      return sourceData.destinations.find((i) => i.id == parseInt(this.id));
    },
  },
};
</script>

<style scoped>
.fadee-enter-from {
  opacity: 0;
  transform: scale(0.4);
}
.fadee-enter-to {
  opacity: 1;
  transform: scale(1);
}
.fadee-enter-active {
  transition: all 1s ease;
}
.fadee-leave-from {
  opacity: 1;
  transform: scale(1);
}
.fadee-leave-to {
  opacity: 0;
  transform: scale(0.4);
}
.fadee-leave-active {
  transition: all 1s ease;
}
.fadee-move {
  transition: all 1s ease;
}
</style>
