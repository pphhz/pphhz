<template>
  <div class="date-format">
    <div class="header"  @click="toggle">
        <h3>Methods/Computed</h3>
        <span v-show="!isShow">▼</span>
        <span v-show="isShow">▲</span>
    </div>
          <pre v-show="isShow"  style="word-wrap: break-word; white-space: pre-wrap;">
         computed 具有缓存功能，在系统刚运行的时候调用一次。
         只有当计算结果发生变化才会被调用我们在长度框与宽度框更改值的时候每次更改
         computed 都会被调用一次，很浪费资源。计算就要返回一个计算的结果

         用 methods 方法编写的逻辑运算，在调用时 add() 一定要加“()”，
         methods 里面写的多位方法，调用方法一定要有（）。
         methods方法页面刚加载时调用一次，以后只有被调用的时候才会被调用。

        在哪些情况下更适合使用 computed ？
            一般使用简单的表达式对内容进行简单的转换与使用过滤器对内容进行简单的转换用的比较多。

        对比computed 和 methods：

            computed计算的结果如果不发生改变就不会触发result这个函数。
            而methods中一般都是定义的需要事件触发的一些函数。每次只要触发事件，就会执行对应的方法。如果把computed中的方法写到method中会浪费性能。

            computed必须返回一个值页面绑定的才能取得值，
            而methods中可以只执行逻辑代码，可以有返回值，也可以没有。
          </pre>
  </div>
</template>

<script>
export default {
  name: 'MethodsAndComputed',
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

.date-format{
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
