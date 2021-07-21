import { createStore } from 'vuex'
import user from "./modules/user";
import auth from "./modules/auth";

const debug = process.env.NODE_ENV !== "production";

// Create a new store instance.
const store = createStore({
  modules: {
    user,
    auth
  },
  strict: debug
})

export default store;
