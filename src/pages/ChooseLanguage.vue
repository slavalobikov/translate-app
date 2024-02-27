<script setup>
import {ref} from 'vue';
const configLang = ref([
  {id: 0, lang: 'english'},
  {id: 1, lang: 'italiano'},
  {id: 2, lang: 'deutsch'},
  {id: 2, lang: 'português'},
  {id: 4, lang: 'norsk'},
  {id: 5, lang: 'suomi'},
  {id: 6, lang: 'türkçe'},
  {id: 7, lang: '中文'},
  {id: 8, lang: '한국어'},
  {id: 9, lang: 'русский'},
  {id: 10, lang: 'français'},
  {id: 11, lang: 'español'},
  {id: 12, lang: 'nederlands'},
  {id: 13, lang: 'svenska'},
  {id: 14, lang: 'dansk'},
  {id: 15, lang: 'العربية'},
  {id: 16, lang: '日本語'},
])
</script>
<template>
  <div class='wrapper'>
  <span class='logo'>
  <span class='green_logo'>Trans</span>lation
    </span>
  <div class='column'>
      <ul>
        <li class='li' v-for='item in configLang' :key='item.id'>{{ item.lang }}</li>
      </ul>
    <div>

    </div>
  </div>
  </div>
</template>
<style scoped>

.logo {
  font-family: Times New Roman;
  font-size: 100px;
  text-shadow: -3px 3px 3px rgba(0, 0, 0, .2);
}

.green_logo {
  color: var(--active-click-color);
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.column  {
  color: var(--black);
  text-shadow: -3px 3px 3px rgba(0,0,0,.2);
  font-size: 26px;
  font-family: Times New Roman;
}

ul {
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.li {
  list-style: none;
  text-align: center;
}

ul li:last-child {
  grid-column: span 2;
  justify-self: center;
}

@media screen and (max-width: 768px) {
  .logo {
    font-size: 13vw;
  }
}
</style>
