<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Header from '../SingleCollectionHeader.vue'
import Body from '../SingleCollectionBody.vue'
import LoadingLand from '../../mainComponents/LoadingLand.vue'
import type { Place } from '../../../types/PlaceType.js'
import placesData from '../../../data/data.json'

const route = useRoute()
const collectionName = route.params.collectionName as string
const collectionCardsContent = ref<Place[]>([])

onMounted(() => {
    collectionCardsContent.value = (placesData as Place[]).filter(place => place.collection === collectionName)
})
</script>

<template>
    <div v-if="collectionCardsContent.length">
      <Header :title="collectionName"></Header>
      <Body :places="collectionCardsContent"></Body>
    </div>
    <LoadingLand v-else></LoadingLand>
</template>
