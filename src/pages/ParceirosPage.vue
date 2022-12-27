<template >
    <section class="page-container">
        <section class="bread-cumb">
            <router-link to="/">Inicio</router-link>
            <p>/ Parceiros</p>
        </section>

        <h1 class="title">Nossos parceiros</h1>

        <ParceirosListing></ParceirosListing>
    </section>
</template>

<script>
import ParceirosListing from "@/components/ParceirosListing.vue";
export default {
    name: 'ParceirosPage',
    components: {
        ParceirosListing
    }
}
</script>
<style scoped>
</style>


