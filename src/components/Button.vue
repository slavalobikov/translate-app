<template>
  <button class='btn'>
    <slot></slot>
  </button>

</template>

<style scoped>
.btn {
  padding: 0 5px;
  background: var(--background-btn);
  color: var(--white)
}
</style>
