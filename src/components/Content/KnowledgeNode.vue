<template>
  <div class="knowledge-node">
    <div class="header"  @click="toggle">
        <h3>小知识点</h3>
        <span v-show="!this.isShow">▼</span>
        <span v-show="this.isShow">▲</span>
    </div>
          <pre v-show="this.isShow"  style="word-wrap: break-word; white-space: pre-wrap;">
    1.
        @ /：表示 src目录下；

    2.英语
        cascader
        级联器

        avatar
        头像

        popover
        弹出框

        Anchor
        锚

    3.新机要装：
        装Node.js：官网<a src="https://nodejs.org/en/">https://nodejs.org/en/</a>，下载安装包装好。
        node -v
        npm -v
        装cnpm：npm install cnpm -g -registry=https://registry.npm.taobao.org
        装SSH key，在GitHub添加
        装vue，npm install vue

    4.《a-row type="flex" justify="end"》
   value should be one of "start", "end", "center", "space-around", "space-between"

          </pre>
  </div>
</template>

<script>
    // import { mapGetters, mapActions } from "vuex";
    export default {
      name: 'KnowledgeNode',
      data(){
        return{
            isShow:false,
        }
      },
      // computed: {
      //   ...mapGetters([
      //     'isShow',
      //      ])
      //     },
      methods:{
        // ...mapActions(["setToggleShow"]),
        toggle(){
            // this.setToggleShow();
            this.isShow=!this.isShow;
        }
      },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" scoped>
@import '../../assets/css/variable';

.knowledge-node{
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
