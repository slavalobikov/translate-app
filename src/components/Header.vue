<script setup>
import BurgerMenu from './BurgerMenu.vue'
import IconMail from './icons/IconMail.vue'
import { ref } from 'vue'
import router from '../routes/router'
import { PATHS } from '../constants/PATHS'

const isOpen = ref(false);
const isEvenOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  isEvenOpen.value = true;
};

const clickMessage = () => {
  router.push(PATHS.MAILBOX_INBOX)
}
</script>


<template>
  <header>
    <h1 class='h1'>
      <BurgerMenu :toggleMenu="toggleMenu" :isOpen="isOpen" :isEvenOpen="isEvenOpen" />
      <button @click='clickMessage' class='message-wrapper'>
        <IconMail />
        <div class='count-unread'>
          9+
        </div>
      </button>
    </h1>
  </header>
  <button @click="toggleMenu" :class="{ 'open': isOpen }" class="burger-button">
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>


<style scoped>

  header {
    position: sticky;
    top: 0;
  }

  .h1 {
    color: #000;
    font-family: Tahoma,Verdana,Arial;
    font-size: 14px;
    background-color: var(--wrapper-content-background);
    display: flex;
    justify-content: end;
    align-items: center;
    position: relative;
    padding: 10px;
  }

  .burger-button {
    position: fixed;
    left: 10px;
    top: 0;
    z-index: 3;
    cursor: pointer;
    background: none;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
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

</style>
