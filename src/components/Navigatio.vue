<template>
  <div id="nav">
    <div class="btn-one">
      <label for="check">
        <i class="fa fa-bars"></i>
      </label>
    </div>
    <router-link to="/" id="logo">Vue school</router-link>
    <router-link
      v-for="destination in destinations"
      :key="destination.id"
      :to="{
        name: 'destination.show',
        params: { id: destination.id, slug: destination.slug },
      }"
    >
      {{ destination.name }}
    </router-link>
    <router-link to="/myImages">MyImages</router-link>
    <router-link :to="{ name: 'protected' }">MetaFields</router-link>
  </div>
</template>

<script >
import sourceData from "@/data.json";
export default {
  data() {
    return {
      destinations: sourceData.destinations,
    };
  },
};
</script>

<style lang="css">
#nav .vue-school {
  color: red;
  border-bottom: 3px solid red;
}
.btn-one i {
  color: red;
  font-size: 30px;
  cursor: pointer;
}
</style>


