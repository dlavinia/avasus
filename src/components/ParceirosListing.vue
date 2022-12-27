<template>
  <section class="parceiros">

      <p> {{ listItems.length }}</p>

      <ParceirosCard  v-for="item in listItems" :key="item.id"
      :titulo=item.titulo 
      :capa=item.capa ></ParceirosCard> 
    </section>
</template>
<script>
import ParceirosCard from "@/components/ParceirosCard.vue";
export default {
    name: 'ParceirosListing',
    components:{
      ParceirosCard
    },
    data() {
      return {
        listItems: []
      }
    },
    methods: {
      async getData() {
        const res = await fetch("http://localhost:3004/parceiros");
        const finalRes = await res.json();
        this.listItems = finalRes;
        console.log(finalRes)
      }
    },
    mounted() {
      this.getData()
    }
}

</script>
<style scoped>
  .parceiros{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

</style>
