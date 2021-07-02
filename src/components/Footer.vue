<template>
    <div class="footer">
        <div class="footer-right" v-show="goTopShow">
            <div style="position: relative;cursor: default;width: 100%;height: 100%;" @click="goTop">
                <span style="color:whitesmoke;position: absolute;left: 16px;top: 15px;">^</span>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Footer',
        components: {
            // Login
        },
        data() {
            return {
                scrollTop: "",
                goTopShow: false
            }
        },
        watch: {
            scrollTop(val) {
                if (this.scrollTop > 500) {
                    this.goTopShow = true;
                } else {
                    this.goTopShow = false;
                }
            }
        },
        methods: {
            handleScroll() {
                this.scrollTop =
                    window.pageYOffset ||
                    document.documentElement.scrollTop ||
                    document.body.scrollTop;
                if (this.scrollTop > 500) {
                    this.goTopShow = true;
                }
            },
            goTop() {
                let timer = null,
                    _that = this;
                cancelAnimationFrame(timer);
                timer = requestAnimationFrame(function fn() {
                    if (_that.scrollTop > 0) {
                        _that.scrollTop -= 250;
                        document.body.scrollTop = document.documentElement.scrollTop =
                            _that.scrollTop;
                        timer = requestAnimationFrame(fn);
                    } else {
                        cancelAnimationFrame(timer);
                        _that.goTopShow = false;
                    }
                });
            }
        },
        mounted() {
            window.addEventListener("scroll", this.handleScroll);
        },
        destroyed() {
            window.removeEventListener("scroll", this.handleScroll);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .footer-right {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        position: fixed;
        right: 20px;
        bottom: 20px;
        background-color: rgba(0, 0, 0, 0.5);
    }
</style>
