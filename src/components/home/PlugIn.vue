<template>
  <div class="plugIn">
    <h2>插件、库</h2>
    <ul>
      <li><a href="https://jquery.com">jQuery</a></li>
      <li><a href="https://www.jquery123.com">jQuery中文文档</a></li>
      <li><a href="https://code.jquery.com/jquery-3.1.1.js">jQuery-3.1.1.js</a></li>
      <li><a href="https://www.bootcss.com">Bootstrap中文网</a></li>
      <li><a href="https://www.html.cn/doc/zeptojs_api/">Zepto中文文档</a></li>
      <li><a href="http://caibaojian.com/iscroll-5/">iScroll中文文档</a></li>
      <li><a href="http://www.axios-js.com/">axios网络请求插件</a></li>
      <li><a href="https://www.alvarotrigo.com/fullPage/">fullPage</a></li>
      <li><a href="https://www.swiper.com.cn">swiper中文网(轮播图/滚动)(swiper.js+swiper.animate.css)</a></li>
      <li><a href="https://daneden.github.io/animate.css/">animate.css</a></li>
      <li><a href="https://www.delac.io/wow/">wow.js(和animate.css一起用)</a></li>
      <li><a href="https://scrollrevealjs.org">scrollReveal(0依赖滚动动画)</a></li>
      <li><a href="https://echarts.apache.org/zh/index.html">ECharts官网</a></li>
    </ul>
      <h3>1. 谷歌浏览器插件</h3>
      <p>安装步骤：下载.crx的插件文件到本地->修改文件扩展名为zip->解压zip文件到文件夹->打开谷歌浏览器的右上角->更多工具->扩展程序，开发者模式->把解压的那个文件夹拖进去</p>
      <ul>
        <li><a href="http://chromecj.com/">chrome插件网</a></li>
        <li><a href="https://www.extfans.com/">extfans插件网</a></li>
        <li><a href="http://chromecj.com/utilities/2019-04/1971.html">装插件"CRX-HEADER-INVALID"解决方法</a></li>
        <li><a href="https://www.baidufe.com/fehelper/">前端工具feHelper</a></li>
        <li><a href="https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=zh-CN">Vue.js devtools</a></li>
        <li><a href="https://chromecj.com/web-development/2019-04/2189.html">AlloyDesigner前端开发插件</a></li>
        <li><a href="https://chrome.google.com/webstore/detail/marinara-pomodoro%C2%AE-assist/lojgmehidjdhhbmpjfamhpkpodfcodef/related?hl=zh-CN">番茄工作法助理</a></li>
        <li><a href="https://chrome.google.com/webstore/detail/take-webpage-screenshots/mcbpblocgmgfnpjjppndjkmgjaogfceg?hl=zh-CN">捕捉网页截图FireShot</a></li>

        <li><a href="https://chromecj.com/productivity/2018-09/1501.html">谷歌上网助手GHelper</a></li>
        <li><a href="https://chromecj.com/productivity/2017-07/775.html">视频下载器（FVD下载器）</a></li>
        <li><a href="https://chromecj.com/productivity/2014-07/24.html">Adblock Plus屏蔽广告</a></li>
        <li><a href="http://chromecj.com/web-development/2018-07/1468.html">谷歌插件油猴(脚本管理器)</a>
        <li><a href="http://www.tampermonkey.net">油猴官网</a></li>
      </ul>
      <h3>2.浏览器脚本网站</h3>
      <ul><li><a href="https://greasyfork.org/zh-CN">Greasy Fork</a></li></ul>
      <h3>3. js滚动视差插件</h3>
      <ul>
        <li><a href="http://www.greensock.com/">GSAP官网地址</a></li>
        <li><a href="https://www.tweenmax.com.cn/">GSAP中文网</a></li>
        <li><a href="https://github.com/greensock/GreenSock-JS/">GSAPgithub地址</a></li>
        <li><a href="https://github.com/julianshapiro/velocity">Velocity官方地址</a></li>
        <li><a href="http://shouce.jb51.net/velocity/index.html">Velocity中文文档</a></li>
        <li><a href="https://github.com/janpaepke/ScrollMagic">scrollMagic官网地址</a></li>
        <li><a href="http://scrollmagic.io/docs/index.html">scrollMagic官方文档</a></li>
      </ul>

          
  </div>
</template>

<script>
export default {
  name: 'PlugIn',
  data(){
    return{
      
    }
  },
  methods:{
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" scoped> 
@import '../../assets/css/variable';
.plugIn{
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
  p{
    margin: 20px;
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
