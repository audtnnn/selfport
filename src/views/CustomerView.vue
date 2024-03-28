<template>
    <div class="Customer__View">
        <customer />
        <customer-category  @onSearch="onSearch"/>
        <customer-section :keyword="customerTag" />
    </div>
</template>

<script>
    import Customer from "@/components/customer/Customer.vue"
    import CustomerCategory from "@/components/customer/CustomerCategory.vue"
    import CustomerSection from '@/components/customer/CustomerSection.vue'
    export default {
        name: "CustomerView",
        data(){
            return {
                customerTag: "TOP7"
            }
        },
        components: {
            Customer,
            CustomerCategory,
            CustomerSection
        },
        methods : {
            onSearch(name){
                this.customerTag = name
            }
        }
    }
</script>

<style lang="scss" scoped>
    .Customer__View {
        margin: 0 auto;
        padding: 20px 0 96px;
        width: 792px;
    }
</style>