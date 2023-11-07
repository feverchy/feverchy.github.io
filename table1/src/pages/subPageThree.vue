<template lang="">
    <div class="subPageTwo" :class="classType[type]">
        <img class="backgImg" src="../assets/images/backg_img_all_two.png" alt="">
        <div class="conBox">
            <div class="leftBox"></div>
            <div class="rightBox"></div>
            <el-scrollbar height="100%">
                <!-- CLOTHING 衣 -->
                <div v-if="type==0">
                    <!-- World Problem -->
                    <div v-if="typeTwo==0">
                        <p class="title">{{isChinese ? '全球議題' : 'World Problem'}}</p>
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '受傷影響運動的表現和成功' : 'In sports, injury undermines performance and success'}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">
                                <template v-if="isChinese">運動傷害不僅會造成高昂的醫療費用，更對運動員造成長期的身體和心理影響。職業運動員在一生中遭受致殘性傷害的風險為 33%，面臨著巨大的挑戰。如國家美式足球聯盟的運動中，超過 50% 的傷病影響下肢，而英格蘭超級聯賽每 100,000 小時足球比賽，就會有 1,000 人受傷。此外，62% 的職業棒球運動員在 4 月至 7 月期間受傷，突顯了這段時間的風險增加。為了解決這些問題，運動服裝公司正在開發可以監測運動員身體狀況和表現的產品。<br><span class="cursorPointer" @click="initialIndex=0, isPop=true">（圖1）</span><span class="cursorPointer" @click="initialIndex=1, isPop=true">（圖2）</span></template>
                                <template v-else>Sports-related injuries not only incur significant healthcare costs but also have long-term physical and psychological implications for athletes. With a 33% lifetime risk of sustaining a disabling injury, professional athletes face substantial challenges. In sports like NFL, over 50% of injuries affect the lower extremities, while the English Premier League witnesses 1000 injuries per 100,000 hours of soccer played. Additionally, 62% of injuries in professional baseball occur between April and July, highlighting the heightened risk during this period. To address these concerns, sportswear companies are innovating to develop products that monitor athletes' body condition and performance.<br><span class="cursorPointer" @click="initialIndex=0, isPop=true">(Image 1)</span><span class="cursorPointer" @click="initialIndex=1, isPop=true">(Image 2)</span></template>
                            </div>
                        </div>
                    </div>
                    <!-- Innovator’s Dream -->
                    <div v-if="typeTwo==1">
                        <p class="title">{{isChinese ? '創科人之夢' : 'Innovator’s Dream'}}</p>
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '智能服飾帶出最佳表現，避免傷患' : 'Smart clothing unlocks peak performance and injury prevention'}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">
                                <template v-if="isChinese">
                                    運動服裝公司正在持續創新，開發可收集實時數據的智慧服飾技術，徹底改變運動員的表現和避免傷患。<br>
                                    <span class="cursorPointer" @click="initialIndex=0, isPop=true">（圖1）</span><span class="cursorPointer" @click="initialIndex=1, isPop=true">（圖2）</span>
                                </template>
                                <template v-else>
                                    Sportswear companies are revolutionizing athlete performance and injury prevention through continuous innovation and the development of smart clothing technologies that collect real-time data. <span class="cursorPointer" @click="initialIndex=0, isPop=true">(Image 1)</span>
                                </template>
                            </div>
                        </div>
                    </div>
                    <!-- Effects to the World, Market, Target group -->
                    <div v-if="typeTwo==2">
                        <p class="title">{{isChinese ? '對世界、市場、及目標客戶的影響​' : 'Effects to the World, Market, Target group'}}</p>
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '與職業運動團隊合作' : "Collaborating with professional sports teams"}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">
                                <template v-if="isChinese">
                                    不少職業運動團隊表示，通過使用可穿戴設備，能預防傷害和提高運動員的表現。例如，NBA 球隊金州勇士隊在預防傷害方面取得的成功，歸因於可穿戴技術和有效利用數據分析。
                                </template>
                                <template v-else>
                                    Various professional sports teams have reported anecdotal evidence of injury prevention and performance improvement through the use of wearables. For example, the Golden State Warriors, an NBA team, have attributed their success in injury prevention to the use of wearable technology and data analytics.
                                </template>
                            </div>
                            <div class="text">
                                <template v-if="isChinese">
                                    2019 年發表在《英國運動醫學雜誌》上的一項研究指出，可穿戴傳感器對職業足球運動員受傷風險的影響。研究人員發現，在訓練期間佩戴 GPS 和加速傳感器的球員與不使用傳感器的球員相比，非接觸性受傷的風險更低。設備所收集的數據讓教練和訓練師監測球員的訓練負擔，識別潛在的受傷風險因素。
                                </template>
                                <template v-else>
                                    A study published in the British Journal of Sports Medicine in 2019 examined the impact of wearable sensors on injury risk in professional soccer players. The researchers found that players who wore GPS and accelerometer sensors during training had a lower risk of non-contact injuries compared to those who didn't use the sensors. The data collected from the wearables allowed coaches and trainers to monitor players' workload and identify potential risk factors for injuries.
                                </template>
                            </div>
                            <div class="text">
                                <template v-if="isChinese">
                                    資料來源：Preatoni E, Bergamini E, Fantozzi S, Giraud LI, Orejel Bustos AS, Vannozzi G, Camomilla V. 使用可穿戴傳感器預防、評估和告知運動相關肌肉骨骼損傷的康復情況：系統範圍審查。傳感器（巴塞爾）。2022 年 4 月 22 日；22(9):3225。doi: 10.3390/s22093225。PMID：35590914；PMCID：PMC9105988。
                                </template>
                                <template v-else>
                                    Souce: Preatoni E, Bergamini E, Fantozzi S, Giraud LI, Orejel Bustos AS, Vannozzi G, Camomilla V. The Use of Wearable Sensors for Preventing, Assessing, and Informing Recovery from Sport-Related Musculoskeletal Injuries: A Systematic Scoping Review. Sensors (Basel). 2022 Apr 22;22(9):3225. doi: 10.3390/s22093225. PMID: 35590914; PMCID: PMC9105988.
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- FOOD 食 -->
                <div v-if="type==1">
                    <!-- World Problem -->
                    <div v-if="typeTwo==0">
                        <p class="title">{{isChinese ? '全球議題' : 'World Problem'}}</p>
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '美食天堂 — 背後的真相' : 'Food waste challenge, the flipside of dining paradise'}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">
                                <template v-if="isChinese">全球每年有超過30％的食物，會在種植到丟棄的過程中浪費掉。在香港，平均每人每年會浪費71公斤未被食用的食物。<span class="cursorPointer" @click="initialIndex=0,isPop=true">（圖1）</span></template>
                                <template v-else>Globally, over 30% of our food is wasted each year, from the moment it's grown to the point it's thrown away. In Hong Kong, each of us throw away an average of 71 kg of food each year that hasn't been eaten. <br><span class="cursorPointer" @click="initialIndex=0,isPop=true">(Image 1)</span></template>
                            </div>
                            <div class="text">
                                <template v-if="isChinese">
                                    考慮到世界各地的飢餓人口數量，這驚人的數字令人憂慮。浪費食物不僅是低效能的資源配置問題，更關乎社會公義。
                                </template>
                                <template v-else>
                                    This staggering statistic is made even more unsettling when we consider the number of hungry people around the world. Food waste isn't just a matter of inefficiency; it's a matter of social justice.
                                </template>
                            </div>
                            <!-- <div class="text" v-if="isChinese"><span class="cursorPointer" @click="initialIndex=0,isPop=true">（圖1）</span></div>
                            <div class="text" v-if="isChinese">https://thebeat.asia/hong-kong/terra/sustainability/hong-kongs-food-waste-problxem-and-what-were-doing-about-it</div> -->
                        </div>
                    </div>
                    <!-- Innovator’s Dream -->
                    <div v-if="typeTwo==1">
                        <p class="title">{{isChinese ? '創科人之夢' : 'Innovator’s Dream'}}</p>
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '停止浪費食物' : 'The fix for food waste'}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">
                                <template v-if="isChinese">香港創新者和政府致力將多餘的食物轉贈給有需要的人，從而減少環境和經濟上的浪費。<span class="cursorPointer" @click="initialIndex=0,isPop=true">（圖1）</span></template>
                                <template v-else>Hong Kong innovators and government work to redirect excess food to people who can benefit from it, reducing both environmental and economic waste.​ <br><span class="cursorPointer" @click="initialIndex=0,isPop=true">(Image 1)</span></template>
                            </div>
                            <!-- <div class="text" v-if="isChinese"><span class="cursorPointer" @click="initialIndex=0,isPop=true">（圖1）</span></div>
                            <div class="text" v-if="isChinese">「香港2035年食物浪費藍圖」制定減少浪費食物的策略。</div> -->
                        </div>
                    </div>
                    <!-- Effects to the World, Market, Target group -->
                    <div v-if="typeTwo==2">
                        <p class="title">{{isChinese ? '對世界、市場、及目標客戶的影響​' : 'Effects to the World, Market, Target group'}}</p>
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '將剩餘食物轉化為機會' : 'Transforming Surplus Food into Opportunities'}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">
                                <template v-if="isChinese">
                                    作為社區減廢項目的一部分，環境及自然保育基金支持香港非牟利機構收集食物廢棄物進行回收，並設置智能食物回收機，將未開封及未到期的食物捐出。
                                </template>
                                <template v-else>
                                    As part of the Community Waste Reduction Projects, the Environment and Conservation Fund supports non-profit organisations to collect food waste for recycling and to apply for on-site composters to treat food waste.
                                </template>
                            </div>
                            <div class="text">
                                <template v-if="isChinese">政府通過智能食物回收機，為回收家中剩餘食物的相關項目提供補貼，以支持回收業、符合資格的機構和社區組織。<span class="cursorPointer" @click="initialIndex=0,isPop=true">（圖1）</span></template>
                                <template v-else>As part of the Recycling Fund, the Government subsidizes the recycling industry, eligible organizations, and community organizations that pursue food waste-related projects with smart bins for recycling food waste.<br><span class="cursorPointer" @click="initialIndex=0,isPop=true">(Image 1)</span></template>
                            </div>
                            <!-- <div class="text" v-if="isChinese"><span class="cursorPointer" @click="initialIndex=0,isPop=true">（圖1）</span></div>
                            <div class="text" v-if="isChinese">在不同的建築物設置智能回收垃圾桶，收集剩餘食物。</div> -->
                        </div>
                    </div>
                </div>
                <!-- HOUSING 住 -->
                <div v-if="type==2">
                    <!-- World Problem -->
                    <div v-if="typeTwo==0">
                        <p class="title">{{isChinese ? '全球議題' : 'World Problem'}}</p>
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '沉浸式技術帶來的視覺信心' : 'Visual confidence provided by immersive technology'}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">
                                <template v-if="isChinese">
                                    對於裝修方面，人們普遍很難找到合適的設計圖片，所以他們會將屋內設計部分交給裝修公司，同時他們亦擔心裝修公司無法達到自己所期望的效果。
                                </template>
                                <template v-else>
                                    It is common for people to not be able to find suitable design pictures for decorating, so they leave it to the decoration company while they fear not achieving the results they desire. 
                                </template>
                            </div>
                            <div class="text">
                                <template v-if="isChinese">無論消費者是在實體家具店還是在網上瀏覽，他們真正想看到的是家具放入家中後的效果。由於實際的物流問題，無法在家中試擺家具，如不滿意再修改。因此這是一個只有沉浸式技術才能解決的痛點。</template>
                                <template v-else>Whether shoppers are in a physical furniture store or browsing online, what they really need is the chance to see how the piece will look once they move it into their home. The physical logistics prevent "trying out" furniture in its intended place, so this was a natural pain point that only immersive technology could fill.</template>
                            </div>
                        </div>
                    </div>
                    <!-- Innovator’s Dream -->
                    <div v-if="typeTwo==1">
                        <p class="title">{{isChinese ? '創科人之夢' : 'Innovator’s Dream'}}</p>
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '沉浸式體驗' : 'Immersive experience in the rise'}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">
                                <template v-if="isChinese">顧客可以使用智能手機在他們期望的空間中虛擬放置和預覽所選的家具和裝飾。</template>
                                <template v-else>Customer can use their smartphones to virtually place and preview select furniture and finishes in their desired spaces. <br><span class="cursorPointer" @click="initialIndex=0,isPop=true">(Image 1)</span></template>
                            </div>
                            <div class="text" v-if="isChinese"><span class="cursorPointer" @click="initialIndex=0,isPop=true">（圖1）</span></div>
                            <!-- <div class="text" v-if="isChinese">許多大型家具公司已經採用擴增實境技術。</div> -->
                        </div>
                    </div>
                    <!-- Effects to the World, Market, Target group -->
                    <div v-if="typeTwo==2">
                        <p class="title">{{isChinese ? '對世界、市場、及目標客戶的影響​' : 'Effects to the World, Market, Target group'}}</p>
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '科技令風格和合適度更易掌握' : 'Technology eliminates doubts about fit and style.'}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">
                                <template v-if="isChinese">一項研究顯示，家具是消費者最希望透過擴增實境購買的產品（佔60%）。此外，在受限制不方便前往門市時，顧客可以足不出戶試用家具。<span class="cursorPointer" @click="initialIndex=0,isPop=true">（圖1）</span></template>
                                <template v-else>A study shows that furniture is the first product that consumers want to buy with augmented reality (60%).<br><span class="cursorPointer" @click="initialIndex=0,isPop=true">(Image 1)</span>Plus, in the midst of a restrictive era, customers are able to try out the furniture without having to go to the shop.</template>
                            </div>
                            <div class="text">
                                <template v-if="isChinese">
                                    「家具顏色與房間的氛圍相襯嗎？」「這梳化是否適合客廳？」我們很快就不會再聽到這些問題。
                                </template>
                                <template v-else>
                                    "What if the colour matches the mood of the room?" "Will the sofa fit the living room?" We won't be hearing these question anytime soon.
                                </template>
                            </div>
                            <div class="text" v-if="isChinese"><span class="cursorPointer" @click="initialIndex=0,isPop=true">（圖1）</span></div>
                            <!-- <div class="text" v-if="isChinese">根據一項研究，百分之六十的消費者喜歡使用擴增實境技術購物家具。</div>
                            <div class="text" v-if="isChinese">https://www.centricdigital.com/blog/how-augmented-reality-could-help-retailers-increase-revenue</div> -->
                        </div>
                    </div>
                </div>
                <!-- TRANSPORTATION 行 -->
                <div v-if="type==3">
                    <!-- World Problem -->
                    <div v-if="typeTwo==0">
                        <p class="title">{{isChinese ? '全球議題' : 'World Problem'}}</p>
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '令人窒息的空氣污染' : 'Breath-taking air pollution'}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">
                                <template v-if="isChinese">
                                    使用內燃機的傳統汽車，是導致環境惡化的主因，加劇了溫室氣體排放、空氣質量下降和資源消耗。為了減輕這些問題，走向更綠色的未來，我們需要可持續而環保的交通解決方案。
                                </template>
                                <template v-else>
                                    In conventional cars powered by internal combustion engines, greenhouse gas emissions, air quality degradation, and resource depletion are all factors contributing to the degradation of the environment. To mitigate these issues and move towards a greener future, we need sustainable and environmentally friendly transportation solutions.
                                </template>
                            </div>
                        </div>
                    </div>
                    <!-- Innovator’s Dream -->
                    <div v-if="typeTwo==1">
                        <p class="title">{{isChinese ? '創科人之夢' : 'Innovator’s Dream'}}</p>
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '無污染的替代燃料來源' : 'Pollution-free alternative fuel source'}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">
                                <template v-if="isChinese">
                                    用於為車輛發電的替代燃料來源，創造更可持續的交通運輸。
                                </template>
                                <template v-else>
                                    Alternative fuel source to generate electricity for vehicles, creating a more sustainable transportation.
                                </template>
                            </div>
                            <div class="text">
                                <template v-if="isChinese">兩種很有前景的技術已成為內燃機的潛在替代品：氫燃料電池車 (FCV) 和電動汽車 (EV)。</template>
                                <template v-else>2 promising technologies have emerged as potential alternatives to internal combustion engines: hydrogen fuel cell vehicles (FCVs) and electric vehicles (EVs).<br><span class="cursorPointer" @click="initialIndex=0,isPop=true">(Image 1)</span></template>
                            </div>
                            <div class="text" v-if="isChinese"><span class="cursorPointer" @click="initialIndex=0,isPop=true">（圖1）</span></div>
                        </div>
                    </div>
                    <!-- Effects to the World, Market, Target group -->
                    <div v-if="typeTwo==2">
                        <p class="title">{{isChinese ? '對世界、市場、及目標客戶的影響​' : 'Effects to the World, Market, Target group'}}</p>
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '新能源汽車正在加速發展' : 'New energy vehicles are revving up'}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">
                                <template v-if="isChinese">
                                    氫燃料電池車（FCV）僅排放水蒸氣作為副產品，從而實現零廢氣排放。
                                </template>
                                <template v-else>
                                    Companies have developed hydrogen fuel cell vehicle (FCV). The vehicle emits only water vape as by-product, resulting in zero tailpipe emissions.
                                </template>
                            </div>
                            <div class="text">
                                <template v-if="isChinese">氫能基礎設施的正在開發中，以支持 FCV 的廣泛採用。<br><span class="cursorPointer" @click="initialIndex=0,isPop=true">（圖1）</span></template>
                                <template v-else>Development of hydrogen infrastructure is on-going to support the widespread adoption of FCVs. <br><span class="cursorPointer" @click="initialIndex=0,isPop=true">(Image 1)</span></template>
                            </div>
                            <div class="text" v-if="!isChinese">In terms of EV, industry analyst stated the falling cost of the lithium batteries will drive the take-up of electric and hybrid car.</div>
                            <div class="text" v-if="isChinese">在電動車方面，行業分析師表示，鋰電池成本的下降，將推動大眾使用電動和油電混合動力車。</div>
                            <!-- <div class="text" v-if="isChinese"><span class="cursorPointer" @click="initialIndex=0,isPop=true">（圖1）</span></div>
                            <div class="text" v-if="isChinese">美國科技公司Hyperion於2020年推出了一款以氫燃料為動力的超級跑車「Hyperion XP-1」。它的最高時速可達350公里，行駛里程超過1,600公里。</div> -->
                        </div>
                    </div>
                </div>
            </el-scrollbar>
            <div class="btnBox">
                <el-button :class="isChinese?'hover':''" @click="isChinese=true">中</el-button>
                <el-button :class="isChinese?'':'hover'" @click="isChinese=false">ENG</el-button>
            </div>
            <div class="btnBoxTwo">
                <img class="cursorPointer" src="../assets/images/icon_button_home.png" alt="" @click="router.push('/Home')"> 
                <img class="cursorPointer" src="../assets/images/icon_button_return.png" alt="" @click="router.back()">
            </div>

        </div>
        <div class="layerBox" v-if="isPop">
            <div class="popBox">
                <div class="popConBox">
                    <el-carousel :initial-index="initialIndex">
                        <el-carousel-item v-for="(item, index) in imgs[type].imgArr[typeTwo].imgInfo" :key="index">
                            <img :src="item.img" alt="example">
                            <div class="bottomPop font-avenir">
                                <span v-if="item.text.china">
                                    <span v-if="isChinese" v-html="item.text.china"></span>
                                    <span v-else v-html="item.text.eng"></span>
                                </span>
                                <span v-else v-html="item.text"></span>
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <el-icon class="cursorPointer" @click="isPop=false"><CloseBold /></el-icon>
            </div>
        </div>
    </div>
</template>
<script setup>
    import img1 from '../assets/images/Clothing_Case2_World_Image1.jpg'
    import img2 from '../assets/images/Clothing_Case2_World_Image2.jpg'
    import img3 from '../assets/images/Clothing_Case 2_Innovator_Image 1.jpg'
    import img4 from '../assets/images/Clothing_Case 2_Innovator_Image2.png'
    import img5 from '../assets/images/Food_Case2_World_Image1.png'
    import img6 from '../assets/images/Food_Case2_Innovator_Image1.jpg'
    import img7 from '../assets/images/Food_Case2_Effects_Image1.jpg'
    import img8 from '../assets/images/Housing_Case2_Innovator_Image1.jpg'
    import img9 from '../assets/images/Housing_Case2_Effects_Image1.png'
    import img10 from '../assets/images/Transport_Case2_Innovator_Image1.jpg'
    import img11 from '../assets/images/Transport_Case2_Effects_Image1.jpg'

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

    const initialIndex = ref(0)//初始索引
    const imgs = ref([
        {
            "imgArr": [
                {
                    "imgInfo": [
                        {img: img1, text: ""},
                        {img: img2, text: ''},
                    ]
                },
                {
                    "imgInfo": [
                        {img: img3, text: {china: 'Catapult Sports 和 STATSports 這類型的企業提供基於 GPS 的追蹤系統，使運動員和教練能夠監測性能指標，如速度、覆蓋距離、加速度和減速度。通過分析這些數據，運動員可以識別可能導致受傷的模式，例如過度負荷或強度突然增加，並相應調整他們的訓練。', eng: "Companies like Catapult Sports and STATSports offer GPS-based tracking systems that enable athletes and coaches to monitor performance metrics such as speed, distance covered, acceleration, and deceleration. By analysing this data, athletes can identify patterns that may lead to injury, such as excessive load or sudden spikes in intensity, and adjust their training accordingly."}},
                        {img: img4, text: {china: '運動員需要穿戴隱藏在球衣或內衣中的GPS追蹤系統，以監測他們的表現並計算他們受傷的可能性。', eng: "Players are required to wear the GPS tracking system that hidden in their jerseys or underwear for monitoring their performance and calculate their possibility to injury."}},
                    ]
                },
                {
                    "imgInfo": [
                        {img: '', text: ""},
                    ]
                }
            ]
        },
        {
            "imgArr": [
                {
                    "imgInfo": [
                        {img: img5, text: "Source: https://thebeat.asia/hong-kong/terra/sustainability/hong-kongs-food-waste-problem-and-what-were-doing-about-it"}
                    ]
                },
                {
                    "imgInfo": [
                        {img: img6, text: {china: '「香港2035年食物浪費藍圖」制定減少浪費食物的策略。', eng: '"Waste Blueprint for Hong Kong 2035" to map out the strategies for food waste management.<br>Source: https://www.epd.gov.hk/epd/psb_charging/en/introduction/index.html'}}
                    ]
                },
                {
                    "imgInfo": [
                        {img: img7, text: {china: '在不同的建築物設置智能回收垃圾桶，收集剩餘食物。', eng: "Smart recycling bins to collect food waste in buildings.<br>Source: https://www.epd.gov.hk/epd/english/environmentinhk/waste/prob_solutions/food_waste_challenge.html"}},
                    ]
                }
            ]
        },
        {
            "imgArr": [
                {
                    "imgInfo": [
                        {img: '', text: ""}
                    ]
                },
                {
                    "imgInfo": [
                        {img: img8, text: {china: '許多大型家具公司已經採用擴增實境技術。', eng: '"Many major furniture companies have already adopted augmented reality.<br>https://www.shutterstock.com/zh/image-photo/ar-technology-app-living-room-furniture-1997566352'}}
                    ]
                },
                {
                    "imgInfo": [
                        {img: img9, text: {china: '根據一項研究，百分之六十的消費者喜歡使用擴增實境技術購物家具。', eng: "According to a study, 60% of consumers enjoy shopping for furniture using augmented reality.<br>Source: https://www.centricdigital.com/blog/how-augmented-reality-could-help-retailers-increase-revenue"}},
                    ]
                }
            ]
        },
        {
            "imgArr": [
                {
                    "imgInfo": [
                        {img: '', text: ""}
                    ]
                },
                {
                    "imgInfo": [
                        {img: img10, text: 'Source: https://www.visualcapitalist.com/visualized-battery-vs-hydrogen-fuel-cell/'}
                    ]
                },
                {
                    "imgInfo": [
                        {img: img11, text: {china: '美國科技公司Hyperion於2020年推出了一款以氫燃料為動力的超級跑車「Hyperion XP-1」。它的最高時速可達350公里，行駛里程超過1,600公里。', eng: 'The American technology company Hyperion launched a hydrogen-fueled supercar "Hyperion XP-1" last year (2020). It has a top speed of 350km/h, and travel range of over 1,600 kilometers.<br>Source: https://www.shutterstock.com/zh/image-photo/los-angeles-united-states-october-10-2238203053'}},
                    ]
                }
            ]
        }
    ])
</script>
<style lang="less">
@import '~/assets/css/subPageTwo.less';
</style>