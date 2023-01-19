<template>
  <main class="flex xl:block flex-col items-center mb-16">
    <div class="xl:flex xl:justify-around">
      <Collection-card :content="collections[0]" :key="collections[0].length"></Collection-card>
      <Collection-card :content="collections[1]" :key="collections[1].length"></Collection-card>
    </div>
    <div class="xl:flex xl:justify-around">
      <Collection-card :content="collections[2]" :key="collections[2].length"></Collection-card>
      <Collection-card :content="collections[3]" :key="collections[3].length"></Collection-card>
    </div>
  </main>
</template>
<script lang="ts" >
import CollectionCard from './../CollectionCard.vue'
export default {
  components:{
    CollectionCard,
  },
  data() {
    return {
      collections : ['Historical','Nature','Religious','Famos']
    }
  }
}
</script>
