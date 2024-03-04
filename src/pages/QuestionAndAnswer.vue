<script setup>
import TranslationGallery from './../components/TranslationGallery.vue'
import Prices from './../components/Prices.vue'
import TranslationTagLine from './../components/TranslateTaglineOnEndMessage.vue'
import {PATHS} from './../constants/PATHS'

import {ref} from 'vue';

const whatIsTG = ref(null);
const whatLangArePreset = ref(null)
const translationOffer = ref(null)
const addFunds = ref(null)
const sentMoneyToPeople = ref(null)
const receiveNotification = ref(null)
const howMuchTime = ref(null)
const getPrivateMessage = ref(null)
const restoreMessage = ref(null)
const privateMessageStay = ref(null)
const paymentChargedAutomatically = ref(null)

const scrollToSection = (sectionRef) => {
  if (sectionRef) {
    sectionRef.scrollIntoView({ behavior: 'smooth' })
  }
}

const configListLanguage = [
  {id: 0, name: 'Arabic'},
  {id: 1, name: 'Chinese'},
  {id: 2, name: 'Danish'},
  {id: 3, name: 'German'},
  {id: 4, name: 'English'},
  {id: 5, name: 'Finnish'},
  {id: 6, name: 'French'},
  {id: 7, name: 'Italian'},
  {id: 8, name: 'Japanese'},
  {id: 9, name: 'Korean'},
  {id: 10, name: 'Dutch'},
  {id: 11, name: 'Norwegian'},
  {id: 12, name: 'Portuguese'},
  {id: 13, name: 'Russian'},
  {id: 14, name: 'Spanish'},
  {id: 15, name: 'Swedish'},
  {id: 16, name: 'Turkish'},
]

</script>
<template>
  <h2>Questions and Answers</h2>
  <div class='wrapper-content'>
    <div class='p'>
      <div @click='scrollToSection(whatIsTG)' class='link'>
        1. What is <TranslationGallery /> service?
      </div>
      <div @click='scrollToSection(whatLangArePreset)' class='link'>
        2. What languages are presented in <TranslationGallery />?
      </div>
      <div @click='scrollToSection(translationOffer)' class='link'>3. What translations do you offer now?</div>
      <div @click='scrollToSection(addFunds)' class='link'>
        4. How can I add funds to my account at <TranslationGallery />?
      </div>
      <div @click='scrollToSection(sentMoneyToPeople)' class='link'>
        5. I want to have replies to my letters translated before I receive them.
        Can I send money to the people I am talking to?
      </div>
      <div @click='scrollToSection(receiveNotification)' class='link'>
        6. Do I need to receive a notification that I have sent a message and
        requested its translation to the recipient's language?
      </div>
      <div @click='scrollToSection(howMuchTime)' class='link'>
        7. How much time does it take for a private message to be translated?
      </div>
      <div @click='scrollToSection(getPrivateMessage)' class='link'>
        8. I got a notification that I have a new private message.
        When I checked my Inbox, there weren’t any new private messages.
        What happened?
      </div>
      <div @click='scrollToSection(restoreMessage)' class='link'>
        9. I was sent a message. I requested its translation but it disappeared from my inbox.
        How can I restore the message?
      </div>
      <div @click='scrollToSection(privateMessageStay)' class='link'>
        10. Private messages stay in my Outbox for several days already.
        Are they translated for such a long time or has something happened?
      </div>
      <div @click='scrollToSection(paymentChargedAutomatically)' class='link'>
        11. I use a payment card to add funds to my account.
        Does it mean my account will be charged automatically?
      </div>


    </div>


    <p class='answer-title' ref='whatIsTG'>
      1. What is <TranslationGallery />?
    </p>
    <p>
      <TranslationGallery />  is an international Multilingual Mail Service.
      The service has a simple and convenient system that allows people speaking different
      languages communicate and understand each other. All the translations are done by highly
      qualified staff. The anonimity of the service is achieved through the special system when our
      translators work with the texts of the private messages only.
      They don’t know who is the sender and the recipient of the message.
    </p>

    <p class='answer-title' ref='whatLangArePreset'>
      2. What languages are presented in <TranslationGallery />?
    </p>
    <div class='p'>
      At the moment we can offer you the following translation directions
      (the cost for 100 symbols):
      <ul>
        <li v-for='item in configListLanguage' :key="item.id">{{ item.name }}</li>
      </ul>
    </div>

    <p class='answer-title' ref='translationOffer'>
      3. What translations do you offer now?
    </p>
    <div class='p'>
      At the moment we can offer you the following translation directions
      (the cost for 100 symbols):
      <Prices />
    </div>
    <p>
      Note: please keep in mind that the structure of Chinese, Japanese and Korean languages is
      significantly different from the structure of European and Slavic languages.
      A symbol (hieroglyph) may mean the whole word and, in many cases, the whole phrase.
    </p>
    <p>Note: the minimum cost of the message is $1.08373 (€1.00).</p>

    <p class='answer-title' ref='addFunds'>
      4. How can I add funds to my account at <TranslationGallery />?
    </p>
    <div class='p'>
      To add funds to your <TranslationGallery /> account you have to log in using your username
      or e-mail and password indicated during registration. Then click the link “Add Funds”
      (you can find the link in the Your Account section, the link is available from any page of
      the site if you are logged in). Choose the way to add funds which is more suitable for you.
    </div>

    <p class='answer-title' ref='sentMoneyToPeople'>
      5. I want to have replies to my letters translated before I receive them.
      Can I send money to the people I am talking to?
    </p>
    <p>
      Unfortunately, there is no such possibility to escape abuse and spending your funds on
      different purposes. Instead you can let your correspondent translate his/her message at your
      expense.
    </p>

    <p class='answer-title' ref='receiveNotification'>
      6. Do I need to receive a notification that I have sent a message and requested its
      translation to the recipient's language?
    </p>
    <p>
      No, you don’t have to send any notifications. Once you order the translation the message
      becomes available for translation automatically.
    </p>

    <p class='answer-title' ref='howMuchTime'>
      7. How much time does it take for a private message to be translated?
    </p>
    <p>
      Usually, all the messages are translated within 2-3 hours.
      But the time extends in case there are very many messages.
    </p>

    <p class='answer-title' ref='getPrivateMessage'>
      8. I got a notification that I have a new private message.
      When I checked my Inbox, there weren’t any new private messages. What happened?
    </p>

    <p>
      This happens when the sender (author) of the private message deletes the message
      from his/her Outbox before the recipient of the message reads it.
    </p>

    <p class='answer-title' ref='restoreMessage'>
      9. I was sent a message. I requested its translation but it disappeared from my inbox.
      How can I restore the message?
    </p>
    <p>
      The private message disappeared from your Inbox when you ordered the translation of the
      message but it doesn’t mean that the message has been deleted. You will get it back after
      it is translated.
    </p>

    <p class='answer-title' ref='privateMessageStay'>
      10. Private messages stay in my Outbox for several days already. Are they translated
      for such a long time or has something happened?
    </p>
    <p>
      All the messages are translated within 2-3 hours as a rule.
      The fact that your messages stay in your Outbox indicates that the recipient hasn’t read
      them yet. As soon as the recipient of your message reads it, the original message will
      pass on to your Sent Mail box.
    </p>

    <p class='answer-title' ref='paymentChargedAutomatically'>
      11. I use a payment card to add funds to my account.
      Does it mean my account will be charged automatically?
    </p>

    <div class='p'>
      <TranslationGallery /> never allows ourselves to make any unauthorized transactions
      with your payment card and it is never re-billed automatically.
      Any payment is a one-time transaction.
    </div>
    <br />
    <br />
    <div class='p'>
      We hope that using <TranslationGallery />  service will be pleasant and, what is more
      important, resultative for you. Should you have any questions, suggestions, remarks, please,
      <router-link class='contact-us-link' :to='PATHS.CONTACT'>contact us</router-link>.
    </div>
    <TranslationTagLine />
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
  padding: 15px;
  font-size: var(--wrapper-content-fz);
  margin: 0 var(--common-gorizontal-margin);
}

.wrapper-content h2 {
  text-align: center;
  margin: 12px 0;
}

.wrapper-content p {
  margin-top: 12px;
}

.link {
  cursor: pointer;
  font-weight: 700;
}

.link:hover {
  color: var(--active-click-color);
}

.answer-title {
  padding-top: calc(var(--height-header) + 20px);
  font-weight: 700;
  margin-top: calc(var(--height-header) * -1) !important;
}

ul {
  padding-left: 20px;
}

.contact-us-link {
  color: var(--black);
  cursor: pointer;
}

.contact-us-link:hover {
  color: var(--active-click-color);
}

</style>

