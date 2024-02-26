<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue'
import { provide } from 'vue';


provide('balance', '$12.00 (€11.21)');
</script>

<template>
  <Header />
  <div class='wrapper-head'>
    <img class='head-img' src='./assets/head_ru.gif' alt='head'>
  </div>
  <router-view></router-view>
  <Footer />
</template>

<style scoped>
  .wrapper-head {
    margin: 20px var(--common-gorizontal-margin) 0 var(--common-gorizontal-margin);
    display: none;
    padding: var(--wrapper-content-padding);
    border: var(--wrapper-content-border);
    background-color: var(--wrapper-content-background);
  }

  .head-img {
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    .wrapper-head {
      display: block;
    }
  }
</style>
