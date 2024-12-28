<template>
  <div>
    <h2>Pokemon Card List</h2>
    <ul class="cardList">
      <li
        class="card"
        v-for="pokemon in pokemonStore.getPokemonDatabase"
        :key="pokemon.data?.id"
      >
        <img
          class="image"
          :src="pokemon.data?.sprites.other.home.front_default"
          :alt="pokemon.data?.name"
        />
        <div class="name">
          {{ pokemon.data?.name }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const pokemonStore = usePokemonStore()

onMounted(() => {
  pokemonStore.fetchPokemonIndexList(0, 20)
})
</script>

<style scoped lang="sass">
.cardList
  display: grid
  grid-template-columns: repeat(auto-fill, 8rem)
  justify-content: space-between
  row-gap: 0.5rem
  column-gap: 0.5rem
.card
  .image
    width: 100%
  .name
    text-align: center
</style>
