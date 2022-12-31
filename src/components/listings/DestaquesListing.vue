<template>
    <section>  
      <section class="parceiros">
        <DestaquesCard v-for="item in listItems" :key="item.id" 
        :id="item.id"
        :titulo="item.titulo"
        :parceiros="item.parceiros"
        :capa= "item.capa"
        :matriculados= "item.matriculados"
        :duracao= "item.duracao"
        :avaliacao= "item.avaliacao"
        ></DestaquesCard>
      </section>
    </section>
  </template>
  <script>
  import DestaquesCard from "@/components/cards/DestaqueCard.vue";
  export default {
    name: 'DestaquesListing',
    components: {
        DestaquesCard,
    },
    data() {
      return {
        listItems: [],
      }
    },
    methods: {
     
      async getData() {
        const res = await fetch("http://localhost:3004/cursos?_page=1&_limit=3");
        const finalRes = await res.json();
        this.listItems = finalRes;
        console.log(finalRes)
      },
  


    },
    mounted() {
      this.getData()
    }
  }
  
  </script>
  <style scoped>
  @import '../../styles/pagination.css';
  
  </style>
  