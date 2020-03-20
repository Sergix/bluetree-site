<template>
  <input
    class="rounded bg-white border border-gray-600 mt-4 px-3 py-2"
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
