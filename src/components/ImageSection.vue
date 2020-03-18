<template>
  <section class="flex flex-col">
    <h3 class="text-center">{{ title }}</h3>
    <p class="text-left"><slot /></p>
    <g-image :src="src" />
  </section>
</template>

<script>
export default {
  name: 'ImageSection',
  props: ['image'],
  computed: {
    src() {
      return '~/assets/image/' + this.image
    },
  },
}
</script>
