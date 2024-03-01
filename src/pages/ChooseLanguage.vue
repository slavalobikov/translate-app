<script setup>
import { ref } from 'vue'
import {PATHS} from '../constants/PATHS'

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
      <router-link :to='PATHS.HOME' class='language russian'>русский</router-link>
      <router-link :to='PATHS.HOME' class='language korean'>한국어</router-link>
      <router-link :to='PATHS.HOME' class='language arabic'>العربية</router-link>
      <router-link :to='PATHS.HOME' class='language dansk'>dansk</router-link>
      <router-link :to='PATHS.HOME' class='language english'>english</router-link>
      <router-link :to='PATHS.HOME' class='language chinese'>中文</router-link>
      <router-link :to='PATHS.HOME' class='language italiano'>italiano</router-link>
      <router-link :to='PATHS.HOME' class='language deutsch'>deutsch</router-link>
      <router-link :to='PATHS.HOME' class='language norsk'>norsk</router-link>
      <router-link :to='PATHS.HOME' class='language turkish'>türkçe</router-link>
      <router-link :to='PATHS.HOME' class='language swedish'>svenska</router-link>
      <router-link :to='PATHS.HOME' class='language dutch'>nederlands</router-link>
      <router-link :to='PATHS.HOME' class='language spanish'>español</router-link>
      <router-link :to='PATHS.HOME' class='language suomi'>suomi</router-link>
      <router-link :to='PATHS.HOME' class='language portuguese'>português</router-link>
      <router-link :to='PATHS.HOME' class='language japanese'>日本語</router-link>
      <router-link :to='PATHS.HOME' class='language french'>français</router-link>
    </div>
  </div>
</template>
<style scoped>

/*
  vw for 1024px
*/

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
  font-size: 6.836vw;
  text-shadow: var(--shadow-lang);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.language {
  font-size: var(--lang-fz);
  text-decoration: none;
  color: var(--black);
  font-family: Times New Roman;
  text-shadow: var(--shadow-lang);
  cursor: pointer;
  transform: translate(-50%, -50%);
}

.language:hover {
  color: var(--active-click-color);
}

.arabic {
  position: absolute;
  font-size: 2.734vw;
  top: calc(50% + 1.074vw);
  left: calc(50% + 20.703vw);
}

.dansk {
  position: absolute;
  font-size: 2.441vw;
  top: calc(50% - 9.18vw);
  left: calc(50% - 1.758vw);
}

.english {
  position: absolute;
  font-size: 3.906vw;
  top: calc(50% + 5.664vw);
  left: calc(50% + 7.715vw);
}

.chinese {
  position: absolute;
  font-size: 2.93vw;
  top: calc(50% + 0.586vw);
  left: calc(50% - 20.41vw)
}


.deutsch {
  position: absolute;
  font-size: 2.148vw;
  top: calc(50% + 5.762vw);
  left: calc(50% - 11.328vw);
}

.korean {
  position: absolute;
  font-size: 2.148vw;
  top: calc(50% - 5.176vw);
  left: calc(50% + 1.758vw);
}

.italiano {
  position: absolute;
  font-size: 2.441vw;
  top: calc(50% + 9.863vw);
  left: calc(50% - 16.504vw);

}

.norsk {
  position: absolute;
  font-size: 1.953vw;
  top: calc(50% - 3.32vw);
  left: calc(50% - 18.75vw)
}

.russian {
  position: absolute;
  font-size: 2.539vw;
  top: calc(50% - 5.371vw);
  left: calc(50% + 10.547vw)
}

.turkish {
  position: absolute;
  font-size: 2.734vw;
  top: calc(50% + 9.863vw);
  left: calc(50% + 1.562vw);
}

.swedish {
  position: absolute;
  font-size: 1.953vw;
  top: calc(50% - 8.398vw);
  left: calc(50% + 16.406vw);
}

.dutch {
  position: absolute;
  font-size: 2.246vw;
  top: calc(50% + 9.766vw);
  left: calc(50% + 12.5vw);
}

.spanish {
  position: absolute;
  font-size: 3.906vw;
  top: calc(50% - 5.469vw);
  left: calc(50% - 8.887vw);
}

.suomi {
  position: absolute;
  font-size: 1.953vw;
  top: calc(50% + 5.566vw);
  left: calc(50% + 17.187vw);
}

.portuguese {
  position: absolute;
  font-size: 3.125vw;
  top: calc(50% - 5.371vw);
  left: calc(50% + 22.353vw);
}

.japanese {
  position: absolute;
  font-size: 2.148vw;
  top: calc(50% + 5.762vw);
  left: calc(50% - 3.027vw);
}

.french {
  position: absolute;
  font-size: 3.906vw;
  top: calc(50% + 5.664vw);
  left: calc(50% - 22.656vw);
}

/*
@media screen and (max-width: 1024px) and (orientation: landscape) {
!*  add styles for gorizontal orintation on phone*!
  .chinese {
    left: calc(50% - 22.41vw);
  }
  .arabic {
    left: calc(50% + 22.703vw);
  }
  .norsk {
    left: calc(50% - 20.75vw)
  }
  .spanish {
    left: calc(50% - 10.887vw);
  }
  .russian {
    left: calc(50% + 12.547vw)
  }
  .portuguese {
    left: calc(50% + 26.353vw);
  }
  .dansk {
    top: calc(50% - 11.18vw);
    left: calc(50% - 2.758vw);
  }
  .swedish {
    top: calc(50% - 9.398vw);
    left: calc(50% + 17.406vw);
  }
  .french {
    left: calc(50% - 24.656vw);
  }
  .deutsch {
    left: calc(50% - 12.328vw);
  }
  .english {
    left: calc(50% + 9.715vw);
  }
  .suomi {
    left: calc(50% + 20.187vw);
  }
  .italiano {
    top: calc(50% + 10.863vw);
    left: calc(50% - 17.504vw);
  }
  .turkish {
    top: calc(50% + 10.863vw);
  }
  .dutch {
    top: calc(50% + 10.863vw);
    left: calc(50% + 13.8vw);
  }
}
*/

@media screen and (max-width: 768px){

  .logo {
    font-size: 9.5vw;
  }

  .chinese {
    font-size: 4.4vw;
    left: calc(50% - 28.41vw);
  }

  .arabic {
    font-size: 5vw;
    left: calc(50% + 29.703vw);
  }

  .norsk {
/*    font-size: 3.653vw;
    top: calc(50% - 6.5vw);
    left: calc(50% - 31.75vw);*/

    font-size: 3.653vw;
    top: calc(50% - 7.5vw);
    left: calc(50% - 35.75vw);
  }

  .spanish {
/*    font-size: 5.406vw;
    top: calc(50% - 8.469vw);
    left: calc(50% - 15.887vw);*/

    font-size: 5.406vw;
    top: calc(50% - 9.469vw);
    left: calc(50% - 17.887vw);
  }

  .korean {
/*    font-size: 3.748vw;
    top: calc(50% - 7.176vw);
    left: calc(50% + 1.758vw);*/

    font-size: 3.748vw;
    top: calc(50% - 9.176vw);
    left: calc(50% + 1.758vw);
  }

  .russian {
/*    font-size: 4.1vw;
    left: calc(50% + 16.547vw);
    top: calc(50% - 7.871vw);*/

    font-size: 4.1vw;
    left: calc(50% + 18.547vw);
    top: calc(50% - 9.871vw);
    color: red;
  }

  .portuguese {
    font-size: 4.725vw;
    top: calc(50% - 7.371vw);
    left: calc(50% + 35.353vw);
  }

  .dansk {
    font-size: 3.841vw;
    top: calc(50% - 14.418vw);
    left: calc(50% - 4.758vw);
  }

  .swedish {
    font-size: 3.453vw;
    top: calc(50% - 12.98vw);
    left: calc(50% + 26.406vw);
  }

  .french {
    font-size: 5.4vw;
    top: calc(50% + 8.5vw);
    left: calc(50% - 31.656vw);
  }

  .deutsch {
/*    font-size: 3.548vw;
    top: calc(50% + 7.7vw);
    left: calc(50% - 11.4vw);*/
    font-size: 3.548vw;
    top: calc(50% + 8.8vw);
    left: calc(50% - 13vw);
  }

  .english {
/*    font-size: 5.406vw;
    top: calc(50% + 7.3vw);
    left: calc(50% + 17vw);*/
    font-size: 5.406vw;
    top: calc(50% + 8.3vw);
    left: calc(50% + 18.3vw);
  }

  .suomi {
/*    font-size: 3.453vw;
    left: calc(50% + 32.187vw);
    top: calc(50% + 7.3vw);*/
    font-size: 3.453vw;
    left: calc(50% + 34.187vw);
    top: calc(50% + 8.3vw);
  }

  .italiano {
/*    font-size: 3.841vw;
    top: calc(50% + 13vw);
    left: calc(50% - 19.504vw);*/

    font-size: 3.841vw;
    top: calc(50% + 15vw);
    left: calc(50% - 19.504vw);
  }

  .turkish {
/*    font-size: 4.234vw;
    left: calc(50% + -3.438vw);
    top: calc(50% + 12.8vw);*/

    font-size: 4.234vw;
    left: calc(50% + -3.438vw);
    top: calc(50% + 15vw);
  }

  .dutch {
/*    font-size: 3.646vw;
    top: calc(50% + 13.2vw);
    left: calc(50% + 22.8vw);*/

    font-size: 3.646vw;
    top: calc(50% + 15.2vw);
    left: calc(50% + 22.8vw);
  }

  .japanese {
/*    font-size: 3.3vw;
    top: calc(50% + 7.7vw);
    left: calc(50% - -1.7vw);*/
    font-size: 3.3vw;
    top: calc(50% + 8.7vw);
    left: calc(50% - -1.7vw);
  }

}

@media screen and (max-width: 480px) /*and (orientation: portrait)*/ {
  .logo {
    font-size: 10.667vw;
    top: calc(50% - 9.067vw);
    left: 50%;
  }

  .english {
    font-size: 8.4vw;
    top: calc(50% - 32.267vw);
    left: calc(50% + 20vw);
  }

  .suomi {
    font-size: 5.333vw;
    top: calc(50% + 16.267vw);
    left: calc(50% + 7.467vw);
  }

  .arabic {
    font-size: 5.867vw;
    top: calc(50% - 20vw);
    left: calc(50% + 35.467vw);
  }

  .dansk {
    font-size: 5.6vw;
    top: calc(50% + 31.733vw);
    left: calc(50% - 32.533vw);
  }

  .chinese {
    font-size: 6.113vw;
    top: calc(50% + 4.8vw);
    left: calc(50% - 32.8vw);
  }

  .deutsch {
    font-size: 5.867vw;
    top: calc(50% - 22.4vw);
    left: calc(50% - 33.067vw);
  }

  .korean {
    font-size: 4.8vw;
    top: calc(50% + 16.533vw);
    left: calc(50% + 29.067vw);
  }

  .italiano {
    font-size: 4.8vw;
    top: calc(50% + 27.2vw);
    left: calc(50% + 18.933vw);
  }

  .norsk {
    font-size: 5.6vw;
    top: calc(50% + 31.733vw);
    left: calc(50% - 5.333vw);
  }

  .russian {
    font-size: 5.6vw;
    top: calc(50% - 45.067vw);
    left: 50%;
  }

  .turkish {
    font-size: 5.6vw;
    top: calc(50% - 44.267vw);
    left: calc(50% + 31.2vw);
  }

  .swedish {
    font-size: 5.333vw;
    top: calc(50% + 40.8vw);
    left: calc(50% - 17.6vw);
  }

  .dutch {
    font-size: 5.333vw;
    top: calc(50% - 56.267vw);
    left: calc(50% + 17.6vw);
  }

  .spanish {
    font-size: 8.4vw;
    top: calc(50% + 16.8vw);
    left: calc(50% - 19.2vw);
  }

  .portuguese {
    font-size: 5.6vw;
    top: calc(50% - 32.267vw);
    left: calc(50% - 14.933vw);
  }

  .japanese {
    font-size: 4.533vw;
    top: calc(50% - 44.8vw);
    left: calc(50% - 30.4vw);
  }

  .french {
    font-size: 8.4vw;
    top: calc(50% + 3.2vw);
    left: calc(50% + 26.133vw);
  }

}

</style>
