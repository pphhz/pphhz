<template>
  <div class="web">
  <h2>1.工具网站</h2>
  <ul>
    <li><a href="https://tool.lu/index.html">程序员的工具箱</a></li>
    <li><a href="http://tool.oschina.net/">在线工具</a></li>
    <li><a href="http://ailongmiao.com/">龙喵网导航</a></li>
        <li><a href="http://www.slimegps.cn">史莱姆导航</a></li>
    <li><a href="http://oeasy.org/">Oeasy(学习)</a></li>
    <li><a href="https://www.runoob.com">菜鸟教程(学习)</a></li>
    <li><a href="http://www.bejson.com">json</a></li>
    <li><a href="http://www.markdown.cn">Markdown (Web上使用的文本转换到HTML)</a></li>
    <li><a href="https://www.typora.io">MarkDown编辑器</a></li>
    <li><a href="http://www.bejson.com/convert/image_to_svg/">在线jpg,png图片转SVG工具</a></li>
    <li><a href="http://yui.yahooapis.com/3.18.1/build/cssreset/cssreset-min.css">清空默认边距</a></li>
  </ul>

    <h2>2.查询文档</h2>
    <ul>
      <li><a href="https://www.w3school.com.cn">w3c</a></li>
      <li><a href="https://developer.mozilla.org/zh-CN/">mdn</a></li>
      <li><a href="http://css.doyoe.com/">CSS参考手册</a></li>

    </ul>
  <h2>3.icon</h2>
  <ul>
    <li><a href="https://www.iconfont.cn/?spm=a313x.7781069.1998910419.d4d0a486a">阿里巴巴矢量图标库:</a></li>
    <li><a href="http://fontawesome.dashgame.com/">图标字体库和CSS框架</a></li>
    <li><a href="https://icomoon.io">icomoon矢量图标</a></li>
    <li><a href="http://www.bitbug.net">比特虫，在线制作ico图标</a></li>
  </ul>

  <h2>4.Less(css预处理)</h2>
  <ul>
     <li><a href="http://lesscss.cn/">less中文网</a></li>
     <li><a href="https://www.html.cn/doc/less/features/">less语言特性(中文)</a></li>
      <li><a href="http://koala-app.com/index-zh.html">考拉客户端</a></li>
      <li><a href="https://tool.oschina.net/less">开源中国</a></li>
      <!--<li><a href="doc/less中的内置函数.html">Less中的内置函数</a></li>-->
    </ul>
   <h2>5.Sass(css预处理)</h2>
   <ul><li><a href="https://www.sass.hk">Sass中文网</a></li></ul>
  <h2>6.webpack</h2>
  <ul>
    <li><a href="https://www.webpackjs.com/concepts/">webpack中文文档</a></li>
  </ul>
  <h2>7.Canvas</h2>
  <ul><li><a href="https://www.canvasapi.cn/">canvas api文档</a></li></ul>
  <h2>8.NodeJS</h2>
  <ul>
    <li><a href="https://nodejs.org/zh-cn/">官网</a></li>
    <li><a href="http://nodejs.cn/">中文网</a></li>
    <li><a href="https://www.npmjs.com">npm官网</a></li>
    <li><a href="https://aui.github.io/art-template/zh-cn/docs/index.html">art-template模板引擎</a></li>
  </ul>
  <h2>9.Vue.js</h2>
  <ul>
    <li><a href="https://cn.vuejs.org/">Vue.js</a></li>
    <li><a href="https://cli.vuejs.org/zh/">Vue CLI</a></li>
  </ul>
  <h2>10.Work</h2>
  <ul>
    <li><a href="https://www.antdv.com/docs/vue/introduce-cn/">Ant Design of Vue</a></li>
    <li><a href="https://www.yuque.com/sgz6zr">语雀</a></li>
    <li><a href="http://code.ylkj.com/base/yccdemo-web">GitLab</a></li>
    <li><a href="http://doc.ylkj.com/">研发文档</a></li>
    <li><a href="https://developers.weixin.qq.com/miniprogram/dev/api/">微信开放文档</a></li>
    <li><a href="https://www.lodashjs.com/">lodash（js工具库）</a></li>
    <li><a href="https://www.axure.com.cn/axure/course/">axure非官方文档</a></li>
    <li><a href="https://pc.sgu.com.cn/sgu/dsxxjy/login">国网大学</a></li>
    <li><a href="https://sjxt.vip/#/study/course/index">思极大学</a></li>
    <li><a href="https://www.it666.com/">知播渔</a></li>
    <li><a href="https://study.163.com">网易云课堂</a></li>
  </ul>
    <h2>11.Bootstrap</h2>
    <ul>
      <li><a href="https://www.bootcss.com/">Bootstrap（友情链接很多）</a></li>
    </ul>


  </div>
</template>

<script>
export default {
  name: 'Web',
  data(){
    return{

    }
  },
  methods:{

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../assets/css/variable';
.web{
  width: 100%;
      background-color: $background_color2;

  h2{
    line-height: 50px;
    padding-left: 20px;
    background-color: $background_color3;
  }
  h3{
    line-height: 30px;
    padding-left: 20px;
    background-color: $background_color3;
  }
  h4{
    line-height: 20px;
    padding-left: 25px;
    background-color: $background_color3;
    &:first-of-type{
      margin-top: 3px;
    }
  }
  ul{
    margin-left: 20px;
    li{
     display: inline-block;
     margin: 15px;
     a{
       color:$font-color2;
       font-size:font_medium_s;
       &:hover{
        color:$font-color1;
      }
     }
    }
  }
}
</style>
