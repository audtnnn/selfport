<template>
    <main1 id="main">
        <transition name="slide">
        <home-result class="home__result" @onClick="onClick" v-if="onoff"/>
        </transition>
        <home-search class="home__Search" @onResult="onResult"/>
    </main1>
</template>

<script>
    import HomeResult from "@/components/section/HomeResult.vue"
    import HomeSearch from "@/components/section/HomeSearch.vue"
    export default {
        name: "main",
        data(){
            return {
                onoff: false
            }
        },
        components: {
            HomeSearch,
            HomeResult
        },
        methods: {
            onClick(){
                this.onoff = false
            },
            onResult(){
                this.onoff = true
            }
        }
    }
</script>

<style lang="scss" scoped>
    #main {
        position: relative;
        .home__result{
            top: 0;
            left: 0;
            position: fixed;
            z-index: 99999;
        }
    }
.slide-enter-active, .slide-leave-active {
        transition: opacity 0.5s, transform 0.5s;
    }
    .slide-enter, .slide-leave-to {
       transform: translateY(100%);
       opacity: 0;
    }
</style>