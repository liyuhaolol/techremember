<script setup lang="ts">

import Childevent from "@/views/data/customevent/childevent.vue";
import {ref} from "vue";

const childData = ref('')

function getData(value:string){
  childData.value = value
}
</script>

<template>
  <div class="father_container">
    <p>父组件</p>
    <p>{{childData}}</p>
<!--    给子组件绑定自定义事件event-->
    <childevent @event="getData"/>
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
}
</style>