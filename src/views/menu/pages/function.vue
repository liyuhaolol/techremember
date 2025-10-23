<script setup lang="ts">
  import {ref} from "vue";
  import {useRoute} from "vue-router";

  const route = useRoute()
  //debugger
  console.log(route.params.name)
  const pageName = ref(route.params.name)

</script>

<template>
  <div class="container">
    <p>{{pageName}}</p>
  </div>
</template>

<style scoped lang="scss">
.container{
  width: 100%;
  height: 100%;
  background: chocolate;
  display: flex;
  justify-content: center;
  align-items: center;
  p{
    color: #fff;
    font-size: 50px;
  }
}
</style>