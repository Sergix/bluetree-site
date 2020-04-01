<template>
  <form
    name="contact"
    netlify
    class="text-center border border-gray-600 p-4 max-w-24"
  >
    <h2 class="mx-auto px-12 self-center text-center">
      Contact us today for a free quote
    </h2>

    <!-- TODO: refactor -->
    <div class="mt-4 flex flex-col px-4 mx-auto">
      <label for="contact-email" class="block text-left">
        Email
      </label>
      <TextInput name="email" id="contact-email" class="block mt-2" />
      <label for="contact-message" class="block text-left mt-4">
        Comment
      </label>
      <MultilineInput
        v-model="comment"
        @input="commentInput"
        name="comment"
        id="contact-message"
        class="block mt-2"
      />
      <span class="text-right text-xs font-light italic p-1">
        {{ charsLeft }} characters left
      </span>
    </div>
    <!-- end refactor -->

    <Button class="mt-6" type="submit">Submit</Button>
  </form>
</template>

<script>
import Button from '@/components/form/Button'
import TextInput from '@/components/form/TextInput'
import MultilineInput from '@/components/form/MultilineInput'

const MAX_CHARS = 500

export default {
  name: 'Contact',
  components: {
    Button,
    TextInput,
    MultilineInput,
  },
  methods: {
    commentInput() {
      this.charsLeft = MAX_CHARS - this.comment.length
    },
  },
  data() {
    return {
      comment: '',
      charsLeft: MAX_CHARS,
    }
  },
}
</script>
