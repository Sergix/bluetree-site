<template>
  <main class="flex flex-col justify-center lg:mx-auto lg:max-w-2xl lg:mt-16">
    <div class="lg:my-auto lg:mr-8">
      <h1 class="text-center">Services</h1>

      <h2></h2>

      <p class="text-md mt-8 lg:max-w-24 lg:mx-auto">
        If you have a project or installation need that is not listed,
        <g-link
          to="/contact"
          class="underline text-primary-darkest cursor-pointer"
        >
          contact us
        </g-link>
        and we'll provide pricing for your project.
      </p>
    </div>

    <div class="mt-8 lg:my-auto lg:mt-16">
      <section class="mt-8 mx-auto">
        <h2 class="border-b pb-2">General maintenance</h2>
        <p class="mt-4 ml-2">
          Mowing, bush hedging, weed trimming, edging, raking, leaf
          blowing/clean up
        </p>
      </section>

      <section class="mt-16 mx-auto">
        <h2 class="border-b pb-2">Projects</h2>
        <ul class="mt-8 services-list">
          <li
            class="flex flex-row mb-16 rounded border border-gray-400 h-64 overflow-hidden shadow"
            v-for="{
              node: {
                name,
                content: {
                  description,
                  image: { filename: imageSrc },
                },
              },
            } in $page.allStoryblokEntry.edges"
            :key="name"
          >
            <div class="flex flex-col p-8 my-auto lg:px-16 lg:py-8">
              <span class="text-xl">{{ name }}</span>
              <span class="text-sm mt-4 w-32 lg:w-48">
                {{ description }}
              </span>
            </div>
            <g-image class="ml-2 object-cover" :src="imageSrc" />
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<page-query>
query Services {
  allStoryblokEntry(filter: {full_slug: {regex: "services\/.+"}}) {
    edges {
      node {
        name
        content
      }
    }
  }
}
</page-query>

<script>
export default {
  name: 'AboutPage',
  metaInfo: {
    title: 'About us',
  },
}
</script>

<style lang="scss" scoped>
.services-list > li:nth-child(even) {
  @apply flex-row-reverse;

  img {
    @apply mr-2 ml-0;
  }
}
</style>
