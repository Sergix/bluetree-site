<template>
  <section class="flex flex-col">
    <h3 class="font-medium text-xl text-center">{{ title }}</h3>
    <p class="text-left mt-2 font-serif"><slot /></p>
    <g-image class="mt-2" :src="src" />
  </section>
</template>

<script>
export default {
  name: 'ImageSection',
  props: ['image', 'title'],
  computed: {
    src() {
      return require('~/assets/image/' + this.image)
    },
  },
}
</script>
