<template>
  <MenuApp></MenuApp>
  <router-view></router-view>
  <FooterApp></FooterApp>
</template>

<script>
import MenuApp from './components/MenuApp.vue'
import FooterApp from './components/FooterApp.vue'


export default {
  name: 'App',
  components: {
    MenuApp,
    FooterApp,
  
  }
}
</script>

<style>
@import url('@/styles/global.css');
#app {
  font-family: 'Montserrat', sans-serif;
}
a{
  text-decoration: none;
}
</style>
