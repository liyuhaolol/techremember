<script setup lang="ts">

import {onMounted} from "vue";

const props = defineProps(['data','sendData'])

onMounted(()=>{
  props.sendData("props子传父")
})
</script>

<template>
  <div class="child_container">
    <p>子组件</p>
    <p>{{data}}</p>
  </div>
</template>

<style scoped lang="scss">
  .child_container{
    width: 100px;
    height: 100px;
    background: antiquewhite;
  }
</style>