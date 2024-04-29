<script setup>
const name = "Rodrick"
const style = "color: blue"
</script>

<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>
  <h2 v-bind:style="style">Soy Azul</h2>
</template>

<style>
h1 {
  color: red;
}
</style>