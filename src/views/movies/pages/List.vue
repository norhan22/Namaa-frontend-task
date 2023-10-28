<template>
  <div>
    <div class="flex-between">
      <h3>Movies List</h3>
      <button class="mb-0" @click="goTo('Create_Movie')">Add Movie</button>
    </div>
    <div class="">
      <!--  ////////////////////////////////
     // Actors Table
      /////////////////////////-->
      <table border="0" cellpadding="10" cellspacing="2" width="100%">
        <thead>
          <!--  ///////////// Header ///////////// -->
          <tr>
            <th>title</th>
            <th>year</th>
            <th>Number of Actors</th>

            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(movie, i) in shownData" :key="i">
            <td>{{ movie.title }}</td>
            <td>{{ movie.year }}</td>
            <td>{{ movie.actors.length }}</td>
            <td>
              <div class="flex-between">
                <button
                  class="btn-sm"
                  type="button"
                  @click="goTo('Show_Movie', { id: i + 1 })"
                >
                  Show
                </button>
                <button
                  class="btn-sm"
                  type="button"
                  @click="goTo('Edit_Movie', { id: i + 1 })"
                >
                  Edit
                </button>
                <button class="btn-sm" type="reset" @click="removeMovie(i)">
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <!--      <TransitionGroup name="slide-fade" tag="ul">-->
      <!--        <li v-for="(movie, i) in movies" :key="i" class="card">-->
      <!--          {{ movie }}-->
      <!--        </li>-->
      <!--      </TransitionGroup>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "MoviesList",
  data() {
    return {
      shownData: [],
    };
  },
  created() {
    this.shownData = JSON.parse(JSON.stringify(this.movies));
  },
  methods: {
    removeMovie(i) {
      this.removeRow(this.movies, i, "storeMovie");
    },
  },
};
</script>
