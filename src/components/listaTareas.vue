<script setup>
import { ref } from "vue";

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
<div class="container">
    <h2>Lista de Tareas</h2>
    <input type="text" v-model="nuevaTarea" v-on:keyup.enter="addTarea"/>
    <ul v-for="(item, index) in tareas" :key="index" class="list-group">
        <li class="list-group-item">
            {{ item }}
            <button class="btn btn-danger" @click="delTarea">DELETE</button>
        </li>
    </ul>
</div>    
</template>

<style>

</style>