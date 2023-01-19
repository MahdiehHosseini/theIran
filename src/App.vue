<template>
  <div class=" flex flex-col min-h-screen w-full overflow-x-hidden">
    <Nav-bar v-if="$route.fullPath !== '/'"></Nav-bar>
    <div class=" flex-1">
      <router-view></router-view>
    </div>
    <Footer ></Footer>
  </div>
</template>
<script lang="ts" >
import NavBar from './components/mainComponents/TheNav.vue'
import Footer from './components/mainComponents/TheFooter.vue'
export default {
   components : {
       Footer,
       NavBar
   }
}
</script>