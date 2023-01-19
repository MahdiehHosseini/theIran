<template>
    <header class="flex pt-14 border-t border-t-zinc-700 mt-22 mb-44 mx-3 justify-around">
        <p v-for="letter in sptitedTitle" :key="sptitedTitle.indexOf(letter)" class="animate__fadeInDownBig animate__animated text-5xl">{{letter}}</p>
    </header>
</template>
<script lang="ts" >
export default {
    props: {
        title: String
    },
    data() {
        return {
            sptitedTitle : this.title?.split('') as string[]
        }
    },
}
</script>