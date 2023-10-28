import { createStore } from "vuex";

const getData = (itemName) =>
  JSON.parse(window.localStorage.getItem(itemName) ?? "[]");
const setData = (itemName, data) =>
  window.localStorage.setItem(itemName, JSON.stringify(data));
export default createStore({
  state: {
    movies: getData("movies"),
    actors: getData("actors"),
  },
  getters: {
    movies(state) {
      return state.movies;
    },
    actors(state) {
      return state.actors;
    },
  },
  mutations: {
    storeMovies(state, data) {
      state.movies = data;
      setData("movies", data);
    },
    storeActors(state, data) {
      state.actors = data;
      setData("actors", data);
    },
  },
  actions: {},
  modules: {},
});
