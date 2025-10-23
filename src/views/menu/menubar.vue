<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import router from "@/router";
import {ref, watch} from "vue";
import {useRoute} from "vue-router";

const activeMenu = ref('')
const route = useRoute()

// 取最近有 meta.menuIndex 的路由记录（适配嵌套路由）
const syncActiveFromRoute = () => {
  // route.matched 是按父到子的顺序，反转后优先取最具体的子路由
  const record = route.matched.slice().reverse().find(r => r.meta && r.meta.menuIndex)
  activeMenu.value = (record?.meta?.menuIndex as unknown as string) ?? ''
}
//路由驱动菜单
watch(() => route.fullPath, syncActiveFromRoute, { immediate: true })


const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
function handleClick(menuItem: any) {
  console.log('菜单点击', menuItem.index) // menuItem 就是 el-menu-item 实例
  //debugger
  switch (menuItem.index) {
    case '1-1':
      router.push("/menu/home")
      break
    case '1-2':
      router.push("/menu/home2")
      break
    case '1-3':
      router.push("/menu/home3")
      break
    case '1-4-1':
      router.push("/menu/home4")
      break
    case '2':
      router.push({name:"function",params:{name:'选项二'}})
      break
    case '4':
      router.push("/menu/setting")
      break
  }
}
</script>

<template>
  <div>
    <el-menu
        :default-active="activeMenu"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
    >
<!--    第一项-->
      <el-sub-menu index="1">
        <template #title>
          <el-icon><Location/></el-icon>
          <span>选项一</span>
        </template>
        <el-menu-item-group title="分组一">
          <el-menu-item index="1-1" @click="handleClick">子项一</el-menu-item>
          <el-menu-item index="1-2" @click="handleClick">子项二</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组二">
          <el-menu-item index="1-3" @click="handleClick">子项三</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>子项四</template>
          <el-menu-item index="1-4-1" @click="handleClick">子项一</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <!--    第二项-->
      <el-menu-item index="2" @click="handleClick">
        <el-icon><icon-menu /></el-icon>
        <span>选项二</span>
      </el-menu-item>
      <!--    第三项-->
      <el-menu-item index="3" disabled>
        <el-icon><document /></el-icon>
        <span>选项三</span>
      </el-menu-item>
      <!--    第三项-->
      <el-menu-item index="4" @click="handleClick">
        <el-icon><setting /></el-icon>
        <span>选项四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped lang="scss">
.el-menu-vertical-demo{
  background: lightcyan;
  height: 100%;
}
</style>