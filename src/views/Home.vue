<template>
    <div class="home">
        <div class="home-middle">
            <div class="warpper">
                <router-view></router-view>
            </div>
        </div>
        <div class="home-left">
            <ul v-for="(item,index) in dict">
                <router-link tag="li" :to="item.path" class="item" :class='{bg:index==activeIndex}'>
                    <div @click="bgcChange(index)">{{item.discp}}</div>
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
            <p>买基金</p>
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
        name: "Home",
        components: {},
        data() {
            return {
                activeIndex: null,
                dict:
                    [
                        {
                            path: '/home/htmlCss',
                            discp: 'Html、Css📓'
                        },
                        {
                            path: '/home/js',
                            discp: 'JavaScript📓'
                        },
                        {
                            path: '/home/buildSite',
                            discp: '搭建网页📜'
                        },
                        {
                            path: '/home/note',
                            discp: '随笔📜'
                        },
                        {
                            path: '/home/interview',
                            discp: '就业面试🙎'
                        },
                        {
                            path: '/home/plugIn',
                            discp: '插件、库💻'
                        },
                        {
                            path: '/home/web',
                            discp: '前端学习网站💻'
                        },
                        {
                            path: '/home/website',
                            discp: '生活干货网站📺'
                        }
                    ]
            }
        },
        created() {
            this.bgcChange(index)
        },
        methods: {
            bgcChange(index) {
                this.activeIndex = index
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/css/variable";

    a {
        color: $font-color2;

        &:hover {
            color: $font-active-color-theme1;
        }
    }

    .bg {
        background-color: $background-color3;
    }

    .item {
        //改鼠标为小手
        cursor: pointer;
    }

    .home {
        width: 100%;
        /*height: 500px;*/
        color: $font-color1;
        font-size: $font_medium;

        .home-left {
            width: 250px;
            height: 100%;
            // margin-left: -100%;
            box-sizing: border-box;
            float: left;
            text-align: center;
            background-color: $background-color1;
            border-bottom-right-radius: 10px;
            position: fixed;
            left: 0;
            top: 40px;

            ul {
                li {
                    line-height: 40px;
                    border-bottom: 1px solid $border-color1;

                    div {
                        width: 100%;
                    }
                }
            }
        }

        .home-middle {
            width: 100%;
            float: left;
            color: $font-color3;
            font-size: $font_large;

            .warpper {
                background: rgb(148, 200, 221);
                margin: 40px 250px 0 250px;

            }
        }

        .home-right {
            width: 250px;
            height: 100%;
            // margin-left: -250px;
            float: left;
            padding: 15px;
            box-sizing: border-box;
            background-color: $background-color1;
            border-bottom-left-radius: 10px;
            position: fixed;
            right: 0;
            top: 40px;

            p:first-of-type {
                margin-top: 20px;
            }
        }

    }

</style>
