<script setup>
import Header from "@/components/Header.vue";
import SideBar from "@/components/SideBar.vue";
</script>

<template>
    <Header></Header>
    <div class="container">
        <SideBar></SideBar>
        <div class="content">
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