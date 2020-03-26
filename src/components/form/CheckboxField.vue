<template>
  <label>
    <input type="checkbox" text="Mowing" :checked="checked" class="mr-2" />
    {{ label }}
  </label>
</template>

<script>
export default {
  name: 'CheckboxField',
  props: ['label', 'checked'],
}
</script>
