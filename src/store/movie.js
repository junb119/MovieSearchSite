// 영화 검색 관련 데이터 취급
import axios from 'axios' // npm i axios
import _uniqBy from 'lodash/uniqBy'

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
      try{
        const res = await _fetchMovie({
          ...payload,
          page: 1
        })
        const {Search, totalResults} = res.data
        /*context.*/commit('updateState', {
          movies: _uniqBy(Search, 'imdbID')
        })
        console.log(totalResults) // 310
        console.log(typeof totalResults) // string
  
        const total = parseInt(totalResults, 10)
        const pageLength = Math.ceil(total / 10)
  
        // 추가 요청
        if (pageLength > 1) {
          for (let page =2; page <= pageLength; page++) {
            if (page > (payload.number / 10 ) ) break
            const res = await _fetchMovie({
              ...payload,
              page
            })
            const {Search} = res.data
            commit('updateState', {
              movies : [
                ...state.movies,
                ..._uniqBy(Search,'imdbID')]
            })
          }
        }
      } catch(message){
        commit('updateState',{
          movies: [],
          message
        })
      }
    }
  }
}

function _fetchMovie(payload) { //movie.js 내에서만 사용
  const {title, type, year, page } = payload
  const OMDB_API_KEY = '7035c60c'
  const url = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`
  // const url = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}` // error확인위한 주석

  return new Promise((resolve, reject) => {
    axios.get(url)
    .then(res => {
      if (res.data.Error) {
        reject(res.data.Error)
      }
      resolve(res)
    })
    .catch(err => {
      reject(err.message)
    })
  })
}