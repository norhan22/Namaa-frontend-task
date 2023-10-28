<template>
  <header>
    <div class="header-brand">
      <img
        alt="V-Movies logo"
        class="logo"
        height="30"
        src="@/assets/logo.png"
        width="30"
      />
      <p>{{ appName }}</p>
    </div>
    <nav>
      <router-link to="/">Home</router-link>
      |
      <router-link :to="{ name: 'List_Movies' }">Movies</router-link>
    </nav>
  </header>
  <main>
    <transition>
      <router-view />
    </transition>
  </main>
  <footer>
    <p>Copyright © {{ new Date().getFullYear() }} {{ appName }}</p>
  </footer>
</template>
<script>
export default {
  name: "MainLayout",
  created() {
    this.$router.beforeEach((to) => {
      this.$nextTick(() => {
        document.title = to.meta.title + " - " + this.appName;
      });
    });
  },
};
</script>

<style lang="scss" scoped></style>
