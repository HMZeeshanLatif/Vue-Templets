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
        <img src="https://via.placeholder.com/302" alt="Slide 2" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://via.placeholder.com/304" alt="Slide 3" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://via.placeholder.com/306" alt="Slide 4" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://via.placeholder.com/308" alt="Slide 5" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://via.placeholder.com/310" alt="Slide 6" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://via.placeholder.com/312" alt="Slide 7" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://via.placeholder.com/314" alt="Slide 8" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://via.placeholder.com/316" alt="Slide 9" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://via.placeholder.com/318" alt="Slide 10" />
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
  