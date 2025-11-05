<script setup lang="ts">

//自定义生命事件
import {onMounted} from "vue";

const emits = defineEmits(['event'])

onMounted(() => {
  emits('event','自定义事件子传父')
})

</script>

<template>
  <div class="child_container">
  <p>子组件</p>
  </div>
</template>

<style scoped lang="scss">
.child_container{
  width: 100px;
  height: 100px;
  background: antiquewhite;
}
</style>