<template>
  <div class="home">
    <h1>Home page</h1>
    <p>当前值：{{ counter.count }}</p>
    <button
      class="increment-btn"
      @click="incrementFn"
    >
      点我+1
    </button>
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">
        Primary
      </el-button>
      <el-button type="success">
        Success
      </el-button>
      <el-button type="info">
        Info
      </el-button>
      <el-button type="warning">
        Warning
      </el-button>
      <el-button type="danger">
        Danger
      </el-button>
      <el-button>中文</el-button>
    </el-row>
    <div v-if="mockData.length > 0">
      <div
        v-for="item in mockData"
        :key="item.id"
      >
        <img :src="item.headimgurl">{{ item.nickname }}在{{ item.createTime }}说 {{ item.text }}
        <hr>
      </div>
    </div>
    <el-skeleton
      v-else
      :rows="10"
      animated
    />
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/store/counter'
import { getSystemInfo } from '@/api/system'
import type { ISystemInfo } from '@/api/types/system'
import { onMounted, ref } from 'vue'
const counter = useCounterStore()
const mockData = ref<ISystemInfo[]>([])

onMounted(() => {
  getSystemInfo().then(res => {
    console.log(res)
    mockData.value = res.data.list
  }).catch(e => {
    console.log(e)
  })
})
counter.count++
const incrementFn = () => {
  // 带自动补全 ✨
  // counter.$patch({ count: counter.count + 1 })
  // 或使用 action 代替
  counter.increment()
}
</script>

<style lang="scss" scoped>
.home {
  padding: 30px 50px;
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
}
.increment-btn {
  padding: 0 24px;
  line-height: 52px;
  font-size: 1.2rem;
  font-weight: 500;
  color: #ffffff;
  background: $bandColor;
  border: 1px solid $bandColor;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color .1s ease;
  &:hover {
    background: $bandColorLight;
    border-color: $bandColorLight;
  }
}
</style>
