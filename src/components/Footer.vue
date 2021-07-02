<template>
  <div class="footer">
    <div class="footer-right">
      <div style="position: relative;">
        <a href="#" target="_self" style="color:whitesmoke;position: absolute;left: 16px;top: 15px;">^</a>
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
  data(){
    return{
    }
  },
  methods:{
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer-right{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position:fixed;
  right: 20px;
  bottom: 20px;
  background-color: rgba(0,0,0,0.5);
}
</style>
