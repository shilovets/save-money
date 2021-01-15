import firebase from "firebase/app";

export default {
  state: {
    categories: []
  },
  getters: {
    categories: s => s.categories
  },
  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },
    clearCategories(state) {
      state.categories = [];
    }
  },
  actions: {
    async fetchCategories({ dispatch, commit }) {
      try {
        const uid = await dispatch("getUid");
        const categories =
          (
            await firebase
              .database()
              .ref(`/users/${uid}/categories`)
              .once("value")
          ).val() || {};

        return Object.keys(categories).map(key => ({
          ...categories[key],
          id: key
        }));
        // commit("setCategories", mappedCategories);
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    async createCategory({ dispatch, commit }, { title, limit }) {
      try {
        const uid = await dispatch("getUid");
        const category = await firebase
          .database()
          .ref(`/users/${uid}/categories`)
          .push({
            title,
            limit
          });
        return { title, limit, id: category.key };
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    async updateCategory({ dispatch, commit }, { id, title, limit }) {
      try {
        const uid = await dispatch("getUid");
        await firebase
          .database()
          .ref(`/users/${uid}/categories`)
          .child(id)
          .update({
            title,
            limit
          });
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    }
  }
};
