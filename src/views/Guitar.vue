<template>
    <div class="guitar">
        <div class="container" v-if="isShowHome">
            <!--          乐理截图、笔记，网站，练习-->
            <div class="son" @click="toggle('website')"><span>网站</span></div>
            <div class="son" @click="toggle('train')"><span>练习</span></div>
            <div class="son" @click="toggle('study')"><span>学习</span></div>
            <div class="son" @click="toggle('')"><span></span></div>
        </div>
        <train ref="train" v-if="isShowTrain" @toggleSon="toggle" :param="param"></train>
    </div>
</template>

<script>

    import Train from '../components/guitar/Train'

    export default {
        name: "Guitar",
        components: {
            Train
        },
        data() {
            return {
                isShowTrain: false,
                isShowHome: true,
                param: '',
            }
        },
        methods: {
            toggleSon() {
                this.isShowTrain = !this.isShowTrain;
                this.isShowHome = !this.isShowHome;
            },
            toggle(params) {
                this.toggleSon()
                if (params == 'website') {
                    this.param = 'website'
                } else if (params == 'train') {
                    this.param = 'train'
                } else if (params == 'study') {
                    this.param = 'study'
                } else {
                    this.param = ''
                }
            }
        }

    }
</script>

<style lang="scss" scoped>
    @import "../assets/css/variable";

    .guitar {
        margin-top: 40px;

        .container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -45%);
            width: 60%;
            height: 50%;
            background-color: $background_color5;
            color: $font-color4;
            font-size: $font_huge;
            border-radius: 10px;
            text-align: center;
            padding: 4px;
            display: flex;

            .son {
                width: 50%;
                height: 100%;
                margin: 0 2px 0 2px;
                border-radius: 10px;
                background-color: $background-color7;
                cursor: pointer;
                position: relative;

                span {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);

                    z-index: 99;
                }
            }


        }
    }

</style>
