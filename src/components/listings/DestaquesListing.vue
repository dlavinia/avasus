<template>
    <section class="content">  
      <section class="abas">
        <ul>
          <li @click="getData('matriculados')" :class="{abaActive: abaActive=='matriculados'}" id="matriculados"> Mais populares</li>
          <li @click="getData('avaliacao')"  :class="{abaActive: abaActive=='avaliacao'}"  id="avaliacao"> Mais bem avaliados</li>
          <li @click="getData('criado_em')"  :class="{abaActive: abaActive=='criado_em'}"  id="criado_em"> Mais recentes</li>
        </ul>
      </section>
      <section class="destaques">
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
      <router-link class="btn btn-primary" to="cursos/modulos">Ver mais</router-link>
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
        abaActive: String
      }
    },
    methods: {
     
      async getData(aba) {
        const res = await fetch("http://localhost:3004/cursos?_sort="+ aba +"&_order=desc&_limit=3");
        const finalRes = await res.json();
        this.listItems = finalRes;
        this.abaActive = aba;
        console.log(this.abaActive)
        console.log(aba)
        
        },
    },
    mounted() {
      this.getData('matriculados')
    }
  }
  
  </script>
  <style scoped>
  @import '../../styles/pagination.css';
  .abas{
    width: 100%;
    display: flex;
    justify-content: center;
  }
    .abas ul{
      display: flex;
      width: 70%;
      }
    .abas ul li{
      margin-right: 30px;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      color: var(--text-color-dark);
      padding-bottom: 10px;
      }
    .abas ul li:hover{
      cursor: pointer;
      
      }
    .abaActive{
      border-bottom:3px solid var(--second-color);
    }

    .destaques{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .btn-primary{
      font-size: 25px;
     line-height: 30px;
     padding: 10px 100px;
     border-radius: 25px;
     margin: 3rem;
    }
  </style>
  