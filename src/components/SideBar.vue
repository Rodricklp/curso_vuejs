<script setup>
import { useRegistrarStore } from '@/modules/registrar/stores/registrarStore';

const registrarStore = useRegistrarStore()

</script>

<template>
<div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>Nombre: {{ registrarStore.nombre }}</h3>
    <h3>Email: {{ registrarStore.email }}</h3>
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