<template>
  <div class="scrollbar">
    <div class="header"  @click="toggle">
        <h3>不想要水平滚动条</h3>
        <span v-show="!isShow">▼</span>
        <span v-show="isShow">▲</span>
    </div>
          <pre v-show="isShow"  style="word-wrap: break-word; white-space: pre-wrap;">
      利用scrollReveal.js做动效，div从左侧转入，水平方向会多滚动条。
      1.委曲求全缩小div宽度
      2.利用overflow-x:hidden则垂直方向会多出滚动条，丑。
      3.群友给的解决方案——设置滚动条：
      （在ie和edge上仍然有滚动条，谷歌没有）
      body,html{
        width: 100%;
        scrollbar-width: none;
        -webkit-overflow-scrolling: touch;
        &::-webkit-scrollbar {
        display: none;
      }
      }
      4.设置父元素overflow：hidden，子元素padding，滚动条被挤出去看不到
        </pre>
  </div>
</template>

<script>
export default {
  name: 'ScrollBar',
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
.scrollbar{
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