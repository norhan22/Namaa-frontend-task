<template>
  <div>
    <!--  ////////////////////////////////
    //  Title
    /////////////////////////-->
    <div class="flex-between">
      <h3>Movies List</h3>
      <button class="mb-0" @click="goTo('Create_Movie')">Add Movie</button>
    </div>
    <!--  ////////////////////////////////
        //  Filter
        /////////////////////////-->
    <div class="filter">
      <h4>Filter By</h4>
      <form class="flex" @submit.prevent="searchByFilters">
        <div class="form-row">
          <input
            v-model="search.title"
            name="title"
            placeholder="Title"
            type="text"
          />
        </div>

        <!--   Year   -->
        <div class="form-row">
          <input
            v-model="search.year"
            name="year"
            placeholder="Year"
            step="1"
            type="number"
          />
        </div>
        <!--   Actor Counts   -->
        <div class="form-row">
          <input
            v-model="search.actorsCount"
            name="actorsCount"
            placeholder="Number of Actors"
            type="number"
          />
        </div>
        <div class="flex">
          <button
            :disabled="!Object.values(search).some(Boolean)"
            class="btn-sm"
            type="submit"
          >
            search
          </button>
          <button class="btn-sm" type="reset" @click="resetSearch">
            clear
          </button>
        </div>
      </form>
    </div>
    <div class="">
      <!--  ////////////////////////////////
     //  Table
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
              <div class="flex-center">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "MoviesList",

  data() {
    return {
      shownData: [],
      search: {
        title: "",
        year: "",
        actorsCount: null,
      },
    };
  },
  created() {
    this.shownData = JSON.parse(JSON.stringify(this.movies));
  },
  methods: {
    removeMovie(i) {
      this.removeRow(this.movies, i, "storeMovie");
    },
    searchByFilters() {
      const { title, year, actorsCount } = this.search;
      const checkTitle = (v) =>
        v.title.toLowerCase().includes(title.toLowerCase());
      const checkActorCount = (v) => v.actors.length === actorsCount;
      const checkYear = (v) => v.year === year;

      if (title && actorsCount && year) {
        alert("all");
        this.shownData = this.movies.filter(
          (v) => checkTitle(v) && checkActorCount(v) && checkYear(v)
        );
      } else if (title && year) {
        this.shownData = this.movies.filter(
          (v) => checkTitle(v) && checkYear(v)
        );
      } else if (title && actorsCount) {
        this.shownData = this.movies.filter(
          (v) => checkTitle(v) && checkActorCount(v)
        );
      } else if (year && actorsCount) {
        this.shownData = this.movies.filter(
          (v) => checkYear(v) && checkActorCount(v)
        );
      } else {
        alert("one");
        this.shownData = this.movies.filter(
          (v) => checkTitle(v) || checkActorCount(v) || checkYear(v)
        );
      }
    },

    resetSearch() {
      this.search = {
        title: "",
        year: "",
        actorsCount: null,
      };
      this.shownData = Array.from(this.movies);
    },
  },
};
</script>
