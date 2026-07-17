<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Header from '../components/subComponents/PlacePostsHeader.vue'
import LoadingLand from '../components/mainComponents/LoadingLand.vue'
import type { Place } from '../types/PlaceType.js'
import placesData from '../data/data.json'

const route = useRoute()
const placeTitle = route.params.placeName as string
const placeContent = ref<Place | null>(null)

onMounted(() => {
    placeContent.value = (placesData as Place[]).find(place => place.name === placeTitle) ?? null
})
</script>

<template>
    <div v-if="placeContent">
      <Header :place="placeContent"></Header>
      <main class="m-14 wow animate__fadeInUp animate__animated">
          <p class="text-xl">{{placeContent.explonation}}</p>
      </main>
    </div>
    <LoadingLand v-else></LoadingLand>
</template>
