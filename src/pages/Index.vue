<template>
  <main>
    <!-- <object
      class="absolute top-0 left-0 w-full h-38 bg-secondary-lighter z-neg-1 lg:invisible"
    >
    </object> -->

    <div class="hero lg:flex lg:flex-row lg:px-32 lg:h-hero lg:items-center">
      <div class="lg:py-32 lg:mr-16 lg:flex-1 lg:max-w-1/2">
        <h1 class="my-4 leading-none lg:text-6xl">
          Quality service at a competitive price.
        </h1>
        <p class="font-serif italic mt-4 lg:mt-8 lg:max-w-32">
          Residential and commercial, Bluetree Landscaping delivers the lawn
          care and outdoor servicing you need at the excellent quality you
          deserve.
        </p>
        <Button
          class="mt-4 lg:mt-8"
          type="button"
          @click.native="$router.push('/contact')"
        >
          Contact Us
        </Button>
      </div>
      <div class="lg:mx-auto">
        <g-image
          class="mt-8 lg:self-center lg:max-w-lg rounded"
          src="~/assets/image/tools_compressed-50.jpg"
          alt="Tools"
        />
      </div>
    </div>

    <div class="mt-12 mx-auto md:flex md:flex-row md:justify-center lg:w-1/3">
      <g-link to="/services">
        <OutlineSection title="Commercial" class="lg:max-w-32">
          Complete property landscaping maintenance offered with one-time
          services and multi-service contracts.
        </OutlineSection>
      </g-link>
      <g-link to="/services">
        <OutlineSection
          title="Residential"
          class="mt-4 md:mt-0 md:ml-4 lg:max-w-32"
        >
          Landscaping services subject to complete customer optimization.
          Customer preference is our priority.
        </OutlineSection>
      </g-link>
    </div>

    <section class="mt-12 lg:mt-24 mx-auto">
      <h2 class="font-medium text-center">Contact Information</h2>
      <ContactInformation class="mx-auto lg:max-w-24" />
    </section>

    <ImageSection
      title="Various Services"
      image="house-lawn_compressed-50.jpg"
      alt="House"
    >
      Complete property landscaping maintenance offered with one-time services
      and multi-service contracts.
    </ImageSection>

    <ImageSection
      title="Locally Owned"
      image="bridge_compressed-50.jpg"
      alt="Ravanel bridge"
      reversed="true"
    >
      We service the greater Charleston area, including Dorchester, Berkeley,
      and Charleston county.
    </ImageSection>

    <g-link to="/contact">
      <section
        class="mx-auto mt-12 md:mt-24 max-w-md border border-black text-2xl text-center p-8 rounded-md shadow-lg"
      >
        Contact Us Today
      </section>
    </g-link>

    <section class="max-w-4xl mx-auto mt-12 md:mt-24">
      <Comments />
      <CommentForm class="mt-12" />
    </section>
  </main>
</template>

<script>
import DetailSection from '@/components/content/DetailSection'
import ImageSection from '@/components/content/ImageSection'
import OutlineSection from '@/components/content/OutlineSection'
import Button from '@/components/form/Button'
import ContactInformation from '@/components/content/ContactInformation'
import Comments from '@/components/content/Comments'
import CommentForm from '@/components/form/CommentForm'

export default {
  name: 'IndexPage',
  components: {
    Button,
    DetailSection,
    ImageSection,
    OutlineSection,
    ContactInformation,
    Comments,
    CommentForm,
  },
  metaInfo: {
    title: 'Home',
  },
}
</script>
