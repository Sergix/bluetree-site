<template>
  <header class="flex flex-row px-8 py-4 bg-primary-darker">
    <h2>{{ $static.metadata.siteName }}</h2>
    <nav class="invisible md:visible">
      <g-link to="/">Home</g-link>
      <g-link to="/about/">About</g-link>
    </nav>
    <MenuButton />
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import MenuButton from "@/components/MenuButton"

export default {
  name: "Navbar",
  components: {
    MenuButton,
  },
}
</script>
