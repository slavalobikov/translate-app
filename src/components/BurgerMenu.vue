<template>
  <div class='wrapper'>
    <teleport to="body">
      <transition name="fade">
        <div ref='swipeElement' :class="{'menu-open': isOpen,'menu-close' : !isOpen, 'even-open-modal': !isEvenOpen}" class="menu">
          <div class='wrapper-for-routes'>
            <NavRoutes :toggleMenu="toggleMenu" />
          </div>
        </div>
      </transition>
    </teleport>
  </div>
  <div @click='handleAllPageClick' v-if='isOpen' class='all-page-wrapper'>

  </div>
</template>

<script setup>
import NavRoutes from './NavRoutes.vue'

import { onMounted, ref } from 'vue'
import Hammer from 'hammerjs'
const { toggleMenu, isOpen, isEvenOpen } = defineProps(['toggleMenu', 'isOpen', 'isEvenOpen'])

const swipeElement = ref(null)
const handleAllPageClick = () => {
  toggleMenu()
}

const onSwipeLeft = () => {
  toggleMenu()
}

onMounted(() => {
  const hammer = new Hammer(swipeElement.value);
  hammer.on('swipeleft', onSwipeLeft);
});



</script>

<style scoped>

.wrapper {
  position: absolute;
  z-index: 1;
  left: 10px;
}


.menu {
  position: fixed;
  left:0;
  top:0;
  width: var(--width-menu);
  bottom: 0;
  background-color: var(--menu-background);
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
  padding: var(--padding-mobile-menu);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity var(--transition-click);
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.all-page-wrapper {
  position: fixed;
  inset: 0;
  z-index: 5;
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
