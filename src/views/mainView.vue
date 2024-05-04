<script setup>
import Header from "@/components/Header.vue";
import SideBar from "@/components/SideBar.vue";
import { ref } from "vue";

const texto = ref("")
</script>

<template>
    <Header :mensaje="texto"></Header>
    <div class="container">
        <SideBar></SideBar>
        <div class="content">
            <input type="text" v-model="texto">
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
}
.content {
    flex: 1;
    padding: 20px;
}
</style>