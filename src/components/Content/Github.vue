<template>
  <div class="github">
    <div class="header"  @click="toggle">
        <h3>Github</h3>
        <span v-show="!isShow">▼</span>
        <span v-show="isShow">▲</span>
    </div>
          <pre v-show="isShow"  style="word-wrap: break-word; white-space: pre-wrap;">
          2019.9.23更新
          学了git使用之后更新一下
      ****************************************************************************
          前提：有github账号，安装了git

          步骤：
          1.生成SSH公钥(<a href="https://gitee.com/help/articles/4181#article-header0">SSH公钥生成教程</a>)，github设置里添加SSH公钥
          2.github官网新建一个库，名字是username.github.io
          3.库的设置里绑定自己的域名
          4.使用SSH复制链接
          5.在本地找个文件夹右键打开git终端，git clone 链接，克隆下来
          6.webstorm打开这个库文件夹
          7.库文件夹下，新建一个.gitignore文件，内容是.idea/，忽略它。
          8.写代码，一些操作方法如下：
              创建、切换分支：右下角有git：master
              左下角log、local change：相当于git log、git status
              push：右键库文件夹—git—repository—push
              pull：右键库文件夹—git—repository—pull(右上角的箭头)
              add：右键库文件夹—git—add
              commit：右键库文件夹—git—commit(右上角的√)
              merge：右键库文件夹—git—repository—merge
              tag：右键库文件夹—git—repository—tag
      *******************************************************************
          2019.8.28
     
      1.注册github账号（<a href="https://github.com">github</a>)
      2.新建一个github仓库(Repository)
      注意：仓库名字(Repository name)必须是：username.github.io。
      3.把写的站点文件夹放在刚刚新建库时的路径下（本地username.github.io文件夹里）
      4.把本地代码文件上传到github
      5.然后就可以在浏览器地址栏输入username.github.io来访问网页了。
      6.在阿里云（腾讯云等等也行）买一个域名，实名认证，邮箱认证，然后解析一下
      (@是跳向IP，CNAME是跳向另一个域名，设为username.github.io)
      7. 打开网页版github，设置，绑定买的域名
      结束，地址栏输入域名就可以访问网页了
          </pre>
  </div>
</template>

<script>
export default {
  name: 'Github',
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
.github{
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