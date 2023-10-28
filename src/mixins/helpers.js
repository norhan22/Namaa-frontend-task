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
      this.$store.dispatch("addRow", { arr, newData, commitName });
    },
    updateRow({ arr, itemIndex, newData, commitName }) {
      this.$store.dispatch("updateRow", {
        arr,
        itemIndex,
        newData,
        commitName,
      });
    },

    removeRow(arr, itemIndex, commitName) {
      if (confirm("Are you sure to take this action?")) {
        this.$store.dispatch("removeRow", { arr, itemIndex, commitName });
      }
    },
  },
};
