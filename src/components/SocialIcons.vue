<template>
  <section class="inline">
    <a href="https://www.facebook.com/" rel="Facebook" class="mr-1">
      <FacebookIcon width="25" height="25" />
    </a>
    <a href="https://www.twitter.com/" rel="Twitter" class="mr-1">
      <TwitterIcon width="25" height="25" />
    </a>
    <a href="https://www.linkedin.com/" rel="LinkedIn">
      <LinkedInIcon width="25" height="25" />
    </a>
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
