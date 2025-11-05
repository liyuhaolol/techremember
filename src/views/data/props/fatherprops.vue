<script setup lang="ts">

import Childprops from "@/views/data/props/childprops.vue";
import {ref} from "vue";

const data = ref("props父传子")
const child_data = ref('')
function getData(value:string){
  child_data.value = value
}
</script>
<template>
  <div class="father_container">
    <p>父组件</p>
    <p>{{child_data}}</p>
    <childprops :data = "data" :sendData="getData" />
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