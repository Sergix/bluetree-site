<template>
  <main class="flex flex-col justify-center align-middle lg:flex-row lg:p-4">
    <div class="flex-1 lg:mr-16 lg:my-auto">
      <h1 class="text-center lg:text-left">Contact Us</h1>
      <ContactInformation class="mx-auto mt-8 lg:mt-16" />
    </div>
    <Contact class="mx-auto mt-8 lg:mt-0 lg:ml-16" />
  </main>
</template>

<script>
import Contact from '@/components/form/Contact'
import ContactInformation from '@/components/content/ContactInformation'

export default {
  name: 'ContactPage',
  components: {
    Contact,
    ContactInformation,
  },
}
</script>
