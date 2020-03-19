<template>
  <main>
    <object
      class="absolute top-0 left-0 w-full h-1/2 bg-secondary-lighter z-neg-1"
    ></object>
    <h1 class="font-bold text-secondary-darker text-5xl my-4 leading-none">
      Quality service at a competitive price.
    </h1>
    <g-image class="w-screen my-8" src="~/assets/image/tools.jpg" />
    <p class="font-serif">
      Residential or commercial, Bluetree Landscaping delivers the lawn care and
      outdoor servicing you need at the excellent quality you deserve.
    </p>

    <OutlineSection title="Commercial" class="mt-12">
      Complete property landscaping maintenance offered with one-time services
      and multi-service contracts.
    </OutlineSection>
    <OutlineSection title="Residential" class="mt-4">
      Landscaping services subject to complete customer optimization. Customer
      preference is our priority.
    </OutlineSection>

    <section class="mt-12">
      <h2 class="font-medium text-center">Contact Information</h2>
      <DetailSection title="Email" class="mt-2">
        bluetreelandscapingllc@gmail.com
      </DetailSection>
      <DetailSection title="Phone" class="mt-4">
        (843) 810-9722
      </DetailSection>
    </section>

    <ImageSection title="Various Services" image="house-lawn.jpg" class="mt-12">
      Complete property landscaping maintenance offered with one-time services
      and multi-service contracts.
    </ImageSection>
    <ImageSection title="Charleston Area" image="bridge.jpg" class="mt-6">
      We service the greater charleston area, including Dorchester, Berkeley,
      and Charleston county.
    </ImageSection>

    <Contact class="mt-8" />
  </main>
</template>

<script>
import DetailSection from '@/components/content/DetailSection'
import ImageSection from '@/components/content/ImageSection'
import OutlineSection from '@/components/content/OutlineSection'
import Contact from '@/components/form/Contact'

export default {
  name: 'IndexPage',
  components: {
    DetailSection,
    ImageSection,
    OutlineSection,
    Contact,
  },
  metaInfo: {
    title: 'Home',
  },
}
</script>
