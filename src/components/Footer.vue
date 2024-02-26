<script setup>
import { PATHS } from '../constants/PATHS'
</script>
<template>
  <footer>
    <ul>
      <li>
        <router-link class='link' :to='PATHS.ABOUT'>О <span class='text-logo'>Translation.Gallery</span></router-link>
      </li>
      <li>
        <router-link class='link' :to='PATHS.TERMS_CONDITIONS'>Соглашение о предоставлении услуг</router-link>
      </li>
      <li>
        <router-link class='link' :to='PATHS.PRIVACY_POLICY'>Политика конфиденциальности</router-link>
      </li>
      <li>
        <router-link class='link' :to='PATHS.REFUND_POLICY'>Политика возвратов</router-link>
      </li>
      <li>
        <router-link class='link' :to='PATHS.OUR_SERVICE'>Наши услуги</router-link>
      </li>
      <li>
        <router-link class='link' :to='PATHS.FAQ'>Вопросы и ответы</router-link>
      </li>
      <li>
        <router-link class='link' :to='PATHS.JOB'>Вакансии</router-link>
      </li>
      <li>
        <router-link class='link' :to='PATHS.CONTACT'>Обратная связь</router-link>
      </li>
    </ul>
    <div class='images'>
      <img class='mastercard' src='./../assets/mastercard.png' alt='mastercard'>
      <img class='visa' src='./../assets/visa.png' alt='visa'>
      <img class='pcicompliant' src='./../assets/pci.svg' alt='pcicompliant'>
    </div>
    <div class='text-logo label-c'>© 2018 Translation.Gallery</div>
  </footer>
</template>

<style scoped>
footer {
  margin: var(--common-gorizontal-margin);
  font-size: 13px;
}

.link {
  color: var(--gray);
  text-decoration: none;
}

.link:active {
  text-decoration: underline;
}

.text-logo {
  font-family: Tahoma, Verdana, Arial;
  color: var(--black);
}

ul {
  list-style-type: none;
  text-align: center;
  padding-left: 0;
  color: var(--gray);
}

ul li {
  margin-top: 10px;
}

.label-c {
  text-align: center;
  margin-top: 10px;
}

.images {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.mastercard {
  width: 50px;
}

.visa {
  width: 50px;
}

.pcicompliant {
  width: 50px;
}
</style>
