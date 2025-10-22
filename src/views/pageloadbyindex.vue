<script setup lang="ts">
import {onMounted, ref, watch} from "vue";

const currentPage = ref(1)
watch(currentPage, (newPage) => {
  //console.log('当前页改变:', newPage)
  // 这里可以发请求刷新数据
  changeData(newPage)
})
const listData = ref<{ name: string }[]>([])
  const list1 = [
    {name:"第1个"},
    {name:"第2个"},
    {name:"第3个"},
    {name:"第4个"},
    {name:"第5个"},
    {name:"第6个"},
    {name:"第7个"},
    {name:"第8个"},
    {name:"第9个"},
    {name:"第10个"},
  ]
const list2 = [
  {name:"第11个"},
  {name:"第12个"},
  {name:"第13个"},
  {name:"第14个"},
  {name:"第15个"},
  {name:"第16个"},
  {name:"第17个"},
  {name:"第18个"},
  {name:"第19个"},
  {name:"第20个"},
]
const list3 = [
  {name:"第21个"},
  {name:"第22个"},
  {name:"第23个"},
  {name:"第24个"},
  {name:"第25个"},
  {name:"第26个"},
  {name:"第27个"},
  {name:"第28个"},
  {name:"第29个"},
  {name:"第30个"},
]
const list4 = [
  {name:"第31个"},
  {name:"第32个"},
  {name:"第33个"},
  {name:"第34个"},
  {name:"第35个"},
  {name:"第36个"},
  {name:"第37个"},
  {name:"第38个"},
  {name:"第39个"},
  {name:"第40个"},
]
const list5 = [
  {name:"第41个"},
  {name:"第42个"},
  {name:"第43个"},
  {name:"第44个"},
  {name:"第45个"},
  {name:"第46个"},
  {name:"第47个"},
  {name:"第48个"},
  {name:"第49个"},
  {name:"第50个"},
]

function changeData(index:number){
  if (index === 1){
    listData.value = list1
  }else if (index === 2){
    listData.value = list2
  }else if (index === 3){
    listData.value = list3
  }else if (index === 4){
    listData.value = list4
  }else if (index === 5){
    listData.value = list5
  }
}
onMounted(()=>{
  changeData(1)})
</script>

<template>
  <ul>
    <li v-for="(item,index) in listData" :key="index">{{item.name}}</li>
  </ul>
  <div>
    <el-pagination
        layout="prev, pager, next"
        :total="50"
        :page-size="10"
        v-model:current-page="currentPage"/>
  </div>
</template>

<style scoped lang="scss">

</style>