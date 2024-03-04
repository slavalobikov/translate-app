<script setup>
import {ref} from 'vue';
import TranslationGallery from './../components/TranslationGallery.vue'
import Prices from './../components/Prices.vue'

  const configPrices = ref([
    {id: 0, from: 'Arabic', to: 'Spanish', count: '$1.5087755 (€1.39)'},
    {id: 1, from: 'Arabic', to: 'Japanese', count: '$1.5087755 (€1.39)'},
    {id: 3, from: 'Arabic', to: 'Korean', count: '$1.5087755 (€1.39)'},
    {id: 4, from: 'Arabic', to: 'Russian', count: '$1.5087755 (€1.39)'},
    {id: 5, from: 'Arabic', to: 'Chinese', count: '$1.5087755 (€1.39)'},
    {id: 6, from: 'Danish', to: 'Spanish', count: '$1.1831405 (€1.09)'},
    {id: 7, from: 'Danish', to: 'Japanese', count: '$1.1831405 (€1.09)'},
    {id: 8, from: 'Danish', to: 'Korean', count: '$1.1831405 (€1.09)'},
    {id: 9, from: 'Danish', to: 'Russian', count: '$1.1831405 (€1.09)'},
    {id: 10, from: 'Danish', to: 'Chinese', count: '$1.1831405 (€1.09)'},
    {id: 11, from: 'German', to: 'Japanese', count: '$1.1831405 (€1.09)'},
    {id: 12, from: 'German', to: 'Korean', count: '$1.1831405 (€1.09)'},
    {id: 13, from: 'German', to: 'Russian', count: '$1.1831405 (€1.09)'},
    {id: 14, from: 'German', to: 'Chinese', count: '$1.1831405 (€1.09)'},
    {id: 15, from: 'English', to: 'Spanish', count: '$1.0745955 (€0.99)'},
    {id: 16, from: 'English', to: 'Japanese', count: '$1.0745955 (€0.99)'},
    {id: 17, from: 'English', to: 'Korean', count: '$1.0745955 (€0.99)'},
    {id: 18, from: 'English', to: 'Russian', count: '$1.0745955 (€0.99)'},
    {id: 19, from: 'English', to: 'Chinese', count: '$1.0745955 (€0.99)'},
    {id: 20, from: 'Spanish', to: 'Arabic', count: '$1.5087755 (€1.39)'},
    {id: 21, from: 'Spanish', to: 'Danish', count: '$1.1831405 (€1.09)'},
    {id: 22, from: 'Spanish', to: 'English', count: '$1.0745955 (€0.99)'},
    {id: 23, from: 'Spanish', to: 'Finnish', count: '$1.1831405 (€1.09)'},
    {id: 24, from: 'Spanish', to: 'Japanese', count: '$1.1831405 (€1.09)'},
    {id: 25, from: 'Spanish', to: 'Korean', count: '$1.1831405 (€1.09)'},
    {id: 26, from: 'Spanish', to: 'Dutch', count: '$1.1831405 (€1.09)'},
    {id: 27, from: 'Spanish', to: 'Norwegian', count: '$1.1831405 (€1.09)'},
    {id: 28, from: 'Spanish', to: 'Russian', count: '$1.1831405 (€1.09)'},
    {id: 29, from: 'Spanish', to: 'Swedish', count: '$1.1831405 (€1.09)'},
    {id: 30, from: 'Spanish', to: 'Turkish', count: '$1.5087755 (€1.39)'},
    {id: 31, from: 'Spanish', to: 'Chinese', count: '$1.1831405 (€1.09)'},
    {id: 32, from: 'Finnish', to: 'Spanish', count: '$1.1831405 (€1.09)'},
    {id: 33, from: 'Finnish', to: 'Japanese', count: '$1.1831405 (€1.09)'},
    {id: 34, from: 'Finnish', to: 'Korean', count: '$1.1831405 (€1.09)'},
    {id: 35, from: 'Finnish', to: 'Russian', count: '$1.1831405 (€1.09)'},
    {id: 36, from: 'Finnish', to: 'Chinese', count: '$1.1831405 (€1.09)'},
    {id: 37, from: 'French', to: 'Japanese', count: '$1.1831405 (€1.09)'},
    {id: 38, from: 'French', to: 'Korean', count: '$1.1831405 (€1.09)'},
    {id: 39, from: 'French', to: 'Russian', count: '$1.1831405 (€1.09)'},
    {id: 40, from: 'French', to: 'Chinese', count: '$1.1831405 (€1.09)'},
    {id: 41, from: 'Italian', to: 'Japanese', count: '$1.1831405 (€1.09)'},
    {id: 42, from: 'Italian', to: 'Korean', count: '$1.1831405 (€1.09)'},
    {id: 43, from: 'Italian', to: 'Russian', count: '$1.1831405 (€1.09)'},
    {id: 44, from: 'Italian', to: 'Chinese', count: '$1.1831405 (€1.09)'},
    {id: 45, from: 'Japanese', to: 'Arabic', count: '$1.5087755 (€1.39) (per 40 symbols)'},
    {id: 46, from: 'Japanese', to: 'Danish', count: '$1.1831405 (€1.09) (per 40 symbols)'},
    {id: 47, from: 'Japanese', to: 'German', count: '$1.1831405 (€1.09) (per 40 symbols)'},
    {id: 48, from: 'Japanese', to: 'English', count: '$1.0745955 (€0.99) (per 40 symbols)'},
    {id: 49, from: 'Japanese', to: 'Spanish', count: '$1.1831405 (€1.09) (per 40 symbols)'},
    {id: 50, from: 'Japanese', to: 'Finnish', count: '$1.1831405 (€1.09) (per 40 symbols)'},
    {id: 51, from: 'Japanese', to: 'French', count: '$1.1831405 (€1.09) (per 40 symbols)'},
    {id: 52, from: 'Japanese', to: 'Italian', count: '$1.1831405 (€1.09) (per 40 symbols)'},
    {id: 53, from: 'Japanese', to: 'Korean', count: '$1.1831405 (€1.09) (per 40 symbols)'},
    {id: 54, from: 'Japanese', to: 'Dutch', count: '$1.1831405 (€1.09) (per 40 symbols)'},
    {id: 55, from: 'Japanese', to: 'Norwegian', count: '$1.1831405 (€1.09) (per 40 symbols)'},
    {id: 56, from: 'Japanese', to: 'Portuguese', count: '$1.1831405 (€1.09) (per 40 symbols)'},
    {id: 57, from: 'Japanese', to: 'Russian', count: '$1.1831405 (€1.09) (per 40 symbols)'},
    {id: 58, from: 'Japanese', to: 'Swedish', count: '$1.1831405 (€1.09) (per 40 symbols)'},
    {id: 59, from: 'Japanese', to: 'Turkish', count: '$1.5087755 (€1.39) (per 40 symbols)'},
    {id: 60, from: 'Korean', to: 'Arabic', count: '$1.5087755 (€1.39) (per 40 symbols)'},
    {id: 61, from: 'Korean', to: 'Danish', count: '$1.1831405 (€1.09) (per 40 symbols)'},
    {id: 62, from: 'Korean', to: 'German', count: '$1.1831405 (€1.09) (per 40 symbols)'},
    {id: 63, from: 'Korean', to: 'English', count: '$1.0745955 (€0.99) (per 40 symbols)'},
    {id: 64, from: 'Korean', to: 'Spanish', count: '$1.1831405 (€1.09) (per 40 symbols)'},
    {id: 65, from: 'Korean', to: 'Finnish', count: '$1.1831405 (€1.09) (per 40 symbols)'},
    {id: 66, from: 'Korean', to: 'French', count: '$1.1831405 (€1.09) (per 40 symbols)'},
    {id: 67, from: 'Korean', to: 'Italian', count: '$1.1831405 (€1.09) (per 40 symbols)'},
    {id: 68, from: 'Korean', to: 'Japanese', count: '$1.1831405 (€1.09) (per 40 symbols)'},
    {id: 69, from: 'Korean', to: 'Dutch', count: '$1.1831405 (€1.09) (per 40 symbols)'},
    {id: 70, from: 'Korean', to: 'Norwegian', count: '$1.1831405 (€1.09) (per 40 symbols)'},
    {id: 71, from: 'Korean', to: 'Portuguese', count: '$1.1831405 (€1.09) (per 40 symbols)'},
    {id: 72, from: 'Korean', to: 'Russian', count: '$1.1831405 (€1.09) (per 40 symbols)'},
    {id: 73, from: 'Korean', to: 'Swedish', count: '$1.1831405 (€1.09) (per 40 symbols)'},
    {id: 74, from: 'Korean', to: 'Turkish', count: '$1.5087755 (€1.39) (per 40 symbols)'},
    {id: 75, from: 'Dutch', to: 'Spanish', count: '$1.1831405 (€1.09)'},
    {id: 76, from: 'Dutch', to: 'Korean', count: '$1.1831405 (€1.09)'},
    {id: 77, from: 'Dutch', to: 'Russian', count: '$1.1831405 (€1.09)'},
    {id: 78, from: 'Dutch', to: 'Chinese', count: '$1.1831405 (€1.09)'},
    {id: 79, from: 'Norwegian', to: 'Spanish', count: '$1.1831405 (€1.09)'},
    {id: 80, from: 'Norwegian', to: 'Japanese', count: '$1.1831405 (€1.09)'},
    {id: 81, from: 'Norwegian', to: 'Korean', count: '$1.1831405 (€1.09)'},
    {id: 82, from: 'Norwegian', to: 'Russian', count: '$1.1831405 (€1.09)'},
    {id: 83, from: 'Norwegian', to: 'Chinese', count: '$1.1831405 (€1.09)'},
    {id: 84, from: 'Portuguese', to: 'Japanese', count: '$1.1831405 (€1.09)'},
    {id: 85, from: 'Portuguese', to: 'Korean', count: '$1.1831405 (€1.09)'},
    {id: 86, from: 'Portuguese', to: 'Russian', count: '$1.1831405 (€1.09)'},
    {id: 87, from: 'Portuguese', to: 'Chinese', count: '$1.1831405 (€1.09)'},
    {id: 88, from: 'Russian', to: 'Arabic', count: '$1.5087755 (€1.39)'},
    {id: 89, from: 'Russian', to: 'Danish', count: '$1.1831405 (€1.09)'},
    {id: 90, from: 'Russian', to: 'German', count: '$1.1831405 (€1.09)'},
    {id: 91, from: 'Russian', to: 'English', count: '$1.1831405 (€1.09)'},
    {id: 92, from: 'Russian', to: 'Spanish', count: '$1.1831405 (€1.09)'},
    {id: 93, from: 'Russian', to: 'Finnish', count: '$1.1831405 (€1.09)'},
    {id: 94, from: 'Russian', to: 'French', count: '$1.1831405 (€1.09)'},
    {id: 95, from: 'Russian', to: 'Italian', count: '$1.1831405 (€1.09)'},
    {id: 96, from: 'Russian', to: 'Japanese', count: '$1.1831405 (€1.09)'},
    {id: 97, from: 'Russian', to: 'Korean', count: '$1.1831405 (€1.09)'},
    {id: 98, from: 'Russian', to: 'Dutch', count: '$1.1831405 (€1.09)'},
    {id: 99, from: 'Russian', to: 'Norwegian', count: '$1.1831405 (€1.09)'},
    {id: 100, from: 'Russian', to: 'Portuguese', count: '$1.1831405 (€1.09)'},
    {id: 101, from: 'Russian', to: 'Swedish', count: '$1.1831405 (€1.09)'},
    {id: 102, from: 'Russian', to: 'Turkish', count: '$1.5087755 (€1.39)'},
    {id: 103, from: 'Russian', to: 'Chinese', count: '$1.1831405 (€1.09)'},
    {id: 104, from: 'Swedish', to: 'Spanish', count: '$1.1831405 (€1.09)'},
    {id: 105, from: 'Swedish', to: 'Japanese', count: '$1.1831405 (€1.09)'},
    {id: 106, from: 'Swedish', to: 'Korean', count: '$1.1831405 (€1.09)'},
    {id: 107, from: 'Swedish', to: 'Russian', count: '$1.1831405 (€1.09)'},
    {id: 108, from: 'Swedish', to: 'Chinese', count: '$1.1831405 (€1.09)'},
    {id: 109, from: 'Turkish', to: 'Spanish', count: '$1.5087755 (€1.39)'},
    {id: 110, from: 'Turkish', to: 'Japanese', count: '$1.5087755 (€1.39)'},
    {id: 111, from: 'Turkish', to: 'Korean', count: '$1.5087755 (€1.39)'},
    {id: 112, from: 'Turkish', to: 'Russian', count: '$1.5087755 (€1.39)'},
    {id: 113, from: 'Turkish', to: 'Russian', count: '$1.5087755 (€1.39)'},
    {id: 114, from: 'Turkish', to: 'Chinese', count: '$1.5087755 (€1.39)'},
    {id: 115, from: 'Turkish', to: 'Chinese', count: '$1.5087755 (€1.39)'},
    {id: 116, from: 'Chinese', to: 'Arabic', count: '$1.5087755 (€1.39) (per 40 symbols)'},
    {id: 117, from: 'Chinese', to: 'Danish', count: '$1.1831405 (€1.09) (per 40 symbols)'},
    {id: 118, from: 'Chinese', to: 'German', count: '$1.1831405 (€1.09) (per 40 symbols)'},
    {id: 119, from: 'Chinese', to: 'English', count: '$1.0745955 (€0.99) (per 40 symbols)'},
    {id: 120, from: 'Chinese', to: 'Spanish', count: '$1.1831405 (€1.09) (per 40 symbols)'},
    {id: 121, from: 'Chinese', to: 'French', count: '$1.1831405 (€1.09) (per 40 symbols)'},
    {id: 122, from: 'Chinese', to: 'Italian', count: '$1.1831405 (€1.09) (per 40 symbols)'},
    {id: 123, from: 'Chinese', to: 'Dutch', count: '$1.1831405 (€1.09) (per 40 symbols)'},
    {id: 124, from: 'Chinese', to: 'Norwegian', count: '$1.1831405 (€1.09) (per 40 symbols)'},
    {id: 125, from: 'Chinese', to: 'Portuguese', count: '$1.1831405 (€1.09) (per 40 symbols)'},
    {id: 126, from: 'Chinese', to: 'Russian', count: '$1.1831405 (€1.09) (per 40 symbols)'},
    {id: 127, from: 'Chinese', to: 'Swedish', count: '$1.1831405 (€1.09) (per 40 symbols)'},
    {id: 128, from: 'Chinese', to: 'Turkish', count: '$1.5087755 (€1.39) (per 40 symbols)'},
  ])

  const configLanguage = ref([
    {id: 0, lang: 'Arabic'},
    {id: 1, lang: 'Chinese'},
    {id: 2, lang: 'Danish'},
    {id: 3, lang: 'German'},
    {id: 4, lang: 'English'},
    {id: 5, lang: 'Finnish'},
    {id: 6, lang: 'Finnish'},
    {id: 7, lang: 'French'},
    {id: 8, lang: 'Italian'},
    {id: 9, lang: 'Japanese'},
    {id: 10, lang: 'Korean'},
    {id: 11, lang: 'Dutch'},
    {id: 12, lang: 'Norwegian'},
    {id: 13, lang: 'Portuguese'},
    {id: 14, lang: 'Russian'},
    {id: 14, lang: 'Spanish'},
    {id: 15, lang: 'Swedish'},
    {id: 16, lang: 'Turkish'},
  ])
</script>

<template>
  <h2>Services and prices</h2>
  <div class='wrapper-content'>
    <div class='p'>
      1. The cost for 100 symbols is:
      <Prices />
    </div>
    <p>
      Note: please keep in mind that the structure of Chinese, Japanese and Korean languages is
      significantly different from the structure of European and Slavic languages. A symbol
      (hieroglyph) may mean the whole word and, in many cases, the whole phrase.
    </p>

    <p>Note: the minimum cost of the message is $1.08545 (€1.00).</p>

    <p>
      2. You can let your correspondent translate his/her reply to your message at your expense.
      The length of the message will not exceed the length appointed by you. Translation cost is
      the same as when sending a message with translation.
    </p>

    <p>
      3. You can order the translation of an incoming message. Translation cost is the same as when
      sending a message with translation.
    </p>

    <div class='p'>
      4. At the moment
      <ul>
        <li v-for='item in configLanguage' :key='item.id'>{{ item.lang }}</li>
      </ul>
    </div>

    <p>
      We hope that using
      <TranslationGallery />
      service will be pleasant and, what is more important, resultative for you. Should you have any
      questions, suggestions, remarks, please,
    </p>

  </div>
</template>

<style scoped>
  h2 {
    font-size: var(--title-wrapper-fz);
    font-weight: 400;
    margin: var(--common-gorizontal-margin) calc(var(--common-gorizontal-margin) * 2) 0 calc(var(--common-gorizontal-margin) * 2);
  }

  .wrapper-content {
    border: var(--wrapper-content-border-white);
    padding: 12px;
    font-size: var(--wrapper-content-fz);
    margin: 0 var(--common-gorizontal-margin);
  }

  .wrapper-content p, .wrapper-content .p {
    margin-top: var(--wrapper-content-fz);
  }

  ul {
    padding-left: 20px;
  }
</style>
