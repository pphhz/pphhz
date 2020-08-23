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
            <build-vue-project></build-vue-project>
        </li>
        <li>
            <slot-use></slot-use>
        </li>
        <li>
             <father-son-pass-data></father-son-pass-data>
         </li>
        <li>
            <knowledge-node></knowledge-node>
        </li>
        <li>
            <send-request></send-request>
        </li>
    </ul>
  </div>
</template>


<script>
    import Github from '../Content/Github'
    import Git from '../Content/Git'
    import SlotUse from '../Content/SlotUse'
    import SSH from '../Content/SSH'
    import BuildVueProject from '../Content/BuildVueProject'
    import FatherSonPassData from '../Content/FatherSonPassData'
    import SendRequest from '../Content/SendRequest'
    import KnowledgeNode from '../Content/KnowledgeNode'

export default {
  name: 'BuildSite',
  components:{
      Github,
      SSH,
      BuildVueProject,
      Git,
      SlotUse,
      FatherSonPassData,
      SendRequest,
      KnowledgeNode,
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
