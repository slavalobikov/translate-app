<script setup>
import { ref } from 'vue'

const configLang = ref([
  { id: 0, lang: 'english' },
  { id: 1, lang: 'italiano' },
  { id: 2, lang: 'deutsch' },
  { id: 2, lang: 'português' },
  { id: 4, lang: 'norsk' },
  { id: 5, lang: 'suomi' },
  { id: 6, lang: 'türkçe' },
  { id: 7, lang: '中文' },
  { id: 8, lang: '한국어' },
  { id: 9, lang: 'русский' },
  { id: 10, lang: 'français' },
  { id: 11, lang: 'español' },
  { id: 12, lang: 'nederlands' },
  { id: 13, lang: 'svenska' },
  { id: 14, lang: 'dansk' },
  { id: 15, lang: 'العربية' },
  { id: 16, lang: '日本語' }
])
</script>
<template>
  <div class='main'>
    <div class='wrapper'>
      <div class='logo'>
        <span class='green_logo'>Trans</span>lation
      </div>
      <div class='language russian'>русский</div>
      <div class='language korean'>한국어</div>
      <div class='language arabic'>العربية</div>
      <div class='language dansk'>dansk</div>
      <div class='language english'>english</div>
      <div class='language chinese'>中文</div>
      <div class='language italiano'>italiano</div>
      <div class='language deutsch'>deutsch</div>
      <div class='language norsk'>norsk</div>
      <div class='language turkish'>türkçe</div>
      <div class='language swedish'>svenska</div>
      <div class='language dutch'>nederlands</div>
      <div class='language spanish'>español</div>
      <div class='language suomi'>suomi</div>
      <div class='language portuguese'>português</div>
      <div class='language japanese'>Japanese</div>
      <div class='language french'>français</div>
    </div>
  </div>
</template>
<style scoped>
.green_logo {
  color: var(--active-click-color);
}

.main {
  position: fixed;
  background: var(--body-backround);
  inset: 0;
  z-index: 101;
}

.wrapper {
  height: 100%;
  width: 100%;
  position: relative;
  perspective: var(--perspective);
}

.logo {
  font-family: Times New Roman;
  font-size: 4.85vw;
  text-shadow: var(--shadow-lang);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: slide-bck-center var(--animation-language-time) cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

.language {
  font-size: var(--lang-fz);
  font-family: Times New Roman;
  text-shadow: var(--shadow-lang);
  cursor: pointer;
}

.language:hover {
  color: var(--active-click-color);
}

.arabic {
  position: absolute;
  transform: translate(0, -50%);
  animation: arabic var(--animation-language-time) cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

.dansk {
  position: absolute;
  transform: translate(0, -50%);
  animation: dansk var(--animation-language-time) cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

.english {
  position: absolute;
  transform: translate(-50%, 0);
  animation: english var(--animation-language-time) cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

.chinese {
  position: absolute;
  transform: translate(-50%, 0);
  animation: chinese var(--animation-language-time) cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

.italiano {
  position: absolute;
  transform: translate(-50%, 0);
  animation: italiano var(--animation-language-time) cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

.deutsch {
  position: absolute;
  transform: translate(-50%, 0);
  animation: deutsch var(--animation-language-time) cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

.korean {
  position: absolute;
  transform: translate(-50%, 0);
  animation: korean var(--animation-language-time) cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

.norsk {
  position: absolute;
  transform: translate(-50%, 0);
  animation: norsk var(--animation-language-time) cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

.russian {
  position: absolute;
  transform: translate(-50%, 0);
  animation: russian var(--animation-language-time) cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

.turkish {
  position: absolute;
  transform: translate(-50%, 0);
  animation: turkish var(--animation-language-time) cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

.swedish {
  position: absolute;
  transform: translate(-50%, 0);
  animation: swedish var(--animation-language-time) cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

.dutch {
  position: absolute;
  transform: translate(-50%, 0);
  animation: dutch var(--animation-language-time) cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

.spanish {
  position: absolute;
  transform: translate(-50%, 0);
  animation: spanish var(--animation-language-time) cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

.suomi {
  position: absolute;
  transform: translate(-50%, 0);
  animation: suomi var(--animation-language-time) cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

.portuguese {
  position: absolute;
  transform: translate(-50%, 0);
  animation: portuguese var(--animation-language-time) cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

.japanese {
  position: absolute;
  transform: translate(-50%, 0);
  animation: japanese var(--animation-language-time) cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

.french {
  position: absolute;
  transform: translate(-50%, 0);
  animation: french var(--animation-language-time) cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

@keyframes slide-bck-center {
  0% {
    transform: translateZ(calc(var(--perspective) * -1)) translate(-50%, -50%);
  }
  100% {
    transform: translateZ(0) translate(-50%, -50%);
  }
}

@keyframes english {
  0% {
    top: calc(0px - var(--lang-fz));
    left: 50%;
  }
  100% {
    top: 0;
    left: 50%;
  }
}

@keyframes turkish {
  0% {
    top: 110%;
    left: 0;
  }
  100% {
    top: 83%;
    left: calc(50vw - 6vw);
  }
}

@keyframes swedish {
  0% {
    top: 110%;
    left: 0;
  }
  100% {
    top: 83%;
    left: calc(50vw + 6vw);
  }
}

@keyframes arabic {
  0% {
    top: 50%;
    right: calc(0px - var(--lang-fz));
  }
  100% {
    top: 50%;
    right: 9.3vw;
  }
}

@keyframes dansk {
  0% {
    top: 50%;
    left: calc(0px - var(--lang-fz));
  }
  100% {
    top: 50%;
    left: 9.3vw;
  }
}

@keyframes norsk {
  0% {
    top: calc(0px - var(--lang-fz));
    left: 0;
  }
  100% {
    top: 4.65vw;
    left: 37.135vw;
  }
}

@keyframes chinese {
  0% {
    top: calc(0px - var(--lang-fz));
    left: 100vw;
  }
  100% {
    top: 4.65vw;
    left: 62.865vw;
  }
}

@keyframes korean {
  0% {
    top: calc(0px - var(--lang-fz));
    left: 0;
  }
  100% {
    top: 10.85vw;
    left: 29.85vw;
  }
}

@keyframes italiano {
  0% {
    top: calc(0px - var(--lang-fz));
    left: 100vw;
  }
  100% {
    top: 10.85vw;
    left: 70.15vw;
  }
}

@keyframes russian {
  0% {
    top: calc(0px - var(--lang-fz));
    left: 0;
  }
  100% {
    top: 17.05vw;
    left: 22.1vw;
  }
}

@keyframes deutsch {
  0% {
    top: calc(0px - var(--lang-fz));
    left: 100vw;
  }
  100% {
    top: 17.05vw;
    left: 77.9vw;
  }
}

@keyframes portuguese {
  0% {
    top: 110%;
    left: 0;
  }
  100% {
    top: 73%;
    left: 36.05vw;
  }
}

@keyframes dutch {
  0% {
    top: 110%;
    left: 100vw;
  }
  100% {
    top: 73%;
    left: 63.95vw;
  }
}

@keyframes japanese {
  0% {
    top: 110%;
    left: 0;
  }
  100% {
    top: 67%;
    left: 27.525vw;
  }
}

@keyframes spanish {
  0% {
    top: 110%;
    left: 100vw;
  }
  100% {
    top: 67%;
    left: 72.475vw;
  }
}

@keyframes french {
  0% {
    top: 110%;
    left: 0;
  }
  100% {
    top: 55%;
    left: 20.55vw;
  }
}

@keyframes suomi {
  0% {
    top: 110%;
    left: 100vw;
  }
  100% {
    top: 55%;
    left: 79.45vw;
  }
}




</style>
