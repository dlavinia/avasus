<template>
    <div class="card">
        <section class="title title-card">
            <h2> Dados Gerais </h2>
        </section>
        
        <section class="info info25">
            <div class="label">
                <img class="icon" src="@/assets/icons/users.svg">
                <p>Total de usuários registrados </p>
            </div>
            <h2> {{ registrados }} </h2>
        </section>
        <section class="info info25">
            <div class="label">
                <img class="icon" src="@/assets/icons/document.svg">
                <p>Inscrições realizadas </p>
            </div>
            <h2> {{ inscricoes_realizadas }} </h2>
        </section>
        <section class="info info25">
            <div class="label">
                <img class="icon" src="@/assets/icons/ativos.svg">
                <p>Cursos Ativos </p>
            </div>
            <h2> {{ cursos_ativos }} </h2>
        </section>
        <section class="info info25">
            <div class="label">
                <img class="icon" src="@/assets/icons/certificado.svg">
                <p>Direito à Certificação </p>
            </div>
            <h2> {{ direito_certificacao }} </h2>
        </section>
        <section class="info info50">
            <div class="label">
                <img class="icon" src="@/assets/icons/invest_curso.svg">
                <p>Investimento médio por curso</p>
            </div>
            <h2> {{ invest_curso }} </h2>
        </section>
        <section class="info info50">
            <div class="label">
                <img class="icon" src="@/assets/icons/invest_aluno.svg">
                <p>Investimento médio por aluno</p>
            </div>
            <h2> {{ invest_aluno }} </h2>
        </section>
    </div>
</template>
<script>
export default {
    name: 'DestaquesCard',

    props: {
        registrados: Number,
        inscricoes_realizadas: Number,
        cursos_ativos: Number,
        direito_certificacao: Number,
        invest_curso: String,
        invest_aluno: String,
    }

}

</script>
<style scoped>


h2 {
    font-weight: 600;
    font-size: 25px;
    line-height: 16px;
    color: var(--main-color);
    margin-top:15px;
    text-align: center;
}
.info25{
    width: 25%;
    margin-bottom: 45px;
}
.info50{
    width: 50%;
}
.info .label{
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
}
.info .label .icon{
    height: 18px;
    margin-right: 5px;
}

</style>