<script setup>
  import {PATHS} from '../constants/PATHS'
  import TranslationTagline from './../components/TranslateTaglineOnEndMessage.vue'
</script>
<template>
  <h2>Refund policy</h2>
  <div class='wrapper-content'>

    <p>THIS REFUND POLICY IS A LEGALLY BINDING AGREEMENT MADE BY AND BETWEEN Ideas Networks
      Solutions S.A. ('WE' OR 'US') AND YOU, PERSONALLY AND, IF APPLICABLE, ON BEHALF OF THE ENTITY
      FOR WHOM YOU ARE USING THIS WEB SITE (COLLECTIVELY, 'YOU').
    </p>

    <p>
      THIS REFUND POLICY GOVERNS YOUR USE OF THIS WEB SITE ('WEB SITE') AND THE SERVICES WE OFFER
      ON THE WEB SITE ('SERVICES'), SO PLEASE READ IT CAREFULLY. THIS POLICY DESCRIBES THE FINANCIAL
      RELATIONSHIP BETWEEN US AND YOU.
    </p>

    <p>
      WE DO NOT GIVE REFUNDS IF YOU SIMPLY CHANGE YOUR MIND OR MAKE A WRONG DECISION REGARDING THE
      ORDERING OF TRANSLATION. KINDLY NOTE THAT ALL THE TRANSLATIONS ARE FULFILLED BY LIVE PERSONS
      WHOSE WORK MUST BE PAID. ANY ATTEMPT TO GET BACK FUNDS FOR THE ORDERED TRANSLATION WILL NOT
      MEET ANY UNDERSTANDING AND WELCOME FROM OUR SIDE.
    </p>

    <p>
      HOWEVER, IN CASE YOU ORDER TRANSLATION FROM/TO THE LANGUAGE THAT IS NOT SUPPORTED BY THE
      SERVICE THE FUNDS WILL BE RETURNED TO YOUR ACCOUNT.
    </p>

    <p>
      IN CASE YOU WISH TO CANCEL USING OUR SERVICE AND GET BACK THE REMAINING FUNDS KINDLY NOTE THAT
      THE REFUNDS ARE ISSUED TO THE TRANSACTIONS NOT OLDER THAN 6 (SIX)
      MONTHS AND CANNOT EXCEED THE REMAINING BALANCE. NO COMMISSION IS APPLIED.
    </p>

    <p>
      SHOULD YOU REQUIRE RETURNING FUNDS BY BANK (WIRE) TRANSFER, KINDLY NOTE THAT ALL THE BANK
      COMMISSIONS ARE BEARED BY THE RECIPIENT (YOU).
    </p>

    <p>
      ALL THE REFUND REQUESTS ARE BEING PROCESSED WITHIN 14 DAYS PERIOD.
    </p>

    <p>
      IF YOU HAVE ANY QUERIES OR QUESTIONS ABOUT OUR REFUND POLICY, PLEASE
      <router-link class='link-to-contact' :to='PATHS.CONTACT'>CONTACT US</router-link>.
    </p>

    <div class='strong'>
     <TranslationTagline />
    </div>

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
    padding: 8px;
    font-size: var(--wrapper-content-fz);
    margin: 0 var(--common-gorizontal-margin);
  }

  .wrapper-content p {
    margin-top: var(--wrapper-content-fz);
  }

  .link-to-contact {
    color: var(--gray);
  }

  .strong {
    font-weight: 700;
  }

</style>
