<template>
  <div class="arrow-function">
    <div class="header"  @click="toggle">
        <h3>箭头函数</h3>
        <span v-show="!this.isShow">▼</span>
        <span v-show="this.isShow">▲</span>
    </div>
          <pre v-show="this.isShow"  style="word-wrap: break-word; white-space: pre-wrap;">
         /*
        1.普通函数/方法中的this, 谁调用就是谁
        2.箭头函数中的this, 是父作用域的this，不是调用者
        */
        /*
        function demo() {
            console.log(this); // Window
        }
        demo();
        // window.demo();
        */
        /*
        let p = {
            name: "lnj",
            say: function () {
                console.log(this); // {name: "lnj", say: ƒ}
            },
            // 因为没有将箭头函数放到其它的函数中, 所以箭头函数属于全局作用域
            // 在JS中只有定义一个新的函数才会开启一个新的作用域
            hi: () => {
                console.log(this); // Window 
            }
        }
        p.say();
        p.hi();
        console.log(this); // Window
        */
        /*
        function Person() {
            this.name = "lnj";
            this.say = function () {
                console.log(this); // Person
            }
            // 因为将箭头函数放到其它的函数中, 所以箭头函数属于其它函数(当前的其它函数就是构造函数)
            // 既然箭头函数属于构造函数, 所以箭头函数中的this就是构造函数的this
            this.hi = () =>{
                console.log(this); // Person
            }
        }
        let p = new Person();
        p.say();
        p.hi();
        */

        function Person() {
            this.name = "lnj";
            this.say = function () {
                console.log(this); // {name: "zs"}
            }
            this.hi = () =>{
                console.log(this); // Person
            }
        }
        let p = new Person();
        p.say.call({name: "zs"});
        // 注意点: 箭头函数中的this永远都只看它所属的作用域的this
        //         无法通过bind/call/apply来修改
        p.hi.call({name: "zs"});

        // say=function () {
        //     console.log(this);
        //
        //     console.log(this.name);
        //
        // }

        // this.say=()=>{
        //     console.log(this.name);
        //     console.log(this);
        // }

         say=()=>{
            console.log(this.name);
            console.log(this);
        }




    /*
        1.什么是箭头函数?
        箭头函数是ES6中新增的一种定义函数的格式
        目的: 就是为了简化定义函数的代码
        let arr = new Array();
        let arr = [];

        2.在ES6之前如何定义函数
        function 函数名称(形参列表){
            需要封装的代码;
        }
        let 函数名称 = function(形参列表){
            需要封装的代码;
        }

        3.从ES6开始如何定义函数
        let 函数名称 = (形参列表) =>{
            需要封装的代码;
        }

        4.箭头函数的注意点
        4.1在箭头函数中如果只有一个形参, 那么()可以省略
        4.2在箭头函数中如果{}中只有一句代码, 那么{}也可以省略
        */
        /*
        // function say() {
        //     console.log("hello lnj");
        // }
        let say = () => {
            console.log("hello lnj");
        }
        say();
        */

        // function say(name) {
        //     console.log("hello  " + name);
        // }
        // let say = (name) => {
        //     console.log("hello  " + name);
        // }
        // let say = name => {
        //     console.log("hello  " + name);
        // }
        let say = name => console.log("hello  " + name);
        say("it666");


          </pre>
  </div>
</template>

<script>
    export default {
      name: 'ArrowFunction',
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

.arrow-function{
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
