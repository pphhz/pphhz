<template>
    <div v-if="value" class="login">
      <div class="window">
        <button @click="changeShow" style="float: right">X</button>
        <form action="">
          <h3>登录</h3>
          <label for="phone">账号：</label><input name="phone" id="phone" type="text">
          <label for="pwd">密码：</label><input name="pwd" id="pwd" type="password">
          <button :loading="loading" @click="submitForm" style="float: right">提交</button>
          <div style="margin-top: 50px;display:flex;justify-content:space-between;width: 100%;">
            <span @click="showLogUp">注册</span>
            <span @click="showForgetPwd">忘记密码</span>
          </div>
        </form>

        </div>
      <LogUp v-model="isShowLogUp" @balabala="queryFunction()"/>

    </div>
</template>

<script>
  import LogUp from '@/views/LogUp'

export default {
  name:"Login",
  components:{
    LogUp
  },
  data(){
    return{
      loading:false,
      isShowLogUp:false,
    }
  },
  props: ["value"],
  model: {
    prop: 'value',
    event: 'balabala'
  },
  methods: {
    changeShow() {
      this.$emit("balabala");
    },
    showForgetPwd() {
      this.isShowLogUp=true
    },
    showLogUp() {
      this.isShowLogUp=true
    },
    submitForm() {
      this.loading=true
    }
  },

}
</script>

<style lang="scss" scoped>
@import "../assets/css/variable";
.login{
  width: 100%;
  height: 100%;
  position: fixed;

  background-color: rgba(23, 21, 21, 0.7);
  .window{
    width: 300px;
    height: 200px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: $background-color2;
    border-radius: 5px;
    padding:10px 10px 10px 10px;
  }
  h3{
    font:bold $font_large arial;

  }
}

</style>
