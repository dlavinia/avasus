<template>
    <Carousel>
        <Slide v-for="slide in 3" :key="slide">
            <div class="carousel__item"><img src="@/assets/img1.png"> </div>
        </Slide>
        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import './vue3-carousel/carousel.css'

export default defineComponent({
    name: 'BasicSlider',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },

})
</script>

<style>
.carousel__item {
    max-height: 600px;
    width: 100%;
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__slide {
    padding: 10px;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border-radius: 50%;
    background: #434343;
    opacity: 0.2;
    backdrop-filter: blur(2px);
    color: #fff;
    height: 50px;
    width: 50px;
}

</style>
