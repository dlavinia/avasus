<template>
    <div class="card">
      <figure>
        <img :src=capa>
      </figure>
      <section class="infos">
        <h1>{{ titulo}}</h1>
        <h2>{{ parceiros}}</h2>
      </section>
      <section class="info-icon">
        <img class="icon" src="@/assets/icons/users.svg">
        <p>{{ matriculados }}</p>
      </section>
      <section class="info-icon">
        <img class="icon" src="@/assets/icons/clock.svg">
        <p>{{ duracao }}</p>
      </section>
      <RatingApp :a=avaliacao></RatingApp>
      <router-link  :to="'cursos/'+id" class="btn btn-primary">
        Ver módulo
      </router-link>
    </div>
</template>
<script>
import RatingApp from "@/components/RatingApp.vue";
export default {
    name: 'DestaquesCard',
    components:{
      RatingApp
    },
    props:{
      id:Number,
      titulo:String,
      parceiros: String,
      capa:String,
      matriculados: Number,
      duracao:String,
      avaliacao:String

    }

}

</script>
<style scoped>
    .card{
      margin-top: 30px;
      width: 70%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      background-color: var(--bg-card);
      padding: 1.2rem;
      border-radius: 20px;
    }
    .card section{
      padding: 0 20px;
    }
    h1{
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      color: var(--text-color-dark);
    }
    h2{
      font-weight: 600;
      font-size: 13px;
      line-height: 16px;
      color:var(--main-color)
    }
    .infos{
      width:34%;
    }
    figure {
      width: 120px;
      height: 120px;
      overflow: hidden;
      border-radius: 20px;

    }

    figure img{
      height: 100%;
    }

    
</style>