<template>
  <form class="text-center border border-gray-600 p-4">
    <h2 class="mx-auto w-3/4 self-center text-center">
      Contact us today for a free quote
    </h2>
    <TextInput class="w-full" placeholder="email" />
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
