<template lang="">
    <div class="subPage" :class="classType[type]">
        <img src="../assets/images/subPage_backg.png" a   lt="" class="backgImg">
        <div class="conBox">
            <!-- CLOTHING 衣 -->
            <div class="content">

                <div class="title font-avenir-lt animate__animated animate__fadeInDown" :class="isChinese ? 'hover': ''">{{isChinese ? arr[type].title.china : arr[type].title.eng}}</div>
                <div class="caseBox hover">
                    <div class="case cursorPointer animate__animated" v-for="(item, index) in arr[type].textArr" :key="index" :class="getAnimationClass(index)" @click="isPop=true,indexNum=index">
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
        <div class="qrCodeBox">
            <div class="leftText font-Acumin-Variable-Concept" v-if="isChinese">
                <p>馬上登記</p>
                <p>或了解更多</p>
            </div>
            <div class="leftText font-Acumin-Variable-Concept" v-else>
                <p>To apply now or</p>
                <p>find out more</p>
            </div>
            <img src="../assets/images/Ideation_QR_ENG.png" v-if="type==0" alt="" class="qrCode">
            <img src="../assets/images/incubation_QR_ENG.png" v-if="type==1" alt="" class="qrCode">
            <img src="../assets/images/Acceleration_QR_ENG.png" v-if="type==2" alt="" class="qrCode">
            <img src="../assets/images/elite_QR_ENG.png" v-if="type==3" alt="" class="qrCode">
        </div>
        <div class="layerBox" v-if="isPop">
            <div class="popBox">
                <div class="popConBox">
                    <div class="topBox">
                        <el-button class="bottomBtn" @click="isPop=false"><el-icon><ArrowLeft /></el-icon></el-button>
                    </div>
                    <el-divider />
                    <el-scrollbar height="654">
                        <p class="title font-avenir-lt">{{isChinese ? arr[type].textArr[indexNum].china : arr[type].textArr[indexNum].eng}}</p>
                        <p class="popText font-avenir" v-for="(item, index) in arr[type].textArr[indexNum].popText" :key="index" v-html="isChinese ? item.china : item.eng"></p>
                    </el-scrollbar>
                </div>
            </div>
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

    const returnPage = () => {
        router.back()
    }
    const isPop = ref(false)//是否弹窗
    const indexNum = ref(0)//弹窗索引

    const arr = ref([
        {
            "title": {"eng": "IDEATION", "china": "IDEATION"},
            "textArr": [
                {
                    "eng": "What Will Ideation Programme Give You?",
                    "china": "IDEATION計劃為您提供什麼支援？",
                    "popText": [{"eng": "Experience the power of pre-seed feeding with a generous HK$100,000 financial grant as you immersive yourself in a collaborative startup community with access to experienced mentors, businesses matching, persuasive pitching course and many more. ", "china": "在種子輪融資前，獲取100,000港幣的資助，全心投入創科生態中。同時獲得資深導師的指導、商業配對、創投課程等等。"}]
                },
                {
                    "eng": "Is Ideation Programme Right for You?", 
                    "china": "IDEATION計劃適合你嗎？",
                    "popText": [{"eng": "If you have an innovative idea supported by robust R&D and strategic business planning, the application process is open to all Hong Kong ID holders and companies registered in Hong Kong but less than two years old by the application start date. ", "china": "如果您有創科的想法，並且有科研實力和戰略性的商業計劃，那就來申請吧！申請者需持有香港身份證，而且公司在申請日期當天計在香港註冊不超過兩年。"}, {"eng": "Dare to dream, seize the opportunity, and let your entrepreneurial spirit soar to new heights.", "china": "勇於追夢，抓住機遇，讓您的創科精神飛向新高度。"}]
                },
                {
                    "eng": "How Do You Apply for Ideation Programme?", 
                    "china": "如何申請IDEATION計劃？",
                    "popText": [{"eng": "Ensure you meet all the admission criteria before submitting your application to unlock the path to startup success:", "china": "在提交申請之前，請確保您符合所有錄取標準，為創科成功鋪路："}, {"eng": "1. Submit your proposal for the assessment on Evaluation Criteria, with reference to a template provided on HKSTP website.<br>2. Complete the online application with supporting documents.", "china": "1. 請準備一份商業計劃書，涵蓋審核標準，詳情可參考香港科技園網站的計劃書範本。<br>2. 完成網上申請流程，上載補充文件。"}, {"eng": "Evaluation Criteria:<br>1. Team competency<br>2. Business development potential<br>3. Innovativeness<br>4. Research & Development", "china": "審核標準:<br>1. 團隊的質素和能力<br>2. 商業營運之可行性<br>3. 項目的創新性<br>4. 科技研發內容"}, {"eng": "Application Timeline<br>Ideation Programme is open for application every January, May, and September.", "china": "IDEATION計劃於每年1月、5月、9月接受申請。"}]
                },
                // {
                //     "eng": "Programme Startups Directory", 
                //     "china": "Programme Startups Directory",
                //     "popText": [{"eng": "Company Name", "china": "公司名稱"}, {"eng": "XXXXXXXXXXXXXXXXXXX", "china": "XXXXXXXXXXXXXXXXXXX"}]
                // }
            ]
        },
        {
            "title": {"eng": "INCUBATION", "china": "INCUBATION"},
            "textArr": [
                {
                    "eng": "What Will Incubation Programme Give You?",
                    "china": "創科培育計劃為您提供什麼支援？",
                    "popText": [{"eng": "Discover a world of possibilities with tailored startup journeys accompanied by dedicated account managers. We support startups with seed funding up to HK$1.29 million and offer mentorship, industry expertise, and strategic partnerships.", "china": "專屬培育經理與您一起探索創科之路，創造無限可能。我們提供高達129萬港幣的種子基金、導師指導、行業專業知識培訓和戰略合作夥伴引介，支持初創企業。"}, {"eng": "With our value services platform, we provide training, professional support, and talent assistance, as well as market exposure through trade missions, exhibitions, press releases, and media interviews.", "china": "我們的增值服務平台提供培訓、專業支援、人才協助，以及通過貿易、展覽、新聞和媒體採訪等方式增加您在市場的曝光度。"}]
                },
                {
                    "eng": "Is Incubation Programme Right for You?", 
                    "china": "創科培育計劃適合您嗎？",
                    "popText": [{"eng": "HKSTP Incubation is the perfect launchpad for startups with proven market potential through MVPs or prototypes. If your business boasts a disruptive application, an innovative business model, and a life-changing product or solution, we invite you to apply.", "china": "香港科學園的創科培育計劃完美帶領具有市場潛力（有經市場驗證的最小可行性產品（MVP）或原型）的初創企業啟航。只要您的公司具有顛覆性應用、創新的商業模式和改變生活的產品或解決方案，我們誠邀您加入創科培育計劃。"}]
                },
                {
                    "eng": "How Do You Apply for Incubation Programme?", 
                    "china": "如何申請創科培育計劃？",
                    "popText": [{"eng": "Ensure you meet all the admission criteria before submitting your application to unlock the path to startup success:", "china": "在提交申請之前，請確保您符合所有錄取標準，為創科成功鋪路："}, {"eng": "1. A Hong Kong tech based limited company, established within 5 years of the programme application submission date<br>2. At least 2 full time staff working on site and not less than 50% of the team shall be R&D related<br>3. The founding team holds at least 51% of the company shares collectively<br>4. 3-year R&D and business plan at HKSTP<br>5. The company has a prototype or MVP which is being market validated in principle", "china": "1. 必須為香港註冊五年内的有限公司<br>2. 至少有兩名全職員工，並且至少有一半的全職員工從事科研工作<br>3. 創始團隊持有公司至少51%的股份<br>4. 設立三年內在科學園的研發及商業計劃<br>5. 公司產品處於原型階段，或為經市場驗證的最小可行性產品（MVP）"}]
                },
                // {
                //     "eng": "Programme Startups Directory", 
                //     "china": "Programme Startups Directory",
                //     "popText": [{"eng": "Company Name", "china": "公司名稱"}, {"eng": "XXXXXXXXXXXXXXXXXXX", "china": "XXXXXXXXXXXXXXXXXXX"}]
                // }
            ]
        },
        {
            "title": {"eng": "ACCELERATION", "china": "ACCELERATION"},
            "textArr": [
                {
                    "eng": "What Will Acceleration Programme Give You?",
                    "china": "企業加速計劃為您提供什麼支援？",
                    "popText": [{"eng": "Embarking on a startup journey? Let us be your guiding light, providing comprehensive support to empower, expand, and excel.", "china": "開啟了創科之旅？讓我們成為您的指路明燈，為您提供全方位支持，助您變強，遍佈全球，取得卓越成就。"},{"eng": "Secure up to HK$4.8 million in milestone-based funding tailored to your needs. As well, consult with a domain specialist who can help you navigate the financial landscape and expand your horizons regionally and globally.", "china": "根據您的需求，通過達成目標，獲得高達480萬港幣的資金支持。同時向領域專家取經，助您在財務領域穩步向前，並在區域和全球範圍內拓展您的業務。"},{"eng": "With a network and professional services, the largest startup ecosystem is an excellent foundation for your company to accelerate to the next stage.", "china": "憑藉人脈網絡和專業服務，我們最大的創科生態圈為您的公司加速邁向下一個階段奠定了堅實的基礎。"}]
                },
                {
                    "eng": "Is Acceleration Programme Right for You?", 
                    "china": "企業加速計劃適合您嗎？",
                    "popText": [{"eng": "'If your startup possesses innovative technology, ready-for-market products, and a scalable business model, then the Acceleration Programme is tailor-made for you. Join forces with a passionate team of like-minded individuals who share your drive for success.", "china": "如果您的初創公司擁有創新的技術、準備好進入市場的產品和可擴展的商業模式，那麼企業加速計劃就是為您量身定制的。與一群志同道合且充滿熱情的團隊攜手合作，一同邁向成功。"}]
                },
                {
                    "eng": "How Do You Apply for Acceleration Programme?", 
                    "china": "如何申請企業加速計劃？",
                    "popText": [{"eng": "'Ensure you meet all the admission criteria before submitting your application to unlock the path to startup success:", "china": "在提交申請之前，請確保您符合所有錄取標準，為創科成功鋪路："}, {"eng": "1. Are a growth-stage company looking to scale globally<br>2. Are current incubation company or a tenant of HKSTP<br>*if you are not currently based in HKSTPC premises, shall obtain qualification approval for moving into HKSTP premises within 6 months from the date of admission.<br>3. Have headquarters, executive functions and a corporate CEO based in Hong Kong<br>4. Have less than 100 employees<br>5. Have at least 50% of full-time staff members based in Hong Kong engaging in technology-related work", "china": "1. 申請企業處於成長期，並致力於在全球範圍內拓展規模<br>2. 現為香港科技園創業培育計劃下的培育公司或科學園現有夥伴企業<br>*如果申請人目前並不屬於香港科技園創業培育計劃下的培育公司或科學園現有夥伴企業，成功申請企業加速計劃後，該申請人需要在6個月內 (由批准日期開始計算) 成為科學園夥伴企業及搬進香港科學園。<br>3. 申請企業必須在香港設有總部和具有行政功能的部門。企業行政總裁須長期留駐於香港。<br>4. 員工數目不超過100名<br>5. 最少有一半駐港全職員工從事科研領域的工作"}, {"eng": "Submit your application form with a company deck to acceleration@hkstp.org.", "china": "請填寫申請表格並連同公司概覽電郵至：acceleration@hkstp.org。"}]
                },
                // {
                //     "eng": "Programme Startups Directory", 
                //     "china": "Programme Startups Directory",
                //     "popText": [{"eng": "Company Name", "china": "公司名稱"}, {"eng": "XXXXXXXXXXXXXXXXXXX", "china": "XXXXXXXXXXXXXXXXXXX"}]
                // }
            ]
        },
        {
            "title": {"eng": "ELITE", "china": "ELITE"},
            "textArr": [
                {
                    "eng": "What Will Elite Programme Give You?",
                    "china": "精英企業計劃為您提供什麼支援？",
                    "popText": [{"eng": "Our comprehensive support and funding up to HK$21.5 million will fuel your business's horizons to regional and global markets. With our extensive investor, private and public network, your company's road to IPO or M&A will be much smoother.", "china": "我們的全方位支持和高達2,150萬港幣的資金將拓寬您的業務至區域和全球市場。我們的投資者和獨特的人脈網路將使您的公司上市或併購之路更加順暢。"}]
                },
                {
                    "eng": "Is Elite Programme Right for You?", 
                    "china": "精英企業計劃適合您嗎？",
                    "popText": [{"eng": "We nurture excellent companies with strong growth potentials who target to further groom the business and eventually become a unicorn. You should apply for Elite Programme if your company:", "china": "我們協助具高發展潛力的公司進一步開拓業務，最終成爲獨角獸。精英企業計劃歡迎以下公司："}, {"eng": "1. Targets to expand outside Hong Kong and be the next unicorn;<br>2. Has exponential revenue growth and profitability;<br>3. Has an exciting business development and R&D plan;<br>4. Is a Hong Kong incorporated company is a subsidiary of a company outside Hong Kong established more than 2 years;<br>5. Has no less than 30 employees globally; and<br>6. Will commit to sign a 3-year lease agreement with HKSTP.", "china": "1. 目標擴展至香港以外地區並成為下一個獨角獸；<br>2. 收入顯著增長及具創富能力；<br>3. 擁有可觀業務發展及研發計劃；<br>4. 在香港註冊公司最少兩年；<br>5. 在全球擁有不少於30名員工；<br>6. 承諾與香港科技園簽訂三年租約。"}]
                },
                {
                    "eng": "How Do You Apply for Elite Programme?", 
                    "china": "如何申請精英企業計劃？",
                    "popText": [{"eng": "Please submit your current company overview presentation to elite@hkstp.org. We will contact you within 30 days.", "china": "請遞交公司概覽至elite@hkstp.org，我們的團隊會於30天內聯絡您。"}, {"eng": "To assess your application, we will look at:", "china": "我們基於以下條件審視您的申請："}, {"eng": "1. Your business development plan;<br>2. Your financial resources and performance;<br>3. Your technology and research and development plan;<br>4. Your management capability and team competencies; and<br>5. Your contribution to the ecosystem.", "china": "1. 商業發展計劃<br>2. 財政來源和業績<br>3. 技術和研發計劃<br>4. 管理能力和團隊資歷<br>5. 對創科生態的貢獻"}]
                },
                // {
                //     "eng": "Programme Startups Directory", 
                //     "china": "Programme Startups Directory",
                //     "popText": [{"eng": "Company Name", "china": "公司名稱"}, {"eng": "XXXXXXXXXXXXXXXXXXX", "china": "XXXXXXXXXXXXXXXXXXX"}]
                // }
            ]
        },
    ])

    const getAnimationClass = (index) => {
        const animations = ['animate__fadeInLeft', 'animate__fadeInRight', 'animate__fadeInLeft', 'animate__fadeInRight']
        const delay = index * 0.3 // 为每个按钮添加延迟，可以根据需要调整这个值
        return `${animations[index % animations.length]} animate__delay-${delay}s`
    }
</script>
<style lang="less">
@import '~/assets/css/subPage.less';
</style>