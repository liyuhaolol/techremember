<script setup lang="ts">
import { ref } from 'vue'

import type { ScrollbarDirection } from 'element-plus'

const num = ref(30)

const isLoading = ref(false)
const isEndMore = ref(false)

const loadMore = (direction: ScrollbarDirection) => {
  console.log("触发loadMore，方向",direction)
  if (isLoading.value || isEndMore.value) return
  if (direction === 'bottom') {
    if (num.value < 50) {
      isLoading.value = true
      setTimeout(() => {
        isLoading.value = false
        num.value += 5
      }, 2000)
    }else{
      isEndMore.value = true
    }
  }
}
</script>

<template>
  <div>
    <el-scrollbar height="400px" @end-reached="loadMore">
      <p v-for="item in num" :key="item" class="scrollbar-demo-item">
        {{ item }}
      </p>
      <!-- 加载占位 -->
      <p v-if="isLoading" class="scrollbar-demo-item">加载中...</p>
      <!-- 无更多数据 -->
      <p v-if="isEndMore" class="scrollbar-demo-item">没有更多数据了</p>
    </el-scrollbar>
  </div>
</template>

<style scoped lang="scss">
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
.el-slider {
  margin-top: 20px;
}
</style>