<template>
  <div>
    Formulaire
    <Form />
  </div>

</template>

<script>
export default {
  name: "Formulaire",
  components: {
    'Form': () => import('@/components/Form'),
  },
}
</script>

<style>

</style>
