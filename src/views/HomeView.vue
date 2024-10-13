<template>
  <main>
    {{ pokemonList }}
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { usePokemonStore } from '@/stores/pokemon'

const pokemonStore = usePokemonStore()

const pokemonList = pokemonStore.getPokemonList

onMounted(() => {
  pokemonStore.fetchPokemonList()
})
</script>
