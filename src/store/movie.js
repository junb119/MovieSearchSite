// 영화 검색 관련 데이터 취급
import axios from 'axios' // npm i axios

export default {
  // namespaced : store에서 module화해서 사용한다는 것을 명시화
  namespaced: true,

  // state : 취급해야하는 각각의 데이터
  state: () => ({
    movies : []
  }),

  // getters : 계산된 데이터 생성 (=computed)
  getters: {},

  // mutations, actions : methods와 유사
  // 변이
  // mutations를 통해서만 데이터 수정 가능
  mutations : {
    updateState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      }) // ['movies','message','loading']

    },
    resetMovies(state){
      state.movies =[]
    }
  },

  // 비동기
  actions: {
    async searchMovies(/*context->*/{state, commit}, payload){
      const {title, type, number, year} = payload
      const OMDB_API_KEY = '7035c60c'
      const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`) // OMDb api 사용
      const {Search, totalResults} = res.data
      /*context.*/commit('updateState', {
        movies:Search
      })
      console.log(totalResults) // 310
      console.log(typeof totalResults) // string

      const total = parseInt(totalResults, 10)
      const pageLength = Math.ceil(total / 10)

      // 추가 요청
      if (pageLength > 1) {
        for (let page =2; page <= pageLength; page++) {
          if (page > (number / 10 ) ) break
          const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`) // OMDb api 사용
          const {Search} = res.data
          commit('updateState', {
            movies : [...state.movies, ...Search]
          })
        }
      }
    }
  }
}