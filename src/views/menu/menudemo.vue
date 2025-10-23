<script setup lang="ts">

import Menubar from "@/views/menu/menubar.vue";
</script>

<template>
  <div class="container">
<!--    菜单栏-->
    <Menubar/>
<!--    子页面-->
    <router-view/>
  </div>
</template>

<style scoped lang="scss">
  .container{
    width: 100wh;
    height: 100vh;
    display: flex;
  }
</style>