// import Vue from 'vue'
import { createStore, createLogger } from 'vuex'
import user from "./modules/user";
import auth from "./modules/auth";
import getters from './getters'

// Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

// Create a new store instance.
const store = createStore({
  modules: {
    user,
    auth
  },
  getters,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

export default store;
