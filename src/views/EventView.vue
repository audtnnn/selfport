<template>
    <div class="row">
        <event-section :eventAni="eventAni" />
    </div>
</template>

<script>
    import EventSection from '@/components/event/EventSection.vue'
    export default {
        name: "EventView",
        components:{
            EventSection,
        },
        data(){
            return {
                eventAni : false
            }
        },
        mounted(){
            setTimeout(()=>{
                this.eventAni = true
            }, 0)
        },
    }
</script>

<style lang="scss" scoped>

</style>
