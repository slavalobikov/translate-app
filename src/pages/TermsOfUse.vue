<template>
  <h2>Terms of use</h2>
  <div class='wrapper-content'>
    <div class='link-to-wrapper' @click="scrollToSection(aboutRef)">About <span class='text-logo'>Translation.Gallery</span></div>
    <div class='link-to-wrapper' @click="scrollToSection(termsRef)">Terms and Conditions</div>
    <div class='link-to-wrapper' @click="scrollToSection(privacyRef)">Privacy policy</div>
  </div>

  <div class='wrapper-ref' ref='aboutRef'>
    <div class='margin' />
    <About />
  </div>

  <div class='wrapper-ref' ref='termsRef'>
    <div class='margin' />
    <Terms />
  </div>

  <div class='wrapper-ref' ref='privacyRef'>
    <div class='margin' />
    <Privacy />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import About from './../pages/About.vue'
import Terms from './../pages/Terms.vue'
import Privacy from './../pages/Privacy.vue'

const privacyRef = ref(null);
const termsRef = ref(null);
const aboutRef = ref(null);

const scrollToSection = (sectionRef) => {
  if (sectionRef) {
    sectionRef.scrollIntoView({ behavior: 'smooth' });
  }
};

</script>

<style scoped>
  h2 {
    font-size: var(--title-wrapper-fz);
    font-weight: 400;
    margin: var(--common-gorizontal-margin) calc(var(--common-gorizontal-margin) * 2) 0 calc(var(--common-gorizontal-margin) * 2);
  }

  .wrapper-content {
    border: var(--wrapper-content-border-white);
    padding: 4px;
    font-size: var(--wrapper-content-fz);
    margin: 0 var(--common-gorizontal-margin);
  }

  .wrapper-ref .margin {
    height: 30px;
  }

  .text-logo {
    font-family: Tahoma, Verdana, Arial;
    color: var(--black);
  }

  .link-to-wrapper {
    text-align: center;
    margin-top: 10px;
    font-size: 16px;
    text-decoration: underline;
    color: var(--gray);
  }

</style>
