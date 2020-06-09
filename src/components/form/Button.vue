<template>
  <button
    :type="type"
    class="bg-royal text-white px-10 py-3 rounded font-medium border-gray-500 hover:bg-royal-lighter active:bg-royal-darker disabled:opacity-50 disabled:cursor-not-allowed"
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
