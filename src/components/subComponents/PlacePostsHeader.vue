<template>
    <header class="lg:flex lg:flex-col lg:items-center">
      <div class="text-white h-96 mx-14 lg:w-1/2 bg-black box-border relative rounded-2xl mt-16" :style="{background: `url('${place.imgUrl}')` ,backgroundRepeat: 'noRepeat',backgroundPosition: 'center', backgroundSize: 'cover'}">
        <div class="animate__fadeInDown animate__animated absolute bottom-0  m-5 backdrop-brightness-50 p-3 rounded-lg">
            <h1 class="text-4xl">{{ place.name }}</h1>
            <p class="text-neutral-200 text-2xl">{{place.location}}</p>
        </div>
      </div>
    </header>
</template>
<script lang="ts" >
import { PropType } from 'vue'
import { Place } from '../../interfaces/interfaces'
export default {
    props: {
      place: {} as PropType<Place>
    }
}
</script>