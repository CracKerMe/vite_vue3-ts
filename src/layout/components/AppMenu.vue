<template>
  <div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
      class="el-menu"
      router
    >
      <el-menu-item index="/">
        <el-icon><House /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-sub-menu index="/product">
        <template #title>
          <el-icon><location /></el-icon>
          <span>商品</span>
        </template>
        <el-menu-item index="/product/list">
          商品管理
        </el-menu-item>
        <el-menu-item index="/product/cate">
          商品分类
        </el-menu-item>
        <el-menu-item index="/product/attr">
          商品规格
        </el-menu-item>
        <el-menu-item index="/product/reply">
          商品评论
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="/media">
        <template #title>
          <el-icon><location /></el-icon>
          <span>媒体管理</span>
        </template>
        <el-menu-item index="/media/list">
          媒体列表
        </el-menu-item>
        <el-menu-item index="/media/offline">
          离线资源
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="/permission">
        <template #title>
          <el-icon><Setting /></el-icon>
          <span>权限管理</span>
        </template>
        <el-menu-item index="/permission/admin">
          管理员权限
        </el-menu-item>
        <el-menu-item index="/permission/role">
          角色管理
        </el-menu-item>
        <el-menu-item index="/permission/rule">
          路由管理
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line no-unused-vars
import { House, Smoking, Menu as IconMenu, Shop, Location, Setting } from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.el-menu {border-right: none;}
</style>
