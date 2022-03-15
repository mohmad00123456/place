<template>
  <div class="home">
    <h3 :class="{ hh: tt }" @click="tt = !tt">all</h3>
    <div class="destinations">
      <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="{
          name: 'destination.show',
          params: { id: destination.id, slug: destination.slug },
        }"
      >
        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
      </router-link>
    </div>
  </div>
</template>

<script>
import sourceData from "@/data.json";
export default {
  data() {
    return {
      destinations: sourceData.destinations,
      tt: true,
    };
  },
};
</script>

<style scoped>
.home .hh {
  color: red;
}
</style>
