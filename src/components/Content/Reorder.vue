<template>
  <div class="reorder">
    <div class="header"  @click="toggle">
        <h3>排序</h3>
        <span v-show="!isShow">▼</span>
        <span v-show="isShow">▲</span>
    </div>
          <pre v-show="isShow" style="word-wrap: break-word; white-space: pre-wrap;">
  1.快速排序
      function quickSort(arr){
            if(arr.length<1){
                return arr;
      }
      var pivotIndex=Math.floor(arr.length/2);//找到那个基准数
      var pivot=arr.splice(pivotIndex,1)[0]; //取出基准数，并去除，splice返回值为数组。
      var left=[];
      var right=[];
      for(var i=0;i< arr.length;i++){
          if(arr[i]< pivot){
                left.push(arr[i]);
          }else{
              right.push(arr[i]);
          }
      }
      return quickSort(left).concat([pivot],quickSort(right)); //加入基准数
    }
      arr=[4,2,6,12,66,9];
      console.log(quickSort(arr)); //[2,4,6,9,12,66]


  2.冒泡排序
      var arr1=[4,22,1,6,3,7,2];
      for(var i=1;i<=arr1.length-1;i++){
          for(var j=0;j<=arr1.length-i-1;j++){
              if(arr1[j]>=arr1[j+1]){
                var temp=arr1[j];
                arr1[j]=arr1[j+1];
                arr1[j+1]=temp;
                }
          }
      }
      console.log(arr1);


  3.计数排序
      function countingSort(iArr, max) {
        var n = iArr.length;
        var oArr = [];
        // 创建长度max的数组，填充0
        var C = [];
        for(var i = 0; i <= max; i++){
                C[i] = 0;
      }
      // 遍历输入数组，填充C
      for(var j = 0; j < n; j++){
            C[iArr[j]]++;
      }
      // 遍历C，输出数组
      for(var k = 0; k <= max; k++){
      // 按顺序将值推入输出数组，并在比较后将对应标志位减1
          while(C[k]-- > 0){
            oArr.push(k);
          }
      }
      return oArr;
      }

      countingSort([2, 1, 3, 1, 5], 5);
      // 输出[1, 1, 2, 3, 5]
    </pre>
  </div>
</template>

<script>
export default {
  name: 'Reorder',
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
.reorder{
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