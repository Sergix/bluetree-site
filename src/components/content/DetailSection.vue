<template>
  <section>
    <h3 class="text-lg text-primary-darkest">{{ title }}</h3>
    <p><slot /></p>
  </section>
</template>

<script>
export default {
  name: 'DetailSection',
  props: ['title'],
}
</script>
