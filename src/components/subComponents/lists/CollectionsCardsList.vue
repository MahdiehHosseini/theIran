<script setup lang="ts">
import CollectionCard from '../CollectionCard.vue'

const collections = ['Historical', 'Nature', 'Religious', 'Famos']
</script>

<template>
  <main class="flex xl:block flex-col items-center mb-16">
    <div class="xl:flex xl:justify-around">
      <CollectionCard :collection="collections[0]" :key="collections[0]"></CollectionCard>
      <CollectionCard :collection="collections[1]" :key="collections[1]"></CollectionCard>
    </div>
    <div class="xl:flex xl:justify-around">
      <CollectionCard :collection="collections[2]" :key="collections[2]"></CollectionCard>
      <CollectionCard :collection="collections[3]" :key="collections[3]"></CollectionCard>
    </div>
  </main>
</template>
