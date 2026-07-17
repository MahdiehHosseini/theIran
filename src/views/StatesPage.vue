<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import LoadingLand from '../components/mainComponents/LoadingLand.vue'
import CardsList from '../components/subComponents/lists/CardsList.vue'
import type { Place } from '../types/PlaceType.js'
import placesData from '../data/data.json'

const route = useRoute()
const statesName = route.params.statesName as string
const statesCardContent = ref<Place[]>([])

onMounted(() => {
    statesCardContent.value = (placesData as Place[]).filter(place => place.location[0].split(' ').join('') === statesName)
})
</script>

<template>
    <div v-if="statesCardContent.length">
        <header class="text-center animate__fadeInDown animate__animated">
            <h1 class="text-7xl my-32">{{statesCardContent[0].location[0]}}</h1>
        </header>
        <CardsList :places="statesCardContent"></CardsList>
    </div>
    <LoadingLand v-else ></LoadingLand>
</template>
