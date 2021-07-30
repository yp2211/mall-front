/* eslint-disable promise/param-names */
import {
    AUTH_REQUEST,
    AUTH_ERROR,
    AUTH_SUCCESS,
    AUTH_LOGOUT
  } from "../actions/auth";
import { USER_REQUEST } from "../actions/user";
// import apiCall from "../../utils/api";
import { postSsoLogin } from "../../api/sso";

const USER_TOKEN = "user-token";
const auth = {
  state: {
    token: localStorage.getItem(USER_TOKEN) || "",
    status: "",
    hasLoadedOnce: false
  },
  mutations: {
    [AUTH_REQUEST]: (state) => {
      state.status = "loading";
    },
    [AUTH_SUCCESS]: (state, resp) => {
      state.status = "success";
      const authToken = resp.data.data.tokenHead + resp.data.data.token;
      // set auth to Vuex
      state.token = authToken;
      // save token into localStorage
      localStorage.setItem(USER_TOKEN, authToken);
      state.hasLoadedOnce = true;
    },
    [AUTH_ERROR]: state => {
      state.status = "error";
      localStorage.removeItem(USER_TOKEN);
      state.token = "";
      state.hasLoadedOnce = true;      
    },
    [AUTH_LOGOUT]: state => {
      localStorage.removeItem(USER_TOKEN);
      state.token = "";
    }
  },
  actions: {
    [AUTH_REQUEST]: ({ commit, dispatch }, user) => {
      return new Promise((resolve, reject) => {
        commit(AUTH_REQUEST);
        postSsoLogin( user.username, user.password ).then(resp => {
        // apiCall({ url: "auth", data: user, method: "POST" })
        //   .then(resp => {
          // Here set the header of your ajax library to the token value.
          // example with axios
          // axios.defaults.headers.common['Authorization'] = userToken;
          commit(AUTH_SUCCESS, resp);
          dispatch(USER_REQUEST, user);
          resolve(resp);
        })
        .catch(err => {
          commit(AUTH_ERROR, err);
          reject(err);
        });
      });
    },
    [AUTH_LOGOUT]: ({ commit }) => {
      return new Promise(resolve => {
        commit(AUTH_LOGOUT);
        resolve();
      });
    }
  }
}

// function setAuthToken(o) {
//   // set auth to Vuex
//   auth.state.token = o;
//   // save localStorage
//   localStorage.setItem(USER_TOKEN, o);
// }

// function clearAuthToken() {
//   localStorage.removeItem(USER_TOKEN);
//   auth.state.token = "";
// }
  // const state = {
  //   token: localStorage.getItem(USER_TOKEN) || "",
  //   status: "",
  //   hasLoadedOnce: false
  // };
  
  // const getters = {
  //   token: state => state.token,
  //   isAuthenticated: state => !!state.token,
  //   authStatus: state => state.status
  // };
  
  // const actions = {
  //   [AUTH_REQUEST]: ({ commit, dispatch }, user) => {
  //     return new Promise((resolve, reject) => {
  //       commit(AUTH_REQUEST);
  //       postSsoLogin( user.username, user.password ).then(resp => {
  //       // apiCall({ url: "auth", data: user, method: "POST" })
  //       //   .then(resp => {
  //         console.log(resp)
  //         const userToken = resp.data.data.tokenHead+resp.data.data.token;
  //         localStorage.setItem(USER_TOKEN, userToken);
  //         // Here set the header of your ajax library to the token value.
  //         // example with axios
  //         axios.defaults.headers.common['Authorization'] = userToken;
  //         commit(AUTH_SUCCESS, resp);
  //         dispatch(USER_REQUEST, user);
  //         resolve(resp);
  //       })
  //       .catch(err => {
  //         commit(AUTH_ERROR, err);
  //         localStorage.removeItem(USER_TOKEN);
  //         reject(err);
  //       });
  //     });
  //   },
  //   [AUTH_LOGOUT]: ({ commit }) => {
  //     return new Promise(resolve => {
  //       commit(AUTH_LOGOUT);
  //       // localStorage.removeItem(USER_TOKEN);
  //       resolve();
  //     });
  //   }
  // };
  
  // const mutations = {
  //   [AUTH_REQUEST]: (state) => {
  //     state.status = "loading";
  //   },
  //   [AUTH_SUCCESS]: (state, resp) => {
  //     state.status = "success";
  //     state.token = resp.token;
  //     state.hasLoadedOnce = true;
  //   },
  //   [AUTH_ERROR]: state => {
  //     state.status = "error";
  //     state.hasLoadedOnce = true;
  //   },
  //   [AUTH_LOGOUT]: state => {
  //     state.token = "";
  //   }
  // };
  
  export default auth;
  //  {
  //   // namespaced: true,
  //   state,
  //   getters,
  //   actions,
  //   mutations
  // };
  