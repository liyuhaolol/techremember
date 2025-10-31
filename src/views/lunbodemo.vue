<!--
文档地址：https://element-plus.org/zh-CN/component/carousel
文档地址：https://swiperjs.com/vue
-->
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
//import 'swiper/swiper-bundle.css';

const onSwiper = (swiper:any) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};
</script>

<template>
  <div>
  <el-carousel height="150px">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
    </el-carousel>
    <p>页卡模式</p>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <p>swiper模式</p>
    <swiper
        :modules="[Autoplay,Navigation,Pagination]"
        :slides-per-view="1"
        :loop="true"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        :autoplay="{
          delay: 3000 ,
          pauseOnMouseEnter:true,
          disableOnInteraction:false}"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
      <swiper-slide
          class="swiper-slide"
          :class="`slide-${index % 2}`"
          v-for="(item,index) in 4"
          :key="index">
        <h3>Slide{{index+1}}</h3>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped lang="scss">
.el-carousel__item {
}

h3{
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.slide-0 {
  background-color: #d3dce6;
}
.slide-1 {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>