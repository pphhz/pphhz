<template>
  <div class="life">
      <span>&nbsp;敬请期待。。。</span>
  </div>
</template>

<script>


export default {
  name:"Life",
  components:{
  },


}
</script>

<style lang="scss" scoped>
@import "../assets/css/variable";
.life{
  margin-top: 40px;

  h3{
    line-height: 50px;
    background-color: $background_color1;
    color:$font-color1;
    font-size: $font_medium;
    padding-left: 30px;

  }


  @media screen and (max-width: 768px) {
    ul li img {
      width: 100%;
      height: auto;
    }
  }
}

</style>
