<template>
    <div class="category">
        <h2>자주 묻는 질문</h2>
        <div>
            <div class="button">
                <button v-for="(item, index) in Qtype" :key="index" @click="onClick(item.name)" :class="{active : activeName==item.name }">
                    {{ item.name }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                activeName : "TOP7",
                Qtype : [
                    { name:"TOP7"},
                    { name:"이용문의"},
                    { name:"결제/영수증"},
                    { name:"쿠폰/포인트"},
                    { name:"국내 숙소"},
                    { name:"해외 숙소"},
                    { name:"공간대여" },
                    { name:"레저티켓"},
                    { name:"실시간렌터카"},
                    { name:"국내 항공" },
                    { name:"해외 항공"},
                    { name:"항공+숙소"}
                ]
            }
        },
        methods: {
            onClick(name){
                this.activeName = name;
                this.$emit("onSearch", name)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .category {
        padding-bottom: 12px;
        h2 {
            padding: 16px 0 16px;
            margin-top: 20px;
            font-size: 18px;
            color: #333;
        }
        div{
            display: flex;
            gap: 6px 8px;
            flex-wrap: wrap;
            .button{
                display: flex;
                button {
                    color: #333;
                    padding: 8px 16px;
                    border-radius: 100px;
                    background: #fff;
                    border: 1px solid rgba(235, 235, 235, 1);
                    font-weight: 600;
                    letter-spacing: 0.2px;
                    font-size: 13px;
                    &.active {
                        color:#fff;
                        background: #1273e4
                    }
                }
            }
        }
    }
</style>