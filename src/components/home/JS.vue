<template>
  <div class="js">
    <ul>
        <li>
          <arr-str-operate></arr-str-operate>
        </li>
    </ul>
  </div>
</template>


<script>
import ArrStrOperate from '../Content/ArrStrOperate'
export default {
  name: 'JS',
  components:{
      ArrStrOperate
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
<style scoped lang="scss" scoped>
@import '../../assets/css/variable';

.js{
  width: 100%;
  min-height: 500px;
  background-color: $background_color3;
  ul{
    li{
      border-bottom: 1px solid $border_color1;

    }
  }
}
</style>
