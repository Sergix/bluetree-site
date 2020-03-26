<template>
  <div id="app" class="layout flex flex-col min-h-screen text-black">
    <Navbar class="flex-shrink-0" />
    <div
      class="flex-1 px-8 my-8 mx-auto min-w-full md:min-w-1/2 md:max-w-2xl lg:max-w-full"
    >
      <router-view />
    </div>
    <Footer class="flex-0 lg:mt-12" />
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
