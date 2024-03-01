<template>
    <div class='auth-page'>
      <h2>Авторизация</h2>
      <form>
        <label>
          <div>Ваш логин или E-mail</div>
          <input type='text'>
        </label>
        <label>
          <div>Ваш пароль</div>
          <input type='text'>
        </label>
      </form>
    </div>
</template>

<style scoped>

  .auth-page {
    min-width: 300px;
    border: solid red 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
