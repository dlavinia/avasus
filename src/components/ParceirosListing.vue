<template>
    <div class="card" v-for="item in listItems" :key="item.id">
      <ParceirosCard :titulo=item.titulo :capa=item.capa ></ParceirosCard>
    </div>
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
        const res = await fetch("http://localhost:3004/parceiros?_page=1&_limit=6");
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

</style>
