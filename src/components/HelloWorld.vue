<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="hello">


  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>

</div>
</template>

<style scoped lang="scss">
.hello {
  background: var(--primary-text-color);
  color: var(--primary-background-color);
}

</style>
