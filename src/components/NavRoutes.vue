<script setup>
import IconUsd from './icons/IconUsd.vue'
import IconMail from './icons/IconMail.vue'
import IconHome from './icons/IconHome.vue'
import Button from './Button.vue'
import IconQuestion from './icons/IconQuestion.vue'
import IconInfo from './icons/IconInfo.vue'
import { PATHS } from '../constants/PATHS'
import { inject } from 'vue'


const { toggleMenu } = defineProps(['toggleMenu'])

const balance = inject('balance', '$00.00 (€00.00)');
const isAuth = inject('isAuth', false);

</script>
<template>
  <div>
    <div class='wrapper-content wrapper-content-logo'>
      <router-link @click='toggleMenu' :to="PATHS.HOME"><img class='logo' src='./../assets/logo.png' alt='logotype'></router-link>
    </div>
    <div v-if='isAuth'>
      <div class='title'>
        <IconUsd />
        Ваш лицевой счет
      </div>
      <div class='wrapper-content wrapper-content-balance'>
        <div class='title-block'>Баланс: {{ balance }}</div>
        <router-link @click='toggleMenu' class='link' :to="PATHS.ADD_FUNDS">Пополнить счет</router-link>
        <router-link @click='toggleMenu' class='link' :to="PATHS.HISTORY">История операций</router-link>
        <router-link @click='toggleMenu' class='link' :to="PATHS.CHANGE_PASSWORD">Изменить пароль</router-link>
        <router-link @click='toggleMenu' class='link' :to="PATHS.CHOOSE_LANG">Test</router-link>
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
        <Button >
          Выход
        </Button>
      </div>
    </div>
    <div v-if='!isAuth'>
      <div class='title'>
        <IconQuestion />
        С чего начать?
      </div>
      <div class='wrapper-content'>
        <Button >
          Регистрация
        </Button>
      </div>
      <div class='title'>
        <IconInfo />
        Проверить почту
      </div>
      <div class='wrapper-content'>
        <form class='form-auth'>
          <label>
            <div>Ваш логин или E-mail</div>
            <input type='text'>
          </label>
          <label>
            <div>Ваш пароль</div>
            <input type='password'>
          </label>
          <Button>
            Вход
          </Button>
        </form>
      </div>
      <div class='title'>
        <IconQuestion />
        Забыли пароль?
      </div>
      <div class='wrapper-content'>
        <form class='form-forgot-password'>
          <label>
            <div>Ваш логин или E-mail</div>
            <input type='text'>
          </label>
          <Button>
            Напомнить пароль
          </Button>
        </form>
      </div>

    </div>
  </div>
</template>

<style scoped>

  .logo {
    width: 180px;
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

  .form-auth, .form-forgot-password {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .form-auth label, .form-forgot-password label {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    color: var(--gray);
  }

  .form-auth label input, .form-forgot-password label input {
    margin-top: 3px;
    width: 100%;
  }

</style>
