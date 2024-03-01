<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue'
import { COUNTRYS } from './constants/COUNTRYS.JS'
import { provide, ref } from 'vue';
import { LANGUAGES } from './constants/LANGUAGES.JS'

const isAuth = ref(false);
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
    <Header />
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
