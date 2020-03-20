<template>
  <main>
    <object
      class="absolute top-0 left-0 w-full h-32 bg-secondary-lighter z-neg-1"
    >
    </object>
    <h1 class="font-bold text-secondary-darker text-5xl my-4 leading-none">
      Quality service at a competitive price.
    </h1>
    <g-image class="w-screen mt-8" src="~/assets/image/tools.jpg" />
    <p class="font-serif italic mt-4">
      Residential or commercial, Bluetree Landscaping delivers the lawn care and
      outdoor servicing you need at the excellent quality you deserve.
    </p>

    <div class="mt-12 md:flex md:flex-row">
      <OutlineSection title="Commercial" class="sm:mx-auto md:mr-2">
        Complete property landscaping maintenance offered with one-time services
        and multi-service contracts.
      </OutlineSection>
      <OutlineSection
        title="Residential"
        class="mt-4 sm:mx-auto md:mt-0 md:ml-2"
      >
        Landscaping services subject to complete customer optimization. Customer
        preference is our priority.
      </OutlineSection>
    </div>

    <section class="mt-12">
      <h2 class="font-medium text-center">Contact Information</h2>
      <DetailSection title="Email" class="mt-2">
        bluetreelandscapingllc@gmail.com
      </DetailSection>
      <DetailSection title="Phone" class="mt-4">
        <a href="tel:+18438109722">(843) 810-9722</a>
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

    <Contact class="mx-auto mt-8 md:w-1/2" />
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
