<script setup>
import IconUsd from './icons/IconUsd.vue'
import IconMail from './icons/IconMail.vue'
import { PATHS } from '../constants/PATHS'

const { toggleMenu } = defineProps(['toggleMenu'])

</script>
<template>
  <div>
    <div class='title'>
      <IconUsd />
      Ваш лицевой счет
    </div>
    <div class='wrapper-content'>
        <div class='title-block'>Баланс: $12.00 (€13.21)</div>
        <router-link @click='toggleMenu' class='link' :to="PATHS.ADD_FUNDS">Пополнить счет</router-link>
        <router-link @click='toggleMenu' class='link' :to="PATHS.HISTORY">История операций</router-link>
        <router-link @click='toggleMenu' class='link' :to="PATHS.CHANGE_PASSWORD">Изменить пароль</router-link>
    </div>

    <div class='title'>
      <IconMail />
      Ваша почта
    </div>
  </div>
</template>

<style scoped>
  .title {
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    font-weight: 700;
    font-size: var(--title-nav-fz);
    color: var(--title-nav-color);
  }

  .wrapper-content {
    margin-top: 10px;
    padding: 7px;
    border: 1px solid #c8c8c8;
    background-color: #f1f1f1;
    display: flex;
    flex-direction: column;
  }

  .title-block {
    font-size: 13px;
    color: #000;
    font-weight: 700;
  }

  .link {
    margin-top: 13px;
    font-size: 13px;
    text-decoration: none;
    color: var(--black)
  }

  .link:active {
    color: var(--active-click-color);
  }

</style>
