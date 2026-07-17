<script setup lang="ts">
import Card from '../singles/SingleCard.vue'
import type { Place } from '../../../types/PlaceType.js'

defineProps<{
    places?: Place[]
}>()
</script>

<template>
    <div class="my-32">
        <Card v-for="(place, index) in places" :index="index" :key="place.key" :place="place"></Card>
    </div>
</template>
