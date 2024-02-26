<template>
  <div class='wrapper'>
<!--    <button @click="toggleMenu" :class="{ 'open': isOpen }" class="burger-button">
      <span></span>
      <span></span>
      <span></span>
    </button>-->
    <teleport to="body">
      <transition name="fade">
        <div :class="{'menu-open': isOpen,'menu-close' : !isOpen, 'even-open-modal': !isEvenOpen}" class="menu">
          <div class='wrapper-for-routes'>
            <NavRoutes :toggleMenu="toggleMenu" />
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NavRoutes from './NavRoutes.vue'

const { toggleMenu, isOpen, isEvenOpen } = defineProps(['toggleMenu', 'isOpen', 'isEvenOpen'])

/*    const isOpen = ref(false);
    const isEvenOpen = ref(false);

    const toggleMenu = () => {
      isOpen.value = !isOpen.value;
      isEvenOpen.value = true;
    };*/

</script>

<style scoped>

.wrapper {
  position: absolute;
  z-index: 1;
  left: 10px;
}
/*
.burger-button {
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
*/

.menu {
  position: fixed;
  left:0;
  top:0;
  width: var(--width-menu);
  bottom: 0;
  background-color: var(--menu-background)/*rgba(0, 0, 0, 0.3)*/;
  animation: slide-in-left ease-in-out var(--transition-click) forwards;
  box-shadow: 0px 0px 15px 8px rgba(0,0,0,0.41);
}

.menu-close {
  animation: slide-to-left ease-in-out var(--transition-click) forwards;
}

.even-open-modal {
  display: none;
}

.wrapper-for-routes {
  margin-top: 25px;
  padding: 10px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity var(--transition-click);
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}


@keyframes slide-in-left {
  0% {
    transform: translateX(calc(var(--width-menu) * -1));
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-to-left {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(calc(var(--width-menu) * -1));
    opacity: 0;
  }
}
</style>
