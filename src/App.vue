<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
//import HelloWorld from './components/HelloWorld.vue'
//import Product from "./components/Product.vue";

import TheHeader from "./components/TheHeader.vue";
</script>

<template>
  <main class="container">
    <the-header></the-header>

    <router-view></router-view>
  </main>
</template>

<style scoped>

</style>
