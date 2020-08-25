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

    5.  一个界面按按钮出现一个modal，可以直接放着然后显示隐藏
    《approval-hist-modal ref="approvalHistModal" :instId="instId" />
    handleRecord(text,record) {
      this.instId = record.procinstId
      this.$refs.approvalHistModal.show()
    }
   《template>
      《a-modal
          title="审批记录"
          :width="1200"
          :visible="visible"。。。

    也可以路由跳转
        handleOpenAdd () {
          this.$router.push({ // 核心语句
            path: '/openn/openlist/modules/open-apply-modal', // 跳转的路径
            query: { // 路由传参时push和query搭配使用 ，作用时传递参数
              optType: 'add'
        }
      })
    },


        6.

        7.
       在一个文件或模块中，export 可以导出多个，对应的 import导入加花括号{ }
       export default仅可以导出一个，对应的import导入时候不用加花括号

        8.  created () {
               this.loadData()//不能这样调用方法，写法错误，而且在data里的写法自己就会调用了，像这样
          },
            loadData: parameter => {
            let queryParam = {}
            const { form: { validateFields }, selectedNode } = this。。。。。。

        9.
        设一个按钮怎么跳转到界面：
        在UserMenu界面手动加按钮代码、路由。再这admin系统管理加一个按钮、一个界面，界面设为一级菜单而且隐藏路由，这样就看不到那栏，只有按钮看得到。然后授权。
        总搞不好的原因是只设了按钮没设界面。然后是路径跳转了结果页面没跳转，打了断点debugger发现其实进去页面了，是因为页面很多东西没定义，解决了就看得到了。


          </pre>
  </div>
</template>

<script>
    export default {
      name: 'KnowledgeNode',
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
