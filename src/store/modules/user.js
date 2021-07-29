import { USER_REQUEST, USER_ERROR, USER_SUCCESS } from "../actions/user";
// import apiCall from "../../utils/api";
import { AUTH_LOGOUT } from "../actions/auth";
import { postSsoInfo } from "../../api/sso";

const user = {
  state: {
    status: "", 
    profile: JSON.parse(localStorage.getItem("user-profile")) || {},
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
      console.log(resp.data)
      localStorage.setItem("user-profile", JSON.stringify(state.profile));
      // Vue.set(state, "profile", resp);
    },
    [USER_ERROR]: state => {
      state.status = "error";
    },
    [AUTH_LOGOUT]: state => {
      state.profile = {};
      localStorage.removeItem("user-profile");
    }
  }
}
// const state = { 
//   status: "", 
//   profile: JSON.parse(localStorage.getItem("user-profile")) || {},
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
//     localStorage.setItem("user-profile", JSON.stringify(resp.data));
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
