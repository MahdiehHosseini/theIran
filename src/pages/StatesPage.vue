<template>
    <div v-if="statesCardContent">
        <header class="text-center animate__fadeInDown animate__animated">
            <h1 class="text-7xl my-32">{{statesCardContent[0].location[0]}}</h1>
        </header>
        <Cards-list :places="statesCardContent"></Cards-list>
    </div>
    <Loading-land v-else ></Loading-land>
</template>
<script lang="ts" >
import { PropType } from 'vue'
import LoadingLand from './../components/mainComponents/LoadingLand.vue'
import CardsList from './../components/subComponents/lists/CardsList.vue'
import { Place } from '../interfaces/interfaces'
export default {
    components:{
        CardsList,
        LoadingLand
    },
    data() {
        return {
            statesName : this.$route.params.statesName as string,
            statesCardContent : '',
        }
    },
    async mounted() {
        await fetch('./../../../src/data/data.json')
        .then(res => res.json())
        .then(data => this.statesCardContent = data.filter( (place: Place) => place.location[0].split(' ').join('') === this.statesName))
        .catch(err => console.log(err.message))
    }
}
</script>