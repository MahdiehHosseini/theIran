<script setup lang="ts">
import { useRoute } from 'vue-router'
import NavBar from './components/mainComponents/TheNav.vue'
import Footer from './components/mainComponents/TheFooter.vue'

const route = useRoute()
</script>

<template>
  <div class="flex flex-col min-h-screen w-full overflow-x-hidden">
    <NavBar v-if="route.fullPath !== '/'"></NavBar>
    <div class="flex-1">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>
