<template>
    <nav class="bg-white fixed-top shadow-lg md:flex">
        <span class="flex justify-between px-10 py-5 w-full">
            <router-link to="/"><a class="text-3xl">IRAN</a></router-link> 
            <div class="hamberger-menu md:hidden inline-block" @click="showNav()">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
        </span>
        <ul :class="['md:flex justify-center mb-5 md:mt-5 md:mr-10', activeNav ? 'flex' : 'hidden' ]">
            <router-link to="/Map"><li class="text-xl pr-5">map</li></router-link>
            <router-link to="/Touristy"><li class="text-xl border-l border-slate-300 pl-5">turism</li></router-link>
        </ul>
    </nav>
</template>

<script lang="ts">
export default {
    data(){
        return{
            activeNav : false as boolean,
        }
    },
    methods:{
        showNav(){
            this.activeNav = !this.activeNav
        }
    }
}
</script>