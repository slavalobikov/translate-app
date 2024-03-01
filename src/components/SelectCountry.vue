<script setup>
import { inject, ref } from 'vue'
import japanesImg from './../assets/countrys/japanese.png'
import arabicImg from './../assets/countrys/arabic.png'
import danskImg from './../assets/countrys/dansk.png'
import svenskaImg from './../assets/countrys/swedish.png'
import dutchImg from './../assets/countrys/dutch.png'
import spanishImg from './../assets/countrys/spanish.webp'
import frenchImg from './../assets/countrys/french.webp'
import russianImg from './../assets/countrys/ru.png'
import koreanImg from './../assets/countrys/korean.png'
import chineseImg from './../assets/countrys/china.svg'
import turkishImg from './../assets/countrys/turkish.png'
import suomiImg from './../assets/countrys/suomi.png'
import norskImg from './../assets/countrys/norsk.png'
import portugueseImg from './../assets/countrys/portuguese.webp'
import deutschImg from './../assets/countrys/deutsch.png'
import italianoImg from './../assets/countrys/italiano.webp'
import englishImg from './../assets/countrys/uk.png'
import { LANGUAGES } from '../constants/LANGUAGES.JS'
import { COUNTRYS } from '../constants/COUNTRYS.JS'


const isOpenLangMenu = ref(false)
const isEvenLangMenu = ref(false)
const lang = inject('currentLang', COUNTRYS.ENGLISH)
const changeCurrentLang = inject('changeCurrentLang', () => {})


const toggleLangMenu = () => {
  isOpenLangMenu.value = !isOpenLangMenu.value
  isEvenLangMenu.value = true;
}

const closeLangMenu = () => {
  isOpenLangMenu.value = false;
  isEvenLangMenu.value = true;
}

const changeLang = (l) => {
  closeLangMenu()
  changeCurrentLang(l)
}

const configLang =
  [
    { id: 0, lang: LANGUAGES.ENGLISH, country: COUNTRYS.ENGLISH, src: englishImg },
    { id: 1, lang: LANGUAGES.ITALIANO, country: COUNTRYS.ITALIANO, src: italianoImg },
    { id: 2, lang: LANGUAGES.DEUTSCH, country: COUNTRYS.DEUTSCH, src: deutschImg },
    { id: 3, lang: LANGUAGES.PORTUGUESE, country: COUNTRYS.PORTUGUESE, src: portugueseImg },
    { id: 4, lang: LANGUAGES.NORSK, country: COUNTRYS.NORSK, src: norskImg },
    { id: 5, lang: LANGUAGES.SUOMI, country: COUNTRYS.SUOMI, src: suomiImg },
    { id: 6, lang: LANGUAGES.TURKISH, country: COUNTRYS.TURKISH, src: turkishImg },
    { id: 7, lang: LANGUAGES.CHINESE, country: COUNTRYS.CHINESE, src: chineseImg},
    { id: 8, lang: LANGUAGES.KOREAN, country: COUNTRYS.KOREAN, src: koreanImg },
    { id: 9, lang: LANGUAGES.RUSSIAN, country: COUNTRYS.RUSSIAN, src: russianImg },
    { id: 10, lang: LANGUAGES.FRENCH, country: COUNTRYS.FRENCH, src: frenchImg },
    { id: 11, lang: LANGUAGES.SPANISH, country: COUNTRYS.SPANISH, src: spanishImg },
    { id: 12, lang: LANGUAGES.DUTCH, country: COUNTRYS.DUTCH, src: dutchImg },
    { id: 13, lang: LANGUAGES.SWEDISH, country: COUNTRYS.SWEDISH, src: svenskaImg},
    { id: 14, lang: LANGUAGES.DANSK, country: COUNTRYS.DANSK, src: danskImg },
    { id: 15, lang: LANGUAGES.ARABIC, country: COUNTRYS.ARABIC, src: arabicImg },
    { id: 16, lang: LANGUAGES.JAPANESE, country: COUNTRYS.JAPANESE, src: japanesImg }]


</script>
<template>
  <div class='main'>
  <div @click='closeLangMenu()' :class="{'wrapper-for-click-close': isOpenLangMenu}"></div>
  <button class='current-lang-btn' @click='toggleLangMenu()'>
    <div class='current-country-wrapper' v-for='item in configLang'>
      <div v-if='lang && item.country === lang'>{{ item.lang }}</div>
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
  <div :class="{'close-lang-menu': !isOpenLangMenu, 'even-lang-menu': !isEvenLangMenu}" class='lang-list'>
    <button @click='changeLang(item.country)' v-for='item in configLang' class='lang-list-wrapper'>
      <div class='lang-wrapper'>
        <div class='lang-name' >{{item.lang}}</div>
        <img class='lang-list-img' :src="item.src" :alt="item.lang">
      </div>
    </button>
  </div>
  </div>
</template>

<style scoped>

.main {
  overflow-x: hidden;
}

  button {
    position: relative;
    border: none;
    cursor: pointer;
    background: var(--body-backround);
  }

  .current-lang-btn {
    background: var(--wrapper-content-background);
  }

  button:active {
    transition: transform var(--transition-click);
    transform: scale(1.15);
  }

  .flag {
    width: var(--flag-width);
    height: var(--flag-height);
    border: solid 1px var(--black);
    border-radius: 50%;
  }

  .lang-list {
    position: absolute;
    top: calc(var(--height-header) + 10px);
    border: var(--wrapper-content-border);
    padding: 10px;
    animation: slide-from-right var(--transition-click) forwards;
  }

  .current-country-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .lang-list .lang-list-wrapper {
    display: flex;
    justify-content: end;
  }

  .lang-list-wrapper .lang-wrapper .lang-list-img  {
    width: var(--flag-width);
    height: var(--flag-height);
    border: solid 1px var(--black);
    border-radius: 50%;
  }

  .lang-list-wrapper .lang-wrapper {
    display: flex;
    justify-content: end;
    gap: 10px;
    background: var(--body-backround);
  }

  .lang-list-wrapper:last-of-type .lang-wrapper  {
    justify-content: center;
  }

  .lang-list {
    background: var(--body-backround);
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .lang-list > :last-child {
    grid-column: span 2;
    justify-content: center;
  }

  .close-lang-menu {
    animation: slide-in-right  var(--transition-click) forwards;
  }

  .even-lang-menu {
    display: none;
  }

  .wrapper-for-click-close {
    position: fixed;
    inset: 0;
    background: inherit;
  }

  @keyframes slide-from-right {
    0% {
      right: -290px;
    }
    100% {
      right: 10px;
    }
  }

  @keyframes slide-in-right {
    0% {
      right: 10px;
    }
    100% {
      right: -290px;
    }
  }




</style>
