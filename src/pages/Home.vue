<script setup>
import TranslationGallery from './../components/TranslationGallery.vue'
import TranslationTagLine from './../components/TranslateTaglineOnEndMessage.vue'
</script>
<template>
  <div class='wrapper-head'>
    <img class='head-img' src='./../assets/head_ru.gif' alt='head'>
  </div>
  <h3 class='title'>Translation.Gallery это:</h3>
  <div class='wrapper-content'>
    <p>
      <TranslationGallery />
      - это ПРОСТАЯ и УДОБНАЯ система для общения между людьми,
      говорящими на разных языках.
    </p>
    <p>
      <TranslationGallery />
      - это КАЧЕСТВО. Никаких компьютерных переводов.
      Вся корреспонденция переводится высококвалифицированными переводчиками.
    </p>
    <p>
      <TranslationGallery />
      - это СКОРОСТЬ. Команда переводчиков работает 24 часа в сутки 7 дней в неделю. Перевод Вашего
      сообщения осуществляется в течение нескольких часов.
    </p>
    <p>
      <TranslationGallery />
      - это АНОНИМНОСТЬ. Переводчик работает лишь с текстом и не знает, кто является отправителем и
      получателем сообщения. Более того, любая информация, предоставляемая нашими пользователями,
      является строго конфиденциальной и не может быть открыта третьим лицам или организациям,
      а также служить объектом обмена или продажи.
    </p>
    <div class='last-p'>
      <TranslationGallery />
      - это СВОБОДА:
    <ul>
      <li>свобода общения со всем миром, несмотря на границы и языковые барьеры;</li>
      <li>свобода Вашего бизнеса. Если Вы - бизнесмен и хотите сделать свой бизнес международным,
        то Вы, безусловно, оцените ту простоту, с которой сервис
        <TranslationGallery />
        может быть интегрирован в Ваш Интернет-проект, предоставив тем самым Вам и Вашим
        пользователям новые
        возможности.
      </li>
    </ul>
    </div>

    <strong>
      <TranslationTagLine />
    </strong>
  </div>
</template>

<style scoped>

.title {
  margin: 10px calc(var(--common-gorizontal-margin) * 2) 0 calc(var(--common-gorizontal-margin) * 2);
  font-size: 14px;
  font-weight: 400;
  color: var(--black)
}

.wrapper-content {
  padding: 9px;
  border: var(--wrapper-content-border);
  margin: 0 var(--common-gorizontal-margin);
}

.wrapper-content p {
  text-align: justify;
  font-size: var(--wrapper-content-fz);
  margin: 20px 0;
}

.last-p {
  text-align: justify;
  font-size: var(--wrapper-content-fz);
  margin: 20px 0 40px 0;
}

ul {
  margin: 0;
  padding: 0;
}
ul, li {
  list-style-position: inside;
}

strong {
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-size: var(--wrapper-content-fz);
}

.wrapper-head {
  margin: 0 var(--common-gorizontal-margin);
  padding: var(--wrapper-content-padding);
  border: var(--wrapper-content-border);
  background-color: var(--wrapper-content-background);
  background: var(--body-backround);
  display: flex;
  justify-content: center;
}

.head-img {
  max-width: 500px;
  width: 100%;
}

@media screen and (max-width: 480px) {
  .wrapper-head {
    display: block;
  }

  .head-img {
    width: 100%;
  }
}
</style>
