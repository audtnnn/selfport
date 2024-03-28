<template>
    <div class="customer__top">
        <div class="customer__title">
            <h2>고객센터</h2>
            <p>어려움이나 궁금한 점이 있으신가요?</p>
        </div>
        <div class="customer__box">
            <div class="customer__info">
                <button>
                    <i class="fa-solid fa-phone"></i>
                    <span>1670-6250</span>
                </button>
                <div class="info">
                    <p>예약&#183취소문의</p>
                    <p>오전 9시 ~ 새벽 3시</p>
                </div>
            </div>
            <button class="kakao">
                <i class="fa-solid fa-comment"></i>
                <span>카카오 문의</span>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .customer__top {
        display: flex;
        flex-direction: column;
        .customer__title {
            padding: 16px 0 20px;
            h2 {
                margin: 2px 0;
                font-style: none;
                font-size: 24px;
                color: #333;
                letter-spacing: 0.3px;
            }
            p{
                margin: 4px 0 0;
                font-size: 16px;
                color: #999999;
                letter-spacing: 0.3px;
            }
        }
        .customer__box{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 32px 24px;
            background: #f5f7fa;
            border-radius: 10px;
            .customer__info {
                display: flex;
                flex-direction: column;
                button {
                    display: flex;
                    margin-bottom: 8px;
                    align-items: center;
                    background: none;
                    i {
                        font-size: 15px;
                        margin-right: 8px;
                        color: rgb(194, 194, 194);
                    }
                    span {
                        font-size: 20px;
                        color: #333;
                        font-weight: 600;
                        letter-spacing: 0.3px;
                    }
                }
                .info {
                    font-size: 13px;
                    color:#999999;
                    line-height: 1.25rem;
                    letter-spacing: 0.3px;
                }
            }
            .kakao {
                height: 48px;
                width: 148px;
                padding: 10px 18px 10px 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 2px solid rgba(235,235,235, 1);
                background: #fff;
                border-radius: 10px;
                i {
                    font-size: 15px;
                    color: rgb(194,194,194);
                    flex: 1;
                }
                span {
                    font-size: 16px;
                    font-weight: 600;
                    flex: 1 70%;
                    letter-spacing: 0.2px;
                }
            }
        }
    }
</style>