<template>
  <div>
    <div class="flex-between">
      <h3>{{ targetMovie.title }}</h3>
      <button
        class="mb-0"
        @click="goTo('Edit_Movie', { id: this.itemIndex + 1 })"
      >
        Edit
      </button>
    </div>
    <div class="">
      <ul></ul>
    </div>
    <table border="0" cellpadding="10" cellspacing="2" width="100%">
      <thead>
        <!--  ///////////// Header ///////////// -->
        <tr>
          <th>Name</th>
          <th>age</th>
          <th>join date</th>
          <th>actor’s role</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="targetMovie.actors.length">
          <tr v-for="(actor,i)in targetMovie.actors" :key="i">
            <!--            <td>{{ actor.name }}</td>-->
            <!--            <td>{{ actor.age }}</td>-->
            <!--            <td>{{ actor.joinDate }}</td>-->
            <!--            <td>{{ actor.actorRole }}</td>-->
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "EditMovie",
  components: {},
  computed: {
    itemIndex() {
      return Number(this.$route.params.id) - 1;
    },
    targetMovie() {
      return this.movies[this.itemIndex];
    },
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>
