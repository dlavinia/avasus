<template>
    <div class="card-p">
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
    .card-p{
      margin-top: 60px;
      width: 33%;
      display: flex;
      flex-direction: column;
      
    }


    .card-p figure{
      width: 350px;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;

    }
  .card-p h1{
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

  .card-p img{
    max-width: 100%;
    max-height: 100%;
  }

  .card-p:nth-child(3n+1) {
    align-items: flex-start;
}
  .card-p:nth-child(3n+2) {
    align-items: center;
}
  .card-p:nth-child(3n+3) {
    align-items: flex-end;
}

@media only screen and (max-width: 600px){
  .card-p{
      margin-top: 60px;
      width: 60%;
      
    }
    .card-p:nth-child(3n+1) {
    align-items: center;
}
  .card-p:nth-child(3n+2) {
    align-items: center;
}
  .card-p:nth-child(3n+3) {
    align-items:center;
}
}
</style>
