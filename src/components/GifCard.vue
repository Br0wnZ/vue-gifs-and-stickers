<template>
  <div class="card" style="width: 18rem;">
    <img loading="lazy" :src="gif?.images.downsized.url" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ gif?.title }}</h5>
      <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { Datum } from '@/models/gifSearchResponse';

interface Props {
  gif?: Datum;
}

withDefaults(defineProps<Props>(), { gif: undefined })
  
</script>

<style scoped>

</style>
