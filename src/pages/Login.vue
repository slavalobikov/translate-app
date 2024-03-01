<script setup>
import Button from '../components/Button.vue'

</script>

<template>
    <div class='auth-page'>
      <h2>Авторизация</h2>
      <form>
        <label class='label'>
          <div>Ваш логин или E-mail</div>
          <input type='text'>
        </label>
        <label class='label'>
          <div>Ваш пароль</div>
          <input type='text'>
        </label>
        <div class='btn'>
          <Button >
          Вход
          </Button>
        </div>
      </form>
    </div>
</template>

<style scoped>
  .auth-page {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  h2 {
    margin-bottom: 50px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .btn {
    display: flex;
    justify-content: center;
  }

  input {
    max-width: 300px;
    width: 80vw;
  }

  .btn button {
    width: 110px;
  }

</style>

