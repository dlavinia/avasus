<template>
    <div class="card">
        <img :src=capa alt="">
        <h1>{{titulo}}</h1>
    </div>
</template>
<script>
export default {
    name: 'ParceirosCard',
    props:{
        titulo:String,
        capa:String
    }
}

</script>
<style scoped>
    .card{
        width: 33%;
        padding: 1rem;
    }
  .card h1{
    border-top: 2px solid var(--main-color);
    color: var( --text-color-dark);
    text-align: center;
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    padding-top: 10px;
    margin-top: 10px;
  }

  .card img{
    width: 90%;
  }
</style>
