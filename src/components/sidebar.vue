<script setup>
</script>

<template>
<div class="sidebar">
    <h2>Barra Lateral</h2>
    <ul>
        <li><router-link to="primeraParte">Primera Parte</router-link></li>
        <li><router-link to="listaTareas">Lista de Tareas</router-link></li>
    </ul>
</div>    
</template>

<style>
.sidebar {
    width: 200px;
    background-color: darkgrey;
    padding: 20px;
}
</style>