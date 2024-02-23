<script setup>
import BurgerMenu from './BurgerMenu.vue'
</script>


<template>
  <header>
    <h1 class='h1'>
      <BurgerMenu />
      Добро пожаловать, user!</h1>
    <nav>

    </nav>
  </header>
</template>


<style scoped>
  .h1 {
    color: #000;
    font-family: Tahoma,Verdana,Arial;
    font-size: 14px;
    background-color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 10px;
  }
</style>
