export const state = () => ({
  me: null,
});

// 동기작업을 위해 사용한다
export const mutations = {
  setMe(state, payload) {
    state.me =payload;
  },
};

// 비동기 작업, 고차원적 작업을 위해 사용한다
export const actions = {
  signUp({commit, state}, payload) {
    //회원가입 요청
    commit('setMe', payload);
  },
  logIn({commit}, payload) {
    commit('setMe', payload);
  },
  logOut({commit}, payload) {
    commit('setMe', payload);
  },
};