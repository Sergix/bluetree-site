<template>
  <main class="flex flex-col justify-center lg:flex-row lg:mx-auto">
    <div class="lg:my-auto lg:mr-8">
      <h1 class="text-center lg:text-left">Services</h1>

      <h2></h2>

      <p class="text-md mt-8 lg:max-w-24">
        If you have a project or installation need that is not listed,
        <g-link to="/contact" class="underline text-primary-darkest">
          contact us
        </g-link>
        and we'll provide pricing for your project.
      </p>
    </div>

    <div class="lg:my-auto lg:ml-8">
      <section class="mt-8 mx-auto lg:w-56">
        <h2 class="border-b">General maintenance</h2>
        <p class="mt-2 ml-2">
          Mowing, bush hedging, weed trimming, edging, raking, leaf
          blowing/clean up
        </p>
      </section>

      <section class="mt-4 mx-auto lg:w-56">
        <h2 class="border-b">Projects</h2>
        <ul class="mt-2 ml-2">
          <li class="flex flex-row justify-center align-middle items-center">
            <div class="flex flex-col">
              <span class="text-xl">Debris hauling</span>
              <span class="text-sm mt-4 w-32">
                Wea haul leaves, wood, or any other landscaping debris.
              </span>
            </div>
            <g-image class="ml-8 w-64" src="@/assets/image/tools.jpg"
          /></li>
          <li>Pine straw</li>
          <li>Mulch</li>
          <li>Rock</li>
          <li>Sod</li>
          <li>Topsoil</li>
          <li>Light grating</li>
          <li>Small drainage projects</li>
        </ul>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: 'AboutPage',
  metaInfo: {
    title: 'About us',
  },
}
</script>

<style lang="scss" scoped></style>
