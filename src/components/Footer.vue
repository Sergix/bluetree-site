<template>
  <footer class="bg-primary-darker px-8 text-white py-4">
    <h2 class="text-base text-lg">{{ $static.metadata.siteName }}</h2>
    <NavItems class="flex flex-col mt-4" />
    <div class="flex flex-row mt-4">
      <a href="https://www.facebook.com/" rel="Facebook" class="mr-2">
        <unicon name="facebook" fill="white"></unicon>
      </a>
      <a href="https://www.twitter.com/" rel="Twitter" class="mr-2">
        <unicon name="twitter" fill="white"></unicon>
      </a>
      <a href="https://www.linkedin.com/" rel="LinkedIn">
        <unicon name="linkedin" fill="white"></unicon>
      </a>
    </div>
  </footer>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import NavItems from '@/components/NavItems'

export default {
  name: 'Footer',
  components: { NavItems },
}
</script>
