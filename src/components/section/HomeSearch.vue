<template>
    <div id="homeSearch">
        <div class="bgmain">
            <img :src="bgchange" alt="" class="bgimage fade-in" :class="{ 'loaded': isImageLoaded }">
            <div class="search_Container row">
                <div class="search__Title">
                    <span :class="{active: !isActive}">국내부터</span> <span :class="{active: isActive}">해외까지</span><br>
                    <span>여행할때 여기어때</span>
                </div>
                <div class="searchbox">
                    <div class="local__Global">
                        <ul>
                            <li :class="{ active: !isActive }" @click="toggleActive">국내 숙소</li>
                            <li :class="{ active: isActive }" @click="toggleActive1">해외 숙소</li>
                        </ul>
                    </div>
                    <div class="hotel__Schedule">
                        <form @submit.prevent>
                        <label for="searchInput">
                            <div class="search__Hotel" :class="{'focus1' : activate}"> 
                                <div class="box__Outline">
                                    <div class="box__Inline">
                                        <div class="box__Icon" :class="{'focused' : activate}">
                                            <i class="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                            <div class="box__Input">
                                                <input type="search" id="searchInput" @focus="active(text)" v-model="newText" @input="change" @keyup.enter.prevent="getPlace" placeholder="여행지나 숙소를 검색해보세요" maxlength="50" autocomplete="off" >
                                            </div>
                                    </div>
                                </div>
                                <div class="search__History" v-if="activate">
                                    <div class="latest">
                                        <div class="latest__Title">
                                            <h2>최근 검색 조건</h2>
                                            <div class="all__Delete" @click="allDelete">전체삭제</div>
                                        </div>
                                        <ul>
                                            <li v-for="(item,id) in history" :key="id" @click="fill__search(item.place)">
                                                <div class="history__Icon">
                                                    <i class="fa-regular fa-clock"></i>
                                                </div>
                                                <div class="history__Info">
                                                    <div class="info__Place">
                                                        {{item.place}}
                                                    </div>
                                                    <div class="Date__Person">
                                                        <div class="info__Date">
                                                             {{item.start}} - {{item.end}} ({{item.night}}박)
                                                        </div>
                                                        <div class="info__Person">
                                                            인원 {{item.person}}명
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="history__Delete">
                                                    <button @click="delete__History(item.id)"><i class="fa-solid fa-x"></i></button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="rank">
                                        <h2>여기어때 검색순위</h2>
                                        <ul>
                                            <li v-for="(item, index) in rank" :key="index" @click="inputtext(item.place, item.image)">
                                                <span class="ranking">{{index +1 }}</span>
                                                <span class="ranking__contents">{{item.place}}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </label>
                            <div class="search__Date" :class="{'focus2' : calendar}" @click="openCalendar" ref="search__date">
                                <div class="box__Outline">
                                    <div class="box__Inline">
                                        <div class="box__Icon" :class="{'focused': calendar}">
                                            <i class="fa-regular fa-calendar"></i>
                                        </div>
                                        <div class="box__Input">
                                            {{start}} - {{end}} ({{night}}박)
                                        </div>
                                    </div>
                                </div>
                                <v-date-picker v-model="range" is-range :columns="2" v-if="calendar"/>
                            </div>
                            <div class="search__Person" :class="{'focus3' : people}" @click="onPeople">
                                <div class="box__Outline" >
                                    <div class="box__Inline">
                                        <div class="box__Icon" :class="{'focused': people}">
                                            <i class="fa-solid fa-user"></i>
                                        </div>
                                        <div class="box__Input">
                                            인원 {{person}}
                                        </div>
                                    </div>
                                </div>
                                <div class="select__Person" v-if="people">
                                    <div class="select__Container">
                                        <div class="person__Info">
                                            <h2>인원</h2>
                                            <p>유아 및 아동도 인원수에<br>
                                                포함해주세요.</p>
                                        </div>
                                        <div class="person__Selector">
                                            <div class="selector__Buttons">
                                                <div class="reduce">
                                                    <button @click="minus">
                                                        <i class="fa-solid fa-minus"></i>
                                                    </button>
                                                </div>
                                                <div class="person__Num">
                                                    <span>{{person}}</span>
                                                </div>
                                                <div class="increase">
                                                    <button @click="plus">
                                                        <i class="fa-solid fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="search__Button">
                                <button @click="addHistory">
                                    <span>검색</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: 0,
                newText: "",
                history : [],
                rank: [
                    {place:"경주",image:"src/assets/image/kyeongju.jpg"},
                    {place:"제주도",image:"src/assets/image/jejudo.jpg"},
                    {place:"강릉", image:"src/assets/image/gangleung.jpg"},
                    {place:"여수", image:"src/assets/image/yeosu.jpg"},
                    {place:"부산",image:"src/assets/image/busan.jpg"},
                    {place:"속초",image:"src/assets/image/sokcho.jpg"},
                    {place:"전주",image:"src/assets/image/jeonju.jpg"},
                    {place:"서울",image:"src/assets/image/seoul.jpg"},
                    {place:"포항", image:"src/assets/image/pohang.jpg"},
                    {place:"춘천", image:"src/assets/image/chuncheon.jpg"}
                    ],
                person : 1,
                range: {start: new Date(2024, 3-1, 12),
                        end: new Date(2024, 3-1, 13)
                },
                activate: false,
                calendar: false,
                people: false,
                isActive: false,
                bgchange: "src/assets/image/basic.jpg",
                isImageLoaded: true,
                point: {},
            };
        },
        watch: {
            bgchange: {
            handler() {
                // 이미지가 변경될 때마다 isImageLoaded 상태를 false로 설정하여 fade-in 효과가 다시 시작되도록 함
                this.isImageLoaded = false;
                // 이미지 로딩 완료 후에 isImageLoaded를 true로 설정하여 fade-in 효과가 실행되도록 함
                const image = new Image();
                image.onload = () => {
                this.isImageLoaded = true;
                };
                image.src = this.bgchange;
            },
            immediate: true // 초기 로드 시에도 핸들러 함수 실행
            }
  },
        computed: {
            start() {
                const month = (this.range.start.getMonth() + 1).toString().padStart(2, '0');
                const date = this.range.start.getDate().toString().padStart(2, '0');
                const days = ['일', '월', '화', '수', '목', '금', '토'];
                const dayIndex = this.range.start.getDay();
                 return `${month}.${date}${days[dayIndex]}`;
            },
            end(){
                const month = (this.range.end.getMonth() + 1).toString().padStart(2, '0');
                const date = this.range.end.getDate().toString().padStart(2, '0');
                const days = ['일', '월', '화', '수', '목', '금', '토'];
                const dayIndex = this.range.end.getDay();
                return `${month}.${date} ${days[dayIndex]}`;
            },
             night() {
                const startMillis = this.range.start.getTime();
                const endMillis = this.range.end.getTime();

                // 일 단위로 변환하여 차이를 계산
                const nightCount = (endMillis - startMillis) / (1000 * 60 * 60 * 24);
                return nightCount;
            }
        },
        methods : {
            fill__search(place){
                this.newText = place
            },
            change() {
                for (const rankItem of this.rank) {
                    if (this.newText === rankItem.place) {
                        this.bgchange = rankItem.image;
                        return;
                    }
                }
                this.bgchange = "src/assets/image/basic.jpg"; 
            },
            inputtext(place, image) {
                this.newText = place;
                console.log(place)
                this.isImageLoaded = false; // 이미지 변경 시 로딩 상태를 false로 설정
                setTimeout(() => {
                    this.bgchange = image; // 이미지 변경
                    this.isImageLoaded = true; // 이미지가 로드되면 로딩 상태를 true로 설정하여 fade-in 애니메이션 실행
                }, 150); // 일정 시간 후에 이미지 변경 및 로딩 상태 변경
                console.log(image)
            },
            toggleActive() {
                this.isActive = false
                this.bgchange = "src/assets/image/basic.jpg"; 

            },
            toggleActive1() {
                this.isActive = true
                this.bgchange = "src/assets/image/overseas.jpg"
            },

            getPlace(){
                if (this.newText) {
                    this.$refs.search__date.focus()
                    this.activate = false;
                    this.calendar = true
                    console.log(this.newText)
                }
            },
            addHistory(){
                if(this.newText){
                    if (this.newText === "경주") {
                        this.point = { Lat: 35.8561719, Lng: 129.2247477 };
                    } else if (this.newText === "제주도") {
                        this.point = { Lat: 33.49731250104304, Lng: 126.55008185161479 };
                    } else if (this.newText === "강릉") {
                        this.point = { Lat: 37.75622493412454, Lng: 128.8811046210412 };
                    } else if (this.newText === "여수") {
                        this.point = { Lat: 34.75928850463442, Lng: 127.66633954174331 };
                    } else if (this.newText === "부산") {
                        this.point = { Lat: 35.17542677030653, Lng: 129.07472775728075 };
                    } else if (this.newText === "속초") {
                        this.point = { Lat: 38.187287846384024, Lng: 128.60142530947994 };
                    } else if (this.newText === "전주") {
                        this.point = { Lat: 35.82286862046466, Lng: 127.14995863796463 };
                    } else if (this.newText === "서울") {
                        this.point = { Lat: 37.57511315919323, Lng: 126.97757446327395 };
                    } else if (this.newText === "포항") {
                        this.point = { Lat: 36.01978192952267, Lng: 129.3433986007238 };
                    } else if (this.newText === "춘천") {
                        this.point = { Lat: 37.859792246014656, Lng: 127.74753371661475 };
                    } else {
                        this.point = {}; // 만약 해당하는 텍스트가 없으면 빈 객체를 할당합니다.
                    } 
                    this.history.push({id: this.id, place: this.newText, start:`${this.start}`, end:`${this.end}`, night:`${this.night}`, person: this.person, Lat:this.point.Lat, Lng: this.point.Lng})
                this.id++
                this.activate = false
                this.calendar = false
                this.people = false
                console.log(this.history)
                this.$emit("onResult")
                }
                if (this.newText) {
                // Vuex의 뮤테이션을 호출하여 상태 변경
                this.$store.commit('addHistory', {
                    id: this.$store.state.id,
                    place: this.newText,
                    start: `${this.start}`,
                    end: `${this.end}`,
                    night: `${this.night}`,
                    person: this.person,
                    Lat:this.point.Lat,
                    Lng: this.point.Lng
                });
                // id 증가 뮤테이션 호출
                this.$store.commit('incrementId');
                this.activate = false;
                this.calendar = false;
                this.people = false;
                console.log(this.$store.state.history);
                this.$emit("onResult");
                }
            },
            delete__History(id){
                this.history = this.history.filter((item)=> item.id !== id)
                console.log(this.history)
            },
            minus(){
                if(this.person > 1) {
                    this.person--
                }
            },
            plus(){
                if(this.person < 10) {
                    this.person++
                }
            },
            active(){
                this.activate = true
                this.calendar = false
                this.people = false
            },
            openCalendar(){
                this.calendar = true
                this.activate = false
                this.people = false
            },
            onPeople(){
                this.people = true
                this.activate = false
                this.calendar = false
            },
            allDelete(){
                this.history = []
            }
        }
    }
</script>

<style lang="scss" scoped>
    #homeSearch {
        .bgmain {
            position: relative;
            .bgimage {
                width:1903px;
                height: 600px;
                transition: opacity 0.5s ease;
            }
            position: relative; 
            .search_Container{
                top: 65%;
                left: 50%;
                transform: translate(-50%, -50%);
                position: absolute;
                width: 1200px;
                display: flex;
                justify-content: flex-end;
                flex-direction: column;
                z-index: 11;
                .search__Title {
                    font-size: 32px;
                    color: #fff;
                    font-weight: 700;
                    margin: 0 0 32px;
                    height: 88px;
                    line-height: 2.75rem;
                    span {
                        transition: all 0.5s;
                        &.active {
                            color: #F32F3C;
                            text-decoration: underline;
                        }
                    }
                }
                .searchbox {
                    display: flex;
                    flex-direction: column;
                    background: #fff;
                    border-radius: 16px;
                    padding: 8px 20px 20px;
                    gap: 16px;
                    flex:1;
                    .local__Global {
                        display: flex;
                        height: 52px;
                        border-bottom: 1px solid rgba(245, 245, 245, 1);
                            ul {
                                display: flex;
                                gap:24px;
                                li {
                                    font-size: 16px;
                                    padding: 0 16px;
                                    display: flex;
                                    align-items: center;
                                    font-weight: 600;
                                    color: #707070;
                                    word-spacing: 1px;
                                    border-bottom: 2px solid transparent;
                                    cursor: pointer;
                                    &.active {
                                        color:#F32F3C;
                                        font-weight: 700;
                                        border-bottom-color: #F32F3C;
                                        transition: border-color 0.3s ease;
                                    }
                                }
                            }
                    }
                    .hotel__Schedule {
                        flex: 1;
                        form {
                            display: flex;
                            gap: 8px;
                            .search__Hotel{
                                flex: 40%;
                                position: relative;
                                background: #f5f5f5;
                                border-radius: 8px;
                                border: 1px solid #f5f5f5;
                                &:hover {
                                    background: #ebebeb;
                                }
                                &.focus1 {
                                        background-color: #fff;
                                        border: 1px solid #000;
                                }
                                .box__Outline {
                                    width: 100%;
                                    .box__Inline{
                                        width: 420px;
                                        display: flex;
                                        align-items: center;
                                        height: 48px;
                                        padding: 2.5px 12.5px;
                                        .box__Icon {
                                            flex: 1 10%;
                                            color: rgb(153,153,153);
                                            display: flex;
                                            justify-content: center;
                                            &.focused {
                                                color: #000;
                                            }
                                        }
                                        .box__Input{
                                            input {
                                                width: 365px;
                                                height: 48px;
                                                background: inherit;
                                                outline: none;
                                                border: none;
                                                font-size: 16px;
                                                font-weight: 600;
                                            }  
                                            input::placeholder {
                                                font-weight: 500;
                                                color: rgb(133,133,133);
                                                font-size: 16px;
                                            }
                                        }
                                    }
                                }
                                .search__History {
                                    position: absolute;
                                    top: 110%;
                                    background: #fff;
                                    border-radius: 16px;
                                    box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
                                    padding: 12px 12px 12px 20px;
                                    display: flex;
                                    flex-direction: column;
                                    overflow-y: scroll;
                                    height: 400px;
                                    &::-webkit-scrollbar {
                                        width: 8px; 
                                    }
                                    &::-webkit-scrollbar-track {
                                        background: #fff;
                                        width: 16px;
                                    }
                                    &::-webkit-scrollbar-thumb {
                                        background: rgba(235, 235, 235, 1);
                                        border-radius: 6px; 
                                    }
                                    .latest {
                                        display: flex;
                                        flex-direction: column;
                                        width: 360px;
                                        .latest__Title {
                                            display: flex;
                                            justify-content: space-between;
                                            padding: 12px;
                                            align-items: center;
                                            h2 {
                                                font-style: none;
                                                font-size: 16px;
                                                color: #333;
                                                letter-spacing: 0.2px;
                                            }
                                            .all__Delete {
                                                font-size :13px;
                                                color: #999999;
                                                cursor: pointer;
                                                &:hover {
                                                    color: #c2c2c2;
                                                    text-decoration: underline;
                                                }
                                            }
                                        }
                                        ul {
                                            li {
                                                display: flex;
                                                gap:12px;
                                                padding: 12px;
                                                justify-content: space-between;
                                                align-items: center;
                                                height: 66px;
                                                cursor: pointer;
                                                &:hover {
                                                    background: #fafafa;
                                                }
                                                .history__Icon {
                                                    color: #999999;
                                                    width: 24px;
                                                    height: 24px;
                                                    i {
                                                        padding: 2px;
                                                        font-size: 13px;
                                                    }
                                                }
                                                .history__Info {
                                                    flex: 264px;
                                                    display: flex;
                                                    flex-direction: column;
                                                    gap: 2px;
                                                    .info__Place{
                                                        font-size: 16px;
                                                        font-weight: 600;
                                                        color: #333;
                                                        }
                                                    .Date__Person{
                                                        display: flex;
                                                        font-size: 12px;
                                                        .info__Date {
                                                            letter-spacing: 0.1px;
                                                            color: #999999;
                                                        }
                                                        .info__Person {
                                                            padding-left: 5px;
                                                            letter-spacing: 0.1px;
                                                            color: #999999;
                                                        }
                                                    }
                                                }
                                                .history__Delete {
                                                    button {
                                                        background:inherit;
                                                        color: #999999;
                                                        width: 24px;
                                                        height: 24px;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    
                                    .rank {
                                        display: flex;
                                        flex-direction: column;                
                                        h2 {
                                            font-size: 16px;
                                            margin: 16px 0 0;
                                            padding: 12px;
                                        }
                                        ul {
                                            li {
                                                padding: 12px;
                                                display: flex;
                                                gap: 10px;
                                                font-size: 16px;
                                                cursor: pointer;
                                                .ranking {
                                                    font-weight: 600;
                                                    width: 24px;
                                                }
                                            &:hover {
                                                background: #fafafa;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            .search__Date {
                                flex: 30%;
                                background: #f5f5f5;
                                border-radius: 8px;
                                position: relative;
                                border: 1px solid #f5f5f5;
                                cursor: pointer;
                                &:hover {
                                    background: #ebebeb;
                                }
                                &.focus2 {
                                        background-color: #fff;
                                        border: 1px solid #000;
                                }
                                .box__Outline {
                                    .box__Inline{
                                        display: flex;
                                        align-items: center;
                                        height: 48px;
                                        padding: 12px 20px 12px 14px;
                                        .box__Input {
                                            font-weight: 600;
                                            margin-left: 8px;
                                            letter-spacing: 0.2px;
                                            color: #333;
                                        }
                                        .box__Icon {
                                            color: rgb(153,153,153);
                                            &.focused {
                                                color: #000;
                                            }
                                        }
                                    }
                                }
                                .vc-container{
                                    position: absolute;
                                    top: 110%;
                                    width: 650px;
                                }
                            }
                            .search__Person {
                                flex: 30%;
                                position: relative;
                                background: #f5f5f5;
                                border-radius: 8px;
                                border: 1px solid #f5f5f5;
                                cursor: pointer;
                                &:hover {
                                    background: #ebebeb;
                                }
                                &.focus3 {
                                        background-color: #fff;
                                        border: 1px solid #000;
                                }
                                .box__Outline {
                                    .box__Inline{
                                        align-items: center;
                                        height: 48px;
                                        padding: 2.5px 12.5px;
                                        display: flex;
                                        gap: 8px;
                                        .box__Input {
                                            letter-spacing: 0.2px;
                                            color: #333;
                                            font-weight: 600;
                                    }
                                        .box__Icon {
                                            color: rgb(153,153,153);
                                            &.focused {
                                                color: #000;
                                            }
                                        }                
                                    }
                                }
                                .select__Person{
                                    position: absolute;
                                    top: 115%;
                                    background: #fff;
                                    border-radius: 16px;
                                    box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.1);
                                    padding: 12px 24px;
                                    width: 340px;
                                    .select__Container {
                                        display: flex;
                                        gap: 16px;
                                        padding: 12px 0;
                                        .person__Info {
                                            flex: 1;
                                            display: flex;
                                            flex-direction: column;
                                            gap: 4px;
                                            h2{
                                                font-size: 16px;
                                                font-style: none;
                                                color: #333;
                                                font-weight: 600;
                                            }
                                            p {
                                                font-size: 0.75rem;
                                                color: #999999;
                                                word-spacing: 2px;
                                                line-height: 1rem;
                                            }
                                        }
                                        .person__Selector {
                                            flex: 1;
                                            display: flex;
                                            align-items: center;
                                            .selector__Buttons {
                                                display: flex;
                                                .reduce{
                                                    flex:1;
                                                    button {
                                                        width: 40px;
                                                        height: 40px;
                                                        border-radius: 50%;
                                                        background: #fff;
                                                        border: 1px solid rgba(235, 235, 235, 1);
                                                        align-items: center;
                                                        justify-content: center;
                                                        i {
                                                            background: #fff;
                                                            font-size: 16px;
                                                            color: rgb(51,51,51)
                                                        }
                                                    }
                                                }
                                                .person__Num {
                                                    display: flex;
                                                    align-items: center;
                                                    justify-content: center;
                                                    flex:1;
                                                    width: 40px;
                                                    height: 40px;
                                                    font-size: 20px;
                                                    color: #333;
                                                    font-weight: 600;
                                                }
                                                .increase {
                                                    flex:1;
                                                    button {
                                                        width: 40px;
                                                        height: 40px;
                                                        border-radius: 50%;
                                                        background: #fff;
                                                        border: 1px solid rgba(235, 235, 235, 1);
                                                        align-items: center;
                                                        justify-content: center;
                                                        i {
                                                            background: #fff;
                                                            font-size: 16px;
                                                            color: rgb(51,51,51)
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            .search__Button {
                                display: flex;
                                flex: 1 12%;
                                background: #F32F3C;
                                border-radius: 8px;
                                &:hover {
                                    background: #9b0e17;
                                }
                                button {
                                    flex: 1 99%;
                                    background: inherit;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    border-radius: 8px;
                                    span {
                                        font-size: 16px;
                                        color: #fff;
                                        font-weight: 700;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
.fade-in {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.fade-in.loaded {
  opacity: 1;
}
</style>