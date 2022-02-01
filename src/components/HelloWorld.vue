<template>
  <div class="container mt-2">
    <div class="card" style="width: 100%;">
      <div class="card-body">
        <h5 class="card-title">Gif Router</h5>
        <h6 class="card-subtitle mb-2 text-muted">Made by Javi Moreno</h6>
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <!-- <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class HelloWorld extends Vue {
}
</script>

<style scoped lang="scss">
</style>
