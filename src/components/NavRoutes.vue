<script setup>
import IconUsd from './icons/IconUsd.vue'
import IconMail from './icons/IconMail.vue'
import IconHome from './icons/IconHome.vue'
import Button from './Button.vue'
import IconQuestion from './icons/IconQuestion.vue'
import { PATHS } from '../constants/PATHS'

const { toggleMenu } = defineProps(['toggleMenu'])

</script>
<template>
  <div>
    <div class='wrapper-content wrapper-content-logo'>
      <router-link @click='toggleMenu' :to="PATHS.HOME"><img class='logo' src='./../assets/logo.png' alt='logotype'></router-link>
    </div>
    <div class='title'>
      <IconUsd />
      Ваш лицевой счет
    </div>
    <div class='wrapper-content wrapper-content-balance'>
        <div class='title-block'>Баланс: $12.00 (€11.21)</div>
        <router-link @click='toggleMenu' class='link' :to="PATHS.ADD_FUNDS">Пополнить счет</router-link>
        <router-link @click='toggleMenu' class='link' :to="PATHS.HISTORY">История операций</router-link>
        <router-link @click='toggleMenu' class='link' :to="PATHS.CHANGE_PASSWORD">Изменить пароль</router-link>
    </div>

    <div class='title'>
      <IconMail />
      Ваша почта
    </div>
    <div class='wrapper-content wrapper-content-mail'>
      <router-link @click='toggleMenu' class='link' :to="PATHS.MAILBOX_INBOX">Входящие</router-link>
      <router-link @click='toggleMenu' class='link' :to="PATHS.MAILBOX_OUTBOX">Исходящие</router-link>
      <router-link @click='toggleMenu' class='link' :to="PATHS.MAILBOX_SENTBOX">Отправленные</router-link>
      <router-link @click='toggleMenu' class='link' :to="PATHS.MAILBOX_POST">Написать сообщение</router-link>
    </div>

    <div class='title'>
      <IconQuestion />
      Закончить?
    </div>

    <div class='wrapper-content'>
      <Button />
    </div>
  </div>
</template>

<style scoped>

  .logo {
    width: 100%;
  }

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
    padding: var(--wrapper-content-padding);
    border: var(--wrapper-content-border);
    background-color: var(--wrapper-content-background);
    display: flex;
    flex-direction: column;
  }

  .wrapper-content-mail .link:first-child {
    margin: 0;
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

  .wrapper-content-mail .link {
    text-decoration: underline;
    font-weight: 700;
  }

  .wrapper-content-balance .link:first-of-type {
    text-decoration: underline;
    font-weight: 700;
  }

  .wrapper-content-logo {
    display: none;
  }

  @media screen and (max-width: 480px) {
    .wrapper-content-logo {
      display: block;
    }
  }

</style>
