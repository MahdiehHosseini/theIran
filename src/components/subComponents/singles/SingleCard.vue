<template>
        <div class="wow lg:static lg:w-auto reletive md:w-full animate__fadeInUp animate__animated flex relative xl:mr-36 xl:-mt-32 flex-col items-center justify-center m-10 mb-28" :class="[ (index % 2 === 1) ? 'xl:items-start' : 'xl:items-end' ]">
            <div>
                <router-link :to="{name : 'place page' , params:{ placeName : place?.name }}">
                    <div class="bg-white md:pr-22 md:h-72 md:mt-12 card-md border rounded-3xl xl:pr-20 w-72 h-96 shadow-xl hover:shadow-2xl m-7">
                        <div class="m-8 mt-11 md:mt-8">
                            <h2 class="text-3xl">{{place?.name}}</h2>
                            <p class="text-neutral-600">{{place?.location[0]}}</p>
                            <p class="text-2xl xl:w-full md:mt-3 md:w-52">{{place?.description}}</p>
                        </div>
                    </div>
                </router-link>
                <div class="md:block flex justify-center md:w-1/4 md:float-right">
                    <img class=" rounded-2xl w-48 absolute md:top-20 top-80 h-48 shadow-xl hover:shadow-2xl" :alt="place?.name + ' image'" :src="place?.imgUrl">
                </div>
            </div>
        </div>
</template>
<script lang="ts" >
import { PropType } from 'vue'
import type { Place } from './../../../interfaces/interfaces'
export default {
    props: {
        place: {} as PropType<Place>,
        index: Number
    }
}
</script>