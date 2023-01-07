<template>
    <section class="content">
        <section class="abas">
            <ul>
                <li @click="getData('Covid 19')" :class="{ abaActive: abaActive == 'Covid 19' }" id="Covid 19"> Covid 19
                </li>
                <li @click="getData('Síflis e outras ist')" :class="{ abaActive: abaActive == 'Síflis e outras ist' }"
                    id="Síflis e outras ist"> Síflis e outras ist</li>
                <li @click="getData('Preceptoria')" :class="{ abaActive: abaActive == 'Preceptoria' }" id="Preceptoria">
                    Preceptoria</li>
                <li @click="getData('Doenças raras')" :class="{ abaActive: abaActive == 'Doenças raras' }"
                    id="Doenças raras"> Doenças raras</li>
                <li @click="getData('WebPalestras')" :class="{ abaActive: abaActive == 'WebPalestras' }"
                    id="WebPalestras">
                    Web Palestras</li>
                <li @click="getData('Sistema prisional')" :class="{ abaActive: abaActive == 'Sistema prisional' }"
                    id="Sistema prisional"> Sistema prisional</li>
                <li @click="getData('OPAS')" :class="{ abaActive: abaActive == 'OPAS' }" id="OPAS"> OPAS</li>
            </ul>
        </section>
        <p class="count">{{ mostrados}} de {{ totalCursos.length }} encontrados</p>

        <section class="cursos">
            <CursoCard v-for="item in listItems" :key="item.id" :id="item.id" :titulo="item.titulo"
                :parceiros="item.parceiros" :capa="item.capa" :matriculados="item.matriculados" :duracao="item.duracao"
                :avaliacao="item.avaliacao" :resumo="item.resumo"></CursoCard>
        </section>
        <section class="pagination-container">
            <paginate v-model="page" :page-count="totalPages" :page-range="5" :margin-pages="0"
                :click-handler="clickCallback" :next-text="'Próximo'" :container-class="'pagination'"
                :page-class="'page-item'">
            </paginate>
        </section>

    </section>
</template>
<script>
import Paginate from 'vuejs-paginate-next';
import CursoCard from "@/components/cards/CursoCard.vue";
export default {
    name: 'CursoListing',
    components: {
        CursoCard,
        paginate: Paginate,
    },
    data() {
        return {
            listItems: [],
            abaActive: String,
            page: 1,
            totalPages: 0,
            totalCursos: [],
            mostrados: Number
        }
    },
    methods: {
        clickCallback: function (pageNum) {
            console.log(pageNum);
            this.getData(this.abaActive)
        },

        async getData(aba) {
            const res = await fetch("http://localhost:3004/cursos?cateroria=" + aba + "&_page=" + this.page + "&_limit=6");
            const finalRes = await res.json();
            this.listItems = finalRes;
            this.abaActive = aba;
            this.mostrarQtd()
            this.getAll()
        },

        async getAll() {
            const res = await fetch("http://localhost:3004/cursos?cateroria=" + this.abaActive);
            const finalRes = await res.json();
            this.totalCursos = finalRes;
            this.totalPages = Math.ceil(this.totalCursos.length / 6);

        },
        mostrarQtd() {
            if (this.listItems.length < 6) this.mostrados = this.totalCursos.length;
            else this.mostrados = this.page * 6;
        }
    },
    mounted() {
        this.getData('Covid 19')
    }
}

</script>
<style scoped>
@import '../../styles/pagination.css';

.abas {
    width: 100%;
    display: flex;
    justify-content: center;
}

.abas ul {
    display: flex;
    width: 100%;
    justify-content: space-around;
}

.abas ul li {
    margin-right: 30px;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: var(--text-color-dark);
    padding-bottom: 10px;
}

.abas ul li:hover {
    cursor: pointer;

}

.abaActive {
    border-bottom: 3px solid var(--second-color);
}

.cursos {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    justify-content: space-between;
}

.btn-primary {
    font-size: 25px;
    line-height: 30px;
    padding: 10px 100px;
    border-radius: 25px;
    margin: 3rem;
}
@media only screen and (max-width: 600px){
    .abas ul {
        overflow: scroll;
}
.abas ul li {
    font-size: 16px;
    line-height: 18px;
}
    }
</style>
  