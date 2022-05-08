<template>
  <div>
    <h1>Home page</h1>
    <button @click="incrementFn">
      {{ counter.count }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/store/counter'
const counter = useCounterStore()

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
  background: #646cff;
  border: 1px solid #646cff;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color .1s ease;
  &:hover {
    background: #747bff;
    border-color: #747bff;
  }
}
</style>
