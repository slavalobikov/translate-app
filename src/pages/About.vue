<script setup>
import TranslationTagline from './../components/TranslateTaglineOnEndMessage.vue'

</script>
<template>
  <h2>Translation.Gallery - Correspondence address</h2>
  <div class='wrapper-content'>
    <div class='str'>
      <div>Tel./ Fax:</div>
      <div><a href='tel:+50767996877'>+50767996877</a></div>
    </div>
    <div class='str'>
      <div>E-mail:</div>
      <div><a href='mailto:public@translation.gallery'>public@translation.gallery</a></div>
    </div>
    <div class='str'>
      <div>Mailing address:</div>
      <div>
        Ideas Networks Solutions S.A.
        <br />
        PH Grand Tower, Torre B, local 13i, Punta Pacifica, San Francisco, Panama City, Panama
      </div>
    </div>
    <TranslationTagline />
  </div>
</template>

<style scoped>
h2 {
  font-size: var(--title-wrapper-fz);
  color: var(--black);
  font-weight: 400;
  margin: var(--common-gorizontal-margin) calc(var(--common-gorizontal-margin) * 2) 0 calc(var(--common-gorizontal-margin) * 2);
}

.wrapper-content {
  margin: 0 var(--common-gorizontal-margin);
  border: var(--wrapper-content-border-white);
  padding: 18px 10px;
  font-size: var(--wrapper-content-fz);
}

.str {
  display: flex;
  justify-content: space-between;
}

.str div:first-child {
  margin-right: 10px;
}


.str:last-of-type div:last-child {
  text-align: end;
}

.str a {
  color: var(--black);
  text-decoration: none;
  cursor: pointer;
}

</style>
