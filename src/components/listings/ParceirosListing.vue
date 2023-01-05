<template>
  <section>
    <p class="count">{{ 6 * page }} de {{ totalParceiros.length }} encontrados</p>

    <section class="parceiros">
      <ParceirosCard v-for="item in listItems" :key="item.id" :titulo=item.titulo :capa=item.capa></ParceirosCard>
    </section>

    <section class="pagination-container">
      <paginate v-model="page" :page-count="totalPages" :page-range="5" :margin-pages="0" :click-handler="clickCallback"
        :next-text="'Próximo'" :container-class="'pagination'" :page-class="'page-item'">
      </paginate>
    </section>
  </section>
</template>
<script>
import Paginate from 'vuejs-paginate-next';
import ParceirosCard from "@/components/cards/ParceirosCard.vue";
export default {
  name: 'ParceirosListing',
  components: {
    ParceirosCard,
    paginate: Paginate,
  },
  data() {
    return {
      listItems: [],
      page: 1,
      totalPages: 0,
      totalParceiros: []
    }
  },
  methods: {
    clickCallback: function (pageNum) {
      console.log(pageNum);
      this.getData()
    },
    async getData() {
      const res = await fetch("http://localhost:3004/parceiros?_page=" + this.page + "&_limit=6");
      const finalRes = await res.json();
      this.listItems = finalRes;
      console.log(finalRes)
    },

    async getAll() {
      const res = await fetch("http://localhost:3004/parceiros");
      const finalRes = await res.json();
      this.totalParceiros = finalRes;
      this.totalPages = Math.ceil(this.totalParceiros.length / 6);
      console.log(finalRes)
    },
  },
  mounted() {
    this.getAll()
    this.getData()
  }
}

</script>
<style scoped>
@import '../../styles/pagination.css';

.parceiros {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
