<script setup lang="ts">

import Child1mitt from "@/views/data/mitt/child1mitt.vue";
import Child2mitt from "@/views/data/mitt/child2mitt.vue";
</script>

<template>
  <div class="father_container">
    <p>父组件</p>
    <div class="inner">
      <child1mitt/>
      <child2mitt/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.father_container{
  width: 200px;
  height: 200px;
  background: darkblue;
  p{
    color: white;
  }
  .inner{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>