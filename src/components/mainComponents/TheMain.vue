<script setup lang="ts">
import { ref, onMounted } from 'vue'
import LoadingLand from './LoadingLand.vue'
import CardsList from '../subComponents/lists/CardsList.vue'
import type { Place } from '../../types/PlaceType.js'
import placesData from '../../data/data.json'

const places = ref<Place[]>([])

onMounted(() => {
    const allPlaces = placesData as Place[]
    places.value = [allPlaces[0], allPlaces[1], allPlaces[2]]
})
</script>

<template>
    <main v-if="places.length">
        <div class="xl:flex xl:flex-row xl:ml-10 xl:place-items-start">
            <div class="text-center mt-6 mx-10">
                <h3 class="text-4.5xl xl:text-6xl main-title xl:mt-12 md:text-5xl">Top watched</h3>
                <p class="text-3xl mt-5 xl:mt-12 xl:text-4.5xl text-gray-600 md:mt-8 main-title-submit">see what was intresting for the others</p>
            </div>
        </div>
        <CardsList :places="places"></CardsList>
    </main>
    <LoadingLand v-else></LoadingLand>
</template>
