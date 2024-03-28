<template>
    <header id="header" class="row">
        <h1>
            <router-link to="/"><img src="../../assets/image/logo_px.png" alt=""></router-link>
        </h1>
        <nav class="header__nav">
            <div class="event">
                <router-link to="/event">이벤트</router-link>
            </div>
            <div class="customer">
                <router-link to="/customer">고객센터</router-link>
            </div>
            <div @click="menuOnOff" class="menu">
                <div class="bar">
                    <i class="fa-solid fa-bars"></i>
                </div>
                <div class="profile">
                    <i class="fa-solid fa-user"></i>
                </div>
                <ul v-show="menuOpen" class="menu__contents">
                    <li>
                        <router-link to="/practice">
                            로그인/회원가입
                        </router-link>
                    </li>
                    <li>
                        <a href="#">
                        비회원 예약조회
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return {
                menuOpen : false
            }
        },
        methods: {
            menuOnOff(){
                this.menuOpen = !this.menuOpen;
            }
        }
    }
</script>

<style lang="scss" scoped>
    #header {
        height: 75px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h1 {
            width: 110px;
            a {
                display: flex;
                align-items: center;
            }
        }
        .header__nav {
            width: 252.8px;
            height: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: center;
            gap: 16px;
            .event{
                flex:1;
            }
            .customer{
                flex:1;
            }
            .menu {
                position: relative;
                width: 76px;
                height: 40px;
                display: flex;
                align-items: center;
                gap: 6px;
                border-radius: 9999px;
                border: 1px solid rgba(235, 235, 235, 1);
                padding: 0 13px;
                cursor: pointer;
                .bar{
                    flex: 1;
                }
                .profile{
                    flex:1;
                    i { 
                        display: flex;
                        justify-content:center;
                        align-items: center;
                        color: #fff;
                        background: rgb(214,214,214);
                        width: 24px;
                        height: 24px;
                        border-radius: 50%;
                        font-size: 12px;
                    }
                }
                .menu__contents {
                    width: 168px;
                    height: 88px;
                    display: block;
                    position: absolute;
                    top: 130%;
                    left: 0;
                    background: #fff;
                    border-radius: 8px;
                    box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.08);
                    padding: 8px 0;
                    text-align: start;
                    z-index: 99999;
                    li {
                        a{
                            display: block;
                        }
                        font-size: 14px;
                        padding: 8px 16px;
                        color: #333;
                        &:hover {
                            background: rgba(235, 235, 235, 1)
                        }
                    }
            }
        }
        }
    }
</style>