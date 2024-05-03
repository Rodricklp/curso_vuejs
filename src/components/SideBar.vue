<script setup>

</script>

<template>
<div class="sidebar">
    <h2>Menú Lateral</h2>
    <ul>
        <li><router-link to="contador">Contador</router-link></li>
        <li><router-link to="listaTareas">Lista de Tareas</router-link></li>
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