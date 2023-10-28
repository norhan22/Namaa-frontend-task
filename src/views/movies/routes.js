////////////////////////////////////
// Module Routes
////////////////////////////////////
const pagesPath = "./pages";
export default {
  path: "/movies",
  children: [
    {
      path: "",
      name: "List_Movies",
      component: () =>
        import(/* webpackChunkName: "about" */ pagesPath + "/List.vue"),
      meta: {
        title: "Movies",
      },
    },
    {
      path: "/create",
      name: "Create_Movie",
      component: () =>
        import(/* webpackChunkName: "about" */ pagesPath + "/Create.vue"),
      meta: {
        title: "Movies",
      },
    },
    {
      path: "/edit/:id",
      name: "Edit_Movie",
      component: () =>
        import(/* webpackChunkName: "about" */ pagesPath + "/Edit.vue"),
      meta: {
        title: "Movies",
      },
    },
  ],
};
