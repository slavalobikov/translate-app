<script setup>

</script>
<template>
  <div class='flag-button'>
    <div class='english'></div>English
  </div>
</template>

<style scoped>
  .flag-button {
    position: absolute;
    right: 10px;
    top:14px;
    z-index: 101;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .english {
    width: 16px;
    height: 16px;
    background-position: 0 -133px;
    background: url(./src/assets/flags.png) no-repeat top left;
  }
</style>
