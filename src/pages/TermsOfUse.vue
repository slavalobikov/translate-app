<template>
  <div>
    <h2>Terms of use</h2>
    <div class='wrapper-content'>
      <div class='link-to-wrapper' @click='scrollToSection(aboutRef)'>About <span class='text-logo'><TranslationGallery /></span>
      </div>
      <div class='link-to-wrapper' @click='scrollToSection(termsRef)'>Terms and Conditions</div>
      <div class='link-to-wrapper' @click='scrollToSection(privacyRef)'>Privacy policy</div>
      <div class='link-to-wrapper' @click='scrollToSection(refundPolicyRef)'>Refund policy</div>
      <div class='link-to-wrapper' @click='scrollToSection(servicesAndPrices)'>Our services</div>
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
    <div class='wrapper-ref' ref='refundPolicyRef'>
      <div class='margin' />
      <RefundPolicy />
    </div>
    <div class='wrapper-ref' ref='servicesAndPrices'>
      <div class='margin' />
      <OurService />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import About from './../pages/About.vue'
import Terms from './../pages/Terms.vue'
import Privacy from './../pages/Privacy.vue'
import RefundPolicy from './RefundPolicy.vue'
import OurService from './OurService.vue'
import TranslationGallery from './../components/TranslationGallery.vue'

const privacyRef = ref(null)
const termsRef = ref(null)
const aboutRef = ref(null)
const refundPolicyRef = ref(null)
const servicesAndPrices = ref(null)

const scrollToSection = (sectionRef) => {
  if (sectionRef) {
    sectionRef.scrollIntoView({ behavior: 'smooth' })
  }
}

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
  color: var(--black);
}

.link-to-wrapper {
  text-align: center;
  margin-top: 10px;
  font-size: 16px;
  text-decoration: underline;
  color: var(--gray);
  cursor: pointer;
}

</style>
