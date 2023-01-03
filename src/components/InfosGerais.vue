<template>
    <section id="infosgerais">     
      <section class="info-icon">
        <img class="icon" src="@/assets/icons/clock.svg">
        <p>{{duracao}}</p>
      </section>
      <section class="info-icon">
        <img class="icon" src="@/assets/icons/users.svg">
        <p>Desde {{criacao}}</p>
      </section>
      <section class="info-icon">
        <img class="icon" src="@/assets/icons/users.svg">
        <p>{{ matriculados }} alunos matriculados</p>
      </section> 
      <section class="info-icon">
        <RatingApp :a=4.32 bold></RatingApp>
      </section>
      
    </section>

</template>
<script>
import RatingApp from "@/components/RatingApp.vue";

export default {
  name: 'InfosGerais',
  components:{
      RatingApp
    },
  props:{
    duracao:String,
    criacao: String,
    matriculados: Number,
    avaliacao:String,
    numero_avaliacoes: Number
  },

}
</script>

<style scoped>
    #infosgerais{
        display: flex;
        justify-content: center;
        margin: 1rem;
    }
    #infosgerais p{
        font-weight: 600;
    }
</style>