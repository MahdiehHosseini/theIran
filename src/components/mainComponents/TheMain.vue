<template>
    <main  v-if="places.length">
        <div class="xl:flex xl:flex-row xl:ml-10 xl:place-items-start">
            <div class="text-center mt-6 mx-10">
                <h3 class="text-4.5xl xl:text-6xl main-title xl:mt-12 md:text-5xl">Top watched</h3>
                <p class="text-3xl mt-5 xl:mt-12 xl:text-4.5xl text-gray-600 md:mt-8 main-title-submit">see what was intresting for the others</p>
            </div>
        </div>
        <Cards-list :places="places"></Cards-list>
    </main>
    <Loading-land v-else></Loading-land>
</template>
<script lang="ts" >
import LoadingLand from './../mainComponents/LoadingLand.vue'
import CardsList from './../subComponents/lists/CardsList.vue'
import type { Place } from './../../interfaces/interfaces'
export default {
    components:{
        CardsList,
        LoadingLand
    },
    data() {
        return {
            places: [] as Place[]
        }
    },
    mounted() {
        fetch('./../../../src/data/data.json')
        .then(res => res.json())
        .then(data => this.places = [data[0],data[1],data[2]])
        .catch(err => console.log(err.message))
    },
}
</script>