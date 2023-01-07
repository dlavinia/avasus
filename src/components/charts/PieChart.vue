<template>
    <section class="card">
        <section class="title title-card">
            <h2>Usuários por curso</h2>
        </section>
        <GChart type="PieChart" :data="chartData" :options="chartOptions" :settings="{ packages: ['corechart'] }" />
        <section  id="chart-legend">

        </section>
    </section>
</template>

<script>
import { GChart } from 'vue-google-charts'
export default {
    name: 'PieChart',
    components: {
        GChart
    },

    data() {
        return {
            usuarios_por_curso: [],

            // Array will be automatically processed with visualization.arrayToDataTable function
            chartData: [],
            chartOptions: {
                width: 1200,
                height: 500,
                bar: { groupWidth: "70%" },
                isStacked: true,
                colors: ['#fff', '#D2202C', '#707070', '#2F2E41']
            },

        }
    },
    methods: {
        async getData() {
            const res = await fetch("http://localhost:3004/transparecia");
            const finalRes = await res.json();
            this.usuarios_por_curso = finalRes.usuarios_por_curso;
            console.log(this.usuarios_por_curso)
            this.chartData = [
                ['cursos', 'alunos'],
                [this.usuarios_por_curso[0].curso, this.usuarios_por_curso[0].usuarios],
                [this.usuarios_por_curso[1].curso, this.usuarios_por_curso[1].usuarios],
                [this.usuarios_por_curso[2].curso, this.usuarios_por_curso[2].usuarios],
                [this.usuarios_por_curso[3].curso, this.usuarios_por_curso[3].usuarios],
            ]
        },
    },
    created() {
        this.getData()
    }
}
</script>
<style >


svg:nth-child(1)>rect:nth-child(2) {
    fill: transparent;
}

.title {
    font-size: 30px;
   
}

#chart-legend div{
    width: 10px;
    height: 10px;
    background: red;
}

</style>