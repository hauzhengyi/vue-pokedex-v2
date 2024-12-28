<template>
  <main>
    <Test />
    {{ pokemonStore.getPokemonIndexList.data }}
  </main>
</template>

<script setup lang="ts">
const pokemonStore = usePokemonStore()

onMounted(() => {
  pokemonStore.fetchPokemonIndexList(0, 20)
})
</script>
