<template>

  <section class="page-container">
    <section class="bread-cumb">
      <router-link to="/">Inicio</router-link>
      <router-link to="/">/ Cursos</router-link>
      <p>/ Módulos</p>
    </section>
    <h1 class="title">Módulos Educacionais </h1>
    <CursosListing></CursosListing>
  </section>
</template>
<script>
import CursosListing from "@/components/listings/CursosListing.vue";

export default {
  name: 'ModulosPage',
  components: {
    CursosListing
  }
}
</script>
<style scoped>

</style>


