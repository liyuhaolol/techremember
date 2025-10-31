<!--
文档地址：https://element-plus.org/zh-CN/component/carousel
文档地址：https://swiperjs.com/vue
-->
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
//import 'swiper/css';

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
        :slides-per-view="6"
        :space-between="50"
        navigation
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
      <swiper-slide class="swiper-slide" v-for="(item,index) in 6" :key="index">
        Slide{{index+1}}
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped lang="scss">
.el-carousel__item {
  h3{
    color: #475669;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    text-align: center;
  }
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>