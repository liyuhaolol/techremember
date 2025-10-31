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

/* 分页容器的整体位置（可调整上下左右间距） */
:deep(.swiper-pagination) {
  bottom: 15px !important; /* 调整分页点与底部的距离 */
  text-align: center;
}

/* 普通分页点 */
:deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background-color: #ff0000;
  opacity: 0.6;
  margin: 0 5px !important; /* 控制间距 */
  border-radius: 50%; /* 圆形 */
  transition: all 0.3s;
}

/* 激活的分页点 */
:deep(.swiper-pagination-bullet-active) {
  background-color: #000000; /* 改为蓝色 */
  width: 20px; /* 可拉长为椭圆 */
  border-radius: 10px; /* 椭圆形效果 */
  opacity: 1;
}
</style>