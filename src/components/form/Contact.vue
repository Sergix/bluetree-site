<template>
  <form class="text-center border border-gray-600 p-4">
    <h2 class="mx-auto w-3/4 self-center text-center">
      Contact us today for a free quote
    </h2>
    <div class="text-left mt-4">
      <label for="contact-email" class="text-left">Email</label>
      <TextInput id="contact-email" class="w-full mt-2" />
    </div>
    <div class="text-left mt-2">
      <label for="contact-message" class="text-left">Comment</label>
      <TextInput id="contact-message" class="w-full mt-2" />
    </div>
    <Button class="mt-4" type="submit">Submit</Button>
  </form>
</template>

<script>
import Button from '@/components/form/Button'
import TextInput from '@/components/form/TextInput'

export default {
  name: 'Contact',
  components: {
    Button,
    TextInput,
  },
}
</script>
