<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue'
import { COUNTRYS } from './constants/COUNTRYS.JS'
import { provide, ref } from 'vue';
import { LANGUAGES } from './constants/LANGUAGES.JS'

const isAuth = ref(true);
const currentLang = ref(COUNTRYS.JAPANESE);


const changeCurrentLang = (lang) => {
  currentLang.value = lang
}

provide('balance', '$12.00 (€11.21)');
provide('currentLang', currentLang);
provide('changeCurrentLang', changeCurrentLang);
provide('isAuth', isAuth);
</script>

<template>
  <div class='app'>
    <Header />
      <div class='content'><router-view></router-view></div>
    <Footer />
  </div>
</template>

<style scoped>
  .app {
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
  }

  .content {
    position: relative;
    flex-grow: 1;
    margin: calc(var(--height-header) + 15px) auto 0 auto;
    max-width: var(--max-content-width);
  }

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
