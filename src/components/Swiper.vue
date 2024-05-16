<template>
    <swiper
      :slides-per-view="3"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>
        <img src="https://via.placeholder.com/300" alt="Slide 1" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://via.placeholder.com/300" alt="Slide 2" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://via.placeholder.com/300" alt="Slide 3" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://via.placeholder.com/300" alt="Slide 3" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://via.placeholder.com/300" alt="Slide 3" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://via.placeholder.com/300" alt="Slide 3" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://via.placeholder.com/300" alt="Slide 3" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://via.placeholder.com/300" alt="Slide 3" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://via.placeholder.com/300" alt="Slide 3" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://via.placeholder.com/300" alt="Slide 3" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://via.placeholder.com/300" alt="Slide 3" />
      </swiper-slide>
      <!-- Add more swiper-slide elements as needed -->
    </swiper>
  </template>
  
  <script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  
  // Import Swiper styles
  import 'swiper/css';
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
  };
  </script>
  