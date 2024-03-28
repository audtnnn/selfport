<template>
    <section id="sliderSection2" :class="{row:true, on:slideAni2}">
        <h3 class="slide__title">해외 인기 여행지</h3>
        <div class="slide__inner">
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide v-for="(slider, index) in sliders" :key="index">
                    <router-link to="/main">
                        <img :src="slider.currentImage" :alt="slider.alt" >
                    </router-link>
                    <div class="slide-text">
                        <p>{{ slider.title }}</p>
                    </div>
                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>
    </section>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import '@/assets/css/myswiper.css'

    export default {
        name:"SliderSection2",
        components: {
            Swiper,
            SwiperSlide
        },
        props : ["slideAni2"],
        data(){
            return {
                sliders : [
                    { currentImage:"src/assets/image/_01.jpg", alt:"오사카", title: '오사카' },
                    { currentImage:"src/assets/image/_02.jpg", alt:"도쿄", title: '도쿄' },
                    { currentImage:"src/assets/image/_03.jpg", alt:"나트랑", title: '나트랑' },
                    { currentImage:"src/assets/image/_04.jpg", alt:"후쿠오카", title: '후쿠오카' },
                    { currentImage:"src/assets/image/_05.jpg", alt:"다낭", title: '다낭' },
                    { currentImage:"src/assets/image/_06.jpg", alt:"괌", title: '괌' },
                    { currentImage:"src/assets/image/_01.jpg", alt:"오사카", title: '오사카' },
                    { currentImage:"src/assets/image/_02.jpg", alt:"도쿄", title: '도쿄' }
                ],
                swiperOption: {
                    slidesPerView: 5,
                    slidesPerGroup : 1,
                    spaceBetween: 50,
                    freemode:true,
                    loop: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }
        },    
        }
    
</script>

<style lang="scss" scoped>
    #sliderSection2 { margin:100px auto; font-family: "Noto Sans KR", sans-serif; transform:translateY(100%); transition:all 0.5s;
    &.on { transform:translateY(0%) }
    .slide__title { text-align: center; margin: 20px 0;}
        .slide__inner {
            padding:0 50px; overflow:hidden;
            .swiper {
                img { border-radius:20px; cursor:pointer; }
                p {text-align: center; margin-top: 10px; }
                }  
            }
        }
</style>
