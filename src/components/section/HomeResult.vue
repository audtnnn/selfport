<template>
    <div class="result">
        <div class="hotels">
            <div class="header">
                <button class="cancel" @click="onOff">
                    <i class="fa-solid fa-x"></i>
                </button>
                <div class="title">
                    검색결과
                </div>
            </div>
            <div class="body">
                <div class="check">
                    <div class="filter">
                        <h2>필터</h2>
                        <button>
                            <i class="fa-solid fa-rotate-right"></i>
                            <span>초기화</span>
                        </button>
                    </div>
                    <div class="category">
                        <div class="sold__out">
                            <input type="checkbox" id="mycheckbox">
                            <label for="mycheckbox">
                                매진 숙소 제외
                            </label>
                        </div>
                        <div class="hotel__type">
                            <div>
                                <h2>숙소유형</h2>
                            </div>
                            <ul class="type__choice">
                                <li v-for="(item, index) in type" :key="index">
                                    <input :type="item.type" :name="item.name" :id="item.id" :value="item.value" v-model="checked">
                                    <label :for="item.id">{{item.detail}}</label><br>
                                </li>
                            </ul>
                        </div>
                        <div class="price">
                            <div class="price__title">
                                <h2>가격</h2><span>1박 기준</span>
                            </div>
                            <div class="price__range">
                                <div class="range">
                                    <input type="range">
                                </div>
                                <div class="range__text">
                                    <p>0원 ~ 500,000원 이상</p>
                                </div>
                            </div>
                        </div>
                        <div class="type">
                            <div class="type__title">
                                <h2>#취향</h2>
                            </div>
                            <ul class="type__buttons">
                                <li><button><span>#가족여행숙소</span></button></li>
                                <li><button><span>#스파</span></button></li>
                                <li><button><span>#파티룸</span></button></li>
                                <li><button><span>#OTT</span></button></li>
                                <li><button><span>#연인추천</span></button></li>
                                <li><button><span>#감성숙소</span></button></li>
                                <li><button><span>#뷰맛집</span></button></li>
                                <li><button><span>#연박특가</span></button></li>
                                <li><button><span>#리뷰좋은</span></button></li>
                            </ul>
                        </div>
                        <div class="dc__benefit">
                            <div class="dc__benefit__title">
                                <h2>할인혜택</h2>
                            </div>
                            <ul class="benefit__list">
                                <li><button><span>쿠폰할인</span></button></li>
                                <li><button><span>무한대실</span></button></li>
                                <li><button><span>할인특가</span></button></li>
                            </ul>
                        </div>
                        <div class="grade">
                            <div class="grade__title">
                                <h2>등급</h2>
                            </div>
                            <ul class="grade__list">
                               <li><button><span>성급</span></button></li>
                               <li><button><span>4성급</span></button></li>
                               <li><button><span>블랙</span></button></li>
                               <li><button><span>풀빌라</span></button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="check__result">
                    <div class="result__title">
                        <p>검색 결과</p>
                    </div>
                    <ul class="result__list">
                        <li v-for="(item, index) in hotel" :key="index" @click="popUp(item.detail)">
                            <div class="list__wrap">
                                <div class="img" >
                                    <img :src="item.img" alt="호텔 이미지">
                                </div>
                                <div class="content">
                                    <div class="content__wrap">
                                        <div>
                                            <h2>{{item.name}}</h2>
                                        </div>
                                        <div>
                                            <p>{{item.detail}}</p>
                                        </div>
                                        <div>
                                            <div>
                                                <span><i class="fa-solid fa-star"></i></span>
                                                <span>{{item.star}}</span>
                                            </div>
                                            <span>{{item.evalue}}</span>
                                        </div>
                                    </div>
                                    <div class="price">
                                        <span>{{item.price}}</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <kakao-map :hotel="hotel"></kakao-map>
            </div>
        </div>
    </div>
</template>

<script>
import KakaoMap from "@/components/layout/KakaoMap.vue"
    export default {
        components: {
            KakaoMap
        },
        data(){
            return {
                hotel: [
                    {
                        place: "경주",
                        latlng : new kakao.maps.LatLng(35.852660702386, 129.26462558101807),
                        img : "src/assets/image/kyeongju_hotel2.jpg",
                        name: "펜션",
                        detail: "경주 스테이52펜션",
                        star: 9.0,
                        evalue: "3명 평가",
                        price: "20,000원"
                    },
                    {
                        place: "경주",
                        latlng : new kakao.maps.LatLng(35.849366488213846, 129.20928413117025),
                        img : "src/assets/image/kyeongju_hotel3.jpg",
                        name: "펜션",
                        detail: "경주 캠프파이브펜션",
                        star: 9.3,
                        evalue: "4명 평가",
                        price: "32,000원"
                    },
                    {
                        place: "경주",
                        latlng : new kakao.maps.LatLng( 35.840416955528845, 129.1941629954858),
                        img : "src/assets/image/kyeongju_hotel4.jpg",
                        name: "펜션",
                        detail: "경주 아미고펜션",
                        star: 6.8,
                        evalue: "3명 평가",
                        price: "20,000원"
                    },
                    {
                        place: "경주",
                        latlng : new kakao.maps.LatLng(35.82999280185802, 129.21228742005593),
                        img : "src/assets/image/kyeongju_hotel5.jpg",
                        name: "펜션",
                        detail: "경주풀빌라몽펜션",
                        star: 10,
                        evalue: "8명 평가",
                        price: "32,000원"
                    },
                    {
                        place: "제주도",
                        latlng : new kakao.maps.LatLng(33.51288883596877, 126.51116796662126),
                        img : "src/assets/image/jejuhotel1.jpg",
                        name: "홈&빌라",
                        detail: "제주 감성 독채숙소 | 로즈스마일",
                        star: 10,
                        evalue: "16명 평가",
                        price: "50,000원"
                    },
                    {
                        place: "제주도",
                        latlng : new kakao.maps.LatLng(33.51501914189579, 126.54008791142921),
                        img : "src/assets/image/jejuhotel2.jpg",
                        name: "블랙 5성급 호텔",
                        detail: "제주신라호텔",
                        star: 9.8,
                        evalue: "527명 평가",
                        price: "60,200원"
                    },
                    {
                        place: "제주도",
                        latlng : new kakao.maps.LatLng(33.52353523958364, 126.5822394487982),
                        img : "src/assets/image/jejuhotel3.jpg",
                        name: "펜션",
                        detail: "델마펜션",
                        star: 9.1,
                        evalue: "11명 평가",
                        price: "80,000원"
                    },
                    {
                        place: "제주도",
                        latlng : new kakao.maps.LatLng(33.449878386341354, 126.33186625717602),
                        img : "src/assets/image/jejuhotel4.jpg",
                        name: "리조트·호텔",
                        detail: "제주 아이브호텔앤리조트",
                        star: 8.9,
                        evalue: "1298명 평가",
                        price: "50,000원"
                    },
                    {
                        place: "제주도",
                        latlng : new kakao.maps.LatLng(33.50226385179748, 126.52396965010304),
                        img : "src/assets/image/jejuhotel5.jpg",
                        name: "펜션",
                        detail: "제주 뜨리바다",
                        star: 8.4,
                        evalue: "19명 평가",
                        price: "80,000원"
                    },
                    {
                        place: "강릉",
                        latlng : new kakao.maps.LatLng( 37.7703974590365, 128.9272206185327),
                        img : "src/assets/image/gangleung_hotel1.jpg",
                        name: "펜션",
                        detail: "강릉 민트클라우드펜션",
                        star: 9.9,
                        evalue: "3명 평가",
                        price: "20,000원"
                    },
                    {
                        place: "강릉",
                        latlng : new kakao.maps.LatLng( 37.78165438727344, 128.90862634514806),
                        img : "src/assets/image/gangleung_hotel2.jpg",
                        name: "펜션",
                        detail: "강릉 쇼드펜션",
                        star: 9.2,
                        evalue: "11명 평가",
                        price: "50,000원"
                    },
                    {
                        place: "강릉",
                        latlng : new kakao.maps.LatLng( 37.74094773979276, 128.9649349340847),
                        img : "src/assets/image/gangleung_hotel3.jpg",
                        name: "풀빌라·펜션",
                        detail: "강릉 별달보라풀빌라",
                        star: 9.9,
                        evalue: "3명 평가",
                        price: "70,000원"
                    },
                    {
                        place: "강릉",
                        latlng : new kakao.maps.LatLng( 37.822636207988246, 128.869706858355),
                        img : "src/assets/image/gangleung_hotel4.jpg",
                        name: "리조트·호텔",
                        detail: "메이플비치 리조트",
                        star: 9.1,
                        evalue: "3명 평가",
                        price: "40,000원"
                    },
                    {
                        place: "강릉",
                        latlng : new kakao.maps.LatLng( 37.77473354157259, 128.87285749896225),
                        img : "src/assets/image/gangleung_hotel5.jpg",
                        name: "풀빌라·펜션",
                        detail: "스테이즈므로",
                        star: 8.7,
                        evalue: "1명 평가",
                        price: "17,000원"
                    },
                    {
                        place: "강릉",
                        latlng : new kakao.maps.LatLng( 37.781195523492094, 128.9013504852499),
                        img : "src/assets/image/gangleung_hotel6.jpg",
                        name: "펜션",
                        detail: "강릉 경포씨앤뷰펜션",
                        star: 10,
                        evalue: "3명 평가",
                        price: "38,000원"
                    },
                    {
                        place: "여수",
                        latlng : new kakao.maps.LatLng( 34.75712785699179, 127.678904191402),
                        img : "src/assets/image/yeosu1.jpg",
                        name: "펜션",
                        detail: "여수 케렌시아리조트",
                        star: 9.7,
                        evalue: "5명 평가",
                        price: "110,000원"
                    },
                    {
                        place: "여수",
                        latlng : new kakao.maps.LatLng( 34.73719297841512, 127.63122042645176),
                        img : "src/assets/image/yeosu2.jpg",
                        name: "펜션",
                        detail: "여수 라온피네 스파펜션",
                        star: 10,
                        evalue: "36명 평가",
                        price: "310,000원"
                    },
                    {
                        place: "여수",
                        latlng : new kakao.maps.LatLng( 34.73382464551378, 127.71854531662581),
                        img : "src/assets/image/yeosu3.jpg",
                        name: "풀빌라·펜션",
                        detail: "여수펜션 디 오아시스 풀빌라&자쿠지펜션",
                        star: 9.8,
                        evalue: "84명 평가",
                        price: "120,000원"
                    },
                    {
                        place: "여수",
                        latlng : new kakao.maps.LatLng( 34.75237130078785, 127.59568877173999),
                        img : "src/assets/image/yeosu5.jpg",
                        name: "풀빌라·펜션",
                        detail: "여수 케이브풀빌라",
                        star: 9.7,
                        evalue: "29명 평가",
                        price: "20,000원"
                    },
                    {
                        place: "여수",
                        latlng : new kakao.maps.LatLng( 34.727507874924875, 127.71359940737801),
                        img : "src/assets/image/yeosu7.jpg",
                        name: "특1급 호텔",
                        detail: "여수 라마다 프라자 호텔",
                        star: 9.4,
                        evalue: "2164명 평가",
                        price: "190,000원"
                    },
                    {
                        place: "부산",
                        latlng : new kakao.maps.LatLng( 35.15191455155543, 129.11696575464063),
                        img : "src/assets/image/busan1.jpg",
                        name: "펜션",
                        detail: "부산 라마다 프라자 호텔",
                        star: 9.7,
                        evalue: "12명 평가",
                        price: "190,000원"
                    },
                    {
                        place: "부산",
                        latlng : new kakao.maps.LatLng( 35.11804905525317, 129.0402806130123 ),
                        img : "src/assets/image/busan2.jpg",
                        name: "관공 호텔",
                        detail: "래디언트 남포 호텔",
                        star: 9.9,
                        evalue: "2011명 평가",
                        price: "190,000원"
                    },
                    {
                        place: "부산",
                        latlng : new kakao.maps.LatLng( 35.22028109586672, 129.09906177802665 ),
                        img : "src/assets/image/busan3.jpg",
                        name: "레지던스 호텔",
                        detail: "브라운스위트 부산역",
                        star: 9.8,
                        evalue: "172명 평가",
                        price: "190,000원"
                    },
                    {
                        place: "부산",
                        latlng : new kakao.maps.LatLng( 35.162322938137756, 129.18044244078683 ),
                        img : "src/assets/image/busan4.jpg",
                        name: "레지던스 호텔",
                        detail: "올집 아카이브 4H 레지던스 호텔 부산",
                        star: 8.4,
                        evalue: "150명 평가",
                        price: "190,000원"
                    },
                    {
                        place: "부산",
                        latlng : new kakao.maps.LatLng( 35.161502467940274, 129.14565719460865 ),
                        img : "src/assets/image/busan5.jpg",
                        name: "비즈니스 호텔",
                        detail: "해운대 컨벤션 호텔",
                        star: 9.4,
                        evalue: "12명 평가",
                        price: "190,000원"
                    },
                    {
                        place: "부산",
                        latlng : new kakao.maps.LatLng( 35.124971706205166, 129.07414890343944 ),
                        img : "src/assets/image/busan6.jpg",
                        name: "2성급 호텔",
                        detail: "베스트 루이스 해밀턴 오션테라스",
                        star: 9.4,
                        evalue: "20명 평가",
                        price: "190,000원"
                    },
                    {
                        place: "전주",
                        latlng : new kakao.maps.LatLng( 35.813817888021816, 127.11966783378512 ),
                        img : "src/assets/image/jeonju1.jpg",
                        name: "비즈니스 호텔",
                        detail: "글로스터호텔 전주",
                        star: 9.3,
                        evalue: "60명 평가",
                        price: "190,000원"
                    },
                    {
                        place: "전주",
                        latlng : new kakao.maps.LatLng( 35.820430597543925, 127.13879962949086  ),
                        img : "src/assets/image/jeonju2.jpg",
                        name: "4성급 호텔",
                        detail: "라한호텔 전주",
                        star: 9.4,
                        evalue: "842명 평가",
                        price: "190,000원"
                    },
                    {
                        place: "전주",
                        latlng : new kakao.maps.LatLng( 35.815810751302315, 127.14339473452317 ),
                        img : "src/assets/image/jeonju3.jpg",
                        name: "비즈니스 호텔",
                        detail: "전주 시그니처 호텔&레지던스",
                        star: 9.2,
                        evalue: "295명 평가",
                        price: "190,000원"
                    },
                    {
                        place: "전주",
                        latlng : new kakao.maps.LatLng( 35.81118407183214, 127.15330030888468  ),
                        img : "src/assets/image/jeonju4.jpg",
                        name: "비즈니스 호텔",
                        detail: "전주 루엘호텔 덕진공원 본점",
                        star: 9.9,
                        evalue: "101명 평가",
                        price: "190,000원"
                    },
                    {
                        place: "전주",
                        latlng : new kakao.maps.LatLng( 35.8198670912861, 127.12675903702393 ),
                        img : "src/assets/image/jeonju5.jpg",
                        name: "관광 호텔",
                        detail: "전주 호텔 더 빈센트",
                        star: 9.9,
                        evalue: "116명 평가",
                        price: "190,000원"
                    },
                    {
                        place: "전주",
                        latlng : new kakao.maps.LatLng( 35.81323894815091, 127.12179142618248 ),
                        img : "src/assets/image/jeonju6.jpg",
                        name: "게스트하우스",
                        detail: "전주 한옥마을 한옥고택 고을",
                        star: 10,
                        evalue: "109명 평가",
                        price: "190,000원"
                    },
                    {
                        place: "춘천",
                        latlng : new kakao.maps.LatLng( 37.864446523352015, 127.74667159640808),
                        img : "src/assets/image/chuncheon_hotel1.jpg",
                        name: "풀빌라·펜션",
                        detail: "로로키즈풀빌라리조트",
                        star: 10,
                        evalue: "9명 평가",
                        price: "190,000원"
                    },
                    {
                        place: "춘천",
                        latlng : new kakao.maps.LatLng( 37.87264862418218, 127.7489365399074),
                        img : "src/assets/image/chuncheon_hotel2.jpg",
                        name: "풀빌라·펜션",
                        detail: "춘천 삼포길 풀빌라",
                        star: 10,
                        evalue: "4명 평가",
                        price: "190,000원"
                    },
                    {
                        place: "춘천",
                        latlng : new kakao.maps.LatLng( 37.85598358476977, 127.74004119773012),
                        img : "src/assets/image/chuncheon_hotel4.jpg",
                        name: "풀빌라·펜션",
                        detail: "춘천 뭇별키즈풀빌라",
                        star: 10,
                        evalue: "1명 평가",
                        price: "190,000원"
                    },
                    {
                        place: "춘천",
                        latlng : new kakao.maps.LatLng( 37.864446523352015, 127.74667159640808),
                        img : "src/assets/image/chuncheon_hotel3.jpg",
                        name: "펜션",
                        detail: "춘천 아이린하우스펜션",
                        star: 10,
                        evalue: "4명 평가",
                        price: "190,000원"
                    },
                    {
                        place: "춘천",
                        latlng : new kakao.maps.LatLng( 37.85432644752194, 127.72838928842886),
                        img : "src/assets/image/chuncheon_hotel5.jpg",
                        name: "풀빌라·펜션",
                        detail: "춘천 드래곤풀빌라",
                        star: 8.6,
                        evalue: "14명 평가",
                        price: "190,000원"
                    },
                    {
                        place: "춘천",
                        latlng : new kakao.maps.LatLng( 37.879134898078505, 127.74900221664075),
                        img : "src/assets/image/chuncheon_hotel6.jpg",
                        name: "펜션",
                        detail: "춘천 별꽃숲",
                        star: 10,
                        evalue: "1명 평가",
                        price: "190,000원"
                    },
                    {
                        place: "춘천",
                        latlng : new kakao.maps.LatLng( 37.85974562254752, 127.76044213470153),
                        img : "src/assets/image/chuncheon_hotel7.jpg",
                        name: "풀빌라·펜션",
                        detail: "춘천 도토리힐스테이",
                        star: 10,
                        evalue: "9명 평가",
                        price: "190,000원"
                    },

                ],
                type: [
                    {
                        type: "radio", name:"options", id: "option1", value:"option1", 
                        detail: "전체"
                    },
                    {
                        type: "radio", name:"options", id: "option2", value:"option2", 
                        detail: "모텔"
                    },
                    {
                        type: "radio", name:"options", id: "option3", value:"option3", 
                        detail: "호텔·리조트"
                    },
                    {
                        type: "radio", name:"options", id: "option4", value:"option4", 
                        detail: "펜션"
                    },
                    {
                        type: "radio", name:"options", id: "option5", value:"option5", 
                        detail: "홈&빌라"
                    },
                    {
                        type: "radio", name:"options", id: "option6", value:"option6", 
                        detail: "캠핑"
                    },
                    {
                        type: "radio", name:"options", id: "option7", value:"option7", 
                        detail: "게하·한옥"
                    },
                ],
                checked: "option1"
            }
        },
        mounted(){
            this.match()
        },
        methods: {
            onOff(){
                this.$emit("onClick")
            },
            match() {
                let items = this.$store.getters.getHistory;
                console.log(items);
                let latestItem = items[items.length - 1];
                let latestPlace = latestItem.place;
                console.log(latestPlace);
                this.hotel = this.hotel.filter(item => item.place === latestPlace);
            },
        },
    }
</script>

<style lang="scss" scoped>
    .result {
        background: rgba(0,0,0, 0.48);
        width: 100vw;
        height: 100%;
        .hotels {
            margin: 40px;
            background: #fff;
            border-radius: 12px;
            height: calc(100% - 80px);
            display: flex;
            flex-direction: column;
            .header {
                position: relative;
                height: 60px;
                .cancel {
                    position: absolute;
                    top: 50%;
                    left: 28px;
                    transform: translate(-50%, -50%);
                    font-size: 18px;
                    color: #333;
                    background: none;
                }
                .title {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-weight: 600;
                    color: #333;
                }
            }
            .body {
                display: flex;
                height: 813px;
                .check {
                    padding: 0 20px;
                    width: 334px;
                    border-right: 1px solid rgba(235,235,235,1);
                    overflow-y: scroll;
                    height: 100%;
                    &::-webkit-scrollbar {
                    width: 16px;
                    }
                    &::-webkit-scrollbar-track {
                    background: transparent;
                    }
                    &::-webkit-scrollbar-thumb {
                    background: rgba(235,235,235,1);
                    border-radius: 5px;
                    border: 2px solid #fff;
                    width: 8px;
                    }
                    .filter {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 16px 0;
                        h2 {
                            font-size: 18px;
                            color: #333333;
                            letter-spacing: 0.1px;
                        }
                        button {
                            background: none;
                            padding: 0 0 0 10px;
                            display: flex;
                            align-items: center;
                            gap: 4px;
                            i {
                                color: rgb(214,214,214);
                            }
                            span{
                                color: #d6d6d6;
                                font-size: 14px;
                                font-weight: 600;
                                letter-spacing: 0.1px;
                            };
                        }
                    }
                    .category {
                        .sold__out {
                            padding: 20px 0;
                            display: flex;
                            border-bottom: 1px solid rgba(235,235,235,1);
                            input {
                                border: 1px solid #000;
                                width: 18px;
                                height: 18px;
                                background: #fff;
                                border-radius: 6px;
                                .checked {
                                    border-radius: 4px;
                                }
                            }
                            label {
                                margin-left: 8px;
                                font-weight: 500;
                                color: #333;
                            }
                        }
                        .hotel__type {
                            display: flex;
                            flex-direction: column;
                            border-bottom: 1px solid rgba(235,235,235,1);
                            padding: 6px 0;
                            h2{
                                padding: 20px 0;
                                font-size: 16px;
                                color: #333333;
                                margin-bottom: 6px;
                                letter-spacing: 0.1px;
                            }
                            .type__choice{
                                padding-bottom: 14px;
                                li{
                                    padding: 14px 0;
                                    display: flex;
                                    input {
                                        width: 18px;
                                    }
                                    label {
                                        margin-left: 8px;
                                        font-size: 15px;
                                        color: #333;
                                        font-weight: 500;
                                    }
                                }
                            }
                        }
                        .price {
                            padding: 6px;
                            display: flex;
                            flex-direction: column;
                            border-bottom: 1px solid rgba(235,235,235,1);
                            .price__title {
                                display: flex;
                                align-items: center;
                                padding: 12px 0;
                                margin-bottom: 6px;
                                h2 {
                                    font-size: 16px;
                                    color: #333;
                                    font-weight: 700;
                                }
                                span {
                                    font-size: 12px;
                                    color: #999999;
                                    font-weight: 600;
                                    margin-left: 6px;
                                }
                            }
                            .price__range{
                                padding: 8px 0 16px;
                                .range {
                                    input{
                                        -webkit-appearance: none;
                                            width: 100%; 
                                            height: 4px; 
                                            background-color: #1273E4; 
                                            border-radius: 5px;

                                        &::-webkit-slider-thumb {
                                            -webkit-appearance: none; 
                                            width: 28px; 
                                            height: 28px;
                                            background: #fff;
                                            border-radius: 50%;
                                            cursor: pointer;
                                            text-shadow: 0px 1px 2px rgba(0,0,0,0.06);
                                            border:1px solid rgba(235,235,235,1)
                                        }
                                    }
                                }
                                .range__text{
                                    margin-top: 8px;
                                    font-size: 13px;
                                    color: #999999;
                                    font-weight: 500;
                                    p {
                                        letter-spacing: 0.2px;
                                    }
                                }
                            }
                            
                        }
                        .type {
                            padding: 6px;
                            border-bottom: 1px solid rgba(235,235,235,1);
                            .type__title{
                                padding: 12px 0;
                                margin: 0 0 6px;
                                h2 {
                                    font-size: 16px;
                                    color: #333;
                                }
                            }
                            .type__buttons{
                                display: flex;
                                flex-wrap: wrap;
                                 margin-bottom: 12px;
                                li {
                                    padding: 0 6px 8px 0;
                                    button{
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        padding: 0 16px;
                                        font-size: 13px;
                                        background: #fff;
                                        border-radius: 100px;
                                        border: 1px solid rgba(235,235,235,1);
                                        height: 32px;
                                        span {
                                            display: flex;
                                            max-width: 100%;
                                            font-weight: 600;
                                            color: #333;
                                        }
                                    }
                                }
                            }
                        }
                        .dc__benefit {
                            padding: 6px;
                            border-bottom: 1px solid rgba(235,235,235,1);
                            .dc__benefit__title{
                                padding: 12px 0;
                                margin: 0 0 6px;
                                h2 {
                                    font-size: 16px;
                                    color: #333;
                                }
                            }
                            .benefit__list{
                                display: flex;
                                margin-bottom: 12px;
                                li {
                                    padding: 0 6px 8px 0;
                                    button{
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        padding: 0 16px;
                                        font-size: 13px;
                                        background: #fff;
                                        border-radius: 100px;
                                        border: 1px solid rgba(235,235,235,1);
                                        height: 32px;
                                        span {
                                            display: flex;
                                            max-width: 100%;
                                            font-weight: 600;
                                            color: #333;
                                        }
                                    }
                                }
                            }
                        }
                        .grade {
                            padding: 6px;
                            border-bottom: 1px solid rgba(235,235,235,1);
                            .grade__title{
                                padding: 12px 0;
                                margin: 0 0 6px;
                                h2 {
                                    font-size: 16px;
                                    color: #333;
                                }
                            }
                            .grade__list{
                                display: flex;
                                margin-bottom: 12px;
                                li {
                                    padding: 0 6px 8px 0;
                                    button{
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        padding: 0 16px;
                                        font-size: 13px;
                                        background: #fff;
                                        border-radius: 100px;
                                        border: 1px solid rgba(235,235,235,1);
                                        height: 32px;
                                        span {
                                            display: flex;
                                            max-width: 100%;
                                            font-weight: 600;
                                            color: #333;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                .check__result {
                    width: 373px;
                    overflow-y: scroll;
                    &::-webkit-scrollbar {
                        width: 16px;
                    }
                    &::-webkit-scrollbar-track {
                        background: transparent;
                    }
                    &::-webkit-scrollbar-thumb {
                        background: rgba(235,235,235,1);
                        border-radius: 5px;
                        border: 2px solid #fff;
                        width: 8px;
                    }
                    .result__title{
                        margin: 18px 20px 4px;
                        p {
                            color: #707070;
                            font-size: 14px;
                        }
                    }
                    .result__list{
                        li {
                            .list__wrap{
                                display: flex; padding: 16px 0 20px;
                                .img {
                                    margin-left: 20px; width: 115px; height: 172px;
                                    img {
                                        border-radius: 10px; width: 100%; height: 100%;
                                    }
                                }
                                .content {
                                    flex:1;
                                    letter-spacing: 1px;
                                    padding-left: 10px;
                                    margin-right: 20px;
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: space-between;
                                    .content__wrap {
                                        div {
                                            h2{
                                              font-size: 0.75rem; color: rgb(112,112,112); margin-bottom: 2px; letter-spacing: 0.2px;  
                                            }
                                        }
                                        div {
                                            p {
                                                font-size: 16px; font-weight: 700;  margin-bottom: 2px; letter-spacing: 0.2px;
                                            }
                                        }
                                        div {
                                            display: flex;  align-items: center; gap: 2px;
                                            div {
                                                display: flex; align-items: center; background: rgb(255,173,10); border-radius: 4px; padding: 4px 5px 3px 3px;
                                                margin-right: 6px;
                                                span {
                                                    font-size:10px;
                                                    color: #333
                                                }
                                                span {
                                                    font-size:12px; font-weight: 600; letter-spacing: 0.2px;
                                                }
                                            }
                                        }
                                        span {
                                          font-size: 12px; color: rgb(112,112,112); letter-spacing: 0.2px; font-weight: 600;  
                                        }
                                    }
                                    .price{
                                        display: flex;
                                        justify-content: right;
                                        span{
                                            font-size: 18px;
                                            color: #333333;
                                            font-weight: 700;
                                            ;              
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>