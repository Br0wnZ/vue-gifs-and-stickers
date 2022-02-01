<template>
  <div id="app">
    <div id="nav">
      <Nav />
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import {Navbar as Nav, TheFooter as Footer} from "@/components/index";
</script>

<style lang="scss">
</style>
