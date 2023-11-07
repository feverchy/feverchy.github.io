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
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '垃圾堆填區裡的紡織廢料' : 'Landfills overflow with textile waste'}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">
                                <template v-if="isChinese">快速時尚的興起，以大量生產和消費低價服裝為特徵，加劇了衣物浪費的問題<span class="cursorPointer" @click="initialIndex=0, isPop=true">（圖1）</span>。</template>
                                <template v-else>The rise of fast fashion, characterized by the rapid production and consumption of low-cost clothing, has exacerbated the problem of clothing waste <span class="cursorPointer" @click="initialIndex=0, isPop=true">(Image 1)</span>.</template>
                            </div>
                            <div class="text">{{isChinese ? '據一所世界知名保育組織的統計，每年約有1,700萬噸的紡織廢料最終被棄置在垃圾堆填區，相當於6,800個50米游泳池的體積。' : 'According to a world respected conservation organization, approximately 17 million tons of textile waste end up in landfills each year, equivalent to 6,800 50-meter swimming pools.'}}</div>
                            <div class="text" v-if="!isChinese">(Source: https://www.roadrunnerwm.com/blog/textile-waste-environmental-crisis)</div>
                        </div>
                        <div class="conTitle"><span class="cursorPointer" @click="isShowTwo ? isShowTwo=false : isShowTwo=true">{{isShowTwo ? '-':'+'}}</span>{{isChinese ? '合成纖維對海洋健康的影響' : "Synthetic textiles' impact on ocean health"}}</div>
                        <div class="content" v-if="isShowTwo">
                            <div class="text">
                                <template v-if="isChinese">
                                    根據一所保護自然和促進可持續發展的全球組織於2017年的報告指出，大約35％的海洋微塑料污染
                                    <span class="cursorPointer" @click="initialIndex=1,isPop=true">（圖2）</span>
                                    是由於合成纖維在洗滌過程中釋放的微纖維所致。
                                </template>
                                <template v-else>
                                    A global organization dedicated to conserving nature and promoting sustainable development issued a report in 2017 stating that around 35% of microplastic pollution
                                    <span class="cursorPointer" @click="initialIndex=1,isPop=true"> (Image 2) </span>
                                    in the oceans is attributed to synthetic textiles shedding microfibers during washing. 
                                </template>
                            </div>
                            <div class="text">
                                <template v-if="isChinese">（來源：Primary Microplastics in the Oceans: A Global Evaluation of Sources.- IUCN 2017）
                                </template>
                                <template v-else>(Source: Primary Microplastics in the Oceans: A Global Evaluation of Sources.- IUCN 2017)(https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling/textiles-material-specific-data)
                                </template>
                            </div>
                        </div>
                    </div>
                    <!-- Innovator’s Dream -->
                    <div v-if="typeTwo==1">
                        <p class="title">{{isChinese ? '創科人之夢' : 'Innovator’s Dream'}}</p>
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '替代物料' : 'Combatting clothing waste with alternative materials'}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">
                                <template v-if="isChinese">
                                    創科人創造出各種環保物料，如有機棉、可重用聚酯纖維，以及使用菠蘿葉製成的 Piñatex <span class="cursorPointer" @click="initialIndex=0,isPop=true">（圖1）</span>和蘑菇菌絲製成的 Mylo <span class="cursorPointer" @click="initialIndex=1,isPop=true">（圖2）</span>，用於各種產品，包括手袋、鞋履和服裝。
                                </template>
                                <template v-else>
                                    Innovators come up with materials like organic cotton, recycled polyester, and innovative fabrics made from materials such as pineapple leaves, Piñatex <span class="cursorPointer" @click="initialIndex=0,isPop=true">(Image 1)</span> and mushroom mycelium, Mylo <span class="cursorPointer" @click="initialIndex=1,isPop=true">(Image 2)</span> for wide range of products, including bags, shoes, and clothing. 
                                </template>
                            </div>
                        </div>
                    </div>
                    <!-- Effects to the World, Market, Target group -->
                    <div v-if="typeTwo==2">
                        <p class="title">{{isChinese ? '對世界、市場、及目標客戶的影響​' : 'Effects to the World, Market, Target group'}}</p>
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '減少時裝業的環境足跡' : "Reducing fashion's environment footprint"}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">
                                <template v-if="isChinese">
                                    菠蘿葉（Piñatex）和蘑菇菌絲（Mylo）的生產過程中使用化學品、水和能源消耗較少，減輕對生態系統的壓力。<br>
                                    利用植物作為原材料可以生物分解，產品的生命週期完結後便能回歸自然環境，降低環境污染。<br>
                                    <span class="cursorPointer" @click="initialIndex=0,isPop=true">（圖1）</span>
                                </template>
                                <template v-else>
                                    The production of Piñatex and Mylo involves fewer chemicals, water, and energy consumption, reducing strains on ecosystems <span class="cursorPointer" @click="initialIndex=0,isPop=true">(Image 1)</span>.
                                </template>
                            </div>
                            <div class="text" v-if="!isChinese">These plant-based materials are biodegradable and can be returned to the environment after their lifecycle is complete.</div>
                        </div>
                    </div>
                </div>
                <!-- FOOD 食 -->
                <div v-if="type==1">
                    <!-- World Problem -->
                    <div v-if="typeTwo==0">
                        <p class="title">{{isChinese ? '全球議題' : 'World Problem'}}</p>
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '畜牧業與碳排放的關係' : "Livestock's dominance in greenhouse emissions"}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">{{isChinese ? '交通運輸是碳排放的主要來源嗎？' : 'Is reducing CO2 emissions from transportation the most effective way to reduce greenhouse gas emissions?'}}</div>
                            <div class="text">{{isChinese ? '根據聯合國糧食及農業組織的數據，交通運輸所產生的廢氣僅佔溫室氣體排放的13％。更令人震驚的是，畜牧業及其廢料，是導致全球51％的碳排放來源。' : 'According to the Food and Agriculture Organization of the United Nations, transportation exhaust only accounts for 13% of greenhouse gas emissions. Surprisingly, livestock and their waste are responsible for 51% of global greenhouse gas emissions.'}}</div>
                            <div class="text">
                                <template v-if="isChinese">牛，看似無害，卻帶來意想不到的環境影響。牠們會產生一種強效溫室氣體 — 甲a烷<span class="cursorPointer" @click="initialIndex=0,isPop=true">（圖1）</span>。當牛消化食物時，甲烷被釋放到大氣中，這是一種比二氧化碳更能加速全球暖化的強效溫室氣體。</template>
                                <template v-else>Let's talk about cows. These seemingly innocent creatures have an unexpected environmental impact, as they contribute to the production of a potent greenhouse gas known as methane. <span class="cursorPointer" @click="initialIndex=0,isPop=true">(Image 1)</span> When cattle digest food, methane is released into the atmosphere, a powerful greenhouse gas that warms the Earth more rapidly than carbon dioxide.</template>
                            </div>
                            <div class="text" v-if="isChinese"><span class="cursorPointer" @click="initialIndex=0,isPop=true">（圖1）</span></div>
                            <div class="text">{{isChinese ? '牛隻如何加速全球暖化。' : ''}}</div>
                        </div>
                    </div>
                    <!-- Innovator’s Dream -->
                    <div v-if="typeTwo==1">
                        <p class="title">{{isChinese ? '創科人之夢' : 'Innovator’s Dream'}}</p>
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '兼顧口感和營養的「牛肉」方案' : 'Moo-unching without compromising taste & nutrition'}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">
                                <template v-if="isChinese">創科人使用大豆血紅素的DNA，來生產含有血紅素蛋白的基因指令。這種蛋白質的植物原料，是令肉類替代品擁有美味肉類口感的關鍵。<span class="cursorPointer" @click="initialIndex=0,isPop=true">（圖1-4）</span></template>
                                <template v-else>A new approach uses DNA from soy leghemoglobin to produce heme, a protein containing genetic instructions. This remarkable protein is the key to giving plant-based alternatives a deliciously familiar taste of traditional meat.<br><span class="cursorPointer" @click="initialIndex=0,isPop=true">(Image 1-4)</span></template>
                            </div>
                            <div class="text">
                                <template v-if="isChinese">除此之外，血紅素能刺激我們的味蕾，增強肉類的質地。創造出多汁、嫩滑的口感，捕捉到動物肉類的精髓。<span class="cursorPointer" @click="initialIndex=4,isPop=true">（圖5-7）</span></template>
                                <template v-else>But it doesn't stop there. The heme tantalizes our taste buds and enhances meat texture. Creating a juicy, tender mouthfeel that captures the essence of animal-based meats.<br><span class="cursorPointer" @click="initialIndex=4,isPop=true">(Image 5-7)</span></template>
                            </div>
                            <!-- <div class="text" v-if="isChinese"><span class="cursorPointer" @click="initialIndex=0,isPop=true">（圖1-4）</span></div>
                            <div class="text" v-if="isChinese">從大豆萊姆蛋白的DNA中提取，轉移到酵母中，在實驗室中培養。</div>
                            <div class="text" v-if="isChinese"><span class="cursorPointer" @click="initialIndex=4,isPop=true">（圖5-7）</span></div>
                            <div class="text" v-if="isChinese">血紅素捕獲氧氣並在生物體內運輸，例如牛的肌肉組織。牛肉的鮮血味來自血紅素。鐵和蛋白質也源自血紅素。</div> -->
                        </div>
                    </div>
                    <!-- Effects to the World, Market, Target group -->
                    <div v-if="typeTwo==2">
                        <p class="title">{{isChinese ? '對世界、市場、及目標客戶的影響​' : 'Effects to the World, Market, Target group'}}</p>
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '「食」出新世界' : 'Eat to Make a Difference'}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">
                                <template v-if="isChinese">與傳統的動物養殖相比，植物肉提供了美味且可持續的解決方案。我們可以通過減少土地、水源和飼料的需求，使畜牧業更加環保。<span class="cursorPointer" @click="initialIndex=0,isPop=true">（圖1）</span></template>
                                <template v-else>When compared to animal agriculture, alternative meats provide a delicious and sustainable solution. Our livestock farming activities can be made more environmentally friendly by requiring less land, water, and feed.<br><span class="cursorPointer" @click="initialIndex=0,isPop=true">(Image 1)</span></template>
                            </div>
                            <!-- <div class="text" v-if="isChinese"><span class="cursorPointer" @click="initialIndex=0,isPop=true">（圖1）</span></div>
                            <div class="text" v-if="isChinese">畜牧業佔據了全球農業用地的近80％（相等於4,000萬平方公里），然而只生產了全球熱量供應的不足20%。</div>
                            <div class="text" v-if="isChinese">https://assets.ourworldindata.org/uploads/2019/11/Global-land-use-graphic.png</div> -->
                        </div>
                    </div>
                </div>
                <!-- HOUSING 住 -->
                <div v-if="type==2">
                    <!-- World Problem -->
                    <div v-if="typeTwo==0">
                        <p class="title">{{isChinese ? '全球議題' : 'World Problem'}}</p>
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '都市化令建設成本飆升' : 'Urbanization soars, construction costs skyrocket'}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">
                                <template v-if="isChinese">根據一個跨政府組織的報告，預計到2050年，全球68％的人口將居住在城市地區。世界上許多地區已經對建築業施加壓力，希望找到更快速和擴展能力更大的方法來滿足居住需求<br>與此同時，全球建設價格飆升，報導指建築工程的材料價格在2020年7月至2021年7月之間上漲了20％。</template>
                                <template v-else>In a rapidly urbanizing world where 68% of the population is projected to live in cities by 2050, the construction industry faces immense pressure to find faster and more scalable methods to meet the growing demand for housing and infrastructure. In parallel, global construction prices are soaring, with a whopping 20 percent increase reported between July 2020 and July 2021.<br><span class="cursorPointer" @click="initialIndex=0,isPop=true">(Image 1)</span></template>
                            </div>
                            <div class="text" v-if="isChinese"><span class="cursorPointer" @click="initialIndex=0,isPop=true">（圖1）</span></div>
                            <!-- <div class="text" v-if="isChinese">根據英國商業、能源和工業戰略部最新數據，2020年7月至2021年7月間，建築工程的材料價格上漲了20%。</div> -->
                        </div>
                    </div>
                    <!-- Innovator’s Dream -->
                    <div v-if="typeTwo==1">
                        <p class="title">{{isChinese ? '創科人之夢' : 'Innovator’s Dream'}}</p>
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '科技實現時間和成本效益' : 'Achieving time and cost efficiencies through technology'}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">
                                <template v-if="isChinese">建築科技公司已經開始採用「組裝合成」建築技術（MiC），將設計、製造和施工整合到一個平台上。目標是以統一標準建築住所，以便快速建造多房間的住宅建築。<span class="cursorPointer" @click="initialIndex=0,isPop=true">（圖1）</span></template>
                                <template v-else>Construction technology companies have embraced modular integrated construction (MiC) to integrate design, manufacturing, and construction into one platform. They aim to standardize construction units so that multi-unit residential buildings<br><span class="cursorPointer" @click="initialIndex=0,isPop=true">(Image 1)</span>can be erected rapidly.</template>
                            </div>
                            <!-- <div class="text" v-if="isChinese"><span class="cursorPointer" @click="initialIndex=0,isPop=true">（圖1）</span></div>
                            <div class="text" v-if="isChinese">香港科學園的創新斗室是香港首座應用 MiC 建築技術的多層住宅大樓，比預計提早六個月完工，並實現了60萬個「無事故工時」。</div> -->
                        </div>
                    </div>
                    <!-- Effects to the World, Market, Target group -->
                    <div v-if="typeTwo==2">
                        <p class="title">{{isChinese ? '對世界、市場、及目標客戶的影響​' : 'Effects to the World, Market, Target group'}}</p>
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '政府推動MiC的採用' : 'Government promotes adoption of MiC'}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">
                                <template v-if="isChinese">香港發展局在2017年開始推廣採用「組裝合成」建築技術（MiC），以提升建造業的生產力和成本效益。在發展局的指導下，建築業議會和相關部門提供了MiC的設計指南、規範和實踐注意事項。多個公營及非政府機構包括香港房屋委員會、香港房屋協會、市區重建局、醫院管理局、社會企業機構和私人發展商等，已開始採用「組裝合成」建築法，現時正在採用「組裝合成」建築法的項目已超過70個。</template>
                                <template v-else>Since 2017, the Development Bureau (DEVB) has been promoting Modular Integrated Construction (MiC) to enhance the industry's productivity and cost-effectiveness. Under the steer of the DEVB, the Construction Industry Council and relevant departments have provided design guidelines, codes and practice notes on MiC. A number of public and non-governmental organisations, including the Hong Kong Housing Authority, the Hong Kong Housing Society, the Urban Renewal Authority, the Hospital Authority, social enterprises and private developers, have started the adoption of MiC and there are over 70 MiC projects at present.<span class="cursorPointer" @click="initialIndex=0,isPop=true">(Image 1)</span><br>https://www.info.gov.hk/gia/general/202305/31/P2023053100608.htm</template>
                            </div>
                            <div class="text" v-if="isChinese"><span class="cursorPointer" @click="initialIndex=0,isPop=true">（圖1）</span></div>
                            <!-- <div class="text" v-if="isChinese">香港房屋協會將採用模塊化建造（MiC）方法，在沙田乙明邨羽毛球場上建造一座10層高的老年護理院，提供64個單人房間給年齡超過70歲的居民：</div> -->
                        </div>
                    </div>
                </div>
                <!-- TRANSPORTATION 行 -->
                <div v-if="type==3">
                    <!-- World Problem -->
                    <div v-if="typeTwo==0">
                        <p class="title">{{isChinese ? '全球議題' : 'World Problem'}}</p>
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '城市化和交通擠塞阻礙生產力' : 'Urbanization and traffic congestion hinders productivity'}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">
                                <template v-if="isChinese">城市化的增長令交通擠塞，影響居民效率，產生環境問題。</template>
                                <template v-else>Growing urbanization and traffic congestion are affecting urban dweller's effectiveness and environmental concerns.</template>
                            </div>
                            <div class="text">
                                <template v-if="isChinese">根據2022年的一項調查，在全球超過半數的人口生活的城市中，私家車的使用變得更加普遍<span class="cursorPointer" @click="initialIndex=0,isPop=true">（圖1）</span>。因此，生活品質可能會受到損害，令空氣質量惡化。</template>
                                <template v-else>According to a 2022 survey, commuting by private car has become more common in cities, where more than half the world's population lives<span class="cursorPointer" @click="initialIndex=0,isPop=true">(Image 1)</span>Consequently, quality of life can be compromised and air quality can worsen</template>
                            </div>
                            <div class="text" v-if="isChinese"><span class="cursorPointer" @click="initialIndex=0,isPop=true">（圖1）</span></div>
                            <!-- <div class="text" v-if="isChinese">這張圖表顯示了全球人們在2022年通勤上班、上學或上大學時使用的交通方式。</div> -->
                        </div>
                    </div>
                    <!-- Innovator’s Dream -->
                    <div v-if="typeTwo==1">
                        <p class="title">{{isChinese ? '創科人之夢' : 'Innovator’s Dream'}}</p>
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '實現即時交通資訊體驗' : 'Enable real-time commuting experience'}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">
                                <template v-if="isChinese">一種數碼化交通服務，用戶可以查詢、支付並獲取各種公共和私人交通方式的即時資訊。</template>
                                <template v-else>A digital transport service that enables users to access, pay, and get real-time information on a range of public and private transport options.</template>
                            </div>
                        </div>
                    </div>
                    <!-- Effects to the World, Market, Target group -->
                    <div v-if="typeTwo==2">
                        <p class="title">{{isChinese ? '對世界、市場、及目標客戶的影響​' : 'Effects to the World, Market, Target group'}}</p>
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '移動服務（MaaS）行業的領導者' : 'Mobility as a service (MaaS) industry leader'}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">
                                <template v-if="isChinese">MaaS 領域的主要公司致力於經營戰略合作夥伴關係、新產品推出和商業化項目，以擴大服務市場<span class="cursorPointer" @click="initialIndex=0,isPop=true">（圖1）</span>。他們還大量投資在研究項目，引入創新產品。</template>
                                <template v-else>Major companies operating in MaaS are focused on strategic partnerships, new product launches, and commercialisations effort for market expansion. <span class="cursorPointer" @click="initialIndex=0,isPop=true">(Image1)</span> They are also heavily investing in research to introduce innovative products.</template>
                            </div>
                            <div class="text">
                                <template v-if="isChinese">技術將為不斷變化的交通狀況提供解決方案，為減少擠塞、提高效率和環保交通體驗打開可能性。</template>
                                <template v-else>Technology will unlock possibilities for dynamic commuting solutions, less congestion, better efficiency, and eco-friendly transport experience.</template>
                            </div>
                            <!-- <div class="text" v-if="isChinese"><span class="cursorPointer" @click="initialIndex=0,isPop=true">（圖1）</span></div> -->
                            <!-- <div class="text" v-if="isChinese">在2018年12月18日，Boring Company揭示了他們的地下交通隧道。</div> -->
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
                            <img :src="item.img" alt="">
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
    import img1 from '../assets/images/Clothing_Case1_Worldproblem_Image2.jpg'
    import img2 from '../assets/images/Clothing_Case1_Worldproblem_Image2.png'
    import img3 from '../assets/images/Clothing_Case1_Innovator_Image1.jpg'
    import img4 from '../assets/images/Clothing_Case1_Innovator_Image2.jpg'
    import img5 from '../assets/images/3 - Effects to the world - Image 1.png'
    import img6 from '../assets/images/Food_Case1_Worldproblem_Image1_a.jpg'
    import img20 from '../assets/images/Food_Case1_Worldproblem_Image1_b.jpg'
    import img21 from '../assets/images/Food_Case1_Worldproblem_Image1_c.png'
    import img7 from '../assets/images/Food_Case1_Innovator_Image1.jpg'
    import img8 from '../assets/images/Food_Case1_Innovator_Image2.jpg'
    import img9 from '../assets/images/Food_Case1_Innovator_Image4.jpg'
    import img10 from '../assets/images/Food_Case1_Innovator_Image3.jpg'
    import img11 from '../assets/images/Food_Case1_Innovator_Image5.jpg'
    import img12 from '../assets/images/Food_Case1_Innovator_Image6.jpg'
    import img13 from '../assets/images/Food_Case1_Innovator_Image7.jpg'
    import img14 from '../assets/images/Food_Case1_Effects_Image1.png'
    import img15 from '../assets/images/Housing_Case1_World_Image1.jpeg'
    import img16 from '../assets/images/Housing_Case1_Innovator_Image1.jpg'
    import img17 from '../assets/images/Housing_Case1_Effects_Image1.jpg'
    import img18 from '../assets/images/Transport_Case1_World_Image1.png'
    import img19 from '../assets/images/Transport_Case1_Effects_Image1.jpg'

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
                        {img: img1, text: "Fast fashion's production cycle and pollution impact."},
                        {img: img2, text: 'Diagram of different types of plastics and their effect on marine organisms'},
                    ]
                },
                {
                    "imgInfo": [
                        {img: img3, text: "Piñatex is created by felting the long fibres from pineapple leaves together to create a non-woven substrate."},
                        {img: img4, text: 'The mycelium is the root-like structure of fungi.<br>Source: https://tsuchiya-kaban-global.com/blogs/library/20221101gl'},
                    ]
                },
                {
                    "imgInfo": [
                        {img: img5, text: {china: '智利的沙漠成為快速時尚廢物的傾倒場。', eng: "Chile's desert dumping ground for fast fashion leftovers."}},
                    ]
                }
            ]
        },
        {
            "imgArr": [
                {
                    "imgInfo": [
                        {img: img6, text: {china: '牛隻如何加速全球暖化。', eng: "How cows contribute to global warming.<br>Source: https://www.livescience.com/52680-the-role-of-animal-farts-in-global-warming-infographic.html"}},
                        {img: img20, text: {china: '牛隻如何加速全球暖化。', eng: "How cows contribute to global warming.<br>Source: https://www.livescience.com/52680-the-role-of-animal-farts-in-global-warming-infographic.html"}},
                        {img: img21, text: {china: '牛隻如何加速全球暖化。', eng: "How cows contribute to global warming.<br>Source: https://www.livescience.com/52680-the-role-of-animal-farts-in-global-warming-infographic.html"}}
                    ]
                },
                {
                    "imgInfo": [
                        {img: img7, text: {china: '從大豆萊姆蛋白的DNA中提取，轉移到酵母中，在實驗室中培養。', eng: "Pick the DNA from Soy Leghemgolbin into yeast and grown in lab."}},
                        {img: img8, text: {china: '從大豆萊姆蛋白的DNA中提取，轉移到酵母中，在實驗室中培養。', eng: "Pick the DNA from Soy Leghemgolbin into yeast and grown in lab."}},
                        {img: img9, text: {china: '從大豆萊姆蛋白的DNA中提取，轉移到酵母中，在實驗室中培養。', eng: "Pick the DNA from Soy Leghemgolbin into yeast and grown in lab."}},
                        {img: img10, text: {china: '從大豆萊姆蛋白的DNA中提取，轉移到酵母中，在實驗室中培養。', eng: "Pick the DNA from Soy Leghemgolbin into yeast and grown in lab."}},
                        {img: img11, text: {china: '血紅素捕獲氧氣並在生物體內運輸，例如牛的肌肉組織。牛肉的鮮血味來自血紅素。鐵和蛋白質也源自血紅素。', eng: "Hemes grab oxygen and carries around living bodies, such as cow’s muscle tissue. The blooded flavor from beef comes from Hemes. The iron, proteins also derives from Hemes."}},
                        {img: img12, text: {china: '血紅素捕獲氧氣並在生物體內運輸，例如牛的肌肉組織。牛肉的鮮血味來自血紅素。鐵和蛋白質也源自血紅素。', eng: "Hemes grab oxygen and carries around living bodies, such as cow’s muscle tissue. The blooded flavor from beef comes from Hemes. The iron, proteins also derives from Hemes."}},
                        {img: img13, text: {china: '血紅素捕獲氧氣並在生物體內運輸，例如牛的肌肉組織。牛肉的鮮血味來自血紅素。鐵和蛋白質也源自血紅素。', eng: "Hemes grab oxygen and carries around living bodies, such as cow’s muscle tissue. The blooded flavor from beef comes from Hemes. The iron, proteins also derives from Hemes."}},
                    ]
                },
                {
                    "imgInfo": [
                        {img: img14, text: {china: '畜牧業佔據了全球農業用地的近80％（相等於4,000萬平方公里），然而只生產了全球熱量供應的不足20%。<br>來源: https://assets.ourworldindata.org/uploads/2019/11/Global-land-use-graphic.png', eng: "Livestock takes up nearly 80% of global agricultural land (40 mil KM2), yet produces less than 20% of the world’s supply of calories.<br>Source: https://assets.ourworldindata.org/uploads/2019/11/Global-land-use-graphic.png"}},
                    ]
                }
            ]
        },
        {
            "imgArr": [
                {
                    "imgInfo": [
                        {img: img15, text: {china: '根據英國商業、能源和工業戰略部最新數據，2020年7月至2021年7月間，建築工程的材料價格上漲了20%。', eng: "According to the latest figures from the UK Department for Business, Energy & Industrial Strategy, material prices for all construction work rose by 20 percent between July 2020 and July 2021."}}
                    ]
                },
                {
                    "imgInfo": [
                        {img: img16, text: {china: '香港科學園的創新斗室是香港首座應用 MiC 建築技術的多層住宅大樓，比預計提早六個月完工，並實現了60萬個「無事故工時」。', eng: "HKSTP InnoCell, Hong Kong's first multi-storey residential building with MiC technology, was completed 6 months ahead of schedule and and achieved 600,000 person-hours without an accident.<br>Source: https://www.autodesk.com/design-make/articles/innocell"}}
                    ]
                },
                {
                    "imgInfo": [
                        {img: img17, text: {china: '香港房屋協會將採用模塊化建造（MiC）方法，在沙田乙明邨羽毛球場上建造一座10層高的老年護理院，提供64個單人房間給年齡超過70歲的居民：', eng: "Hong Kong Housing Society will use MiC method to build a 10-storey Elderly Home on a badminton court at Jat Min Chuen in Sha Tin, providing 64 single room units for those who are over 70 years old.<br>SSource: https://www.wil.com.hk/jat-min-chuen"}},
                    ]
                }
            ]
        },
        {
            "imgArr": [
                {
                    "imgInfo": [
                        {img: img18, text: {china: '這張圖表顯示了全球人們在2022年通勤上班、上學或上大學時使用的交通方式。', eng: "This chart shows the mode of transport people around the world use to commute to work/school/university in 2022."}}
                    ]
                },
                {
                    "imgInfo": [
                        {img: '', text: ""}
                    ]
                },
                {
                    "imgInfo": [
                        {img: img19, text: {china: '在2018年12月18日，Boring Company揭示了他們的地下交通隧道。', eng: "On Tuesday, Dec18, 2018. The Boring Company unveiled their underground transporation tunnel.<br>Source: https://www.nbcnews.com/mach/tech/elon-musk-puts-his-electric-car-tunnel-calls-it-future-ncna949686"}},
                    ]
                }
            ]
        }
    ])
</script>
<style lang="less">
@import '~/assets/css/subPageTwo.less';
</style>