<template>
  <div>
    <h3>Add New Movie</h3>
    <movieForm />
  </div>
</template>

<script>
import movieForm from "@/views/movies/components/MovieForm.vue";

export default {
  name: "CreateMovie",
  components: { movieForm },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>
