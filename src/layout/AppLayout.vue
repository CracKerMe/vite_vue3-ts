<template>
  <el-container class="common-layout">
    <el-aside width="200px">
      <div class="logo-container flex">
        <router-link
          to="/"
          class="block"
        >
          <img
            src="//element-plus.org/images/element-plus-logo.svg"
            alt="Element Plus Logo"
          >
        </router-link>
      </div>
      <AppMenu />
    </el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">
            homepage
          </el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
          <el-breadcrumb-item>promotion list</el-breadcrumb-item>
          <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="toolbar">
          <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px">
              <setting />
            </el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>Tom</span>
        </div>
      </el-header>

      <el-main>
        <el-scrollbar>
          <div class="wrapper">
            <router-view />
          </div>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import {
  Menu as Setting
} from '@element-plus/icons-vue'
import AppMenu from './components/AppMenu.vue'
</script>

<style lang="scss" scoped>
.common-layout {
  height: 100vh;
  .el-header {
    position: relative;
    color: var(--el-text-color-primary);
    /* background: var(--el-color-primary-light-7); */
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .el-aside {
    color: var(--el-text-color-primary);
    background: #545c64;
    .logo-container {
      width: 100%;
      height: 55px;
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        height: 28px;
        width: 128px;
      }
    }
  }
  .el-menu {
    border-right: none;
  }
  .el-main {
    padding: 0;
    .wrapper {
      padding: 20px;
    }
  }
  .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
  }
}
</style>
