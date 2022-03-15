<template>
  <div class="card">
    <router-link
      :to="{
        name: 'Show.slugg',
        params: { id: iddd, slug: slugout, slu: experiencee.slug },
      }"
    >
      <img :src="`../images/${experiencee.image}`" :alt="experiencee.name" />
    </router-link>

    <span class="card-text">
      {{ experiencee.name }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    experiencee: { type: Object, required: true },
    iddd: { type: String, required: true },
    slugout: { type: String, required: true },
  },
};
</script>
