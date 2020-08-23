<template>
  <div class="fatherSonPassData">
    <div class="header"  @click="toggle">
        <h3>父子组件传递数据</h3>
        <span v-show="!isShow">▼</span>
        <span v-show="isShow">▲</span>
    </div>
          <pre v-show="isShow"  style="word-wrap: break-word; white-space: pre-wrap;">
1.父传子，子组件想要访问父组件的数据, 必须通过父组件传递
1.1在父组件中通过v-bind传递数据
   传递格式 v-bind:自定义接收名称 = "要传递数据"
1.2在子组件中通过props接收数据
   接收格式 props: ["自定义接收名称"]

2.子组件想要访问父组件的方法, 必须通过父组件传递
2.1在父组件中通过v-on传递方法
   传递格式 v-on:自定义接收名称 = "要传递方法"
2.2在子组件中自定义一个方法,如:
              methods: {
                    sonFn(){
                        this.$emit("parentsay");
                    }
                }
2.3在自定义方法中通过 this.$emit('自定义接收名称');触发传递过来的方法

3.子传父
既然我们可以将父组件的方法传递给子组件
既然我们可以在子组件中调用父组件中的方法,
**那么就可以在调用方法的时候给方法传递参数
传递的参数, 就是我们需要传递的数据
               template: "#son",
                methods: {
                    sonFn(){
                        // 第一个参数: 需要调用的函数名称
                        // 后续的参数: 给调用的函数传递的参数
                        this.$emit("parentsay", "知播渔");
                    }
                }
                template: "#father",
                methods: {
                     say(data){
                       console.log(data);
                       }
                },
4.数据和方法的多级传递
在Vue中如果儿子想使用爷爷的数据, 必须一层一层往下传递
在Vue中如果儿子想使用爷爷的方法, 必须一层一层往下传递
          </pre>
  </div>
</template>

<script>
export default {
  name: 'FatherSonPassData',
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

.fatherSonPassData{
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
