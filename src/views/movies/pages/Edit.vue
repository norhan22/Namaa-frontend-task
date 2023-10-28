<template>
  <div>
    <h3>Edit Movie</h3>
    <movieForm :movie="targetMovie" @submit="submit" />
  </div>
</template>

<script>
import movieForm from "@/views/movies/components/MovieForm.vue";

export default {
  name: "EditMovie",
  components: { movieForm },
  computed: {
    itemIndex() {
      return Number(this.$route.params.id) - 1;
    },
    targetMovie() {
      return this.movies[this.itemIndex];
    },
  },
  methods: {
    submit(newData) {
      this.updateRow({
        arr: this.movies,
        itemIndex: this.itemIndex,
        newData,
        commitName: "storeMovie",
      });
      this.goTo("List_Movies");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>
