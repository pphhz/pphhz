<template>
  <div class="note">
    <ul>
        <li>
          <BuildNodeJS></BuildNodeJS>
        </li>
         <li>
          <InstallNRMandCNPM></InstallNRMandCNPM>
        </li> 
        <li>
          <Reorder></Reorder>
        </li>
        
    </ul>
  </div>
</template>


<script>
import BuildNodeJS from '../Content/BuildNodeJS'
import InstallNRMandCNPM from '../Content/InstallNRMandCNPM'
import Reorder from '../Content/Reorder'
export default {
  name: 'Note',
  components:{
    BuildNodeJS,
    InstallNRMandCNPM,
    Reorder,
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

.note{
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
