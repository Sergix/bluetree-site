<template>
  <section class="inline">
    <a
      href="https://www.facebook.com/pages/category/Landscape-Company/BlueTree-Landscaping-LLC-1292148117615104/"
      class="mr-1"
      aria-label="Facebook"
    >
      <FacebookIcon width="25" height="25" aria-label="Facebook" />
    </a>
    <!-- <a href="https://www.twitter.com/" class="mr-1" aria-label="Twitter">
      <TwitterIcon width="25" height="25" aria-label="Twitter" />
    </a>
    <a href="https://www.linkedin.com/" aria-label="LinkedIn">
      <LinkedInIcon width="25" height="25" aria-label="LinkedIn" />
    </a> -->
  </section>
</template>

<script>
import FacebookIcon from '@/assets/icon/facebook.svg'
import TwitterIcon from '@/assets/icon/twitter.svg'
import LinkedInIcon from '@/assets/icon/linkedin.svg'

export default {
  name: 'SocialIcons',
  components: {
    FacebookIcon,
    TwitterIcon,
    LinkedInIcon,
  },
}
</script>
