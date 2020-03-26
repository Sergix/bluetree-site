<template>
  <button
    :type="type"
    class="bg-primary-lighter px-10 py-3 rounded hover:bg-primary active:bg-primary-darker"
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
