<template>
  <input
    class="rounded bg-white border border-gray-600 placeholder-gray-700 px-3 py-2 focus:border-primary"
    type="text"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: 'TextInput',
  props: ['placeholder'],
}
</script>
