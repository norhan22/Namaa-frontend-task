<template>
  <div>
    <div class="flex-between">
      <h3>Movies List</h3>
      <button class="mb-0" @click="goTo('Create_Movie')">Add Movie</button>
    </div>
    <div class="">
      <TransitionGroup name="slide-fade" tag="ul">
        <li v-for="(movie, i) in movies" :key="i" class="card">
          {{ movie }}
        </li>
      </TransitionGroup>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoviesList",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>
