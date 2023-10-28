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
    storeMovie(state, data) {
      state.movies = data;
      setData("movies", data);
    },
    storeActors(state, data) {
      state.actors = data;
      setData("actors", data);
    },
  },
  actions: {
    /* //////////////////////////////////////////////
    * Users Actions: Add / Update / Remove Data
   //////////////////////////////////////////////*/
    addRow({ commit }, { arr, newData, commitName }) {
      arr.unshift({ id: arr.length + 1, ...newData });
      commit(commitName, arr);
    },
    updateRow({ commit }, { arr, itemIndex, newData, commitName }) {
      arr[itemIndex] = newData;
      commit(commitName, arr);
    },

    removeRow({ commit }, { arr, itemIndex, commitName }) {
      arr.splice(itemIndex, 1);
      commit(commitName, arr);
    },
  },
  modules: {},
});
