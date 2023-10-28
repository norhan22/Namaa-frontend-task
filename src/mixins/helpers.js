export default {
  data() {
    return {
      appName: "V-Movies",
    };
  },
  computed: {
    movies() {
      return this.$store.getters.movies;
    },
  },
  methods: {
    /*//////////////////////////////////////////////
           * GoTo => for navigation
             @param routeName {String}
             @param params {Object}
    ////////////////////////////////////////////*/
    goTo(routeName, params) {
      this.$router.push({
        name: routeName,
        params,
      });
    },
    /* //////////////////////////////////////
     * Add / Update / Remove Data
    //////////////////////////////////////*/
    addRow(arr, newData, commitName) {
      arr.unshift({ id: arr.length + 1, ...newData });
      this.$store.commit(commitName, arr);
    },
    updateRow({ arr, itemIndex, newData, commitName }) {
      arr[itemIndex] = newData;
      this.$store.commit(commitName, arr);
    },

    removeRow(arr, itemIndex, commitName) {
      if (confirm("Are you sure to take this action?")) {
        arr.splice(itemIndex, 1);
        this.$store.commit(commitName, arr);
      }
    },
  },
};
