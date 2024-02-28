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
<!--      <div class='circle' />-->
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
      <div class='language japanese'>japanese</div>
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

.circle {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  height: 500px;
  width: 500px;
  border: red solid 3px;
  border-radius: 50%;
  background: conic-gradient(
    #FF0000 0deg calc(360deg / 17),
    #FF4500 calc(360deg / 17) calc(2 * 360deg / 17),
    #FFA500 calc(2 * 360deg / 17) calc(3 * 360deg / 17),
    #FFD700 calc(3 * 360deg / 17) calc(4 * 360deg / 17),
    #FFFF00 calc(4 * 360deg / 17) calc(5 * 360deg / 17),
    #ADFF2F calc(5 * 360deg / 17) calc(6 * 360deg / 17),
    #7FFF00 calc(6 * 360deg / 17) calc(7 * 360deg / 17),
    #00FF00 calc(7 * 360deg / 17) calc(8 * 360deg / 17),
    #00FA9A calc(8 * 360deg / 17) calc(9 * 360deg / 17),
    #00CED1 calc(9 * 360deg / 17) calc(10 * 360deg / 17),
    #4169E1 calc(10 * 360deg / 17) calc(11 * 360deg / 17),
    #800080 calc(11 * 360deg / 17) calc(12 * 360deg / 17),
    #9932CC calc(12 * 360deg / 17) calc(13 * 360deg / 17),
    #8B4513 calc(13 * 360deg / 17) calc(14 * 360deg / 17),
    #A0522D calc(14 * 360deg / 17) calc(15 * 360deg / 17),
    #FF8C00 calc(15 * 360deg / 17) calc(16 * 360deg / 17),
    #FF6347 calc(16 * 360deg / 17) 360deg
  );
 /* background: conic-gradient(
    red 0deg calc(360deg / 17),
    transparent calc(360deg / 17) 180deg,
    red 180deg calc(540deg / 17),
    transparent calc(540deg / 17) 360deg
  );*/
}

.logo {
  font-family: Times New Roman;
  font-size: 80px;
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
  transform: translate(-50%, -50%);
  animation: arabic var(--animation-language-time) cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

.dansk {
  position: absolute;
  transform: translate(-50%, -50%);
  animation: dansk var(--animation-language-time) cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

.english {
  position: absolute;
  transform: translate(-50%, -50%);
  animation: english var(--animation-language-time) cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

.chinese {
  position: absolute;
  transform: translate(-50%, -50%);
  animation: chinese var(--animation-language-time) cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}


.deutsch {
  position: absolute;
  transform: translate(-50%, -50%);
  animation: deutsch var(--animation-language-time) cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

.korean {
  position: absolute;
  transform: translate(-50%, -50%);
  animation: korean var(--animation-language-time) cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

.italiano {
  position: absolute;
  transform: translate(-50%, -50%);
  animation: italiano var(--animation-language-time) cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

.norsk {
  position: absolute;
  transform: translate(-50%, -50%);
  animation: norsk var(--animation-language-time) cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

.russian {
  position: absolute;
  transform: translate(-50%, -50%);
  animation: russian var(--animation-language-time) cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

.turkish {
  position: absolute;
  transform: translate(-50%, -50%);
  animation: turkish var(--animation-language-time) cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

.swedish {
  position: absolute;
  transform: translate(-50%, -50%);
  animation: swedish var(--animation-language-time) cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

.dutch {
  position: absolute;
  transform: translate(-50%, -50%);
  animation: dutch var(--animation-language-time) cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

.spanish {
  position: absolute;
  transform: translate(-50%, -50%);
  animation: spanish var(--animation-language-time) cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

.suomi {
  position: absolute;
  transform: translate(-50%, -50%);
  animation: suomi var(--animation-language-time) cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

.portuguese {
  position: absolute;
  transform: translate(-50%, -50%);
  animation: portuguese var(--animation-language-time) cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

.japanese {
  position: absolute;
  transform: translate(-50%, -50%);
  animation: japanese var(--animation-language-time) cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

.french {
  position: absolute;
  transform: translate(-50%, -50%);
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
/*
    variant 1
    top: calc(50% - 250px);
    left: 50%;*/

    top: calc(50% - 250px);
    left: calc(50% + 47px);
  }
}

@keyframes turkish {
  0% {
    top: 110%;
    left: 0;
  }
  100% {
/*
    variant 1
    top: calc(50% + 300px);
    left: calc(50% - 65px);
    */

    top: calc(50% + 225px);
    left: calc(50% - 98px);
  }
}

@keyframes swedish {
  0% {
    top: 110%;
    left: 0;
  }
  100% {
/*
    variant 1
    top: calc(50% + 300px);
    left: calc(50% + 65px);
    */

    top: calc(50% + 245px);
    left: calc(50% + 1px);
  }
}

@keyframes arabic {
  0% {
    top: 50%;
    left: 100%;
  }
  100% {
/*
    variant 1
    top: 50%;
    left: calc(50% + 365px);

    */

    top: calc(50% + 15px);
    left: calc(50% + 251px);
  }
}

@keyframes dansk {
  0% {
    top: 50%;
    left: calc(0px - var(--lang-fz));
  }
  100% {
/*
    variant 1
    top: 50%;
    left: calc(50% - 365px)
    */

    top: calc(50% + -68px);
    left: calc(50% - 242px);
  }
}

@keyframes norsk {
  0% {
    top: calc(0px - var(--lang-fz));
    left: 0;
  }
  100% {
/*
    variant 1
    top: calc(50% - 225px);
    left: calc(50% - 158px);*/

    top: calc(50% - 245px);
    left: calc(50% - 47px);
  }
}

@keyframes chinese {
  0% {
    top: calc(0px - var(--lang-fz));
    left: 100vw;
  }
  100% {
/*
    variant 1
    top: calc(50% - 225px);
    left: calc(50% + 158px);
    */

    top: calc(50% - 207px);
    left: calc(50% + 138px);
  }
}

@keyframes korean {
  0% {
    top: calc(0px - var(--lang-fz));
    left: 0;
  }
  100% {
/*
    variant 1
    top: calc(50% - 150px);
    left: calc(50% - 225px);*/

    top: calc(50% - 209px);
    left: calc(50% - 130px);
  }
}

@keyframes italiano {
  0% {
    top: calc(0px - var(--lang-fz));
    left: 100vw;
  }
  100% {
/*
    variant 1
    top: calc(50% - 150px);
    left: calc(50% + 225px);
    */

    top: calc(50% - 147px);
    left: calc(50% + 210px);
  }
}

@keyframes russian {
  0% {
    top: calc(0px - var(--lang-fz));
    left: 0;
  }
  100% {
/*
    variant 1
    top: calc(50% - 75px);
    left: calc(50% - 310px);*/

    top: calc(50% - 144px);
    left: calc(50% - 213px);
  }
}

@keyframes deutsch {
  0% {
    top: calc(0px - var(--lang-fz));
    left: 100vw;
  }
  100% {
/*
    variant 1
    top: calc(50% - 75px);
    left: calc(50% + 310px);
    */

    top: calc(50% - 65px);
    left: calc(50% + 242px);
  }
}

@keyframes portuguese {
  0% {
    top: 110%;
    left: 0;
  }
  100% {
   /*
    variant 1
    top: calc(50% + 225px);
    left: calc(50% - 158px);
    */

    top: calc(50% + 170px);
    left: calc(50% - 174px);
  }
}

@keyframes dutch {
  0% {
    top: 110%;
    left: 100vw;
  }
  100% {
/*
    variant 1
    top: calc(50% + 225px);
    left: calc(50% + 158px);
    */

    top: calc(50% + 215px);
    left: calc(50% + 111px);
  }
}

@keyframes japanese {
  0% {
    top: 110%;
    left: 0;
  }
  100% {
/*
    variant 1
    top: calc(50% + 150px);
    left: calc(50% - 225px);
    */

    top: calc(50% + 100px);
    left: calc(50% - 218px);
  }
}

@keyframes spanish {
  0% {
    top: 110%;
    left: 100vw;
  }
  100% {
/*
    variant 1
   top: calc(50% + 150px);
   left: calc(50% + 225px);
   */

    top: calc(50% + 163px);
    left: calc(50% + 179px);
  }
}

@keyframes french {
  0% {
    top: 110%;
    left: 0;
  }
  100% {
   /*
    variant 1
    top: calc(50% + 75px);
    left: calc(50% - 310px);
    */

    top: calc(50% + 22px);
    left: calc(50% - 247px);
  }
}

@keyframes suomi {
  0% {
    top: 110%;
    left: 100vw;
  }
  100% {
/*
    variant 1
    top: calc(50% + 75px);
    left: calc(50% + 310px);
    */

    top: calc(50% + 94px);
    left: calc(50% + 223px);
  }
}

@media screen and (max-width: 768px) {
  .wrapper {
    display: none;
  }
}




</style>
