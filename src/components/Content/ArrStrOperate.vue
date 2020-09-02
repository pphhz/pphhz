<template>
  <div class="arr-str-operate">
    <div class="header"  @click="toggle">
        <h3>操作数组的方法</h3>
        <span v-show="!isShow">▼</span>
        <span v-show="isShow">▲</span>
    </div>
          <pre v-show="isShow"  style="word-wrap: break-word; white-space: pre-wrap;">
        1.splice返回切下来的数组，会改变原始数组。
              还可以给原始数组添加数据
            var arr=['aa','bb','cc']
            console.log(arr.splice(2,1))
              //从2开始切一个
              //['cc']

            console.log(arr.splice(2,0))
              //从2开始切0个
              //[]

            var arr=['aa','bb','cc']
            arr.splice(2,0,"William")
             console.log(arr)
              //['aa','bb','William','cc',]
              //2之前加上去


        2.slice返回切下来的数据，不会改变原始数组
              var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
              var citrus = fruits.slice(1,3);
              //Orange,Lemon
              //从1处开始到3之前的


              var str="www.runoob.com!";
              document.write(str.slice(4)); // 从第 4 开始到末尾
              //runoob.com!
              document.write(str.slice(4,10)); // 从第 4 开始到10之前
              //runoob



         3.split一个字符串分割成数组，不改变原始字符串
            var str="How are you doing today?";
            var n=str.split(" ");
            //How,are,you,doing,today?



          </pre>
  </div>
</template>

<script>
export default {
  name: 'ArrStrOperate',
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

.arr-str-operate{
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
