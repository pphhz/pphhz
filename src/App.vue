<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'


export default {
  name:"App",
  components:{
    Header,
    Footer,
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
