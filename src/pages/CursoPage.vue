<template >
    <section>
        <HeaderCurso :capa=curso.capa :titulo=curso.titulo :parceiros=curso.parceiros></HeaderCurso>
        <main class="page-container content">
          <h1 class="title">Informações Gerais do Curso</h1>
        <InfosGerais  
         :duracao=curso.duracao
         :criacao= curso.criado_em
         :matriculados= curso.matriculados
         :avaliacao=curso.avaliacao
         :numero_avaliacoes= curso.numero_avaliacoes></InfosGerais>
        
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
        curso: Object
      }
    },
    methods: {
     
     async getData() {
       const res = await fetch("http://localhost:3004/cursos/"+this.$route.params.id);
       const finalRes = await res.json();
       this.curso = finalRes;
       console.log(this.curso)
       },
   },
   created() {
     this.getData()
   }
}
</script>
<style scoped>
</style>


