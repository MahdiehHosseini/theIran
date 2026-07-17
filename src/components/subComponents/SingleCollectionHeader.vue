<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
    title?: string
}>()

const sptitedTitle = computed(() => props.title?.split('') ?? [])
</script>

<template>
    <header class="flex pt-14 border-t border-t-zinc-700 mt-22 mb-44 mx-3 justify-around">
        <p v-for="(letter, index) in sptitedTitle" :key="index" class="animate__fadeInDownBig animate__animated text-5xl">{{letter}}</p>
    </header>
</template>
