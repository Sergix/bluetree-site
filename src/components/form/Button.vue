<template>
  <button
    :type="type"
    class="text-white bg-primary px-10 py-3 rounded hover:bg-primary-lighter active:bg-primary-darker"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'FormButton',
  props: ['type'],
}
</script>
