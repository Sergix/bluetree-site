<template>
  <footer class="bg-primary-darker px-8 text-white py-4">
    <h2 class="text-base text-lg">{{ $static.metadata.siteName }}</h2>
    <NavItems class="flex flex-col mt-4" />
    <SocialIcons class="flex flex-row mt-4" />
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
import SocialIcons from '@/components/SocialIcons'

export default {
  name: 'Footer',
  components: { NavItems, SocialIcons },
}
</script>
