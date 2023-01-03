<template>
    <section id="header-curso" :style="'background-image:url('+capa+')'">
      <main class="header-content" >
        <section class="bread-cumb">
          <router-link to="/">Inicio /</router-link>
          <router-link to="#">Cursos /</router-link>
          <router-link to="/cursos/modulos">Módulos /</router-link>
          <p>{{ titulo }}</p>
        </section>
        <section class="infos">
            <h1>{{ titulo }}</h1>
            <h2>{{ parceiros }}</h2>
        </section>
      </main>
      <div id="header-overlay"></div>
    </section>

</template>
<script>
export default {
  name: 'HeaderCurso',
  props:{
    capa:String,
    titulo: String,
    parceiros: String,

  },

}
</script>

<style scoped>
    #header-curso{
      width: 100%;
      height: 270px;
      background-repeat: no-repeat;
      background-position:center;
      background-size: cover;
      position: relative;
      display: flex;
      justify-content: center;
    }
    #header-overlay{
      height: 100%;
      width: 100%; 
      background-color: #757575;
      mix-blend-mode: multiply;   
      position: absolute;
      top: 0;
      left: 0;
    }
    .header-content{
      width: 70%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      z-index: 2;
    }
    #header-curso .bread-cumb a{
      color: var(--text-color-light);
    }
    #header-curso .bread-cumb p{
      color: #fff;
    }
    #header-curso h1{
      font-weight: 700;
      font-size: 38px;
      color:#fff;
      margin: 30px 0;
    }
    #header-curso h2{
      font-weight: 600;
      font-size: 25px;
      color:#fff;
      margin: 30px 0;
    }
</style>