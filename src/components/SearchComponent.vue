<template>
  <form @submit.prevent="handleSearch">
  <div class="row mb-3">
    <div class="col-12 col-md-10 mb-2">
      <input :placeholder="placeholder" type="text" v-model="search" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div class="col-12 col-md-2 mb-2 text-end">
      <button type="submit" class="btn btn-primary mb-2">Search</button>
    </div>
  </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

enum Actions {
  Action = 'action'
}

defineProps({
  placeholder: String
})

const search = ref('')

const emit = defineEmits<{
  (e: Actions.Action, search: string): void;
}>();

const handleSearch = () => {
  emit(Actions.Action, search.value)
  search.value = ''
}

</script>

<style scoped>
</style>