<template>
    <div class="train">
        <div class="container">
            <!--          乐理截图、笔记，网站，练习-->
            <div class="title">
                <div @click="closeTrain">⬅</div>
                <span v-if="param=='train'">练习</span>
                <span v-if="param=='website'">网站</span>
                <span v-if="param=='study'">学习</span>
            </div>

            <!--           1. 网站-->
            <div v-if="param=='website'">
            <pre>
        基础乐理：
        <a href="https://study.163.com/course/courseMain.htm?courseId=1512007">乐理入门篇</a>

        吉他：
        <a href="https://study.163.com/course/courseMain.htm?courseId=821008">从零到高手，吉他入门标准教程</a>
            </pre>
            </div>


            <!--            2.练习-->
            <div style="text-align: center" v-if="param=='train'">
                <img class="autoRotate" ref="disc" src="../../assets/images/black.png">
                <p style="padding-top: 1%">星条旗进行曲</p>
                <audio @play="play" @pause="pause" src="../../assets/theStarsAndStripesForever.aac" controls
                       loop></audio>
            </div>


        </div>
    </div>
</template>

<script>

    export default {
        name: "Train",
        components: {},
        data() {
            return {
                songUrl: '',
                isPlaying: false,
            }
        },
        props: {
            param: {
                type: String
            }
        },
        methods: {
            play: function () {
                this.isPlaying = true
                this.$refs.disc.classList.add('discPlaying')
            },
            pause: function () {
                this.isPlaying = false
                this.$refs.disc.classList.remove('discPlaying')
            },
            closeTrain() {
                this.$emit("toggleSon");
            }
        }

    }
</script>

<style lang="scss" scoped>
    @import "../../assets/css/variable";

    a {
        color: $font-active-color-theme;

        &:hover {
            color: $font-active-color-theme2;
        }
    }

    .train {
        margin-top: 40px;

        .container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -45%);
            width: 60%;
            height: 80%;
            background-color: $background_color5;
            color: $font-color;
            border-radius: 30px;

            pre {
                font-size: $font_large;
                padding: 5%;
            }

            .title {
                text-align: center;
                background-color: $background-color4;
                line-height: 40px;
                border-radius: 10px 10px 0 0;
                font-size: $font_large;
                position: relative;

                div {
                    position: absolute;
                    left: 0;
                    top: 0;
                    padding: 0 20px;
                    cursor: pointer;
                    border-radius: 10px 0 0 0;
                    background-color: $background-color6;
                }
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
                margin-top: 7%;
                width: 30%;
            }

            /* 正在播放 */
            .discPlaying {
                animation-play-state: running;
            }

            audio {
                width: 100%;
                height: 50px;
                position: absolute;
                bottom: 0;
                left: 0;
            }

        }
    }

</style>
