<template>
  <div>
    <h3>Add New Movie</h3>
    <movieForm @submit="submit" />
  </div>
</template>

<script>
import movieForm from "@/views/movies/components/MovieForm.vue";

export default {
  name: "CreateMovie",
  components: { movieForm },
  methods: {
    submit(newData) {
      this.addRow(this.movies, newData, "storeMovie");
      this.goTo("List_Movies");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>
