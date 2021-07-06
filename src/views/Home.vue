<template>
  <div class="home">
      <div class="home-middle">
        <div class="warpper">
            <router-view></router-view>
        </div>
      </div>
      <div class="home-left">
        <ul>
          <router-link tag="li" to="/home/htmlCss" class="item">
            <span>Html、Css📓</span>
          </router-link>
            <router-link tag="li" to="/home/js" class="item">
                <span>JavaScript📓</span>
            </router-link>
          <router-link tag="li" to="/home/web" class="item">
            <span>前端学习网站💻</span>
          </router-link>
           <router-link tag="li" to="/home/plugIn" class="item">
            <span>插件、库💻</span>
          </router-link>
          <router-link tag="li" to="/home/buildSite" class="item">
            <span>搭建网页💻</span>
          </router-link>
          <router-link tag="li" to="/home/interview" class="item">
            <span>就业面试🙎</span>
          </router-link>
          <router-link tag="li" to="/home/note" class="item">
            <span>随笔📜</span>
          </router-link>
          <router-link tag="li" to="/home/website" class="item">
            <span>生活干货网站📺</span>
          </router-link>
        </ul>
      </div>

      <div class="home-right">
        <h3>平和猴子的兴趣</h3>
            <p>前端</p>
            <p>美剧日剧等</p>
            <p>动漫</p>
            <p>音乐（Reol）</p>
            <p>画画</p>
            <p>吉他</p>
            <p>单机剧情类游戏</p>
          <h3 style="margin-top: 40px;">我画的微信表情包：</h3>
          <img src="../assets/images/qrCode.jpg" alt="" style="width: 100px;margin-top: 20px;">
          <h3 style="margin-top: 40px;">友情链接：（我参与制作）</h3>
              <p style="margin-top: 10px;"><a href="https://www.reol.fans/">Reol粉丝网站</a></p>
              <p><a href="https://reol.work/">Reol2019生贺网站</a></p>
      </div>
  </div>
</template>

<script>

export default {
  name:"Home",
  components:{

},


}
</script>

<style lang="scss" scoped>
@import "../assets/css/variable";
a{
    color:$font-color2;
    &:hover{
        color:$font-active-color-theme1;
    }
}
.item{
  //改鼠标为小手
  cursor:pointer;
  &:hover{
    background-color: $background-color3;
  }
}
.home{
  width: 100%;
  /*height: 500px;*/
  color:$font-color1;
  font-size: $font_medium;
  .home-left{
      width: 250px;
      height: 100%;
      // margin-left: -100%;
      box-sizing: border-box;
      float: left;
      text-align: center;
      background-color:$background-color1;
      border-bottom-right-radius:10px;
      position:fixed;
      left: 0;
      top: 40px;
      ul{
        li{
          line-height: 40px;
          border-bottom: 1px solid $border-color1;
        }
      }
  }
  .home-middle{
        width: 100%;
        float: left;
        color:$font-color3;
        font-size: $font_large;

      .warpper{
        background: rgb(148, 200, 221);
        margin: 40px 250px 0 250px;

      }
  }
  .home-right{
      width: 250px;
      height: 100%;
      // margin-left: -250px;
      float: left;
      padding: 15px;
      box-sizing: border-box;
      background-color:$background-color1;
      border-bottom-left-radius:10px;
      position:fixed;
      right: 0;
      top: 40px;
      p:first-of-type{
        margin-top: 20px;
    }
  }

}

</style>
