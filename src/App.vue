<template>
  <div id="app" class="layout flex flex-col h-screen">
    <Navbar class="flex-0" />
    <div class="flex-1 px-8 my-4">
      <router-view />
    </div>
    <Footer class="flex-0" />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'DefaultLayout',
  components: {
    Navbar,
    Footer,
  },
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription,
        },
      ],
    }
  },
}
</script>
