<script setup>

import { LANGUAGES } from '../constants/LANGUAGES.JS'
import { COUNTRYS } from '../constants/COUNTRYS.JS'
import { inject, ref, watch } from 'vue'

const configLang =
  [
    { id: 0, lang: LANGUAGES.ENGLISH, country: COUNTRYS.ENGLISH },
    { id: 1, lang: LANGUAGES.ITALIANO, country: COUNTRYS.ITALIANO },
    { id: 2, lang: LANGUAGES.DEUTSCH, country: COUNTRYS.DEUTSCH },
    { id: 3, lang: LANGUAGES.PORTUGUESE, country: COUNTRYS.PORTUGUESE },
    { id: 4, lang: LANGUAGES.NORSK, country: COUNTRYS.NORSK },
    { id: 5, lang: LANGUAGES.SUOMI, country: COUNTRYS.SUOMI },
    { id: 6, lang: LANGUAGES.TURKISH, country: COUNTRYS.TURKISH },
    { id: 7, lang: LANGUAGES.CHINESE, country: COUNTRYS.CHINESE},
    { id: 8, lang: LANGUAGES.KOREAN, country: COUNTRYS.KOREAN },
    { id: 9, lang: LANGUAGES.RUSSIAN, country: COUNTRYS.RUSSIAN },
    { id: 10, lang: LANGUAGES.FRENCH, country: COUNTRYS.FRENCH },
    { id: 11, lang: LANGUAGES.SPANISH, country: COUNTRYS.SPANISH },
    { id: 12, lang: LANGUAGES.DUTCH, country: COUNTRYS.DUTCH },
    { id: 13, lang: LANGUAGES.SWEDISH, country: COUNTRYS.SWEDISH},
    { id: 14, lang: LANGUAGES.DANSK, country: COUNTRYS.DANSK },
    { id: 15, lang: LANGUAGES.ARABIC, country: COUNTRYS.ARABIC },
    { id: 16, lang: LANGUAGES.JAPANESE, country: COUNTRYS.JAPANESE }]

const lang = inject('currentLang', COUNTRYS.ENGLISH)
const isAuth = inject('isAuth', false)
const changeCurrentLang = inject('changeCurrentLang', () => {})


const currentLang = ref(configLang.find(el => el.country === lang.value)?.lang)
const flagList = ref(null);
const isFlagListOpen = ref(false);
const isEvenFlagList = ref(false);
const outsideRef = ref(null)


const clickUserMenu = () => {
  isFlagListOpen.value = !isFlagListOpen.value
  isEvenFlagList.value = true
}

const changeLang = (l) => {
  changeCurrentLang(l)
  clickUserMenu()
}



watch(() => lang.value, (newLang) => {
  currentLang.value = configLang.find(el => el.country === newLang)?.lang
})

</script>
<template>
  <div v-if='!isAuth'>
  <button @click='clickUserMenu()' class='flag-button'>
    <div class='flag' :class="lang" /> {{currentLang}}
  </button>
  <div
    :ref='flagList'
    :class="{
      'flag-list-open' : isFlagListOpen,
       'flag-list-close': !isFlagListOpen,
        'is-flag-list-first': !isEvenFlagList
    }" class='flag-list'>
    <button class='btn' v-for='item in configLang' :key='item.id' @click='changeLang(item.country)'>
      <div :class="item.country" class='flag'></div> {{item.lang}}
    </button>
  </div>
    <div v-if='isFlagListOpen' @click='clickUserMenu()' class='click-wrapper'></div>
  </div>
</template>

<style scoped>

  .click-wrapper {
    position: fixed;
    inset: 0;
    z-index: 100;
  }

  .flag-list {
    position: absolute;
    top: calc(var(--height-header) + 10px);
    right: 20px;
    z-index: 101;
    border: var(--wrapper-content-border);
    padding: 10px;
    display: flex;
    flex-direction: column;
    background: var(--body-backround);
    max-height: calc(100dvh - var(--height-header) - 20px);
    overflow-y: auto;
  }

  .flag-list .btn {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 5px;
    background: var(--body-backround);
    transition: var(--transition-click);
    cursor: pointer;
    border: none;
  }

  .flag-list .btn:active {
    color: var(--active-click-color);
    transition: var(--transition-click);
    transform: scale(1.1);
  }

  .flag-button {
    position: absolute;
    right: 10px;
    top:14px;
    z-index: 101;
    display: flex;
    align-items: center;
    gap: 5px;
    border: none;
    cursor: pointer;
    transition: var(--transition-click);
  }


  .flag {
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url(https://translation.gallery/ru/images/sprites/flags.png) no-repeat top left;
  }

  .is-flag-list-first {
    display: none;
  }

  .russian {
    background-position: 0 -304px;
  }

  .japanese {
    background-position: 0 -190px;
  }

  .korean {
    background-position: 0 -209px;
  }

  .arabic {
    background-position: 0 -57px;
  }

  .dansk {
    background-position: 0 -38px;
  }

  .english {
    background-position: 0 -133px;
  }

  .chinese {
    background-position: 0 0;
  }

  .italiano {
    background-position: 0 -171px;
  }

  .deutsch {
    background-position: 0 -19px;
  }

  .norsk {
    background-position: 0 -247px;
  }

  .turkish {
    background-position: 0 -342px;
  }

  .swedish {
    background-position: 0 -323px;
  }

  .dutch {
    background-position: 0 -228px;
  }

  .spanish {
    background-position: 0 -76px;
  }

  .suomi {
    background-position: 0 -95px;
  }

  .portuguese {
    background-position: 0 -285px;
  }

  .french {
    background-position: 0 -114px;
  }

  .flag-button:active {
    color: var(--active-click-color);
    transform: scale(1.1);
    transition: var(--transition-click);
  }

  .flag-list-open {
    animation: enter-user-menu var(--transition-click) ease-in-out forwards;
  }

  .flag-list-close {
    animation: close-user-menu var(--transition-click) ease-in-out forwards;
  }


  @keyframes enter-user-menu {
    0% {
      right: 0;
      transform: translate(100%, 0);
    }
    100% {
      right: 10px;
      transform: translate(0, 0);
    }
  }

  @keyframes close-user-menu {
    0% {
      right: 10px;
      transform: translate(0, 0);
    }
    100% {
      right: 0;
      transform: translate(100%, 0);
    }
  }

</style>
