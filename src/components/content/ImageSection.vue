<template>
  <section
    class="mx-auto mt-12 flex flex-col lg:max-w-6xl"
    :class="{ 'lg:flex-row-reverse': reversed, 'lg:flex-row': !reversed }"
  >
    <div class="lg:my-auto lg:ml-12">
      <h3
        class="font-medium text-xl text-center"
        :class="{ 'lg:text-left': reversed, 'lg:text-right': !reversed }"
      >
        {{ title }}
      </h3>
      <p
        class="text-left mt-2 font-serif"
        :class="{ 'lg:text-right': !reversed }"
      >
        <slot />
      </p>
    </div>
    <g-image
      class="mt-4 md:px-16 lg:py-16 lg:max-w-2xl"
      :src="src"
      alt="Ravanel bridge"
    />
  </section>
</template>

<script>
export default {
  name: 'ImageSection',
  props: ['image', 'title', 'reversed', 'alt'],
  computed: {
    src() {
      return require('~/assets/image/' + this.image)
    },
  },
}
</script>
