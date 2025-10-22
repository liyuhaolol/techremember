<script setup lang="ts">
import router from "@/router";
import type {RouteLocationRaw} from "vue-router";

const onClickButton= (routerName:RouteLocationRaw) => {
  router.push(routerName)
}
</script>

<template>
  <div>
    <el-button @click="onClickButton('/layout')">布局的使用</el-button>
    <el-button @click="onClickButton('/lunbo')">轮播图的使用</el-button>
    <el-button @click="onClickButton('/pagination')">分页页签使用</el-button>
    <el-button @click="onClickButton('/pageloadbyindex')">通过页签分页例子</el-button>
    <el-button @click="onClickButton('/pageloadbyloadmore')">通过上拉加载更多例子</el-button>
  </div>
</template>

<style scoped lang="scss">
</style>