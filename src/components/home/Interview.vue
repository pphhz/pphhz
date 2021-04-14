<template>
  <div class="interview">
        <h3>前端面试题（点击下载）</h3>
        <ul>
            <li><a href="./webInterview1.md" download="webInterview1.md">WEB大前端面试题.md</a></li>
            <!--<li><a href="./webInterview.docx" download="webInterview.docx">前端面试宝典.docx</a></li>-->
        </ul>
  </div>
</template>

<script>
export default {
  name: 'Interview',
  methods:{

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" scoped>
@import '../../assets/css/variable';

.interview{
    height: 500px;
    background-color: $background-color3;
     h3{
    line-height: 50px;
    padding-left: 20px;
    background-color: $background_color2;
    }
   ul{
        li{
        display: inline-block;
        margin: 15px;
            a{
            color:$font-color2;
            font-size:font_medium_s;
                &:hover{
                    color:$font-color1;
                }
            }
        }
    }
}
</style>
