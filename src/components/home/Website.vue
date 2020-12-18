<template>
  <div class="website">
    <h3>网址导航</h3>
    <ul>
        <li><a href="http://ailongmiao.com/">龙喵网</a></li>
    </ul>
    <h3>娱乐</h3>
    <ul>
        <li><a href="http://www.yyets8.com/">人人影视</a></li>
        <li><a href="https://m.58wangpan.com">58网盘分享</a></li>
      <li><a href="http://www.novipnoad.com">NO视频</a></li>
      <li><a href="http://ifkdy.com/">疯狂影视</a></li>
      <li><a href="http://www.ikanmv.com/">爱看电影</a></li>
<!--      <li><a href="http://www.yyets.com/">人人影视</a></li>-->
      <li><a href="https://www.tohomh123.com">土豪漫画</a></li>
      <li><a href="https://www.733.so">733动漫网(漫画)</a></li>
      <li><a href="https://tophub.today">今日热榜</a></li>
      <li><a href="http://tool.yijingying.com/musictools/">musictools全网无损音乐免费下载客户端</a></li>
      <li><a href="https://www.sq688.com">超高无损音乐</a></li>
    </ul>
    <h3>学习</h3>
    <ul>
      <li><a href="http://oeasy.org/">Oeasy(学习)</a></li>
      <li><a href="https://www.runoob.com">菜鸟教程(学习)</a></li>
      <li><a href="https://52sharing.cn">吾爱分享</a></li>
      <li><a href="https://www.cn-ki.net/"> IData知识检索(期刊论文)</a></li>
    </ul>
    <h3>服务</h3>
    <ul>
      <li><a href="http://www.vixual.net/blog/archives/164?variant=zh-cn">Google 常用服务及网址</a></li>
      <li><a href="https://chrome.google.com/webstore/category/extensions?hl=zh-CN">chrome网上应用店
</a></li>
      <li><a href="https://www.google.com.tw/">谷歌搜索</a></li>
      <li><a href="https://www.google.com/imghp">谷歌搜图</a></li>
      <li><a href="https://www.google.com/earth/">谷歌地球（好玩！旅游一样）</a></li>
      <li><a href="https://https://translate.google.com/">谷歌翻译</a></li>
      <li><a href="https://search.google.com/">GoogleSearchConsole网站管理员工具</a></li>
      <li><a href="https://www.google.com/intl/zh-CN/gmail/about/#">Gmail</a></li>
      <li><a href="https://play.google.com/store/apps?hl=zh-CN">Google Play应用商店</a></li>
      <li><a href="https://photos.google.com/?pageId=none">Google相册</a></li>
      <li><a href="https://news.google.com/topstories?hl=zh-HK&gl=HK&ceid=HK:zh-Hant">Google新闻</a></li>
      <li><a href="https://zh.wikipedia.org/">维基百科</a></li>
    </ul>
    <h3>图片</h3>
    <ul>
      <li><a href="https://zh.snipaste.com/">snipaste截图工具</a></li>
      <li><a href="http://squoosh.app">Squoosh!(在线图片压缩工具)</a></li>
      <li><a href="https://trianglify.io">多边形背景生成器</a></li>
      <li><a href="https://visualhunt.com">visualhunt(无版权图片资源)</a></li>
      <li><a href="https://ccsearch.creativecommons.org"> CC Search(无版权图片资源)</a></li>
      <li><a href="https://pixabay.com">pixabay(图片资源)</a></li>
      <li><a href="https://cli.im">草料二维码(生成二维码)</a></li>
      <li><a href="https://www.uupoop.com">在线ps</a></li>
      <li><a href="https://www.remove.bg">removebg(去除图片背景)</a></li>
      <li><a href="https://bigjpg.com">bigjpg(智能放大图片)</a></li>
      <li><a href="http://gif.55.la/">gif在线制作</a></li>
    </ul>

    <h3>文档</h3>
    <ul>
      <li><a href="https://lightpdf.com/zh">lightPDF(在线PDF编辑转换)</a></li>
      <li><a href="https://www.ilovepdf.com">ilovepdf(PDF转其他格式)</a></li>
      <li><a href="http://www.alltoall.net">alltoall(各种文件转换)</a></li>
      <li><a href="http://www.1ppt.com/">第一PPT</a></li>
    </ul>


    <h3>书</h3>
    <ul>
      <li><a href="https://www.shuge.org">书格(数字古籍图书馆)</a></li>
      <li><a href="https://www.jiumodiary.com">鸠摩搜书</a></li>
      <li><a href="https://www.allhistory.com">全历史(Allhistory)</a></li>
    </ul>
          
          
  </div>
</template>

<script>
export default {
  name: 'Content',
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
.website{
  width: 100%;
      background-color: $background_color2;

  h3{
    line-height: 50px;
    padding-left: 20px;
    background-color: $background_color3;
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
