<template>
    <div v-if="collectionCardsContent">
      <Header :title="collectionName"></Header>
      <Body :places="collectionCardsContent"></Body> 
    </div>
    <Loading-land v-else></Loading-land>
  </template>
  <script lang="ts" >
  import Header from './../SingleCollectionHeader.vue'
  import Body from './../SignleCollectionBody.vue'
  import LoadingLand from './../../mainComponents/LoadingLand.vue'
  import type { Place } from './../../../interfaces/interfaces'
  export default {
      components:{
          Header,
          Body,
          LoadingLand
      },
      data() {
          return {
              collectionName: this.$route.params.collectionName as string,
              collectionCardsContent: [] as Place[]
          }
      },
      mounted() {
          fetch('./../../../src/data/data.json')
          .then(res => res.json())
          .then(data => this.collectionCardsContent = data.filter( (place: Place) => place.collection === this.collectionName))
          .catch(err => console.log(err.message))
      }
  }
  </script>