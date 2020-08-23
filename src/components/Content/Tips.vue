<template>
  <div class="tips">
    <div class="header"  @click="toggle">
        <h3>Tips</h3>
        <span v-show="!isShow">▼</span>
        <span v-show="isShow">▲</span>
    </div>
          <pre class="warpper" v-show="isShow"  style="word-wrap: break-word; white-space: pre-wrap;">
1.不要用git add .，别用命令行用webstorm比较好，依赖啥的别传
2.500多的可能是端口错误，自己不能解决，vue.config.js配置
3.有时间做一下前端查询
4.修改config配置记得重启项目
          </pre>
  </div>
</template>

<script>
export default {
  name: Tips',
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

.tips{
  .header{
    display: flex;
    justify-content: space-between;
    line-height: 30px;
    padding:0 20px;
    background-color: $background-color2;
    cursor: pointer;
}
    textarea{
        width: 100%;
        height: 300px;
        background-color: $background-color2;
    }


  .warpper{
    margin: 10px;
  }
}
</style>
