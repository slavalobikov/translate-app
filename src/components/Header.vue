<script setup>
import BurgerMenu from './BurgerMenu.vue'
import IconMail from './icons/IconMail.vue'
import IconUser from './icons/IconUser.vue'
import SelectCountry from './SelectCountry.vue'
import SelectCountryRectangle from './SelectCountryRectangle.vue'
import { inject, ref, onMounted, onUnmounted } from 'vue'
import router from '../routes/router'
import { PATHS } from '../constants/PATHS'

const isAuth = inject('isAuth', false)
const balance = inject('balance', '$00.00 (€00.00)')
const isEvenFlagList = inject('isEvenFlagList', false)
const isFlagListOpen = inject('isFlagListOpen', false)

const userMenuRef = ref(null)
const userBtnRef = ref(null)
const isOpen = ref(false)
const isEvenOpen = ref(false)

const isOpenMenuUser = ref(false)
const isEvenMenuUser = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  isEvenOpen.value = true
  if (isEvenFlagList.value && isFlagListOpen.value) {
    isFlagListOpen.value = false
  }
}

const clickMessage = () => {
  router.push(PATHS.MAILBOX_INBOX)
}

const clickUserMenu = () => {
  isOpenMenuUser.value = !isOpenMenuUser.value
  isEvenMenuUser.value = true
}

/*const handleDocumentClick = (event) => {

  const userMenu = userMenuRef?.value;
  const userBtn = userBtnRef?.value;

  if (userMenu &&
    userBtn &&
    (!userMenu?.contains(event.target) ||
    !userBtn?.contains(event.target))) {
      clickUserMenu();
  }
}

onMounted(() => {
  document.addEventListener('click', handleDocumentClick);
});

// Removing click event listener on component unmount
onUnmounted(() => {
  document.removeEventListener('click', handleDocumentClick);
});*/
</script>


<template>
  <header>
    <h1 class='h1'>
      <BurgerMenu :toggleMenu='toggleMenu' :isOpen='isOpen' :isEvenOpen='isEvenOpen' />
<!--      <div class='auth-menu-mobile' v-if='!isAuth'>
        <router-link class='link' :to='PATHS.LOGIN'>Войти</router-link>
        <div class='separator'>|</div>
        <router-link class='link' :to='PATHS.LOGIN'>Регистрация</router-link>
      </div>
      <router-link v-if='isAuth' class='balance' :to='PATHS.ADD_FUNDS'>{{ balance }}</router-link>-->
<!--      <SelectCountry v-if='!isAuth' />-->
      <button v-if='isAuth' @click='clickMessage' class='message-wrapper'>
        <IconMail />
        <div class='count-unread'>
          9+
        </div>
      </button>
      <button v-if='isAuth' ref='userBtnRef' @click='clickUserMenu' class='user-btn'>
        <IconUser />
      </button>
      <div
        ref='userMenuRef'
        class='user-menu'
        :class="{'user-menu-open' : isOpenMenuUser, 'user-menu-close': !isOpenMenuUser, 'user-menu-first': !isEvenMenuUser}">
        <button>Войти</button>
        <br />
        <br />
        <button>Регистрация</button>
      </div>
      <SelectCountryRectangle />
    </h1>
  </header>
  <button
    @click='toggleMenu' :class="{ 'open': isOpen }" class='burger-button'>
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>


<style scoped>

header {
  flex: 0 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--height-header);
  z-index: 100;
}

.auth-menu-mobile {
  color: var(--gray);
  position: absolute;
  left: 20px;
  display: flex;
}

.separator {
  margin: 0 7px;
}


.auth-menu-mobile .link {
  color: var(--gray);
  text-decoration: none;
  border: none;
  cursor: pointer;
}

.auth-menu-mobile .link:active {
  transition: var(--transition-click);
  color: var(--active-click-color);
  transform: scale(1.1);
}

.h1 {
  color: #000;
  font-family: Tahoma, Verdana, Arial;
  font-size: 14px;
  background-color: var(--wrapper-content-background);
  display: flex;
  justify-content: end;
  align-items: center;
  position: relative;
  height: var(--height-header);
  padding: 10px;
}

.burger-button {
  position: fixed;
  left: 10px;
  top: 0;
  z-index: 101;
  cursor: pointer;
  background: none;
  border: none;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  display: none;
}

.burger-button span {
  width: 20px;
  height: 3px;
  background-color: #333;
  margin: 2.5px 0;
  transition: transform var(--transition-click), opacity var(--transition-click);
}

.burger-button.open span:nth-child(1) {
  transform: rotate(-45deg) translate(-6px, 6px);
}

.burger-button.open span:nth-child(2) {
  opacity: 0;
}

.burger-button.open span:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -5px);
}

.message-wrapper {
  position: relative;
  cursor: pointer;
  padding: 0;
  height: 30px;
  border: none;
  margin-right: 10px;
}

.message-wrapper:active {
  transition: transform var(--transition-click);
  transform: scale(1.15);
}

.message-wrapper svg {
  width: 30px;
  height: 30px;
}

.message-wrapper .count-unread {
  position: absolute;
  right: -10px;
  top: -4px;
  background: #f04134;
  color: var(--white);
  max-width: 25px;
  min-width: 20px;
  height: 20px;
  font-size: 12px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 6px;
}

.balance {
  margin-right: 10px;
  text-decoration: none;
  color: var(--icon-color);
}

.balance:active {
  color: #00bd00;
}

.user-btn {
  margin: 0 10px;
  display: block;
  cursor: pointer;
  border: none;
}

.user-btn:active {
  transition: transform var(--transition-click);
  transform: scale(1.15);
}

.user-menu {
  position: absolute;
  border: var(--wrapper-content-border);
  top: calc(var(--height-header) + 10px);
  background: var(--wrapper-content-background);
  right: 10px;
  padding: 15px;
}

.user-menu button {
  width: 100%;
}

.user-menu-open {
  animation: enter-user-menu var(--transition-click) ease-in-out forwards;
}

.user-menu-close {
  animation: close-user-menu var(--transition-click) ease-in-out forwards;
}

.user-menu-first {
  display: none;
}


@media screen and (max-width: 768px) {
  .burger-button {
    display: flex;
  }

  .user-btn {
    display: none;
  }
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
