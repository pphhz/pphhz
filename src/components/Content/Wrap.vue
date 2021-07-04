<template>
  <div class="wrap">
    <div class="header"  @click="toggle">
        <h3>换行</h3>
        <span v-show="!this.isShow">▼</span>
        <span v-show="this.isShow">▲</span>
    </div>
      <pre v-show="this.isShow"  style="word-wrap: break-word; white-space: pre-wrap;">

          自动换行：word-wrap: break-word; white-space: pre-wrap;
      </pre>
  </div>
</template>

<script>
    export default {
      name: 'Wrap',
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

.wrap{
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
