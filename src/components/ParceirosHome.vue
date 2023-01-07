<template>
  <section class="content">
        <ul>
            <li> 
                <h2>Governo do RN</h2>
                <p>Governo do Estado do Rio Grande do Norte.</p>
            </li>
            <li> 
                <h2>SESAP</h2>
                <p>Secretaria de Saúde Pública do Estado do Rio Grande do Norte..</p>
            </li>
            <li> 
                <h2>UFRN</h2>
                <p>Universidade Federal do Rio Grande do Norte.</p>
            </li>
            <li> 
                <h2>HUOL</h2>
                <p>Hospital Onofre Lopes: Hospital Universitário da UFRN (Universidade Federal do Rio Grande do Norte). </p>
            </li>
        </ul>
  </section>
</template>
<script>
export default {
    name: 'ParceirosHome',
}
</script>
<style scoped>
    ul{
        display: flex;
        background-color: var(--bg-card);
        border-radius: 24px;
        width: 70%;
        padding: 1rem;
        margin-bottom: 60px;

    }

    ul li{
        width: 25%;
        text-align: center;
        margin: 32px;
    }
    @media only screen and (max-width: 600px){
        ul{
        flex-direction: column;
        width: 90%;

    }
    ul li{
        width: 100%;
        margin: 30px 0;
    }
    }
</style>

