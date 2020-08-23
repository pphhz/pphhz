<template>
  <div class="ssh">
    <div class="header"  @click="toggle">
        <h3>SSH公钥使用</h3>
        <span v-show="!isShow">▼</span>
        <span v-show="isShow">▲</span>
    </div>
         <pre v-show="isShow"  style="word-wrap: break-word; white-space: pre-wrap;">
        <a href="https://gitee.com/help/articles/4181#article-header0">SSH公钥生成教程</a>
            1.ssh-keygen -t rsa -C "xxxxx@xxxxx.com" （改！）(在随便一个本地文件夹打开git终端输)
            三次回车，本地c盘的用户xx里有了一个.ssh文件夹

            2.cat ~/.ssh/id_rsa.pub
                拷贝公钥(别拷多)

            3.github-->setting-->SSH and GPG keys-->new SSH key-->粘贴保存

            4.ssh -T git@gitee.com（改成github.com）
                yes
        </pre>
  </div>
</template>

<script>
export default {
  name: 'SSH',
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
.ssh{
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