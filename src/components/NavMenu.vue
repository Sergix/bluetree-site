<template>
  <aside
    class="absolute bg-primary-darker top-0 text-white w-full h-full right-0 pt-16 text-5xl z-0"
  >
    <ul class="flex flex-col content-end pr-8 text-right">
      <g-link class="nav-item" to="/">Home</g-link>
      <g-link class="nav-item" to="/contact/">Contact</g-link>
      <g-link class="nav-item" to="/about/">Services</g-link>
    </ul>
    <p class="text-sm w-full text-center font-serif absolute bottom-0 pb-8">
      {{ $static.metadata.siteName }}
    </p>
  </aside>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  name: 'NavMenu',
  prop: ['active'],
}
</script>
