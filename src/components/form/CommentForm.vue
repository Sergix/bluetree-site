<template>
  <form
    name="comment"
    method="post"
    class="flex flex-col"
    @submit.prevent="uploadComment"
  >
    <section class="flex flex-col md:flex-row">
      <div>
        <label for="comment-name" class="block text-left">
          Name
        </label>
        <TextInput
          name="name"
          id="comment-name"
          class="mr-8 mt-2"
          v-model="form.name"
        />
      </div>
      <ClientOnly>
        <star-rating
          class="mr-auto mt-4 md:mt-6"
          v-model="form.rating"
          :star-size="32"
          :show-rating="false"
        ></star-rating>
      </ClientOnly>
    </section>
    <label for="comment-message" class="block text-left mt-4">
      Comment Message
    </label>
    <MultilineInput
      class="mt-4"
      name="message"
      id="comment-message"
      v-model="form.message"
    />
    <Button
      class="mr-auto mt-4"
      type="submit"
      :disabled="!(form.name && form.message && form.rating)"
    >
      Comment
    </Button>
  </form>
</template>

<script>
import TextInput from '@/components/form/TextInput'
import MultilineInput from '@/components/form/MultilineInput'
import Button from '@/components/form/Button'

import axios from 'axios'
import sanityClient from '@sanity/client'

export default {
  name: 'CommentForm',
  components: {
    TextInput,
    MultilineInput,
    Button,
    // vue-star-rating does not support SSR
    StarRating: () => import('vue-star-rating').then((m) => m),
  },
  data() {
    return {
      form: {
        name: '',
        message: '',
        rating: 0,
      },
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    uploadComment() {
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }

      axios
        .post(
          '/',
          this.encode({
            'form-name': 'comment',
            ...this.form,
          }),
          axiosConfig
        )
        .then(() => {
          console.log('Comment success')
        })
        .catch(() => {
          console.log('Comment fail')
        })
    },
  },
}
</script>
