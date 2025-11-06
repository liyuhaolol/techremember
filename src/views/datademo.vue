<script setup lang="ts">

import Fatherprops from "@/views/data/props/fatherprops.vue";
import Fatherevent from "@/views/data/customevent/fatherevent.vue";
import Fathermitt from "@/views/data/mitt/fathermitt.vue";
</script>

<template>
  <div class="out_container">
    <fatherprops/>
    <fatherevent/>
    <fathermitt/>
  </div>
</template>

<style scoped lang="scss">
.out_container{
  display: flex;
  flex-direction:row;//横向显示
  flex-wrap: wrap;//空间占满后允许换行
  gap: 10px;

}
</style>