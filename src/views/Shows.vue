<template>
  <section>
    <h1>{{ Slugfind.name }}</h1>
    <img :src="`/images/${Slugfind.image}`" alt="{{Slug.name}}" />
    <p>{{ Slugfind.description }}</p>
  </section>
</template>

<script>
import sourceData from "@/data.json";
export default {
  computed: {
    showId() {
      return this.$route.params.id;
    },
    showSlug() {
      return this.$route.params.slu;
    },
    Idfind() {
      return sourceData.destinations.find((i) => i.id == this.showId);
    },
    Slugfind() {
      return this.Idfind.experiences.find((i) => i.slug == this.showSlug);
    },
  },
};
</script>
