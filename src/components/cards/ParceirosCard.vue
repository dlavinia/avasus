<template>
    <div class="card">
      <figure>
        <img :src=capa alt="">
      </figure>
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
      margin-top: 60px;
      width: 33%;
      display: flex;
      flex-direction: column;
      
    }


    .card figure{
      width: 350px;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;

    }
  .card h1{
    border-top: 2px solid var(--main-color);
    color: var( --text-color-dark);
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    padding-top: 10px;
    margin-top: 10px;
    width: 380px;
  }

  .card img{
    max-width: 100%;
    max-height: 100%;
  }

  .card:nth-child(3n+1) {
    align-items: flex-start;
}
  .card:nth-child(3n+2) {
    align-items: center;
}
  .card:nth-child(3n+3) {
    align-items: flex-end;
}
</style>
