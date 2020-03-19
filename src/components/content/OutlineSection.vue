<template>
  <section class="border border-secondary-darker text-center p-4">
    <h2 class="font-medium">{{ title }}</h2>
    <p class="mt-2 font-serif"><slot /></p>
  </section>
</template>

<script>
export default {
  name: 'OutlineSection',
  props: ['title'],
}
</script>
