<template>
  <button
    :type="type"
    class="bg-primary-lighter px-10 py-3 rounded font-medium hover:bg-primary active:bg-primary-darker disabled:bg-gray-400 disabled:cursor-not-allowed"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'FormButton',
  props: ['type', 'disabled'],
}
</script>
