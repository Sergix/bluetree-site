<template>
  <textarea
    autocomplete="off"
    maxlength="500"
    rows="4"
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
    class="rounded bg-white border border-gray-600 placeholder-gray-700 px-3 py-2 focus:border-primary resize-none"
  ></textarea>
</template>

<script>
export default {
  name: 'MultilineInput',
  props: ['value'],
}
</script>
