<template>
 <BasicSlider></BasicSlider>
     <h1 class="title title-home">Módulos Educacionais </h1>
     <DestaquesListing></DestaquesListing>
    <h1 class="title title-home">Parceiros</h1>
    <ParceirosHome></ParceirosHome>
   
</template>
<script>
import ParceirosHome from "@/components/ParceirosHome.vue";
import DestaquesListing from "@/components/listings/DestaquesListing.vue";
import BasicSlider from "@/components/Slider.vue"

export default {
  name: 'HomePage',
  components:{
    ParceirosHome,
    DestaquesListing,
    BasicSlider
  }
}
</script>
<style scoped>
  .title-home{
    font-size: 30px;
    text-align: center;
    margin: 2rem 0;

  }
</style>


