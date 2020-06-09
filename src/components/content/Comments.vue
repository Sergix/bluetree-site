<template>
  <section class="mt-8">
    <h2>Comments</h2>
    <p v-show="comments.length === 0" class="italic text-gray-700 mt-2">
      No comments.
    </p>
    <ul class="mt-4">
      <li
        v-for="{ content: { name, message, rating }, slug } in comments"
        :key="slug"
        class="mt-4 border rounded-sm bg-gray-200 p-4"
      >
        <h3 class="text-lg">{{ name }}</h3>
        <p class="mt-2 text-md">{{ message }}</p>
        <ClientOnly>
          <star-rating
            class="mr-auto mt-4 md:mt-6"
            :rating="rating"
            :star-size="16"
            :show-rating="false"
            :read-only="true"
          ></star-rating>
        </ClientOnly>

        <!-- convert timestamp to MM/DD/YYYY -->
        <span class="text-gray-700 mt-1 text-xs">
          {{
            new Date(
              parseInt(slug.split('-')[slug.split('-').length - 1])
            ).toLocaleDateString('en-US')
          }}
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
import StoryblokClient from 'storyblok-js-client'
import { mapState } from 'vuex'

export default {
  name: 'Comments',
  components: {
    // vue-star-rating does not support SSR
    StarRating: () => import('vue-star-rating').then((m) => m),
  },
  computed: mapState({
    comments: (state) => state.comments,
  }),
  mounted() {
    const Storyblok = new StoryblokClient({
      accessToken: '55Nl70dDrSbjaEAKkoMeVwtt',
    })

    Storyblok.get('cdn/stories', {
      starts_with: 'comments/',
    }).then((response) => {
      this.$store.commit('setComments', response.data.stories)
    })
  },
}
</script>
