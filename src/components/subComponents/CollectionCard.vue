<template>
        <div v-if="twoPlace" class=" w-80 m-5 md:scale-105 mt-16 wow animate__fadeInUp animate__animated">
            <router-link :to="{name : 'collection page' ,params : { collectionName: collection}}">
                <div class="rounded-t-full shadow-lg border border-neutral-100 h-48 text-center">
                    <h3 class="text-2xl mt-22">{{collection}}</h3>
                </div>
            </router-link>
            <div class="h-full border-neutral-100">
                <ul class="bg-white">
                    <router-link v-for="place in twoPlace" :key="place.key" :to="{name:'place page',params : { placeName:place.name}}">
                        <li class="flex items-center shadow-sm">
                            <img class="hover:scale-110 hover:duration-200 m-4 h-24 w-24 rounded-xl" :alt="place.name + ' image'" :src="place.imgUrl">
                            <div class="m-5">
                                <h4 class="text-xl mb-1.5">{{place.name}}</h4>
                                <p class="text-neutral-600 text-base">{{place.location[0]}}</p>
                                <p class="text-lg">{{place.description}}</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 hover:scale-110 hover:duration-200 mt-24 mr-5" fill="none " viewBox="0 0 24 24 " stroke="currentColor ">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2 " d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z " />
                            </svg>
                        </li>
                    </router-link>
                </ul>
                <div class="flex justify-center">
                    <router-link :to="{name : 'collection page' ,params : { collectionName: collection}}">
                        <button class="text-lg w-40 rounded-t-none h-20 rounded-3xl hover:shadow-2xl shadow-xl text-center">See more ...</button>
                    </router-link>
                </div>
            </div>
        </div>
    <Loading-land v-else></Loading-land>
</template>

<script lang="ts" >
import LoadingLand from './../mainComponents/LoadingLand.vue'
import { Place } from '../../interfaces/interfaces'
export default {
    props: {
        collection: String
    },
    components:{
        LoadingLand
    },
    data() {
        return {
            twoPlace : [] as Place[]
        }
    },
    mounted() {
        fetch('./../../../src/data/data.json')
        .then(res => res.json())
        .then(data => {
            const collectionCards = data.filter((place: Place) => place.collection === this.collection)
            this.twoPlace = collectionCards.length >= 2 ? [collectionCards[0],collectionCards[1]] : [collectionCards[0]]
        })
        .catch(err => console.log(err.message))
    }
}
</script>