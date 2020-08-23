<template>
  <div class="buildsite">
    <ul>
        <li>
            <Github></Github>
        </li>
        <li>
            <Git></Git>
        </li>
        <li>
          <SSH></SSH>
        </li>
        <li>
            <BuildVueProject></BuildVueProject>
        </li>
        <li>
            <Slot></Slot>
        </li>
        <li>
             <FatherSonPassData></FatherSonPassData>
         </li>
    </ul>
  </div>
</template>


<script>
    import Github from '../Content/Github'
    import Git from '../Content/Git'
    import Slot from '../Content/Slot'
    import SSH from '../Content/SSH'
    import BuildVueProject from '../Content/BuildVueProject'
    import FatherSonPassData from '../Content/FatherSonPassData'

export default {
  name: 'BuildSite',
  components:{
      Github,
      SSH,
      BuildVueProject,
      Git,
      Slot,
      FatherSonPassData,
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
.buildsite{
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
