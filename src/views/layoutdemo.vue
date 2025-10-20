<script setup lang="ts">

</script>

<template>
  <div>
    <p>水平布局</p>
    <div class="flex-row">
      <div class="block"/>
      <div class="block"/>
      <div class="block"/>
      <div class="block"/>
      <div class="block"/>
      <div class="block"/>
      <div class="block"/>
      <div class="block"/>
      <div class="block"/>
      <div class="block"/>
      <div class="block"/>
      <div class="block"/>
    </div>
    <br>
    <p>垂直布局</p>
    <div class="flex-column">
      <div class="block"/>
      <div class="block"/>
      <div class="block"/>
      <div class="block"/>
      <div class="block"/>
      <div class="block"/>
      <div class="block"/>
      <div class="block"/>
      <div class="block"/>
      <div class="block"/>
      <div class="block"/>
      <div class="block"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .block{
    width: 50px;
    height: 50px;
    background: var(--color-success);
    margin: 10px;
  }

  .flex-row{
    width: 600px;
    height: 200px;
    display: flex;//flex布局
    flex-direction:row;//横向显示
    flex-wrap: wrap;//空间占满后允许换行
    justify-content: center;//水平居中
    align-items: center;//垂直居中
    background: var(--color-danger);
  }
  .flex-column{
    width: 200px;
    height: 600px;
    display: flex;//flex布局
    flex-wrap: wrap;//空间占满后允许换行
    justify-content: center;//水平居中
    align-items: center;//垂直居中
    background: var(--color-danger);
  }
</style>