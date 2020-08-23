<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'


export default {
  name:"App",
  components:{
    Header,
  },

  
}
</script>

<style lang="scss">
@import "./assets/css/base";
@import "./assets/css/variable";

html{
   background: skyblue;
   
}


</style>
