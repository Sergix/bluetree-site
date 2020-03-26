<template>
  <main>
    <object
      class="absolute top-0 left-0 w-full h-32 bg-secondary-lighter z-neg-1 lg:invisible"
    >
    </object>

    <div class="hero lg:flex lg:flex-row lg:px-32 lg:h-hero lg:items-center">
      <div class="lg:py-32 lg:mr-16 lg:flex-1 lg:max-w-1/2">
        <h1
          class="font-bold text-secondary-darker text-5xl my-4 leading-none lg:text-6xl"
        >
          Quality service at a competitive price.
        </h1>
        <p class="font-serif italic mt-4">
          Residential or commercial, Bluetree Landscaping delivers the lawn care
          and outdoor servicing you need at the excellent quality you deserve.
        </p>
        <Button class="mt-4 lg:mt-8" type="button">Contact Us</Button>
      </div>
      <div class="lg:mx-auto">
        <g-image
          class="mt-8 lg:self-center lg:max-w-lg"
          src="~/assets/image/tools_compressed-50.jpg"
          alt="Tools"
        />
      </div>
    </div>

    <div class="mt-12 mx-auto md:flex md:flex-row md:justify-center lg:w-1/2">
      <OutlineSection title="Commercial" class="md:mr-2 lg:w-1/3">
        Complete property landscaping maintenance offered with one-time services
        and multi-service contracts.
      </OutlineSection>
      <OutlineSection title="Residential" class="mt-4 md:mt-0 md:ml-2 lg:w-1/3">
        Landscaping services subject to complete customer optimization. Customer
        preference is our priority.
      </OutlineSection>
    </div>

    <section class="mt-12 lg:mt-24 mx-auto lg:w-1/4">
      <h2 class="font-medium text-center">Contact Information</h2>
      <DetailSection title="Email" class="mt-2">
        <a href="mailto:bluetreelandscapingllc@gmail.com">
          bluetreelandscapingllc@gmail.com
        </a>
      </DetailSection>
      <DetailSection title="Phone" class="mt-4">
        <a href="tel:+18438109722">(843) 810-9722</a>
      </DetailSection>
    </section>

    <section class="mx-auto mt-12 flex flex-col lg:flex-row lg:max-w-6xl">
      <div class="lg:my-auto lg:mr-12">
        <h3 class="font-medium text-xl text-center lg:text-right">
          Various Services
        </h3>
        <p class="text-left mt-2 font-serif lg:text-right">
          Complete property landscaping maintenance offered with one-time
          services and multi-service contracts.
        </p>
      </div>
      <g-image
        class="mt-4 md:px-16 lg:py-16"
        src="~/assets/image/house-lawn_compressed-50.jpg"
        alt="House"
      />
    </section>

    <section
      class="mx-auto mt-12 flex flex-col lg:flex-row-reverse lg:max-w-6xl"
    >
      <div class="lg:my-auto lg:ml-12">
        <h3 class="font-medium text-xl text-center lg:text-left">
          Charleston Area
        </h3>
        <p class="text-left mt-2 font-serif">
          We service the greater charleston area, including Dorchester,
          Berkeley, and Charleston county.
        </p>
      </div>
      <g-image
        class="mt-4 md:px-16 lg:py-16"
        src="~/assets/image/bridge_compressed-50.jpg"
        alt="Ravanel bridge"
      />
    </section>

    <Contact class="mx-auto mt-24 md:w-2/3 lg:w-1/4" />
  </main>
</template>

<script>
import DetailSection from '@/components/content/DetailSection'
import ImageSection from '@/components/content/ImageSection'
import OutlineSection from '@/components/content/OutlineSection'
import Contact from '@/components/form/Contact'
import Button from '@/components/form/Button'

export default {
  name: 'IndexPage',
  components: {
    Button,
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
