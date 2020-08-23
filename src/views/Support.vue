<template>
  <div class="support">    
    <h3>🙉请(笑)~</h3>
    <img src="../assets/images/weixin.jpg" alt="dbq">
    <img src="../assets/images/alipay.jpg" alt="dbq">
  </div>
</template>

<script>


export default {
  name:"Support",
  components:{
  },

  
}
</script>

<style lang="scss" scoped>
@import "../assets/css/variable";
.support{
  text-align: center;
  margin-top: 40px;

  h3{
    font-size:$font_large;
    color:$font_color1;
    line-height: 50px;
  }
  img{
    height: 500px;
  }

}

</style>
