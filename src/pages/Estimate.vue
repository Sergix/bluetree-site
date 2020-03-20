<template>
  <main>
    <h2 class="text-center">Pricing Estimation</h2>
    <p class="mt-4 md:w-1/2 mx-auto">
      Want an immediate quote on a job? Fill out the form below with your
      desired maintenance and projects, and click the
      <span class="underline">Calculate</span> button to receive an estimated
      quote.
    </p>
    <form class="w-full mt-4 p-4 flex flex-col">
      <fieldset class="flex flex-col mx-auto">
        <CheckboxField label="Mowing" />
        <CheckboxField label="Weed Eating" />
        <CheckboxField label="Grass Cutting" />
      </fieldset>
      <fieldset class="mt-4 mx-auto">
        <label>
          Estimated square footage of lawn
          <TextInput class="block" placeholder="square footage" />
        </label>
      </fieldset>
      <Button class="flex mt-8 mx-auto" type="button">
        Calculate
      </Button>
    </form>
  </main>
</template>

<script>
import Button from '@/components/form/Button'
import CheckboxField from '@/components/form/CheckboxField'
import TextInput from '@/components/form/TextInput'

export default {
  name: 'EstimatePage',
  components: {
    Button,
    CheckboxField,
    TextInput,
  },
}
</script>
