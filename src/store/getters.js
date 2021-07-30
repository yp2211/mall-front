const getters = {
    // token: state => () => state.auth.token,
    // isAuthenticated: state => () => !!state.auth.token,
    // authStatus: state => () => state.auth.status,
    // getProfile: state => () => state.user.profile,
    // isProfileLoaded: state => () => !!state.user.profile.username
    token: state => state.auth.token,
    isAuthenticated: state => !!state.auth.token,
    authStatus: state => state.auth.status,
    getProfile: state => state.user.profile,
    isProfileLoaded: state => !!state.user.profile.username
};

export default getters;
