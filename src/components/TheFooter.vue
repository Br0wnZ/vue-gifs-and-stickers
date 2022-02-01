<template>
  <footer class="bg-dark bg-gradient">
    <h5 class="pt-2 text-center">
      &copy; <a href="http://javimoreno.epizy.com/#/">Javi Moreno</a> - {{ new Date().getFullYear() }}
    </h5>
  </footer>
</template>

<style scoped>
  h5 {
    color: white;
  }
  footer {
    position: fixed;
    height: 3rem;
    bottom: 0;
    width: 100%;
  }
</style>