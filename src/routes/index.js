import {createRouter, createWebHashHistory} from 'vue-router'
import Home from './Home'
import About from './About';
export default createRouter({
  // Hash 모드 사용
  history: createWebHashHistory() ,

  // 웹사이트 페이지 구분
  routes:[
    {
      path :'/', //메인페이지
      component: Home //연결할 컴포넌트
    },{
      path : '/about',
      component: About
    }
  ]
})