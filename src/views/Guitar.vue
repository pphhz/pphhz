<template>
  <div class="guitar">
      <div class="container">
          <p class="title">星条旗进行曲</p>
              <img class="autoRotate" ref="disc" src="../assets/images/black.png"></img>
          <audio @play="play" @pause="pause" src="../assets/theStarsAndStripesForever.aac" controls  loop></audio>
      </div>
  </div>
</template>

<script>


export default {
  name:"Guitar",
  components:{
  },
    data(){
      return{
          songUrl:'',
          isPlaying:false,
        }
    },
    methods:{
        play:function (){
            this.isPlaying=true
            this.$refs.disc.classList.add('discPlaying')
        },
        pause:function (){
            this.isPlaying=false
            this.$refs.disc.classList.remove('discPlaying')
        },
    }

}
</script>

<style lang="scss" scoped>
@import "../assets/css/variable";
.guitar{
  margin-top: 40px;
    .container{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-45%);
        width: 60%;
        height: 80%;
        background-color: $background_color5;
        color: $font-color;
        border-radius: 30px;
        text-align: center;
        .title{
            margin-top: 20px;
            font-size: $font_large;
        }
        /* 旋转的动画 */
        @keyframes Rotate {
            from {
                transform: rotateZ(0);
            }
            to {
                transform: rotateZ(360deg);
            }
        }
        /* 旋转的类名 */
        .autoRotate {
            animation-name: Rotate;
            animation-iteration-count: infinite;
            animation-play-state: paused;
            animation-timing-function: linear;
            animation-duration: 5s;
            margin-top: 10%;
            width: 30%;
        }
        /* 正在播放 */
        .discPlaying {
            animation-play-state: running;
        }
        audio{
            width: 100%;
            height: 50px;
            position: absolute;
            bottom: 0;
            left: 0;
        }

    }
}

</style>
