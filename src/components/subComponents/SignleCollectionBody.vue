<template>
    <Cards-list :places="places"></Cards-list>
</template>
<script lang="ts" >
import { PropType } from 'vue'
import CardsList from './../subComponents/lists/CardsList.vue'
import { Place } from '../../interfaces/interfaces'
export default {
    components:{
        CardsList
    },props: {
        places: [] as PropType<Place[]>
    }
}
</script>
