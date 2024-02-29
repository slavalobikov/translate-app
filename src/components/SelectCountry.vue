<script setup>
import { inject, ref } from 'vue'
import { COUNTRYS } from '../constants/COUNTRYS.JS'

const lang = inject('currentLang', COUNTRYS.ENGLISH)


const configLang =
  [
    { id: 0, lang: 'english', country: COUNTRYS.ENGLISH, src: './../assets/countrys/uk.png' },
    { id: 1, lang: 'italiano', country: COUNTRYS.ITALIANO, src: './../assets/countrys/italiano.webp' },
    { id: 2, lang: 'deutsch', country: COUNTRYS.DEUTSCH, src: './../assets/countrys/deutsch.png' },
    { id: 3, lang: 'português', country: COUNTRYS.PORTUGUESE, src: './../assets/countrys/portuguese.webp' },
    { id: 4, lang: 'norsk', country: COUNTRYS.NORSK, src: './../assets/countrys/norsk.png' },
    { id: 5, lang: 'suomi', country: COUNTRYS.SUOMI, src: './../assets/countrys/suomi.png' },
    { id: 6, lang: 'türkçe', country: COUNTRYS.TURKISH, src: './../assets/countrys/turkish.png' },
    { id: 7, lang: '中文', country: COUNTRYS.CHINESE, src: './../assets/countrys/chinese.png'},
    { id: 8, lang: '한국어', country: COUNTRYS.KOREAN, src: './../assets/countrys/korean.png' },
    { id: 9, lang: 'русский', country: COUNTRYS.RUSSIAN, src: './../assets/countrys/ru.png' },
    { id: 10, lang: 'français', country: COUNTRYS.FRENCH, src: './../assets/countrys/french.webp' },
    { id: 11, lang: 'español', country: COUNTRYS.SPANISH, src: './../assets/countrys/spanish.webp' },
    { id: 12, lang: 'nederlands', country: COUNTRYS.DUTCH, src: './../assets/countrys/dutch.png' },
    { id: 13, lang: 'svenska', country: COUNTRYS.SWEDISH, src: './../assets/countrys/swedish.png'},
    { id: 14, lang: 'dansk', country: COUNTRYS.DANSK, src: './../assets/countrys/dansk.png' },
    { id: 15, lang: 'العربية', country: COUNTRYS.ARABIC, src: './../assets/countrys/arabic.png' },
    { id: 16, lang: '日本語', country: COUNTRYS.JAPANESE, src: '/src/assets/countrys/japanese.png' }]


</script>
<template>
  <button>
    <div v-for='item in configLang'>
      <img v-if='lang && item.country === lang' class='flag' :src='item.src' :alt='item.country'>
    </div>

    <!--    <img v-if='lang === COUNTRYS.ENGLISH' class='flag' src='./../assets/countrys/uk.png' :alt='COUNTRYS.ENGLISH'>
        <img v-if='lang === COUNTRYS.RUSSIAN' class='flag' src='./../assets/countrys/ru.png' :alt='COUNTRYS.RUSSIAN'>
        <img v-if='lang === COUNTRYS.KOREAN' class='flag' src='./../assets/countrys/korean.png' :alt='COUNTRYS.KOREAN'>
        <img v-if='lang === COUNTRYS.ARABIC' class='flag' src='./../assets/countrys/arabic.png' :alt='COUNTRYS.ARABIC'>
        <img v-if='lang === COUNTRYS.DANSK' class='flag' src='./../assets/countrys/dansk.png' :alt='COUNTRYS.DANSK'>
        <img v-if='lang === COUNTRYS.CHINESE' class='flag' src='./../assets/countrys/chinese.png' :alt='COUNTRYS.CHINESE'>
        <img v-if='lang === COUNTRYS.ITALIANO' class='flag' src='./../assets/countrys/italiano.webp' :alt='COUNTRYS.ITALIANO'>
        <img v-if='lang === COUNTRYS.DEUTSCH' class='flag' src='./../assets/countrys/deutsch.png' :alt='COUNTRYS.DEUTSCH'>
        <img v-if='lang === COUNTRYS.NORSK' class='flag' src='./../assets/countrys/norsk.png' :alt='COUNTRYS.NORSK'>
        <img v-if='lang === COUNTRYS.TURKISH' class='flag' src='./../assets/countrys/turkish.png' :alt='COUNTRYS.TURKISH'>
        <img v-if='lang === COUNTRYS.DUTCH' class='flag' src='./../assets/countrys/dutch.png' :alt='COUNTRYS.DUTCH'>
        <img v-if='lang === COUNTRYS.SPANISH' class='flag' src='./../assets/countrys/spanish.webp' :alt='COUNTRYS.SPANISH'>
        <img v-if='lang === COUNTRYS.SUOMI' class='flag' src='./../assets/countrys/suomi.png' :alt='COUNTRYS.SUOMI'>
        <img v-if='lang === COUNTRYS.PORTUGUESE' class='flag' src='./../assets/countrys/portuguese.webp' :alt='COUNTRYS.PORTUGUESE'>
        <img v-if='lang === COUNTRYS.JAPANESE' class='flag' src='./../assets/countrys/japanese.png' :alt='COUNTRYS.JAPANESE'>
        <img v-if='lang === COUNTRYS.FRENCH' class='flag' src='./../assets/countrys/french.webp' :alt='COUNTRYS.FRENCH'>
        <img v-if='lang === COUNTRYS.SWEDISH' class='flag' src='./../assets/countrys/swedish.png' :alt='COUNTRYS.SWEDISH'>-->
  </button>
  <div class='lang-list'>
fdsafsdf
  </div>
</template>

<style scoped>

  button {
    border: none;
    cursor: pointer;
  }

  button:active {
    transition: transform var(--transition-click);
    transform: scale(1.15);
  }

  .flag {
    width: 27px;
    height: 27px;
    border: solid 1px var(--black);
    border-radius: 50%;
  }

  .lang-list {
    position: absolute;
    top: calc(var(--height-header) + 10px);
    right: 10px;
    border: var(--wrapper-content-border);
    padding: 10px;
  }
</style>
