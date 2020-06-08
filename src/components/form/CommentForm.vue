<template>
  <form
    name="comment"
    method="post"
    class="flex flex-col"
    @submit.prevent="uploadComment"
  >
    <h2 class="text-xl">Add Comment</h2>
    <section class="flex flex-col mt-4 md:flex-row">
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
    <span class="text-right text-xs font-light italic p-1 mt-1">
      {{ charsLeft }} characters left
    </span>
    <Button
      class="mr-auto mt-2"
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
  computed: {
    charsLeft() {
      return 500 - this.form.message.length
    },
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
    uploadComment() {
      axios
        .post('/.netlify/functions/newComment', JSON.stringify(this.form))
        .then((response) => {
          this.$store.commit('addComment', {
            content: this.form,
            slug: Date.now().toString(),
          })
        })
        .catch((error) => {
          console.error(error)
        })

      this.form.name = ''
      this.form.message = ''
      this.form.rating = 0
    },
  },
}
</script>
