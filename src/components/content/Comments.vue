<template>
  <section class="mt-8">
    <h2>Comments</h2>
    <p v-show="comments.length === 0" class="italic text-gray-600 mt-2">
      No comments.
    </p>
    <ul class="mt-4">
      <li v-for="comment in comments" :key="comment.timestamp">
        <h3>{{ comment.name }}</h3>
        <p class="mt-2">{{ comment.message }}</p>
        <p>{{ comment.rating }} {{ comment.timestamp }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
//import Comment from '@/components/Comment'
import sanityClient from '@sanity/client'

export default {
  name: 'Comments',
  data() {
    return {
      comments: [],
      commentSubscription: null,
    }
  },
  mounted() {
    const client = sanityClient({
      projectId: '7o23h513',
      dataset: 'comments',
      useCdn: false,
    })

    this.commentSubscription = client.listen('*[]', {}).subscribe((update) => {
      this.comments = update.result
      console.log(update)
    })
  },
  beforeDestroy() {
    this.commentSubscription.unsubscribe()
  },
}
</script>
