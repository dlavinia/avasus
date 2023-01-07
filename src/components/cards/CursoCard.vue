<template>
    <div class="card-curso">
        <figure>
            <img :src=capa>
        </figure>

        <section class="infos">
            <h1>{{ titulo }}</h1>
            <h2>{{ parceiros }}</h2>
        </section>
        <section class="content-infos">
            <section class="info-icon">
                <img class="icon" src="@/assets/icons/users.svg">
                <p>{{ matriculados }}</p>
            </section>
            <section class="info-icon">
                <img class="icon" src="@/assets/icons/clock.svg">
                <p>{{ duracao }}</p>
            </section>
            <RatingApp :a=avaliacao></RatingApp>
        </section>

        <section class="resumo">
            <p> {{ resumo }}</p>
        </section>
        <section class="ver-curso" >
            <router-link :to="'/cursos/'+id"> Ver curso</router-link>
        </section>
    </div>
</template>
<script>
import RatingApp from "@/components/RatingApp.vue";
export default {
    name: 'CursoCard',
    components: {
        RatingApp
    },
    props: {
        id: Number,
        titulo: String,
        parceiros: String,
        capa: String,
        matriculados: Number,
        duracao: String,
        avaliacao: String,
        resumo: String

    }

}

</script>
<style scoped>
.card-curso{
    width: 30%;
    margin: 1rem 0;

}
.card {
        margin-top: 30px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        padding: 40px;
        border-radius: 20px;
        flex-wrap: wrap;
    
    }

h1 {
    font-weight: 600;
    font-size: 22px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 24px;
    color: var(--text-color-dark);
    margin: 10px 0;
}

h2 {
    font-weight: 600;
    font-size: 15px;
    line-height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    /* number of lines to show */
    line-clamp: 1;
    -webkit-box-orient: vertical;
    color: var(--main-color)
}

figure {
    width: 100%;
    height: 200px;
    min-height:200px;
    overflow: hidden;
    border-radius: 20px;

}

figure img {
    width: 100%;
}

.info-icon img {
    width: 18px;
}

.content-infos {
    display: flex;
    margin: 16px 0px;
}
.resumo{
    text-align: justify;
}
.ver-curso{
    width: 100%;
    display: flex;
    justify-content: flex-end;
}
.ver-curso a{
    font-weight: 600;
    font-size: 18px;
    color: var(--second-color);
}

@media only screen and (max-width: 600px){
    .card-curso{
    width: 100%;

}
}

</style>