<template>
  <div class="home">
    <div class="container">
      <img
        alt="V-Movies logo"
        class="logo"
        src="@/assets/logo.png"
        width="130"
      />
      <h2>Welcome to {{ appName }} App</h2>
      <nav>
        <button @click="goTo('List_Movies')">Movies</button>
      </nav>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>
