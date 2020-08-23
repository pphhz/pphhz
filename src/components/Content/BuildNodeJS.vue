<template>
  <div class="buildNodeJS">
    <div class="header"  @click="toggle">
        <h3>NodeJS运行环境搭建</h3>
        <span v-show="!isShow">▼</span>
        <span v-show="isShow">▲</span>
    </div>
          <pre v-show="isShow"  style="word-wrap: break-word; white-space: pre-wrap;">
    搭建方式一:
        1.官网下载.msi安装包: https://nodejs.org/zh-cn/
        2.全程下一步
        3.在命令行工具中输入 node -v

    搭建方式二:
        1.官网下载.zip安装包: https://nodejs.org/zh-cn/
        2.解压下载好的安装包
        3.在"高级系统设置"中手动配置环境变量
        4.在命令行工具中输入 node -v

    搭建方式三:
        1.下载NVM: https://github.com/coreybutler/nvm-windows
        2.在D盘创建dev目录
        3.在Dev目中中创建两个子目录nvm和node, 并且把nvm包解压进去nvm目录中
        4.在install.cmd文件上面右键选择【以管理员身份运行】
            在终端中直接按下回车
            将弹出的文件另存为到NVM目录
            打开settings.txt文件. 修改
            root: D:\dev\nvm
            path: D:\dev\node
        6.配置环境变量
            NVM_HOME: D:\dev\nvm
            NVM_SYMLINK: D:\dev\node
            在Path中添加 %NVM_HOME% %NVM_SYMLINK%
        7.在命令行工具中输入 nvm version

          NVM常用命令
          - nvm list 查看当前安装的Node.js所有版本
          - nvm install 版本号 安装指定版本的Node.js
          - nvm uninstall 版本号 卸载指定版本的Node.js
          - nvm use 版本号 选择指定版本的Node.js
          </pre>
  </div>
</template>

<script>
export default {
  name: 'BuildNodeJS',
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
.buildNodeJS{
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