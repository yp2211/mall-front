import { USER_REQUEST, USER_ERROR, USER_SUCCESS } from "../actions/user";
// import apiCall from "../../utils/api";
import { AUTH_LOGOUT } from "../actions/auth";
import { postSsoInfo } from "../../api/sso";

const USER_PROFILE = "user-profile";
const user = {
  state: {
    status: "", 
    profile: JSON.parse(localStorage.getItem(USER_PROFILE)) || {},
  },
  actions: {
    [USER_REQUEST]: ({ commit, dispatch }, user) => {
      commit(USER_REQUEST);
      postSsoInfo(user.username)
      // apiCall({ url: "user/me" })
      .then(resp => {
        commit(USER_SUCCESS, resp);
      })
      .catch((e) => {
        commit(USER_ERROR);
        // if resp is unauthorized, logout, to
        dispatch(AUTH_LOGOUT);
      });
    }
  },
  mutations: {
    [USER_REQUEST]: state => {
      state.status = "loading";
    },
    [USER_SUCCESS]: (state, resp) => {
      state.status = "success";
      state.profile = resp.data.data;
      localStorage.setItem(USER_PROFILE, JSON.stringify(resp.data.data));
      // Vue.set(state, "profile", resp);
    },
    [USER_ERROR]: state => {
      state.status = "error";
    },
    [AUTH_LOGOUT]: state => {
      state.profile = {};
      localStorage.removeItem(USER_PROFILE);
    }
  }
}

// const state = { 
//   status: "", 
//   profile: JSON.parse(localStorage.getItem(USER_PROFILE)) || {},
// };

// const getters = {
//   getProfile: state => state.profile,
//   isProfileLoaded: state => !!state.profile.username
// };

// const actions = {
//   [USER_REQUEST]: ({ commit, dispatch }, user) => {
//     commit(USER_REQUEST);
//     postSsoInfo(user.username)
//     // apiCall({ url: "user/me" })
//     .then(resp => {
//       commit(USER_SUCCESS, resp);
//     })
//     .catch((e) => {
//       commit(USER_ERROR);
//       // if resp is unauthorized, logout, to
//       dispatch(AUTH_LOGOUT);
//     });
//   }
// };

// const mutations = {
//   [USER_REQUEST]: state => {
//     state.status = "loading";
//   },
//   [USER_SUCCESS]: (state, resp) => {
//     state.status = "success";
//     state.profile = resp.data;
//     localStorage.setItem(USER_PROFILE, JSON.stringify(resp.data));
//     // Vue.set(state, "profile", resp);
//   },
//   [USER_ERROR]: state => {
//     state.status = "error";
//   },
//   [AUTH_LOGOUT]: state => {
//     state.profile = {};
//   }
// };

export default user;
//  {
//   // namespaced: true,
//   state,
//   getters,
//   actions,
//   mutations
// };
