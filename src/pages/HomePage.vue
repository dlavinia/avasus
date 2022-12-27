<template>

    <h1 class="title title-home">Parceiros</h1>
    <ParceirosHome></ParceirosHome>
</template>
<script>
import ParceirosHome from "@/components/ParceirosHome.vue";
export default {
  name: 'HomePage',
  components:{
    ParceirosHome
  }
}
</script>
<style scoped>
  .title-home{
    font-size: 30px;
    text-align: center;
  }
</style>


