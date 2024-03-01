<script setup>
import { PATHS } from '../constants/PATHS'
import PayPal from './icons/IconPayPal.vue';
</script>
<template>
  <footer>
    <div class='test'>
      <router-link class='link-to-terms' :to='PATHS.TERMS_OF_USE'>Terms of use</router-link>

      <div class='text-logo label-c'>© 2018 Translation.Gallery</div>
    </div>
<!--    <ul>
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
    </ul>-->
    <div class='images'>
      <img class='paypal' src='./../assets/paypal.png' alt='paypal'>
      <img class='visa' src='./../assets/visa.png' alt='visa'>
      <img class='mastercard' src='./../assets/mastercard.png' alt='mastercard'>
      <img class='pcicompliant' src='./../assets/pci.svg' alt='pcicompliant'>
    </div>
  </footer>
</template>

<style scoped>
footer {
  flex: 0 0 auto;
  margin: 10px var(--common-gorizontal-margin);
  font-size: 13px;
  display: flex;
  flex-direction: column;
  gap:18px;
  align-items: center;
}

.test {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.link {
  color: var(--gray);
  text-decoration: none;
}

.link:active {
  text-decoration: underline;
}

.text-logo {
  font-size: 14px;
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
 /* text-align: center;
  margin-top: 10px;*/
}

.images {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.mastercard {
  width: 22px;
}

.visa {
  width: 32px;
}

.paypal {
  width: 41px;
}

.pcicompliant {
  width: 26px;
}

.link-to-terms {
/*
  margin: 0 auto;
*/
  color: var(--gray);
  text-decoration: none;
  font-size: 14px;
}
</style>
