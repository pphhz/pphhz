<template>
  <div class="Css-cursor">
    <div class="header"  @click="toggle">
        <h3>改鼠标形状</h3>
        <span v-show="!isShow">▼</span>
        <span v-show="isShow">▲</span>
    </div>
          <pre v-show="isShow"  style="word-wrap: break-word; white-space: pre-wrap;">
      <a href="https://www.w3school.com.cn/cssref/pr_class_cursor.asp">详情见W3C（cursor属性）</a>
      设置元素的cursor属性,取值有：
      自定义的url
      auto
      crosshair
      default
      pointer
      move
      e-resize
      ne-resize
      nw-resize
      n-resize
      se-resize
      sw-resize
      s-resize
      w-resize
      text
      wait
      help
          </pre>
  </div>
</template>

<script>
export default {
  name: 'CssCursor',
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
.Css-cursor{
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