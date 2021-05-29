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
  mounted(){
    document.getElementById('app').style.display = 'block';
    document.getElementById('appLoading').style.display = 'none';
  }

}
</script>

<style lang="scss">
@import "./assets/css/base";
@import "./assets/css/variable";

html{
   background: $background-color3;
   
}


</style>
