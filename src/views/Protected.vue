<template>
  <div>
    <h1>protected {{ username }}</h1>
    <button @click="logout">LogOut</button>
    <router-link :to="{ name: 'invoices' }">
      <button>Invoises</button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: window.user,
    };
  },
  methods: {
    logout() {
      window.user = null;
      this.$router.push({ name: "Home" });
    },
  },
};
</script>