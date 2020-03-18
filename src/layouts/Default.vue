<template>
  <div class="layout">
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'DefaultLayout',
  components: {
    Navbar,
    Footer
  }
}
</script>
