<template>
  <div class="htmlcss">
    <ul>
        <li>
          <CssCursor></CssCursor>
        </li>
        <li>
          <ScrollBar></ScrollBar>
        </li>
    </ul>
  </div>
</template>


<script>
import CssCursor from '../Content/CssCursor'
import ScrollBar from '../Content/ScrollBar'
export default {
  name: 'HtmlCss',
  components:{
    CssCursor,
    ScrollBar,
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

.htmlcss{
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
