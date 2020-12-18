<template>
  <div class="header">
    <div class="header-left">
      <ul>
        <router-link tag="li" to="/home" class="item">
            <span>主页🏠</span>
        </router-link>
        <router-link tag="li" to="/life" class="item">
            <span>生活🐵</span>
        </router-link>
        <router-link tag="li" to="/support" class="item">
            <span>支持我🙈</span>
        </router-link>
      </ul>

    </div>
    <div class="header-right">
      <ul>
        <li v-show="show">3045078817</li>
        <li @click="toggle" class="item">平和猴子🐧</li>
      </ul>
    </div>


  </div>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return{
      show:false,
    }
  },
  methods:{
    toggle(){
      this.show=!this.show;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/css/variable';
.item{
  //改鼠标为小手
  cursor:pointer;
  &:hover{
    background-color: $background-color4;
  }
}
.header{
  width: 100%;
  position:fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid $border-color;
  background: $background-color;
  z-index: 999;
    ul{
      li{
        width: 100px;
        line-height: 39px;
        float: left;
        text-align: center;
        font-size: $font_medium;
        color:$font-color;
      }
  }
  .header-right{
    margin-right: 20px;
  }
}
</style>
