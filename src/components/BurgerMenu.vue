<template>
  <div class='wrapper'>
    <button @click="toggleMenu" :class="{ 'open': isOpen }" class="burger-button">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <teleport to="body">
      <transition name="fade">
        <div :class="{'menu-close' : !isOpen}" class="menu">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const isOpen = ref(false);

    const toggleMenu = () => {
      isOpen.value = !isOpen.value;
    };

    return {
      isOpen,
      toggleMenu,
    };
  },
};
</script>

<style scoped>

.wrapper {
  position: absolute;
  z-index: 100;
  left: 10px;
}
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

.menu {
  position: fixed;
  left:0;
  top:0;
  width: var(--width-menu);
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  animation: slide-in-left ease-in-out var(--transition-click) both;
}

.menu-close {
  animation: slide-to-left ease-in-out var(--transition-click) both;
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
