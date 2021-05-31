<template>
  <div class="life">
    <h3>我的画</h3>
      <ul>
          <li><img src="../assets/images/waterColor/threePersons.jpg" alt="threePersons" title="threePersons"></li>
          <li><img src="../assets/images/waterColor/aLook.jpg" alt="aLook" title="aLook"></li>
          <li><img src="../assets/images/waterColor/sing.jpg" alt="sing" title="油管节目"></li>
          <li><img src="../assets/images/waterColor/live.jpg" alt="live" title="live"></li>
          <li><img src="../assets/images/waterColor/diy.jpg" alt="diy" title="缝缝补补又三年"></li>
          <li><img src="../assets/images/waterColor/cat (2).jpg" alt="猫" title="猫"></li>
          <li><img src="../assets/images/waterColor/cat (3).jpg" alt="猫" title="猫"></li>
          <li><img src="../assets/images/waterColor/dog (2).jpg" alt="朋友的狗" title="朋友的狗"></li>
          <li><img src="../assets/images/waterColor/2b.jpg" alt="2b" title="2b"></li>
          <li><img src="../assets/images/waterColor/fight.jpg" alt="嘴角起泡想打架" title="嘴角起泡想打架"></li>
          <li><img src="../assets/images/waterColor/theSixSense.jpg" alt="第六感" title="第六感"></li>
          <li><img src="../assets/images/waterColor/theSixSense1.jpg" alt="第六感" title="第六感"></li>
          <li><img src="../assets/images/waterColor/utena.jpg" alt="utena" title="utena"></li>
          <li><img src="../assets/images/waterColor/youtube.jpg" alt="YouTube纪录片" title="YouTube纪录片"></li>
          <li><img src="../assets/images/waterColor/Q.jpg" alt="Q？" title="Q？"></li>
          <li><img src="../assets/images/waterColor/1LDK.jpg" alt="1LDK" title="1LDK"></li>
          <li><img src="../assets/images/waterColor/okiku.jpg" alt="okiku" title="okiku"></li>
          <li><img src="../assets/images/waterColor/praiseMe.jpg" alt="夸我" title="夸我"></li>
          <li><img src="../assets/images/waterColor/eReol.jpg" alt="诶reol猫" title="诶reol猫"></li>
          <li><img src="../assets/images/waterColor/redReol.jpg" alt="红发reol猫" title="红发reol猫"></li>
          <li><img src="../assets/images/waterColor/yellowDog.jpg" alt="表情包黄狗" title="表情包黄狗"></li>
          <li><img src="../assets/images/waterColor/cat.jpg" alt="表情包猫猫" title="表情包猫猫"></li>
          <li><img src="../assets/images/waterColor/street.jpg" alt="晚街" title="晚街"></li>
          <li><img src="../assets/images/waterColor/diana.jpg" alt="戴亚" title="戴亚"></li>
          <li><img src="../assets/images/waterColor/dog.jpg" alt="色诱" title="色诱"></li>
          <li><img src="../assets/images/waterColor/kaneki.jpg" alt="金木研" title="金木研"></li>
      </ul>
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
  ul {
    width: 80%;
    margin: 0 auto;
      li {
      overflow: hidden;
      vertical-align: top;
      display: inline-block;
      max-height: 400px;
      padding: 10px;
      list-style: none;
      border: 1px solid #000;
      border-radius: 10px;
        img {
          height: 400px;
          &:hover {
            transform: scale(1.2);
            transition: all 2s;
          }
        }
    }
  }

  @media screen and (max-width: 768px) {
    ul li img {
      width: 100%;
      height: auto;
    }
  }
}

</style>
