<template>
  <section>
    <h2 class="font-medium text-center">Contact Information</h2>
    <DetailSection title="Email" class="mt-2">
      <a href="mailto:tyler@bluetreesc.com">
        tyler@bluetreesc.com
      </a>
    </DetailSection>
    <DetailSection title="Phone" class="mt-4">
      <a href="tel:+18438109722">(843) 810-9722</a>
    </DetailSection>
  </section>
</template>

<script>
import DetailSection from '@/components/content/DetailSection'

export default {
  name: 'ContactInformation',
  components: {
    DetailSection,
  },
}
</script>
