<template>
  <div>
    <h1>Home page</h1>
    <button @click="incrementFn">
      {{ counter.count }}
    </button>
    <div v-if="mockData.length > 0">
      <div
        v-for="item in mockData"
        :key="item.id"
      >
        <img :src="item.headimgurl">{{ item.nickname }}在{{ item.createTime }}说 {{ item.text }}
        <hr>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/store/counter'
import { getSystemInfo, SystemInfoInterface } from '@/api/system'
import { onMounted, ref } from 'vue'
const counter = useCounterStore()
const mockData = ref<SystemInfoInterface[]>([])

onMounted(() => {
  getSystemInfo().then(res => {
    console.log(res)
    mockData.value = res.data?.list
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
button {
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
