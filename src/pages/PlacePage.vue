<template>
    <div v-if="placeContent">
      <Header :place="placeContent"></Header>
      <main class="m-14 wow animate__fadeInUp animate__animated">
          <p class="text-xl">{{placeContent.explonation}}</p>
      </main>
    </div>
    <Loading-land v-else></Loading-land>
  </template>
<script lang="ts" >
import { PropType } from 'vue'
import Header from './../components/subComponents/PlacePostsHeader.vue'
import LoadingLand from './../components/mainComponents/LoadingLand.vue'
import { Place } from '../interfaces/interfaces'
export default {
    components:{
        Header,
        LoadingLand
    },
    data() {
        return {
            placeContent : {} as PropType<Place> ,
            placeTitle : this.$route.params.placeName as string
        }
    },
    mounted() {
        fetch('./../../../src/data/data.json')
        .then(res => res.json())
        .then(data => this.placeContent = data.filter( (place: Place) => place.name === this.placeTitle)[0])
        .catch(err => console.log(err.message))
    }
}
</script>