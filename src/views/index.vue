<script setup lang="ts">
import router from "@/router";

const onClickButton= (routerName:String) => {
  router.push("/layout")
}
</script>

<template>
  <div>
    <el-button @click="onClickButton('/layout')">布局的使用</el-button>
    <el-button @click="onClickButton('/lunbo')">轮播图的使用</el-button>
  </div>
</template>

<style scoped lang="scss">
</style>