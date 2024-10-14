<template>
  <main>
    {{ pokemonStore.getPokemonList.data }}
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { usePokemonStore } from '@/stores/pokemon'

const pokemonStore = usePokemonStore()

onMounted(() => {
  pokemonStore.fetchPokemonList()
})
</script>
