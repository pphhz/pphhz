<template>
  <div class="ellipsis">
    <div class="header"  @click="toggle">
        <h3>Ellipsis</h3>
        <span v-show="!isShow">▼</span>
        <span v-show="isShow">▲</span>
    </div>
          <pre v-show="isShow"  style="word-wrap: break-word; white-space: pre-wrap;">
              我们框架有Ellipsis组件。直接用

    1， 设置容器宽度，即当前标签的父标签宽度。当前标签为 块标签。
    2， 文字不换行，强制文本在一行内显示 white-space: nowrap.
    3， 隐藏溢出。溢出不显示。overflow: hidden.
    4， 省略标记：text-overflow: ellipsis


    注意：overflow: hidden; text-overflow:ellipsis;white-space:nowrap;一定要一起用

    1.一定要给容器定义宽度.

    2.如果少了overflow: hidden;文字会横向撑到容易的外面

    3.如果少了white-space:nowrap;文字会把容器的高度往下撑；
     即使你定义了高度，省略号也不会出现，多余的文字会被裁切掉

    4.如果少了text-overflow:ellipsis;多余的文字会被裁切掉，
       就相当于你这样定义text-overflow:clip.
     <textarea cols="30" rows="10" >


         <!-- 展示一行内容 内容显示不下 用省略号代替-->
        <div style="width:500px ; height: 100px; background-color: red">
           <p style="white-space: nowrap; text-overflow: ellipsis; overflow: hidden">

              (1) 溢出属性（容器的）
               overflow:visible/hidden(隐藏)/scroll/auto(自动)/inherit;
               visible:默认值，内容不会被修剪，会成现在元素框之外；
               hidden：内容会被修剪，并且其余内容是不可见的；
               scroll：内容会被修剪，但是浏览器会显示滚动条，以便查看其余的内容;
               auto：如果内容被修剪，则浏览器会显示滚动条，以便查看其他的内容;
               inherit：规定应该从父元素继承overflow属性的值。
        </p>
        </div>
     </textarea>
    作者：FlyTheKite
    链接：https://www.jianshu.com/p/ebe4fc6e1696
          </pre>
  </div>
</template>

<script>
export default {
  name: 'Ellipsis',
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

.ellipsis{
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

    textarea{
        width: 100%;
        height: 300px;
        background-color: $background-color2;

    }
}
</style>
