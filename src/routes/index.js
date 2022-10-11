import {createRouter, createWebHashHistory} from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About';
import NotFound from './NotFound'
export default createRouter({
  // Hash 모드 사용
  history: createWebHashHistory() ,
  scrollBehavior(){
    return {top: 0} 
  }, // 페이지 이동시 항상 최상단
  // 웹사이트 페이지 구분
  routes:[
    {
      path :'/', //메인페이지
      component: Home //연결할 컴포넌트
    },{
      path : '/about',
      component: About
    },{
      path :'/Movie/:id',
      component:Movie
    },
    {
      path:'/:notFound(.*)',
      component:NotFound
    }
  ]
})