<template>
    <div class="header">
        <div class="header-left">
            <ul v-for="(item,index) in dict">
                <router-link tag="li" :to="item.path" class="item" :class='{bg:index==activeIndex}'>
                    <div @click="bgcChange(index)">{{item.discp}}</div>
                </router-link>
            </ul>

        </div>
        <div class="header-right">
            <ul>
                <li v-show="show">3045078817</li>
                <li @click="toggle" class="item">平和猴子🐧</li>
                <!--        <li><button href="" @click="changeIsShowLogin">登录/注册</button></li>-->
            </ul>
        </div>
        <!--    <Login v-model="isShowLogin" @balabala="queryFunction()"/>-->

    </div>
</template>

<script>
    // import Login from '@/views/Login'
    export default {
        name: 'Header',
        components: {
            // Login
        },
        data() {
            return {
                show: false,
                isShowLogin: false,
                activeIndex: 0,
                dict:
                    [
                        {
                            path: '/home',
                            discp: '主页🏠'
                        },
                        {
                            path: '/life',
                            discp: '我的画🎨'
                        },
                        {
                            path: '/Guitar',
                            discp: '吉他🎸'
                        },
                        {
                            path: '/support',
                            discp: '支持我💰'
                        },
                        {
                            path: '/about',
                            discp: '关于❔'
                        },
                    ]
            }
        },
        methods: {
            bgcChange(index) {
                this.activeIndex = index
            },
            toggle() {
                this.show = !this.show;
            },
            changeIsShowLogin() {
                this.isShowLogin = true;
            },
            queryFunction() {
                this.isShowLogin = false;
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import '../assets/css/variable';

    .item {
        //改鼠标为小手
        cursor: pointer;
    }

    .bg {
        background-color: $background-color4;
    }

    .header {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid $border-color;
        background: $background-color;
        z-index: 999;

        ul {
            display: inline;

            li {
                width: 100px;
                line-height: 39px;
                float: left;
                text-align: center;
                font-size: $font_medium;
                color: $font-color;
            }
        }

        .header-right {
            margin-right: 20px;
        }
    }
</style>
