import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchResult: [],
  },
  getters: {
    SEARCH_RESULT: (state) => state.searchResult,
  },
  mutations: {
    setSearchResult: (state, payload) => {
      state.searchResult = payload;
    },
  },
  actions: {
    loadSearchResults: ({ commit }, queries) => {
      axios
        .get(`${process.env.VUE_APP_API_URL}/search`, {
          params: { q: queries },
        })
        .then((res) => {
          commit("setSearchResult", res.data.results);
        })
        .catch((e) => {
          alert(e);
        });
    },
  },
  modules: {},
});
