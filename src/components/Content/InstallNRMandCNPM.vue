<template>
  <div class="installNRMandCNPM">
    <div class="header"  @click="toggle">
        <h3>安装使用NRM、CNPM</h3>
        <span v-show="!isShow">▼</span>
        <span v-show="isShow">▲</span>
    </div>
          <pre v-show="isShow"  style="word-wrap: break-word; white-space: pre-wrap;">
1.什么是nrm?


    由于npm默认去国外下载资源, 所以对于国内开发者来说下载会比较慢
    所以就有人写了一个nrm工具, 允许你将资源下载地址从国外切换到国内

    npm install -g nrm   安装NRM
    nrm --version 查看是否安装成功
    nrm ls    查看允许切换的资源地址
    nrm use taobao  将下载地址切换到淘宝

    PS:淘宝资源地址和国外的地址内容完全同步,淘宝镜像与官方同步频率目前为 
    10分钟一次以保证尽量与官方服务同步


2.什么是cnpm?


    由于npm默认回去国外下载资源, 所以对于国内开发者来说下载会比较慢
    cnpm 就是将下载源从国外切换到国内下载, 只不过是将所有的指令从npm变为cnpm而已

    npm install cnpm -g –registry=https://registry.npm.taobao.org  安装CNPM
    cnpm -v  查看是否安装成功
    使用方式同npm, 例如: npm install jquery 变成cnpm install jquery 即可
          </pre>
  </div>
</template>

<script>
export default {
  name: 'InstallNRMandCNPM',
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

.installNRMandCNPM{
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