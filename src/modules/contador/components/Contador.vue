<script setup>
import { ref } from 'vue'

const contador = ref(0)
const increment = () => {
  contador.value++
}
const decrement = () => {
  contador.value--
}
</script>

<template>
  <h1>Hola Mundo</h1>
  <p>{{ contador }}</p>
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
</template>

<style scoped>
p {
  color: blue;
}
</style>
