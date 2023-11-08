<template lang="">
    <div id="app" class="subPage" :class="classType[type]">
        <img src="../assets/images/subPage_backg.png" alt="" class="backgImg">
        <div class="conBox">

            <!-- CLOTHING 衣 -->
            <div class="content">

                <div class="title font-avenir-lt animate__animated animate__fadeInDown" :class="isChinese ? 'hover': ''" v-html="isChinese ? arr[type].title.china : arr[type].title.eng"></div>
                <div class="caseBox hover">
                    <div class="case cursorPointer animate__animated" v-for="(item, index) in arr[type].textArr" :key="index" :class="getAnimationClass(index)" @click="router.push({ path: '/subPageTwo', query: { type: type, typeTwo: index }})">
                        <div class="caseCon">
                            <p class="textTwo font-avenir">{{isChinese ? item.china : item.eng}}</p>
                        </div>
                    </div>
                </div>

            </div>
            
            <div class="btnBox">
                <el-button :class="isChinese?'hover':''" @click="isChinese=true">中</el-button>
                <el-button :class="isChinese?'':'hover'" @click="isChinese=false">ENG</el-button>
            </div>
            <div class="btnBoxTwo">
                <img class="cursorPointer" src="../assets/images/icon_button_home.png" alt="" @click="router.push('/Home')"> 
                <img class="cursorPointer" src="../assets/images/icon_button_return.png" alt="" @click="returnPage">
            </div>
        </div>
        <div class="qrCodeBox" v-if="type==1" :class="isChinese ? 'hover' : ''">
            <div class="leftText font-Acumin-Variable-Concept" v-if="isChinese">
                <p>有興趣成爲導師嗎？</p>
            </div>
            <div class="leftText font-Acumin-Variable-Concept" v-else>
                <p>Interested in </p>
                <p>Becoming a Mentor?</p>
            </div>
            <img src="../assets/images/Mentorship_QR_Eng.png" alt="" class="qrCode">
        </div>
    </div>
</template>
<script setup>
    const route = useRoute()//路由
    const router = useRouter()//路由
    import { storeToRefs } from 'pinia'
    import { useStore } from '~/store/counter'
    const store = useStore()
    let { isChinese } = storeToRefs(store)

    const type = route.query.type//获取路由参数
    const isNewPage = ref(true)//是否是新页面

    const classType = ['CLOTHING','FOOD','HOUSING','TRANSPORTATION']//类名

    const arr = ref([
        {
            "title": {"eng": "STARTUPS<br>INVOLVEMENT", "china": "投入創科生態園"},
            "textArr": [
                {"eng": "Glimpse of the Experience", "china": "體驗分享"},
                {"eng": "Success Stories", "china": "成功案例"},
            ]
        },
        {
            "title": {"eng": "MENTORSHIP", "china": "導師計劃"},
            "textArr": [
                {"eng": "What is Mentorship Programme?", "china": "導師計劃是什麼？"},
                {"eng": "What will you Gain?", "china": "你可以從中獲得什麼？"},
                {"eng": "Glimpse of the Experience", "china": "經驗分享"},
            ]
        },
        {
            "title": {"eng": "ALUMNI", "china": "香港科學園創科會"},
            "textArr": [
                {"eng": "What is HKSTP Startups Alumni Association?", "china": "什麼是香港科學園創科會？"},
                {"eng": "What will you Gain?", "china": "你可以從中獲得什麼？"},
                {"eng": "Glimpse of the Experience", "china": "經驗分享"},
            ]
        },
    ])

    const getAnimationClass = (index) => {
        const animations = ['animate__fadeInLeft', 'animate__fadeInRight', 'animate__fadeInLeft', 'animate__fadeInRight']
        const delay = index * 0.3 // 为每个按钮添加延迟，可以根据需要调整这个值
        return `${animations[index % animations.length]} animate__delay-${delay}s`
    }

    const returnPage = () => {
        //返回上一頁
        router.back()
    }
</script>
<style lang="less">
@import '~/assets/css/subPage.less';
</style>