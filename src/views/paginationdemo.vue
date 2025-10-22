<!--https://element-plus.org/zh-CN/component/pagination-->
<script setup lang="ts">

</script>

<template>
  <div>
    <div class="example-pagination-block">
      <div class="example-demonstration">默认一页10条</div>
      <div class="example-demonstration">页数较少时</div>
      <el-pagination layout="prev, pager, next" :total="50" :page-size="10" />
    </div>
    <div class="example-pagination-block">
      <div class="example-demonstration">页数大于7页</div>
      <el-pagination layout="prev, pager, next" :total="1000" :page-size="10" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.example-pagination-block + .example-pagination-block {
  margin-top: 10px;
}
.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}
</style>