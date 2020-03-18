<template>
  <footer class="bg-primary-darker">
    <h2>{{ $static.metadata.siteName }}</h2>
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
export default {
  name: "Footer",
}
</script>
