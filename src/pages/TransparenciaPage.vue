<template>
    <section class="page-container content">
        <h1 class="title"> TransparĂȘncia</h1>
        <TransparenciaCard :registrados=dados_gerais.usuarios_registrados
            :inscricoes_realizadas=dados_gerais.incricoes_realizadas :cursos_ativos=dados_gerais.cursos_ativos
            :direito_certificacao=dados_gerais.direito_certificacao :invest_curso=dados_gerais.investimento_medio_curso
            :invest_aluno=dados_gerais.investimento_medio_aluno></TransparenciaCard>

        
        <PieChart></PieChart>
    </section>
</template>
<script>
import TransparenciaCard from "@/components/cards/TransparenciaCard.vue";
import PieChart from "@/components/charts/PieChart.vue";

export default {
    name: 'TransparenciaPage',

    components: {
        TransparenciaCard,    
        PieChart    
    },
    data() {
        return {
            dados_gerais: [],
        }

    },
    methods: {
        async getData() {
            const res = await fetch("http://localhost:3004/transparecia");
            const finalRes = await res.json();
            this.dados_gerais = finalRes.dados_gerais;
        },
    },
    mounted() {
        this.getData()
    }
}
</script>
<style scoped>

</style>


