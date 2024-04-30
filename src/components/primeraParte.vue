<script setup>
import {ref, computed} from 'vue'
const name = "Rodrick"
const counter = ref(0)
const arrayNumber = ref([])

// Método - methods
const increment = () => {
  counter.value++
}

const decrement = () => {
  counter.value--
}

const reset = () => {
  counter.value = 0
}

const classCounter = computed(() => {
  if (counter.value == 0) {
    return 'zero'
  } else if (counter.value > 0) {
    return 'positive'
  } else {
    return 'negative'
  }
})

const add = () => {
  arrayNumber.value.push(counter.value)
}

const estadoAdd = computed(() => {
  return arrayNumber.value.includes(counter.value)
})

</script>

<template>
  <div class="container text-center">
    <h1>Hola {{ name.toUpperCase() }}</h1>

    <p :style="classCounter">{{ counter }}</p>

    <div class="btn-group">
      <button @click="decrement" class="btn btn-danger">Decrement</button>
      <button @click="reset" class="btn btn-secondary">Reset</button>
      <button @click="increment" class="btn btn-primary">Increment</button>
      
      <button @click="add" :disabled="estadoAdd" class="btn btn-success">Add</button>

    </div>
    <h3>Lista de Números</h3>
    
    <ul class="list-group mt-4">
      <li class="list-group-item" v-for="(item, index) in arrayNumber" :key="index">
        {{ item }}
      </li>
    </ul>
    
  </div>
</template>

<style scoped>
h1 {
  color: red;
}

.positive {
  color: green;
}

.negative {
  color: red;
}

.zero {
  color: peru;
}
</style>