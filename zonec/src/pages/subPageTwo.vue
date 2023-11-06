<template lang="">
    <div id="app" class="subPageTwo" :class="classType[type]">
        <img class="backgImg" src="../assets/images/backg_img_all_two.png" alt="">
        <div class="conBox">
            <div class="leftBox"></div>
            <div class="rightBox"></div>
            <el-scrollbar height="100%">

                <p class="title font-avenir-lt">{{isChinese ? arr[type].cons[typeTwo].title.china : arr[type].cons[typeTwo].title.eng}}</p>
                <div v-for="(item, index) in arr[type].cons[typeTwo].textArr" :key="index">
                    <div class="conTitle font-avenir" v-if="item.textTtile.china"><span class="cursorPointer" @click="item.isShow ? item.isShow=false : item.isShow=true">{{item.isShow ? '-':'+'}}</span>{{isChinese ? item.textTtile.china : item.textTtile.eng}}</div>
                    <div class="content" v-if="item.isShow">
                        <div class="text font-avenir" v-html="isChinese ? item.textCon.china : item.textCon.eng"></div>
                    </div>
                </div>

                <div class="videoBox" v-if="arr[type].cons[typeTwo].isVideo">
                    <video ref="videoRef" controls>
                        <source :src="video" type="video/mp4" />
                        您的浏览器不支持 video 标签。
                    </video>
                </div>
            </el-scrollbar>
            <div class="btnBox">
                <el-button :class="isChinese?'hover':''" @click="isChinese=true">中</el-button>
                <el-button :class="isChinese?'':'hover'" @click="isChinese=false">Eng</el-button>
            </div>
            <div class="btnBoxTwo">
                <img class="cursorPointer" src="../assets/images/icon_button_home.png" alt="" @click="router.push('/Home')"> 
                <img class="cursorPointer" src="../assets/images/icon_button_return.png" alt="" @click="router.back()">
            </div>
            <div class="btnPhoto cursorPointer" @click="isPop=true" v-if="arr[type].cons[typeTwo].isShowPhoto">
                <el-icon><PictureFilled /></el-icon>
                Photo
            </div>

        </div>
        <div class="layerBox" v-if="isPop">
            <div class="popBox">
                <div class="popConBox">
                    <el-carousel>
                        <el-carousel-item v-for="(item, index) in imgs[typeTwo].imgInfo" :key="index">
                            <img :src="item.img" alt="">
                            <div class="bottomPop font-avenir">{{item.text}}</div>
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <el-icon class="cursorPointer" @click="isPop=false"><CloseBold /></el-icon>
            </div>
        </div>
    </div>
</template>
<script setup>
    import InnOcircle from '../assets/images/InnOcircle.jpg'
    import TipsyThursday from '../assets/images/Alumni.jpg'
    import DAO from '../assets/images/DAO.jpeg'
    import Christmasparty from '../assets/images/Christmasparty.jpg'
    import basketballmatch from '../assets/images/basketballmatch.jpg'
    import MatchingDay2022 from '../assets/images/MatchingDay2022.jpg'
    import MatchingDay2022Two from '../assets/images/MatchingDay20222.jpg'
    import SkillsAndThematicSharing from '../assets/images/SkillsandThematicSharing.jpg'
    import IdeationAndIncubationProgrammesGraduationDay from '../assets/images/IdeationandIncubationProgrammesGraduationDay2023.jpg'
    import img1 from '../assets/images/1.png'
    import img2 from '../assets/images/2.png'
    import img3 from '../assets/images/3.png'
    import img4 from '../assets/images/4.png'
    import img5 from '../assets/images/5.png'
    import video from '../assets/images/Archireef_ Hello 2023.mp4'

    const router = useRouter()//路由
    const route = useRoute()//路由
    import { storeToRefs } from 'pinia'
    import { useStore } from '~/store/counter'
    const store = useStore()
    let { isChinese } = storeToRefs(store)

    const classType = ['CLOTHING','FOOD','HOUSING','TRANSPORTATION']//类名

    const type = route.query.type//获取路由参数
    const typeTwo = route.query.typeTwo//获取路由参数

    const isShow = ref(false)//是否显示
    const isShowTwo = ref(false)//是否显示
    const isPop = ref(false)//是否显示彈窗

    const imgs = ref([
        {
            "imgInfo": [
                {img: InnOcircle, text: 'InnOcircle',},
                {img: TipsyThursday, text: 'TipsyThursday',},
                {img: DAO, text: 'DAO',},
                {img: Christmasparty, text: 'Christmas party',},
                {img: basketballmatch, text: 'basketball match',},
            ]
        },
        {
            "imgInfo": [
                {img: MatchingDay2022,text: 'Matching Day 2022',},
                {img: MatchingDay2022Two, text: 'Matching Day 2022',},
                {img: SkillsAndThematicSharing, text: 'Skills and Thematic Sharing',},
            ]
        },
        {
            "imgInfo": [
                {img: IdeationAndIncubationProgrammesGraduationDay, text: 'Ideation & Incubation Programmes Graduation Day 2023',}
            ]
        },
    ])

    const arr = reactive([
        {
            "cons": [
                {
                    "title": {'eng': 'Glimpse of the Experience', 'china': '體驗分享'},
                    "isShowPhoto": true,
                    "textArr": [
                        {
                            "textTtile": {'eng': 'InnOcircle Thematic Dinner', 'china': '創科圓聚主題晚宴'},
                            "textCon": {'eng': 'An exclusive networking dinner for startup founders, alumni and mentors to make new connections and be engaged in conversations on a particular theme.', 'china': '為現屆及畢業初創公司和導師而設的交流晚宴，透過探討特定主題，建立新的聯繫，拓展人脈。'},
                            "isShow": false
                        },
                        {
                            "textTtile": {'eng': 'Tipsy Thursday', 'china': 'Tipsy Thursday'},
                            "textCon": {'eng': 'An afternoon get-together for innovation enthusiasts to meet the latest move-in startups and find new opportunities in our Science Park community in a casual setting.', 'china': '讓創科人聯誼的交流活動，認識最新進駐科學園的初創公司，互相交流，在輕鬆愉快的氣氛中共同創造更多合作機會。'},
                            "isShow": false
                        },
                        {
                            "textTtile": {'eng': 'TimeOut Tuesday', 'china': 'TimeOut Tuesday'},
                            "textCon": {'eng': 'Sharing by industry experts on hot topics that are highly relevant to startup community.', 'china': '行業專家分享與初創企業社群息息相關的熱門話題。'},
                            "isShow": false
                        },
                        {
                            "textTtile": {'eng': 'Meetups @ HK Science Park', 'china': 'Meetups @ HK Science Park'},
                            "textCon": {'eng': "Meetups @ HK Science Park is an online community connecting spirited entrepreneurs, investors, executives, mentors, and other walks of life Hong Kong's largest ecosystem. This is the place where we chat, share stories, create dreams, and venture together into the future.", 'china': 'Meetups @ HK Science Park 網上平台匯聚香港的科技創業者、投資者、行政人員和導師，讓各行各業的大家能在香港最大的初創生態圈中互相交流和分享，共同創造夢想、探索未來。'},
                            "isShow": false
                        }
                    ]
                },
                {
                    "title": {'eng': 'Success Stories', 'china': '成功案例'},
                    "isShowPhoto": false,
                    "isVideo": true,
                    "textArr": [
                        {
                            "textTtile": {'eng': '', 'china': ''},
                            "textCon": {'eng': `<img src="${img1}" alt=""><img src="${img2}" alt=""><img src="${img3}" alt=""><img src="${img4}" alt=""><img src="${img5}" alt="">`, 'china': `<img src="${img1}" alt=""><img src="${img2}" alt=""><img src="${img3}" alt=""><img src="${img4}" alt=""><img src="${img5}" alt="">`},
                            "isShow": true
                        }
                    ]
                }
            ]
        },
        {
            "cons": [
                {
                    "title": {'eng': 'What is Mentorship Programme?', 'china': '導師計劃是什麼？'},
                    "isShowPhoto": false,
                    "textArr": [
                        {
                            "textTtile": {'eng': '', 'china': ''},
                            "textCon": {'eng': "Welcome to a community where mentors are the driving force behind exceptional startup programmes. At HKSTP, we believe that by tapping into the collective wisdom and expertise of our mentors, we can ignite startups' potential and guide them on their path to triumph.", 'china': '歡迎來到我們社群，這裡的導師推動初創企業計劃的成功。在香港科學園，我們相信集中導師們的智慧和專業知識，我們可以激發初創企業的潛力並引導他們邁向成功之路。'},
                            "isShow": true
                        }
                    ]
                },
                {
                    "title": {'eng': 'What Will You Gain?', 'china': '你可以從中獲得什麼？'},
                    "isShowPhoto": false,
                    "textArr": [
                        {
                            "textTtile": {'eng': '', 'china': ''},
                            "textCon": {'eng': "Immerse yourself in our programme, where you'll gain exclusive access to a vast network of industry leaders and seasoned entrepreneurs. Hear captivating experiences and stories that will inspire and fuel your entrepreneurial spirit.", 'china': '沉浸於我們的計劃中，您將能獲得獨家人脈，結識產業領袖和經驗豐富的企業家。聆聽那些引人入勝的經歷和故事，從而激發您的創業精神。'},
                            "isShow": true
                        },
                        {
                            "textTtile": {'eng': '', 'china': ''},
                            "textCon": {'eng': "Join our community of experienced mentors and professionals who will guide you on your path to success. Unlock invaluable skills and knowledge through thematic sharing on Talent & Capital, Reach & Match, and Guide & Promote.", 'china': '加入我們這個由經驗豐富的導師和專業人士組成的社群，他們將引導您邁向成功之路。通過有關人才與資本、規模與匹配、引導與推廣的主題分享，導師將帶給您寶貴的技能和知識。'},
                            "isShow": true
                        },
                        {
                            "textTtile": {'eng': '', 'china': ''},
                            "textCon": {'eng': "Get ready to seize future business opportunities with first-hand advice from the best in the field. Together, let's ignite your innovation journey and unleash your true potential.", 'china': '準備好傾聽業界能手的第一手建議，獲得未來商機。讓我們一起點燃您的創科之旅，釋放您的無窮潛力。'},
                            "isShow": true
                        }
                    ]
                },
                {
                    "title": {'eng': 'Glimpse of the Experience', 'china': '經驗分享'},
                    "isShowPhoto": true,
                    "textArr": [
                        {
                            "textTtile": {'eng': 'Matching Day', 'china': '配對日'},
                            "textCon": {'eng': "An event for HKSTP Mentors and startups to reach further success together.", 'china': '為導師及香港科技園公司培育計劃下的初創公司所舉辦的活動，透過活動使各持份者共同取得進一步的成功。'},
                            "isShow": false
                        },
                        {
                            "textTtile": {'eng': 'Skills and Thematic Sharing', 'china': '技巧及專題分享'},
                            "textCon": {'eng': "Discussion topics including go-to-market, governance, people management, and product management.", 'china': '分享主題涵蓋進入市場策略、公司管治、人才管理及產品管理等。'},
                            "isShow": false
                        }
                    ]
                }
            ]
        },
        {
            "cons": [
                {
                    "title": {'eng': 'What is HKSTP Startups Alumni Association?', 'china': '什麼是香港科學園創科會？'},
                    "isShowPhoto": true,
                    "textArr": [
                        {
                            "textTtile": {'eng': '', 'china': ''},
                            "textCon": {'eng': "HKSTP Startups Alumni Association offers a platform to join reunions, enjoy extended value services, and contribute to the thriving startup ecosystem. ", 'china': '香港科學園創科會提供了一個平台，從科學園計劃畢業的初創公司能夠參加聚會，享受延伸價值服務，並為蓬勃發展的科創生態系統作出貢獻。'},
                            "isShow": true
                        },{
                            "textTtile": {'eng': '', 'china': ''},
                            "textCon": {'eng': "It's a place where you can unleash the power of connections, foster collaboration, grow, and discover endless possibilities.", 'china': '在這裡，您可以發揮人脈的力量，共同合作成長，探索無限可能。'},
                            "isShow": true
                        },{
                            "textTtile": {'eng': '', 'china': ''},
                            "textCon": {'eng': "You'll rejuvenate your entrepreneurial spirit, meet fellow graduates, and thrive in an ecosystem that nurtures success as we work together.", 'china': '您將再次激起創業精神，結識其他畢業公司，並在一個合作共贏的創科生態中茁壯成長。'},
                            "isShow": true
                        }
                    ]
                },
                {
                    "title": {'eng': 'What Will You Gain?', 'china': '你可以從中獲得什麼？'},
                    "isShowPhoto": true,
                    "textArr": [
                        {
                            "textTtile": {'eng': 'Business Opportunities', 'china': '商業機會'},
                            "textCon": {'eng': "Embark on a transformative journey of innovation as we bring you the Industry Connect Service - forging powerful collaborations, unlocking global opportunities for your groundbreaking solutions.", 'china': '踏上創新的轉型之旅，我們為您帶來產業連接服務，加強合作，為您極具突破性的解決方案開啟全球機遇。'},
                            "isShow": false
                        },
                        {
                            "textTtile": {'eng': 'Value-added Services', 'china': '增值服務'},
                            "textCon": {'eng': "Ignite your journey to success with our Investment Matching opportunity and personalized Investment Consultation, tailored to your unique needs. Connect with the best minds in the industry through our free talent matching service by CTgoodjobs. Learn and grow with our dynamic seminars and training sessions, designed to equip you with the skills to succeed.", 'china': '點亮您的成功之路。我們提供投資配對機會和個性化的投資諮詢，根據您的獨特需求量身定制。通過我們與CTgoodjobs合作的免費人才配對服務，結識行業內最優秀的人才。通過我們設計的研討會和培訓課程，學習和成長，獲得成功之路所需的技能。'},
                            "isShow": false
                        },
                        {
                            "textTtile": {'eng': 'Connect and Network', 'china': '人脈網路'},
                            "textCon": {'eng': "Get timely updates on services and events with our Member Newsletters, explore opportunities to meet, network, and influence our dynamic I&T ecosystem's experienced executives.", 'china': '通過我們的會員通訊，及時獲取最新服務和活動資訊。探索機會，在活力四射的創科生態中，與經驗豐富的業界人士會面和交流。'},
                            "isShow": false
                        }
                    ]
                },
                {
                    "title": {'eng': 'Glimpse of the Experience', 'china': '經驗分享'},
                    "isShowPhoto": true,
                    "textArr": [
                        {
                            "textTtile": {'eng': 'Ideation & Incubation Programmes Graduation Day 2023', 'china': 'IDEATION及創科培育計劃畢業禮2023'},
                            "textCon": {'eng': "In June 2023, a record-high number of 437 graduates from 21 economies celebrated their completion of Ideation and Incubation Programmes, which was an important milestone of their entrepreneural journey.", 'china': '2023 年6月，來自21 個經濟體共 437個單位從科學園的IDEATION及培育計劃中畢業，畢業生數量突破歷史新高。'},
                            "isShow": false
                        }
                    ]
                }
            ]
        }
    ])
</script>
<style lang="less">
@import '~/assets/css/subPageTwo.less';
</style>