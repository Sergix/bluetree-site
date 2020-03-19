<template>
  <form class="w-full text-center border border-gray-600 p-4">
    <h2 class="item w-3/4 self-center text-center">
      Contact us today for a free quote
    </h2>
    <input
      class="w-full item rounded bg-white border border-gray-600 mt-4 px-3 py-2"
      type="text"
      placeholder="email"
    />
    <button
      class="text-white item bg-primary px-10 py-3 rounded mt-4"
      type="submit"
    >
      Submit
    </button>
  </form>
</template>

<script>
export default {
  name: 'Contact',
}
</script>

<style lang="scss" scoped>
.item {
  @apply block;
  margin-left: auto;
  margin-right: auto;
}
</style>
