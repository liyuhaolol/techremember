<script setup lang="ts">

import Fatherprops from "@/views/data/props/fatherprops.vue";
import Fatherevent from "@/views/data/customevent/fatherevent.vue";
</script>

<template>
  <div class="out_container">
    <fatherprops/>
    <p/>
    <fatherevent/>
  </div>
</template>

<style scoped lang="scss">
.out_container{
  display: flex;
  flex-direction:row;//横向显示
  flex-wrap: wrap;//空间占满后允许换行

  p{
    width: 10px;
  }
}
</style>