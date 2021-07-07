<template>
    <div class="about">
        <div class="warpper">
        <h3>关于</h3>
        <pre>
    本网页是平和猴子因为个人兴趣制作的博客网页。
    后来，我发现还是本地写md更方便，而且怕泄密，笔记就很少更新。
    有空会慢慢丰富其他生活娱乐方面的内容。

    在“主页-生活干货网站”里，写了一些网址，个人觉得还是比较实用的，可以收藏（收藏本网页就够了嘿嘿嘿）
    “主页-插件、库”里包含的“浏览器插件”和“小书签”，我觉得对开发者以外的朋友也很有帮助，像破解视频vip、复制百度文库的文字等，有用！插件、书签的使用也不复杂。
    “主页”里其余的内容几乎都是前端知识了，也可以看看。

    如果对前端感兴趣，推荐江哥的视频，链接：<a href="https://study.163.com/instructor/1026367774.htm?_trace_c_p_k2_=b99aa9dd0c7548b69eab5c2a5d8374e1">网易云课堂</a> <a href="https://www.it666.com/">知播渔教育（江哥的网站）</a>
        </pre>
        </div>
    </div>
</template>

<script>


    export default {
        name: "About",
        components: {},


    }
</script>

<style lang="scss" scoped>
    @import "../assets/css/variable";
    a{
        color:$font-active-color-theme;
        &:hover{
            color:$font-active-color-theme2;
        }
    }
    .about {
        /*min-width: 1200px;*/
        /*min-height: 577px;*/
        min-height: 100%;
        min-width: 100%;
        overflow: hidden;
        background-image: url('../assets/images/waterColor/theSixSense1.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        /*background-size: 100% 100%;*/
        position:fixed;
        top: 0;
        left: 0;
    }

    .warpper {
        /*margin: 0 auto;*/
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-45%);
        /*margin-top: 10%;*/
        width: 60%;
        height: 80%;
        background-color: $background_color5;
        color: $font-color;
        h3 {
            line-height: 50px;
            font-size: $font_huge;
            padding-top: 10px;
            padding-left: 50px;
        }

        pre {
            line-height: 30px;
            font-size: $font_medium;
            padding: 0 30px 30px 50px;
            word-wrap: break-word;
            white-space: pre-wrap;
        }
    }

</style>
