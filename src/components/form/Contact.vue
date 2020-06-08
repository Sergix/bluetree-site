<template>
  <form
    name="contact"
    method="post"
    @submit.prevent="handleSubmit"
    class="text-center border border-gray-600 p-4 max-w-24"
  >
    <h2 class="mx-auto px-12 self-center text-center">
      Contact us today for pricing
    </h2>

    <!-- TODO: refactor -->
    <div class="mt-4 flex flex-col px-4 mx-auto">
      <label for="contact-email" class="block text-left">
        Email
      </label>
      <TextInput
        v-model="form.email"
        name="email"
        id="contact-email"
        class="block mt-2"
      />
      <label for="contact-message" class="block text-left mt-4">
        Comment
      </label>
      <MultilineInput
        v-model="form.comment"
        name="comment"
        id="contact-message"
        class="block mt-2"
        :maxlength="maxlength"
      />
      <span class="text-right text-xs font-light italic p-1">
        {{ charsLeft }} characters left
      </span>
    </div>
    <!-- end refactor -->

    <span
      :class="{ visible: emailNotVerified && form.email.length > 0 }"
      class="text-error-darker text-center p-2 block email-warning"
    >
      Please enter a valid email.
    </span>

    <Button class="mt-6 mb-4" type="submit" :disabled="emailNotVerified">
      Submit
    </Button>
  </form>
</template>

<script>
import Button from '@/components/form/Button'
import TextInput from '@/components/form/TextInput'
import MultilineInput from '@/components/form/MultilineInput'

import axios from 'axios'
import { SlideYDownTransition } from 'vue2-transitions'

/* toast notification setup */
import Vue from 'vue'
import VueToast from 'vue-toast-notification'
import '~/scss/toast-theme-sugar.css'
Vue.use(VueToast, {
  position: 'bottom',
  duration: 5000,
  queue: false,
})
/* end toast notification setup */

const MAX_COMMENT_CHARS = 500
const REGEX_EMAIL = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

export default {
  name: 'ContactForm',
  components: {
    Button,
    TextInput,
    MultilineInput,
    SlideYDownTransition,
  },
  computed: {
    charsLeft() {
      return MAX_COMMENT_CHARS - this.form.comment.length
    },
    emailNotVerified() {
      return !this.form.email.match(REGEX_EMAIL)
    },
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    handleSubmit() {
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }

      axios
        .post(
          '/',
          this.encode({
            'form-name': 'contact',
            ...this.form,
          }),
          axiosConfig
        )
        .then(() => {
          Vue.$toast.success('Form submitted')
        })
        .catch(() => {
          Vue.$toast.error('Failed to submit')
        })
    },
  },
  watch: {},
  data() {
    return {
      form: {
        comment: '',
        email: '',
      },

      maxlength: MAX_COMMENT_CHARS,
    }
  },
}
</script>

<style lang="scss" scoped>
.email-warning {
  transition: opacity 0.1s;
  opacity: 0;

  &.visible {
    opacity: 100;
  }
}
</style>
