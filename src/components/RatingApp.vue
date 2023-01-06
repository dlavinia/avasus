<template>
    <section class="rating">  
      <div v-for="s in stars" :key="s"  >
        <img class="star" :src="baseUrl+s">
      </div>
      <p :class="{bold: bold}"> {{ a }}</p>

    </section>

</template>
<script scoped>
export default {
  name: 'RatingApp',
  props:{
    a:Number || String,
    bold: Boolean,
  },
  data(){
    return{
      stars:[],
      baseUrl: "https://raw.githubusercontent.com/dlavinia/avasus/a2654616eae31389cdfd44f45cf4c534e6ab39d8/src/assets/icons/",
      avaliacao: Number
    }
  },
  methods:{
    showStars(){
      this.avaliacao = parseFloat(this.a)
      for (let count =1; count < 5; count++) {
       if (this.avaliacao >= count) {
        this.stars.push('star-full.svg')
       }
       if (this.avaliacao >= count && this.avaliacao <= count+1) {
        this.stars.push('star-half.svg')
       }
       if(this.avaliacao < count){
        this.stars.push('empty.svg')
       }
       
      }
    }
},
mounted() {
    this.showStars()
  }
}
</script>

<style scoped>
    .rating{
      display: flex;
      align-items: center;
    }
    .star{
      margin: 0 4px;
    }
    .bold{
      font-weight: 600;
    }
</style>