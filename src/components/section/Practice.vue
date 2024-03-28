<template>
    <div class="bg">
        <div class="wrap">
            <div class="phone">
                <img src="@/assets/image/phone.png" alt="">
            </div>
            <div class="unload_screen">
                <div class="question" :class="{ 'hereOn': ishere }">
                    <p>원하시는 카드를 선택해주세요</p>
                    <div class="triangle"></div>
                </div>
                <img src="@/assets/image/mascot.jpg" alt="" :class="{ 'hereOn': ishere }">
            </div>
            <ul>
                <li class="screen" :class="{ 'hereOn': ishere }">
                    <div class="screen_image" :class="{ 'hereOn': ishere }">
                        <img src="@/assets/image/여기어때.png" :class="{ 'hereOn': ishere }" alt="">
                    </div>
                    <div class="loader" :class="{ 'animate': animated }"></div>
                    <div class="detail_data" :class="{ 'hereOn': ishere }">{{detail_Data}}</div>
                    <div class="buttons" :class="{ 'hereOn': ishere }">
                        <button>전화상담</button>
                        <button>이메일 접수</button>
                    </div>
                </li>
            </ul>
            <ul class="cards">
                <li v-for="(item,index) in screen" :key="index" class="here" :class="{ 'hereOn': item.ishere }" @click="Togglehere(index)">
                    <div class="card-inner">
                        <div class="front">
                            <p>{{item.detail}}</p>
                            <img :src="item.image" alt="">
                        </div>
                        <div class="back">
                            <div class="business_card">
                                <p class="card_name">여기어때</p>
                                <p class="card_detail">{{item.detail}}</p>
                                <div class="card_info">
                                    <span>{{item.email}}</span>
                                    <span>{{item.number}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                screen: [
                    {
                    detail: "마케팅/사업제휴" , email:"mkt@gccompany.co.kr", ishere: false, image: "src/assets/image/marketing.png", number: "010-1234-5678"
                },
                {
                    detail: "호텔/리조트" , email:"mkt@gccompany.co.kr", ishere: false, image: "src/assets/image/hotel.png", number: "010-1234-5678"
                },
                {
                    detail: "펜션/캠핑/글램핑/게스트하우스" , email:"mkt@gccompany.co.kr", ishere: false, image: "src/assets/image/house.png", number: "010-1234-5678"
                },
                {
                    detail: "레저/티켓" , email:"mkt@gccompany.co.kr", ishere: false, image: "src/assets/image/activity.png", number: "010-1234-5678"
                },
                {
                    detail: "홈&빌라 입점하기" , email:"mkt@gccompany.co.kr", ishere: false, image: "src/assets/image/house.png", number: "010-1234-5678"
                },
                {
                    detail: "공간대여 입점하기" , email:"mkt@gccompany.co.kr", ishere: false, image: "src/assets/image/rentplace.png" ,number: "010-1234-5678"
                }
                ],
                ishere: false,
                load: false,
                detail_Data: "",
                animated: false
            }
        },
        methods: {
            Togglehere(index) {
                this.screen.forEach((item) => {
                item.ishere = false;
                });
                const item = this.screen[index];
                item.ishere = !item.ishere
                this.ishere = true
                this.detail_Data = item.detail
                this.animated = true
            },
        },
    }
</script>

<style lang="scss" scoped>
    .bg{
        //  background: linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.5)), url("@/assets/image/forrest.jpg");
        .wrap{
            position: relative;
            .phone{
                text-align: center;
            }
            .unload_screen {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                width: 347px;
                height: 1000px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border-radius: 20px;
                .question {
                    transition: all 0.2s;
                    &.hereOn {
                        opacity: 0;
                        }
                    p {
                        font-size: 20px;
                        font-family: "YeogiEottae", sans-serif;
                        font-weight: 300;
                        color:#fff;
                        background: #f4313f;
                        border-radius: 15px;
                        padding: 15px;
                    }
                    .triangle {
                            width: 0;
                            height: 0;
                            border-left: 10px solid transparent;
                            border-right: 10px solid transparent;
                            border-top: 10px solid #f4313f;
                            transform: translateY(-1px) translateX(70px);
                            margin-bottom: 10px;
                        }
                    }
                img {
                    width: 100px;
                    height: 100px;
                    border-radius: 20px;
                    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
                    transition-property: opacity, margin;
                    transition-duration: 0.2s, 0.2s;
                    transition-delay: 1s, 0.5s;
                    &.hereOn {
                        opacity: 0;
                        margin-top: -100px;
                    }
                }
            }
            .screen {
                position: absolute;
                top: 45%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 99999;
                display: flex;
                flex-direction: column;
                transition: all 0.2s;
                height: 600px;
                justify-content: center;
                gap: 20px;
                .screen_image{
                    display: flex;
                    justify-content: center;
                    img{
                        opacity: 0;
                        width: 300px;
                        transition-property: width, opacity, margin;
                        transition-duration: 0.2s, 0.2s, 0.2s; /* 각 속성에 대한 전환 시간 */
                        transition-delay: 2s, 1.8s, 2.5s;/* 각 속성에 대한 딜레이 */
                        &.hereOn {
                        opacity: 1;
                        width: 200px;
                        margin-bottom: 100px;
                        }
                    }
                }
                .loader {
                    width: 50px;
                    height: 50px;
                    margin: 0 auto; /* 가운데 정렬 */
                    opacity: 0;
                    background-image: url('src/assets/image/marketing.png') center / cover;
                    transition: all 0.5s 3s;
                    &.animate {
                        opacity: 1;
                        animation: changeIcon 3s linear infinite;
                    }
                }
                .detail_data {
                    opacity: 0;
                    transition: all 0.5s 3.5s;
                    font-size: 20px;
                    font-family: "YeogiEottae", sans-serif;
                    color:#f4313f;
                    text-align: center;
                    &.hereOn {
                    opacity: 1;
                    }
                }
                .buttons {
                    opacity: 0;
                    transition: all 0.2s 3.5s;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 6px;
                    button {
                        font-size: 15px;
                        background: #f4313f;
                        color: #fff;
                        border-radius: 14px;
                        padding: 20px;
                        font-weight: 600;
                        transition: all 0.2s;
                        &:hover{
                            background: rgb(227,137,143);
                        }
                    }
                    &.hereOn {
                        opacity: 1;
                    }
                }
            }
            .cards {
                display: flex;
                justify-content: space-between;
                position: absolute;
                top: 60%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 1800px;
                gap: 30px;
                .here {
                    width: 200px;
                    height: 300px;
                    transition: all 0.6s;
                    transform-style: preserve-3d;
                    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
                    perspective: 1000px;
                    position: relative;
                    padding: 0 15px;
                    font-weight: 600;
                    border-radius: 16px;
                    background: #FFEBEB;
                    cursor: pointer;
                    .card-inner {
                        width: 100%;
                        height: 100%;
                        position: relative;
                        transform-style: preserve-3d;
                        transition: transform 0.6s;
                        .front {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            backface-visibility: hidden;
                            z-index: 2;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            color:#333;
                            font-weight: 400;
                            gap: 50px;
                            font-family: "YeogiEottae", sans-serif;
                                p {
                                text-align: center;
                                font-size: 20px;
                            }
                                img {
                                    width: 100px;
                                    height: 100px;
                                    
                                }
                        }
                        .back {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            backface-visibility: hidden;
                            transform: rotateY(180deg);
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            .business_card {
                                transform: rotate(90deg) translateY(50%);
                                width: 300px;
                                height: 170px;
                                display: flex;
                                flex-direction: column;
                                padding: 10px 20px 0px;
                                gap: 20px;
                                .card_name{
                                    font-size: 20px;
                                    color: #333;
                                    font-family: "YeogiEottae", sans-serif;
                                }
                                .card_detail{
                                    display: flex;
                                    justify-content: right;
                                }
                                .card_info{
                                    display: flex;
                                    flex-direction: column;
                                    gap: 10px;
                                    span {
                                        font-size: 12px;
                                    }
                                }
                            }
                        }
                    }
                    &:hover {
                    transform: translateY(-10%) rotateY(180deg) rotateZ(85deg);// 호버 시 약간 위로 이동
                    background: #fff;
                    z-index:99999;
                    }
                    &.hereOn {
                       transform: translateX(200%) translateY(-70%);
                       opacity: 0;
                    }
                    &:nth-child(2).hereOn{
                        transform: translateX(100%) translateY(-30%);
                        opacity: 0;
                    }
                    &:nth-child(3){
                        margin-right: 450px;
                    }
                    &:nth-child(3).hereOn{
                        transform: translateX(75%) translateY(-20%);
                        opacity: 0;
                    }
                    &:nth-child(4).hereOn{
                        transform: translateX(-75%) translateY(-20%);
                        opacity: 0;
                    }
                    &:nth-child(5).hereOn{
                        transform: translateX(-200%) translateY(-50%);
                        opacity: 0;
                    }
                    &:nth-child(6).hereOn{
                        transform: translateX(-250%) translateY(-70%);
                        opacity: 0;
                    }
                }
            
            }
        }
    }
@keyframes changeIcon {
    0%, 25% { content: url('src/assets/image/marketing.png'); } /* 0% ~ 25% 까지 첫 번째 아이콘 */
    25.01%, 50% { content: url('src/assets/image/house.png'); } /* 25.01% ~ 50% 까지 두 번째 아이콘 */
    50.01%, 75% { content: url('src/assets/image/hotel.png'); } /* 50.01% ~ 75% 까지 세 번째 아이콘 */
    75.01%, 100% { content: url('src/assets/image/rentplace.png'); } /* 75.01% ~ 100% 까지 네 번째 아이콘 */
}
</style>