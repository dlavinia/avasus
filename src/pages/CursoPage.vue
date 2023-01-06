<template >
  <section>
    <HeaderCurso :capa=curso.capa :titulo=curso.titulo :parceiros=curso.parceiros></HeaderCurso>
    <main class="page-container content">
      <h1 class="title">Informações Gerais do Curso</h1>
      <InfosGerais :duracao=curso.duracao :criacao=curso.criado_em :matriculados=curso.matriculados
        :avaliacao=curso.avaliacao :numero_avaliacoes=curso.numero_avaliacoes></InfosGerais>
      <h2 class="title">Sobre o curso</h2>
      <p> {{ curso.sobre }}</p>

      <h2 class="title">Objetivos</h2>
      <strong>Objetivo Geral </strong>
      <p> {{ curso.objetivo_geral }}</p>

      <section class="infoss" v-if="curso.objetivo_especifico">
        <strong> Objetivos Específicos </strong>
        <p> {{ curso.objetivo_especifico }}</p>
      </section>

      <section v-if="curso.recursos_educacionais">
        <h2 class="title">Recursos Educacionais</h2>
        <p> {{ curso.recursos_educacionais }}</p>
      </section>

      <h2 class="title">Créditos</h2>
      <div class="infoss">
        <section v-for="c in curso.creditos" :key="c">
          <img class="capa" :src=c.capa>
        </section>
      </div>
    </main>
  </section>
</template>

<script>
import HeaderCurso from "@/components/HeaderCurso.vue";
import InfosGerais from "@/components/InfosGerais.vue";

export default {
  name: 'CursoPage',
  components: {
    HeaderCurso,
    InfosGerais
  },
  data() {
    return {
      curso: Object,
      capa: String
    }
  },
  methods: {

    async getData() {
      const res = await fetch("http://localhost:3004/cursos/" + this.$route.params.id);
      const finalRes = await res.json();
      this.curso = finalRes;
      this.capa = this.curso.capa
      this.getCapa(this.capa)

    },

    getCapa(url) {
      document.getElementById("header-curso").style.backgroundImage = "url('" + url + "')"
    }
  },
  created() {
    this.getData()
  },

}
</script>
<style scoped>
h2 {
  font-size: 25px;
  text-align: center;
  margin-top: 15px;
}

p, strong {
  font-size: 16px;
  line-height: 20px;
  text-align: justify;
  width: 100%;
  margin-bottom: 15px;
}

.capa {
  width: 220px;
  max-width: 200px;
}

.infoss {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
}
</style>


