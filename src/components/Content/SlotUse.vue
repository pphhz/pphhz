<template>
  <div class="slot-use">
    <div class="header"  @click="toggle">
        <h3>插槽v-slot</h3>
        <span v-show="!isShow">▼</span>
        <span v-show="isShow">▲</span>
    </div>
          <pre class="warpper" v-show="isShow"  style="word-wrap: break-word; white-space: pre-wrap;">
1.什么是插槽?
默认情况下使用子组件时在子组件中编写的元素是不会被渲染的
如果子组件中有部分内容是使用时才确定的, 那么我们就可以使用插槽
插槽就是在子组件中放一个"坑", 以后由父组件来"填"

2.匿名插槽：
如果有多个匿名插槽, 每一个匿名插槽都会被指定的内容替换。
虽然写多个匿名插槽不会报错, 但是在企业开发中推荐只能有一个匿名插槽
插槽可以指定默认数据, 如果使用者没有填这个坑, 那么就会显示默认数据
有多少个匿名插槽, 填充的数据就会被拷贝几份
<textarea>

    <div id="app">
        <father></father>
    </div>
    <template id="father">
        <div>
            需求: 在使用子组件的时候给子组件动态的添加一些内容
            <son>
                <div>我是追加的内容1</div>
                <div>我是追加的内容2</div>
                <div>我是追加的内容3</div>
            </son>
        </div>
    </template>
    <template id="son">
        (<div>
            <div>我是头部</div>
            <slot>我是默认数据</slot>
            <div>我是底部</div>
        </div>)
    </template>
              </textarea>

3.具名插槽:
想给不同的插槽中填充不同的内容
这个时候就可以使用具名插槽

通过插槽的name属性给插槽指定名称
在使用时可以通过slot="name"方式, 指定当前内容用于替换哪一个插槽
注意点: 如果没有指定要替换哪个插槽中的内容, 则不会被替换

<textarea>

<div id="app">
    <father></father>
</div>
<template id="father">
    <div>
        <son>
           //这里通过slot属性告诉Vue,当前的内容是要填充到哪一个插槽中的
            <div slot="one">我是追加的内容1</div>
            <div slot="one">我是追加的内容11</div>
            <div slot="two">我是追加的内容2</div>
            <div slot="two">我是追加的内容22</div>
        </son>
    </div>
</template>
<template id="son">
    <div>
        <div>我是头部</div>
        <slot name="one">我是默认内容</slot>
        <slot name="two">我是默认内容</slot>
        <div>我是底部</div>
    </div>
</textarea>
4.作用域插槽:
作用域插槽就是带数据的插槽, 就是让父组件在填充子组件插槽内容时也能使用子组件的数据
    5.1在slot中通过 v-bind:数据名称="数据名称" 方式暴露数据
    5.2在父组件中通过 template slot-scope="作用域名称" 接收数据
    5.3在父组件的template中通过 作用域名称.数据名称 方式使用数据
    作用域插槽的应用场景: 子组件提供数据, 父组件决定如何渲染

5.v-slot指令
在 2.6.0 中，我们为具名插槽和作用域插槽引入了一个新的统一的语法 (即 v-slot 指令)。
它取代了 slot 和 slot-scope
注意点: v-slot指令只能用在template标签上
        可以使用#号替代v-slot:
            template v-slot:one
            template #one
            template #one="abc"
            (template v-slot:插槽名称="作用域名称")
也就是说我们除了可以通过v-slot指令告诉Vue内容要填充到哪一个具名插槽中
还可以通过v-slot指令告诉Vue如何接收作用域插槽暴露的数据
          </pre>
  </div>
</template>

<script>
export default {
  name: 'SlotUse',
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

.slot-use{
  .header{
    display: flex;
    justify-content: space-between;
    line-height: 30px;
    padding:0 20px;
    background-color: $background-color2;
    cursor: pointer;
}
    textarea{
        width: 100%;
        height: 300px;
        background-color: $background-color2;
    }


  .warpper{
    margin: 10px;
  }
}
</style>
