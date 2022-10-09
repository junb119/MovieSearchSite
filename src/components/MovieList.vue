<template>
<!-- 부모 자식 컴포넌트 간의 데이터 전달은 props나 emit 사용-->
<!-- 상위 하위 컴포넌트 간의 데이터 전달은 provide inject 사용 -->
<!-- 형제 컴포넌트 간, 혹은 멀리 떨어진 컴포넌트 간 데이터 전달을 위해 vuex(상태관리패턴+라이브러리 사용)-->
<!-- npm i vuex  -->
<!-- vex를 사용해 형제 컴포넌트인 MovieList와 Search간 데이터 전달.  -->
  <div class="container">
    <div :class="{'no-result': !movies.length}"
          class="inner">
          <div v-if="loading"
          class="spinner-border text-primary"></div>
          <div v-if="message" class="message"> 
          <!-- message가 있다면 v-else부분 출력 x -->
            {{message}}
          </div>
          <div v-else
              class="movies">
              <MovieItem 
                v-for="movie in movies"
                :key="movie.imdbID"
                :movie="movie" />
          </div>
    </div>  
  </div>
</template>

<script>
import MovieItem from '~/components/MovieItem'

export default {
  components : {
    MovieItem
  },
  computed: {
    movies() {
      return this.$store.state.movie.movies
    },
    message() {
      return this.$store.state.movie.message
    },
    loading() {
      return this.$store.state.movie.loading
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";

.container {
  margin-top: 30px;
  .inner {
    background-color: $gray-200;
    padding: 10px 0;
    border-radius: 4px;
    text-align: center;
    &.no-result{
      padding: 70px 0;
    }
    .message {
      color: $gray-400;
      font-size: 20px;
    }
  }
  .movies {
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
  }
}
</style>