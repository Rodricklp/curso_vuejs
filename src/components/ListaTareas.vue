<script setup>
import { ref } from 'vue'

const tareas = ref([])
const nuevaTarea = ref("")

const addTarea = () => {
    tareas.value.push(nuevaTarea.value)
    nuevaTarea.value = ""
}
const delTarea = (index) => {
    tareas.value.splice(index, 1)
}
</script>

<template>
<div>
    <h2>Lista de Tareas</h2>
    <input type="text" v-model="nuevaTarea" @keyup.enter="addTarea">
    <ul>
        <li v-for="(item, index) in tareas" :key="index">
            {{ item }}
            <button @click="delTarea">Borrar</button>
        </li>
    </ul>
</div>    
</template>

<style scoped>

</style>