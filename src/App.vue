<script setup>
import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  <router-view></router-view>
</template>

<style scoped>

</style>
