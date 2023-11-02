<template lang="">
    <div class="IntroductionPage">
        <img class="backgImg" src="../assets/images/backg_img_all.png" alt="">
        <div class="conBox">
            <div class="textBox">
                <div class="title font-avenir-lt animate__animated animate__fadeInDown">{{isChinese ? arr[type].title.china : arr[type].title.eng}}</div>
                <div class="text font-avenir animate__animated animate__fadeInRight" v-for="(item, index) in arr[type].textArr" :key="index">{{isChinese ? item.china : item.eng}}</div>
                <!-- <div class="text animate__animated animate__fadeInRight">This will be one of the most transformative years of your life!</div> -->
            </div>
            <div class="btnBox">
                <el-button :class="isChinese?'hover':''" @click="isChinese=true">中</el-button>
                <el-button :class="isChinese?'':'hover'" @click="isChinese=false">ENG</el-button>
            </div>
            <el-button class="bottomBtn" @click="router.push({ path: '/subPage', query: { type: type }})"><el-icon><ArrowRight /></el-icon></el-button>
        </div>
    </div>
</template>
<script setup>
    const router = useRouter()//路由
    const route = useRoute()//路由
    import { storeToRefs } from 'pinia'
    import { useStore } from '~/store/counter'
    const store = useStore()
    let { isChinese } = storeToRefs(store)

    const type = route.query.type//获取路由参数

    const arr = ref([
        {
            'title': {
                'eng': 'WHAT IS IDEATION PROGRAMME?',
                'china': 'IDEATION計劃是什麼？'
            },
            'textArr': [{
                'eng': 'Designed to help tech-focused entrepreneurs like you turn their brilliant ideas into reality, our one-year startup support programme unleashes your creativity and sets you up with comprehensive support to help your business take off!',
                'china': '時長一年的創業支援計劃能幫助您這樣的創科企業家，讓您盡情發揮創造力，將想法變為現實。全方位支持您，助您創科之路蒸蒸日上。'
            }, {
                'eng': 'This will be one of the most transformative years of your life!',
                'china': '這一年將徹底改變您的人生！'
            }]
        },
        {
            'title': {
                'eng': 'WHAT IS INCUBATION PROGRAMME?',
                'china': '創科培育計劃是什麼？'
            },
            'textArr': [{
                'eng': "Creating world-changing products is challenging, that's why we support you at every step, making your dreams a reality and empowering you to succeed. ",
                'china': '要創造改變世界的產品，路途一定充滿挑戰，這就是為什麼我們在創科的每一步都全力支持您，讓您的夢想成為現實，助力使您成功。'
            }, {
                'eng': 'This comprehensive 3-year programme offers a host of services, including funding and R&D support, mentorship, investor matching, and beyond. ',
                'china': '這個三年計劃提供了全方位服務，包括資金和研發支援、導師指導、投資者配對等等。'
            }]
        },
        {
            'title': {
                'eng': 'WHAT IS ACCELERATION PROGRAMME?',
                'china': '企業加速計劃是什麼？'
            },
            'textArr': [{
                'eng': 'Get ready to spread your wings and experience an accelerated journey towards global expansion with our game-changing Acceleration Programme. Tailored for high-potential startups across all industries, this growth-stage business acceleration programme has proven its worth.',
                'china': '準備好展翅高飛，進入全球市場的加速之旅吧！我們的企業加速計劃為各行業的高潛力初創企業量身定制，價值不言而喻。'
            }, {
                'eng': 'Since its inception in 2018, our programme has empowered startups to raise an impressive HK$2 billion in funding. Witness the success stories of our alumni, who have taken flight and expanded their reach to over 20 economies, including powerhouses like the United States, China, the United Kingdom, Russia, Australia, and Southeast Asia.',
                'china': '自2018年開放申請以來，我們的計劃已經幫助初創企業籌集了超過20億港幣資金。我們見證了計劃下初創公司的成功：業務擴展，並進入全球市場，包括美國、中國、英國、俄羅斯、澳大利亞和東南亞等20多個經濟體。'
            }]
        },
        {
            'title': {
                'eng': 'WHAT IS ELITE PROGRAMME?',
                'china': '精英企業計劃是什麼？'
            },
            'textArr': [{
                'eng': 'The Elite Programme is here to empower you to reach new heights of innovation, expansion, and unparalleled achievements. Your time to shine as the next unicorn is now!',
                'china': '精英企業計劃助您達到新的創科高度，擴展到更廣闊的市場，取得無與倫比的成就。現在正是您成為下一個獨角獸的時刻！'
            }, {
                'eng': 'If your company possesses unique technology that has already demonstrated early success in the business arena, market-proven products, a scalable international business model, and has completed A-round-fundraising, then you are poised to become our next Elite Programme company.',
                'china': '如果您的公司擁有獨特技術，在商業領域已經取得初步成功，擁有經得起市場考驗的產品、可擴展的國際商業模式，並已完成A輪融資，那麼您就有望入選我們的精英企業計劃。'
            }]
        },
    ])
</script>
<style lang="less">
@import '~/assets/css/Introduction.less';
</style>