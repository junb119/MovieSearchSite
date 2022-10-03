// 영화 검색 관련 데이터 취급

export default {
  // namespaced : store에서 module화해서 사용한다는 것을 명시화
  namespaced: true,

  // state : 취급해야하는 각각의 데이터
  state: () => ({
    movies : []
  }),

  // getters : 계산된 데이터 생성 (=computed)
  getters: {
    movieIds(state) {
      return state.movies.map(m => m.imdbID)
    }
  },

  // mutations, actions : methods와 유사
  // 변이
  // mutations를 통해서만 데이터 수정 가능
  mutations : {
    resetMovies(state){
      state.movies =[]
    }
  },

  // 비동기
  actions: {
    searchMovies(){

    }
  }
}