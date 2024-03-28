<template>
    <div class="customer__wrap">
        <ul>
            <li v-for="(item, index) in onSearch" :key="index">
                <div class="Question" @click="open(index)">
                        <div>
                            <span class="Qmark">Q</span>
                            <span>{{item.type}}</span> <span>{{item.detail}}</span>
                        </div>
                        <span class="openIcon"><i class="fa-solid fa-chevron-down"></i></span>
                </div>
                    <div class="show" v-show="item.showDetails">
                        {{item.answer1}}<br>
                        {{item.answer2}}<br>
                        {{item.answer3}}
                    </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                question: [
                    {
                        name: "TOP7",
                        type: "[숙박]",
                        detail: "예약을 취소하고싶어요",
                        answer1: "예약취소는  앱/웹 > 내정보 > 예약/구매내역에서 직접 가능합니다.",
                        answer2: "예약/결제 진행 당시 안내된 취소/환불 규정에 따라 처리되며, 취소수수료가 발생할 경우 취소수수료를 차감한 금액으로 환불 처리됩니다.",
                        answer3: "일부 숙소에 한해 취소가 가능한 시점이나 앱/웹에서 취소가 불가할 수 있으니 이 경우에는 고객행복센터로 요청해 주시길 바랍니다."
                    },
                    {
                        name: "TOP7",
                        type: "[숙박]",
                        detail: "천재지변/감염병으로 인한 예약취소는 어떻게 하나요?",
                        answer1: "천재지변(기상악화), 법정 감염병 등 불가항력적인 사유로 제휴점 이용이 불가할 경우 고객행복센터로 예약내역 및 증빙서류(결항확인서, e-티켓, 진단확인서 등)를 보내주시면 확인 후 예약취소 가능 여부를 확인해 드립니다.",
                        answer2: "다만, 당사는 판매 중개 플랫폼의 입장으로 제휴점에 대하여 취소/환불을 강제할 수 없어 각 제휴점의 규정에 근거하여 상황에 따라 수수료가 발생하거나 취소가 어려울 수 있는 점 양해 부탁드립니다.",
                    },
                    {
                        name: "TOP7",
                        type: "[숙박]",
                        detail: "예약대기 건 예약취소하고 싶어요.",
                        answer1: "예약 대기중에는 여기어때 고객행복센터에 예약취소 요청해주시길 바랍니다.",
                        answer2: "단, 예약확정이 될 경우 수수료가 발생하거나 예약취소가 불가할 수 있습니다."
                    },
                    {
                        name: "TOP7",
                        type: "[숙박]",
                        detail: "체크인날짜/객실타입을 변경하고 싶어요.",
                        answer1: "예약 결제 완료 후 날짜 및 객실타입 등 부분 변경은 불가합니다.",
                        answer2: "예약취소와 동일하게 취소 및 환불 규정에 따라 처리되므로 예약취소가 가능한 기간에는 예약취소 후 재결제 하셔서 이용 부탁드립니다.",
                        answer3: "만약, 예약취소가 불가하거나 수수료가 발생하는 경우라면 고객행복센터로 문의해주시길 바랍니다."
                    },
                    {
                        name: "TOP7",
                        type: "[숙박]",
                        detail: "현금영수증 발급받고 싶어요",
                        answer1: "현금영수증은 현금성 결제수단으로 결제 시 발급이 가능합니다.",
                        answer2: "결제 단계에서 현금영수증을 신청하면 자동으로 발행되지만,",
                        answer3: "신청을 누락했거나 발행받지 못한 경우라면 영수증 확인 후 국세청에서 자진발급분을 등록해 주시길 바랍니다."
                    },
                    {
                        name: "TOP7",
                        type: "[숙박]",
                        detail: "영수증/거래내역서 발급받고 싶어요.",
                        answer1: "예약취소는  앱/웹 > 내정보 > 예약/구매내역에서 직접 가능합니다. 예약/결제 진행 당시 안내된 취소/환불 규정에 따라 처리되며, 취소수수료가 발생할 경우 취소수수료를 차감한 금액으로 환불 처리됩니다. 일부 숙소에 한해 취소가 가능한 시점이나 앱/웹에서 취소가 불가할 수 있으니 이 경우에는 고객행복센터로 요청해 주시길 바랍니다."
                    },
                    {
                        name: "TOP7",
                        type: "[숙박]",
                        detail: "상품을 결제했는데 이용 횟수가 올라가지 않아요.",
                        answer1: "예약취소는  앱/웹 > 내정보 > 예약/구매내역에서 직접 가능합니다. 예약/결제 진행 당시 안내된 취소/환불 규정에 따라 처리되며, 취소수수료가 발생할 경우 취소수수료를 차감한 금액으로 환불 처리됩니다. 일부 숙소에 한해 취소가 가능한 시점이나 앱/웹에서 취소가 불가할 수 있으니 이 경우에는 고객행복센터로 요청해 주시길 바랍니다."
                    },
                    {
                        name: "이용문의",
                        type: "[이용문의]",
                        detail: "엘리트 멤버십은 무료인가요?"
                    },
                    {
                        name: "이용문의",
                        type: "[이용문의]",
                        detail: "회원등급을 어떻게 올리나요?"
                    },
                    {
                        name: "이용문의",
                        type: "[이용문의]",
                        detail: "상품을 결제했는데 이용 횟수가 올라가지 않아요."
                    },
                    {
                        name: "이용문의",
                        type: "[이용문의]",
                        detail: "멤버십 할인되는 숙소가 궁금해요."
                    },
                    {
                        name: "이용문의",
                        type: "[이용문의]",
                        detail: "멤버십 전용 쿠폰이 안 보여요."
                    },
                    {
                        name: "이용문의",
                        type: "[이용문의]",
                        detail: "고객센터 연결 지연 시 어떻게 하나요?"
                    },
                    {
                        name: "이용문의",
                        type: "[이용문의]",
                        detail: "숙소 정보를 공유하는 기능이 있나요?"
                    },
                    {
                        name: "결제/영수증",
                        type: "",
                        detail: "현금영수증 발급받고 싶어요."
                    },
                    {
                        name: "결제/영수증",
                        type: "",
                        detail: "결제 영수증 발급받고 싶어요."
                    },  
                    {
                        name: "결제/영수증",
                        type: "",
                        detail: "계좌 등록 후 은행에서 문자가 왔어요."
                    },  
                    {
                        name: "결제/영수증",
                        type: "",
                        detail: "거래내역서를 발급받고 싶어요."
                    },  
                    {
                        name: "결제/영수증",
                        type: "",
                        detail: "간편계좌이체 등록 해지는 어떻게 하나요?"
                    },  
                    {
                        name: "결제/영수증",
                        type: "",
                        detail: "사용가능한 카드 종류가 없어요."
                    },  
                    {
                        name: "결제/영수증",
                        type: "",
                        detail: "'영수증 확인하기' 누르면 흰색 화면만 보여요."
                    },
                    {
                        name: "결제/영수증",
                        type: "",
                        detail: "간편계좌이체 한도 초과로 결제가 불가해요."
                    },
                    {
                        name: "쿠폰/포인트",
                        type: "[포인트]",
                        detail: "포인트 사용 기간이 궁금해요."
                    },
                    {
                        name: "쿠폰/포인트",
                        type: "[포인트]",
                        detail: "포인트 차감 순서가 궁금해요."
                    },   
                    {
                        name: "쿠폰/포인트",
                        type: "[포인트]",
                        detail: "소멸 예정 포인트는 무엇인가요?"
                    },   
                    {
                        name: "쿠폰/포인트",
                        type: "[포인트]",
                        detail: "소멸 예정인 포인트를 확인할 수 있나요?"
                    },   
                    {
                        name: "쿠폰/포인트",
                        type: "[포인트]",
                        detail: "사용하지 않은 포인트는 자동 소멸 되나요?"
                    },
                    {
                        name: "쿠폰/포인트",
                        type: "[포인트]",
                        detail: "포인트 사용과 관련된 상세 내역을 확인할 수 있나요?"
                    },
                    {
                        name: "국내 숙소",
                        type: "",
                        detail: "취소/환불규정은 어떻게 되나요?"
                    },
                    {
                        name: "국내 숙소",
                        type: "",
                        detail: "예약을 취소하고 싶어요."
                    },
                    {
                        name: "국내 숙소",
                        type: "",
                        detail: "예약확인은 어떻게 하나요?"
                    },
                    {
                        name: "국내 숙소",
                        type: "",
                        detail: "천재지변으로 인한 예약취소는 어떻게 하나요?"
                    },
                    {
                        name: "국내 숙소",
                        type: "",
                        detail: "비회원도 예약 가능한가요?"
                    },
                    {
                        name: "국내 숙소",
                        type: "",
                        detail: "예약대기 건 예약취소하고 싶어요."
                    },
                    {
                        name: "국내 숙소",
                        type: "",
                        detail: "미성년자도 예약이 가능한가요?"
                    },
                    {
                        name: "국내 숙소",
                        type: "",
                        detail: "부대시설, 조식 등 부가요금은 어떻게 지불하나요?"
                    },
                    {
                        name: "해외 숙소",
                        type: "",
                        detail: "예약 확인은 어디서 해야 하나요?"
                    },
                    {
                        name: "해외 숙소",
                        type: "",
                        detail: "해외숙소 할인쿠폰은 어디서 받을 수 있나요?"
                    },
                    {
                        name: "해외 숙소",
                        type: "",
                        detail: "숙소에서 직접 결제할 수 있나요?"
                    },
                    {
                        name: "해외 숙소",
                        type: "",
                        detail: "바우처 확인까지 얼마나 기다려야 하나요?"
                    },
                    {
                        name: "해외 숙소",
                        type: "",
                        detail: "당일 또는 체크인 임박한 예약이 가능한가요?"
                    },
                    {
                        name: "해외 숙소",
                        type: "",
                        detail: "베드 타입을 사전에 확정받을 수 있나요?"
                    },
                    {
                        name: "해외 숙소",
                        type: "",
                        detail: "레이트 체크아웃 및 얼리 체크인 가능한가요?"
                    },
                    {
                        name: "해외 숙소",
                        type: "",
                        detail: "체크인/아웃 시간 확인은 어디서 하나요?"
                    },

                ]
            }
        },
        created() {
            this.question = this.question.map(item => ({ ...item, showDetails: false }));
        },
        props:["keyword"],
        computed: {
            onSearch(){
               return this.question.filter((item)=>item.name.indexOf(this.keyword)>-1)
            }
        },
         methods: {
        open(index) {
            this.$set(this.onSearch[index], "showDetails", !this.onSearch[index].showDetails);
            this.onSearch.forEach((item, idx) => {
        if (idx !== index) {
            this.$set(item, 'showDetails', false);
        }
        });
        }
        }
    }
</script>

<style lang="scss" scoped>
    .customer__wrap {
        ul {
            li {
                .Question {
                    padding: 20px 0;
                    border-bottom: 1px solid rgba(235,235,235,1);
                    display: flex;
                    justify-content: space-between;
                    div {
                        .Qmark {
                        color: #c2c2c2;
                        font-size: 18px;
                        font-weight: 600;
                        padding: 0 6px;
                        margin: 0 8px 0 0;
                    }
                        span {
                            font-size: 16px;
                            color: #333333;
                            font-weight: 600;
                            letter-spacing: 0.2px;
                            word-spacing: -0.8px;
                        }
                    }
                    .openIcon {
                        color: #c2c2c2;
                        font-size: 12px;
                    }
                }
                .show {
                    padding: 20px;
                    background: rgba(245,245,245,1);
                    font-size: 14px;
                    line-height: 2rem;
                    color: #252525;
                }
            }
        }
}

</style>