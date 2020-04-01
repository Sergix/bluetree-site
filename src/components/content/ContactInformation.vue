<template>
  <section>
    <DetailSection title="Email" class="mt-2">
      <a href="mailto:bluetreelandscapingllc@gmail.com">
        bluetreelandscapingllc@gmail.com
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
