<template>
  <div class="buildVueProject">
    <div class="header"  @click="toggle">
        <h3>创建Vue项目</h3>
        <span v-show="!isShow">▼</span>
        <span v-show="isShow">▲</span>
    </div>
          <pre v-show="isShow"  style="word-wrap: break-word; white-space: pre-wrap;">
           打开cmd，vue create XXX
           选手动，manually
           Babel，Router，Vuex，CSS Pre-processors，Linter、Formatter
           ESLint + Standard config
           Lint on save、Lint and fix on commit
           In dedicated config files
           N
           删掉默认的几个文件，favicon.ico\logo.png\HelloWorld.vue\About.vue\Home.vue
           删掉默认的router的规则、App.vue的代码样式、index.html
           1.初始化HTML代码，国产浏览器兼容等，放自己的图标在public里
           2.rem+视口缩放适配移动端，在index.html
           注意点：HTML中用到了字符串模板，字符串模板中用到了变量，
           html-plugin是无法处理的，报错。
                  借助一个loader：html-loader
                  npm官网搜索安装。要在webpack配置loader：
                  新建vue.config.js进行配置
           3.npm i -D postcss-pxtorem,px变rem的插件，如宽高
            新建postcss.config.js，配置
           4.webpack实现CSS3、ES678兼容（Vue-CLI自动实现了）
           5.文件.browserslistrc里写上要兼容什么浏览器（CSS会加浏览器前缀）
           6.fastclick解决移动端100-300ms点击事件延迟
           npm install fastclick 
           main.js触发：
           import fastclick from 'fastclick'
           fastclick.attach(document.body);
           7.初始化默认全局样式
           assets里新建css，base、variable、
           在main.js里导入就可。
           import './assets/css/base.scss'
           8.移动端开发中，字体大小要不变
           由于我们用视口缩放适配移动端，所以不能直接设置字体大小，否则会随屏幕尺寸变
           index.html里获取了屏幕像素比data-dpr
           mixin.scss里设置一下。以后用混合设置字体大小。
           不用pxtorem的就设Px，如字体大小     
           9.纳入git管理，add,commit
           新建Develop,Home分支

             </pre>
  </div>
</template>

<script>
export default {
  name: 'BuildVueProject',
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
.buildVueProject{
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