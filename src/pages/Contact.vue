<template>
  <main class="flex flex-col justify-center align-middle">
    <h1 class="text-center">Contact Us</h1>
    <ContactInformation class="mt-8 mx-auto lg:mt-16" />
    <Contact class="mx-auto mt-8 lg:mt-16" />
  </main>
</template>

<script>
import Contact from '@/components/form/Contact'
import ContactInformation from '@/components/content/ContactInformation'

export default {
  components: {
    Contact,
    ContactInformation,
  },
}
</script>
