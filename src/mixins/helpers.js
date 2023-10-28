export default {
  data() {
    return {
      appName: "V-Movies",
    };
  },
  methods: {
    /*//////////////////////////////////////////////
                GoTo => for navigation
                 @param routeName {String}
                 @param params {Object}
                ////////////////////////////////////////////*/
    goTo(routeName, params) {
      this.$router.push({
        name: routeName,
        params,
      });
    },
  },
};
