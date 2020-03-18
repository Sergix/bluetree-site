<template>
  <div>
    <object
      class="absolute top-0 left-0 w-full h-1/2 bg-secondary z-neg-1"
    ></object>
    <h1 class="font-bold text-white text-5xl my-8 leading-none">
      Quality service at a competitive price.
    </h1>
    <g-image class="my-8" src="~/assets/image/tools.jpg" />
    <p>
      You can count on BlueTree Landscaping to not only meet, but exceed all
      your needs and requests. Learn more about the services we provide below,
      and let us know if you’d like to learn more about a specific product or
      service.
    </p>
  </div>
</template>

<script>
import ImageSection from '@/components/ImageSection'

export default {
  name: 'IndexPage',
  components: {
    ImageSection,
  },
  metaInfo: {
    title: 'Home',
  },
}
</script>
