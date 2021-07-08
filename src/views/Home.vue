<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld />
    <Jumbo />
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    'HelloWorld': () => import('@/components/HelloWorld'),
    'Jumbo': () => import('@/components/Jumbo'),
  },
}
</script>
