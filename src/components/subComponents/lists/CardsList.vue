<template>
    <div class="my-32">
        <Card v-for="place in places" :index="places?.indexOf(place)" :key="place.key" :place="place"></Card>
    </div>
</template>
<script lang="ts" >
import { PropType } from 'vue'
import Card from './../singles/SingleCard.vue'
import type { Place } from './../../../interfaces/interfaces'
export default {
    components:{
        Card
    },
    props: {
        places: [] as PropType<Place[]>
    }
}
</script>