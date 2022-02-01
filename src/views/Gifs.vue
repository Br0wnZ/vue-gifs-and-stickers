<template>
  <div class="container mt-3 mb-5 border">
    <h1 class="text-center">{{ title }}</h1>
    <SearchComponent :placeholder="'Search gif'" @action="getGifs"/>
    <div class="text-center" v-if="isLoading">
      <Loader />
    </div>
    <div class="row">
      <div class="col-12 col-lg-3 col-md-4" v-for="gif in gifs" :key="gif.id">
        <GifCard class="m-2 w-100" :gif="gif"></GifCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { GiftCard as GifCard, SearcComponent as SearchComponent, Loading as Loader } from '@/components/index'
import { ISearchResponse, Datum } from '@/models/gifSearchResponse';

const isLoading = ref<boolean>(false);
const title: string = 'Gifs'
const url: string = 'api.giphy.com/v1/gifs/search'
const apiKey: string = 'DQD5KWm55SjrTB9NBThhVL2C7nM0iJ38'
const gifs = ref<Datum[]>()

const getGifs = async(search: string): Promise<void> => {
  isLoading.value = true
  const { data: { data: d } } = await axios.get<ISearchResponse>(`https://${url}?q=${search}&api_key=${apiKey}`)
  gifs.value = d
  isLoading.value = false
}

</script>

<style scoped>

</style>