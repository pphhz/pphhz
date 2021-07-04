<template>
  <div class="background">
    <div class="header"  @click="toggle">
        <h3>背景全屏</h3>
        <span v-show="!this.isShow">▼</span>
        <span v-show="this.isShow">▲</span>
    </div>
      <pre v-show="this.isShow"  style="word-wrap: break-word; white-space: pre-wrap;">
   #logo{
       background: url("../assets/login.jpg");
       position:fixed;
       top: 0;
       left: 0;
       width:100%;
       height:100%;
       min-width: 1000px;
       z-index:-10;
       zoom: 1;
       background-color: #fff;
       background-repeat: no-repeat;
       background-size: cover;
       -webkit-background-size: cover;
       -o-background-size: cover;
       background-position: center 0;
   }

      出处：<a href="https://www.cnblogs.com/zwq20134/p/11674294.html">css实现背景图片全屏</a>

      </pre>
  </div>
</template>

<script>
    export default {
      name: 'Background',
      data(){
        return{
            isShow:false,
        }
      },
      methods:{
        toggle(){
            this.isShow=!this.isShow;
        }
      },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" scoped>
@import '../../assets/css/variable';
a{
    color:$font-color2;
    &:hover{
        color:$font-color1;
    }
}
.background{
  .header{
    display: flex;
    justify-content: space-between;
    line-height: 30px;
    padding:0 20px;
    background-color: $background-color2;
    cursor: pointer;
}


  pre{
    margin: 10px;
  }
}
</style>
