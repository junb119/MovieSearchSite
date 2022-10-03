<template>
  <header>
    <div class="nav nav-pills">
      <div v-for="nav in navigations"
      :key="nav.name"
      class="nav-item">
        <RouterLink 
        :to="nav.href"
        active-class="active"
        class='nav-link'>
        <!-- active-class : 디폴트인 router-link-active를 active로 수정 -->
          {{nav.name}}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navigations : [
        {
          name:'Search',
          href:'/'
        },
        {
          name:'Movie',
          href:'/movie'
        },
        {
          name:'About',
          href:'/about'
        }
      ]
    }
  }
}
</script>