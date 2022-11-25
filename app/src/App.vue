<template>
  <div class="container mx-auto px-4">
      <Nav />
      <RouterView />
  </div>
</template>

<script>
import Nav from './partials/Nav.vue';
export default {
  components: { Nav }
}
</script>

<style></style>
