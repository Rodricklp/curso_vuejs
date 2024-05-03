<script setup>
import { useRegistrarStore } from '@/modules/registrar/stores/registrarStore';
import { ref, watch } from 'vue';

const registrarStore = useRegistrarStore()
const nombre = ref(registrarStore.nombre.value)
const email = ref(registrarStore.email.value)

watch(() => registrarStore.nombre, (newValue) => {
    nombre.value = newValue
})
watch(() => registrarStore.email, (newValue) => {
    email.value = newValue
})
</script>

<template>
<div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>Nombre: {{ nombre }}</h3>
    <h3>Email: {{ email }}</h3>
    <ul>
        <li><router-link to="contador">Contador</router-link></li>
        <li><router-link to="listaTareas">Lista de Tareas</router-link></li>
        <li><router-link to="registrar">Registrar</router-link></li>
    </ul>
</div>
</template>

<style scoped>
.sidebar {
    width: 200px;
    background-color: darkolivegreen;
    padding: 20px;
}
</style>