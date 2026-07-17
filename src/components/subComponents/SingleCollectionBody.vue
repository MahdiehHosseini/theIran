<script setup lang="ts">
import CardsList from './lists/CardsList.vue'
import type { Place } from '../../types/PlaceType.js'

defineProps<{
    places?: Place[]
}>()
</script>

<template>
    <CardsList :places="places"></CardsList>
</template>
