<template>
  <div>
    <h2>Pokemon Card List</h2>
    <ul class="cardList">
      <li
        class="card"
        v-for="pokemon in paginatedPokemonDatabase"
        :key="pokemon?.value.data?.id"
      >
        <img
          class="image"
          :src="pokemon?.value.data?.sprites.other.home.front_default"
          :alt="pokemon?.value.data?.name"
        />
        <div class="name">
          {{ pokemon?.value.data?.name }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const pageSize = ref(20)
const pageOffset = ref(0)

const pokemonStore = usePokemonStore()
const paginatedPokemonDatabase = computed(() =>
  pokemonStore.pokemonDatabase.slice(pageOffset.value, pageSize.value),
)

onMounted(() => {
  pokemonStore.fetchPokemonIndexList(pageOffset.value, pageSize.value)
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
