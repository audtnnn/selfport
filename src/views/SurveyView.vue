<template>
    <div class="row">
        <survey-section />
        <slider-section1 :slideAni="slideAni" />
        <slider-section2 :slideAni2="slideAni2"/>
        <slider-section3 />
        
    </div>
</template>

<script>
import SurveySection from '@/components/survey/SurveySection.vue';
import SliderSection1 from '@/components/section/SliderSection1.vue';
import SliderSection2 from '@/components/section/SliderSection2.vue';
import SliderSection3 from '@/components/section/SliderSection3.vue';

    export default {
        components:{
            SurveySection,
            SliderSection1,
            SliderSection2,
            SliderSection3,
           
        },
        data(){
            return {
                slideAni : false,
                slideAni2 : false
            }
        },
        mounted(){
            document.addEventListener("scroll", this.handleScroll)
        }, 
        methods : {
            handleScroll(){
                console.log(window.scrollY)
                if (window.scrollY>300){
                    this.slideAni = true
                } else {
                    this.slideAni = false
                }
                if (window.scrollY>700) {
                    this.slideAni2 = true
                } else {
                    this.slideAni2 = false
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
