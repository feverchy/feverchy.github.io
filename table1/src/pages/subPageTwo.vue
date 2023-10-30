<template lang="">
    <div class="subPageTwo" :class="classType[type]">
        <img class="backgImg" src="../assets/images/backg_img_all.png" alt="">
        <div class="conBox">
            <div class="leftBox"></div>
            <div class="rightBox"></div>
            <el-scrollbar height="100%">
                <!-- CLOTHING 衣 -->
                <div v-if="type==0">
                    <!-- World Problem -->
                    <div v-if="typeTwo==0">
                        <p class="title">{{isChinese ? '全球議題' : 'World Problem'}}</p>
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '垃圾堆填區裡的紡織廢料' : 'Alternative materials for brand to use now'}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">{{isChinese ? '創科人使用大豆血紅素的DNA，來生產含有血紅素蛋白的基因指令。這種蛋白質的植物原料，是令肉類替代品擁有美味肉類口感的關鍵。（圖1-4）' : ''}}</div>
                            <div class="text">{{isChinese ? '除此之外，血紅素能刺激我們的味蕾，增強肉類的質地。創造出多汁、嫩滑的口感，捕捉到動物肉類的精髓。（圖5-7）' : ''}}</div>
                            <div class="text">{{isChinese ? '從大豆萊姆蛋白的DNA中提取，轉移到酵母中，在實驗室中培養。' : ''}}</div>
                            <div class="text">{{isChinese ? '血紅素捕獲氧氣並在生物體內運輸，例如牛的肌肉組織。牛肉的鮮血味來自血紅素。鐵和蛋白質也源自血紅素。' : ''}}</div>
                        </div>
                        <div class="conTitle"><span class="cursorPointer" @click="isShowTwo ? isShowTwo=false : isShowTwo=true">{{isShowTwo ? '-':'+'}}</span>{{isChinese ? '受傷影響運動的表現和成功' : 'We don’t have another 50 years to wait'}}</div>
                        <div class="content" v-if="isShowTwo">
                            <div class="text">{{isChinese ? '運動傷害不僅會造成高昂的醫療費用，更對運動員造成長期的身體和心理影響。職業運動員在一生中遭受致殘性傷害的風險為 33%，面臨著巨大的挑戰。如國家美式足球聯盟的運動中，超過 50% 的傷病影響下肢，而英格蘭超級聯賽每 100,000 小時足球比賽，就會有 1,000 人受傷。此外，62% 的職業棒球運動員在 4 月至 7 月期間受傷，突顯了這段時間的風險增加。為了解決這些問題，運動服裝公司正在開發可以監測運動員身體狀況和表現的產品。' : ''}}</div>
                        </div>
                    </div>
                    <!-- Innovator’s Dream -->
                    <div v-if="typeTwo==1">
                        <p class="title">{{isChinese ? '創科人之夢' : 'Innovator’s Dream'}}</p>
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '替代物料' : 'Alternative materials for brand to use now'}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">{{isChinese ? '創科人使用大豆血紅素的DNA，來生產含有血紅素蛋白的基因指令。這種蛋白質的植物原料，是令肉類替代品擁有美味肉類口感的關鍵。（圖1-4）' : ''}}</div>
                            <div class="text">{{isChinese ? '除此之外，血紅素能刺激我們的味蕾，增強肉類的質地。創造出多汁、嫩滑的口感，捕捉到動物肉類的精髓。（圖5-7）' : ''}}</div>
                            <div class="text">{{isChinese ? '從大豆萊姆蛋白的DNA中提取，轉移到酵母中，在實驗室中培養。' : ''}}</div>
                            <div class="text">{{isChinese ? '血紅素捕獲氧氣並在生物體內運輸，例如牛的肌肉組織。牛肉的鮮血味來自血紅素。鐵和蛋白質也源自血紅素。' : ''}}</div>
                        </div>
                        <div class="conTitle"><span class="cursorPointer" @click="isShowTwo ? isShowTwo=false : isShowTwo=true">{{isShowTwo ? '-':'+'}}</span>{{isChinese ? '智能服飾帶出最佳表現，避免傷患' : 'We don’t have another 50 years to wait'}}</div>
                        <div class="content" v-if="isShowTwo">
                            <div class="text">{{isChinese ? '運動傷害不僅會造成高昂的醫療費用，更對運動員造成長期的身體和心理影響。職業運動員在一生中遭受致殘性傷害的風險為 33%，面臨著巨大的挑戰。如國家美式足球聯盟的運動中，超過 50% 的傷病影響下肢，而英格蘭超級聯賽每 100,000 小時足球比賽，就會有 1,000 人受傷。此外，62% 的職業棒球運動員在 4 月至 7 月期間受傷，突顯了這段時間的風險增加。為了解決這些問題，運動服裝公司正在開發可以監測運動員身體狀況和表現的產品。' : ''}}</div>
                        </div>
                    </div>
                    <!-- Innovator’s Dream -->
                    <div v-if="typeTwo==2">
                        <p class="title">{{isChinese ? '創科人之夢' : 'Innovator’s Dream'}}</p>
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '替代物料' : 'Alternative materials for brand to use now'}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">{{isChinese ? '創科人使用大豆血紅素的DNA，來生產含有血紅素蛋白的基因指令。這種蛋白質的植物原料，是令肉類替代品擁有美味肉類口感的關鍵。（圖1-4）' : ''}}</div>
                            <div class="text">{{isChinese ? '除此之外，血紅素能刺激我們的味蕾，增強肉類的質地。創造出多汁、嫩滑的口感，捕捉到動物肉類的精髓。（圖5-7）' : ''}}</div>
                            <div class="text">{{isChinese ? '從大豆萊姆蛋白的DNA中提取，轉移到酵母中，在實驗室中培養。' : ''}}</div>
                            <div class="text">{{isChinese ? '血紅素捕獲氧氣並在生物體內運輸，例如牛的肌肉組織。牛肉的鮮血味來自血紅素。鐵和蛋白質也源自血紅素。' : ''}}</div>
                        </div>
                        <div class="conTitle"><span class="cursorPointer" @click="isShowTwo ? isShowTwo=false : isShowTwo=true">{{isShowTwo ? '-':'+'}}</span>{{isChinese ? '智能服飾帶出最佳表現，避免傷患' : 'We don’t have another 50 years to wait'}}</div>
                        <div class="content" v-if="isShowTwo">
                            <div class="text">{{isChinese ? '運動傷害不僅會造成高昂的醫療費用，更對運動員造成長期的身體和心理影響。職業運動員在一生中遭受致殘性傷害的風險為 33%，面臨著巨大的挑戰。如國家美式足球聯盟的運動中，超過 50% 的傷病影響下肢，而英格蘭超級聯賽每 100,000 小時足球比賽，就會有 1,000 人受傷。此外，62% 的職業棒球運動員在 4 月至 7 月期間受傷，突顯了這段時間的風險增加。為了解決這些問題，運動服裝公司正在開發可以監測運動員身體狀況和表現的產品。' : ''}}</div>
                        </div>
                    </div>
                </div>
                <!-- CLOTHING 衣 -->
                <div v-if="type==1">
                    <!-- World Problem -->
                    <div v-if="typeTwo==0">
                        <p class="title">{{isChinese ? '全球議題' : 'World Problem'}}</p>
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '垃圾堆填區裡的紡織廢料' : 'Alternative materials for brand to use now'}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">{{isChinese ? '創科人使用大豆血紅素的DNA，來生產含有血紅素蛋白的基因指令。這種蛋白質的植物原料，是令肉類替代品擁有美味肉類口感的關鍵。（圖1-4）' : ''}}</div>
                            <div class="text">{{isChinese ? '除此之外，血紅素能刺激我們的味蕾，增強肉類的質地。創造出多汁、嫩滑的口感，捕捉到動物肉類的精髓。（圖5-7）' : ''}}</div>
                            <div class="text">{{isChinese ? '從大豆萊姆蛋白的DNA中提取，轉移到酵母中，在實驗室中培養。' : ''}}</div>
                            <div class="text">{{isChinese ? '血紅素捕獲氧氣並在生物體內運輸，例如牛的肌肉組織。牛肉的鮮血味來自血紅素。鐵和蛋白質也源自血紅素。' : ''}}</div>
                        </div>
                        <div class="conTitle"><span class="cursorPointer" @click="isShowTwo ? isShowTwo=false : isShowTwo=true">{{isShowTwo ? '-':'+'}}</span>{{isChinese ? '受傷影響運動的表現和成功' : 'We don’t have another 50 years to wait'}}</div>
                        <div class="content" v-if="isShowTwo">
                            <div class="text">{{isChinese ? '運動傷害不僅會造成高昂的醫療費用，更對運動員造成長期的身體和心理影響。職業運動員在一生中遭受致殘性傷害的風險為 33%，面臨著巨大的挑戰。如國家美式足球聯盟的運動中，超過 50% 的傷病影響下肢，而英格蘭超級聯賽每 100,000 小時足球比賽，就會有 1,000 人受傷。此外，62% 的職業棒球運動員在 4 月至 7 月期間受傷，突顯了這段時間的風險增加。為了解決這些問題，運動服裝公司正在開發可以監測運動員身體狀況和表現的產品。' : ''}}</div>
                        </div>
                    </div>
                    <!-- Innovator’s Dream -->
                    <div v-if="typeTwo==1">
                        <p class="title">{{isChinese ? '創科人之夢' : 'Innovator’s Dream'}}</p>
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '替代物料' : 'Alternative materials for brand to use now'}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">{{isChinese ? '創科人使用大豆血紅素的DNA，來生產含有血紅素蛋白的基因指令。這種蛋白質的植物原料，是令肉類替代品擁有美味肉類口感的關鍵。（圖1-4）' : ''}}</div>
                            <div class="text">{{isChinese ? '除此之外，血紅素能刺激我們的味蕾，增強肉類的質地。創造出多汁、嫩滑的口感，捕捉到動物肉類的精髓。（圖5-7）' : ''}}</div>
                            <div class="text">{{isChinese ? '從大豆萊姆蛋白的DNA中提取，轉移到酵母中，在實驗室中培養。' : ''}}</div>
                            <div class="text">{{isChinese ? '血紅素捕獲氧氣並在生物體內運輸，例如牛的肌肉組織。牛肉的鮮血味來自血紅素。鐵和蛋白質也源自血紅素。' : ''}}</div>
                        </div>
                        <div class="conTitle"><span class="cursorPointer" @click="isShowTwo ? isShowTwo=false : isShowTwo=true">{{isShowTwo ? '-':'+'}}</span>{{isChinese ? '智能服飾帶出最佳表現，避免傷患' : 'We don’t have another 50 years to wait'}}</div>
                        <div class="content" v-if="isShowTwo">
                            <div class="text">{{isChinese ? '運動傷害不僅會造成高昂的醫療費用，更對運動員造成長期的身體和心理影響。職業運動員在一生中遭受致殘性傷害的風險為 33%，面臨著巨大的挑戰。如國家美式足球聯盟的運動中，超過 50% 的傷病影響下肢，而英格蘭超級聯賽每 100,000 小時足球比賽，就會有 1,000 人受傷。此外，62% 的職業棒球運動員在 4 月至 7 月期間受傷，突顯了這段時間的風險增加。為了解決這些問題，運動服裝公司正在開發可以監測運動員身體狀況和表現的產品。' : ''}}</div>
                        </div>
                    </div>
                    <!-- Innovator’s Dream -->
                    <div v-if="typeTwo==2">
                        <p class="title">{{isChinese ? '創科人之夢' : 'Innovator’s Dream'}}</p>
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '替代物料' : 'Alternative materials for brand to use now'}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">{{isChinese ? '創科人使用大豆血紅素的DNA，來生產含有血紅素蛋白的基因指令。這種蛋白質的植物原料，是令肉類替代品擁有美味肉類口感的關鍵。（圖1-4）' : ''}}</div>
                            <div class="text">{{isChinese ? '除此之外，血紅素能刺激我們的味蕾，增強肉類的質地。創造出多汁、嫩滑的口感，捕捉到動物肉類的精髓。（圖5-7）' : ''}}</div>
                            <div class="text">{{isChinese ? '從大豆萊姆蛋白的DNA中提取，轉移到酵母中，在實驗室中培養。' : ''}}</div>
                            <div class="text">{{isChinese ? '血紅素捕獲氧氣並在生物體內運輸，例如牛的肌肉組織。牛肉的鮮血味來自血紅素。鐵和蛋白質也源自血紅素。' : ''}}</div>
                        </div>
                        <div class="conTitle"><span class="cursorPointer" @click="isShowTwo ? isShowTwo=false : isShowTwo=true">{{isShowTwo ? '-':'+'}}</span>{{isChinese ? '智能服飾帶出最佳表現，避免傷患' : 'We don’t have another 50 years to wait'}}</div>
                        <div class="content" v-if="isShowTwo">
                            <div class="text">{{isChinese ? '運動傷害不僅會造成高昂的醫療費用，更對運動員造成長期的身體和心理影響。職業運動員在一生中遭受致殘性傷害的風險為 33%，面臨著巨大的挑戰。如國家美式足球聯盟的運動中，超過 50% 的傷病影響下肢，而英格蘭超級聯賽每 100,000 小時足球比賽，就會有 1,000 人受傷。此外，62% 的職業棒球運動員在 4 月至 7 月期間受傷，突顯了這段時間的風險增加。為了解決這些問題，運動服裝公司正在開發可以監測運動員身體狀況和表現的產品。' : ''}}</div>
                        </div>
                    </div>
                </div>
                <!-- CLOTHING 衣 -->
                <div v-if="type==2">
                    <!-- World Problem -->
                    <div v-if="typeTwo==0">
                        <p class="title">{{isChinese ? '全球議題' : 'World Problem'}}</p>
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '垃圾堆填區裡的紡織廢料' : 'Alternative materials for brand to use now'}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">{{isChinese ? '創科人使用大豆血紅素的DNA，來生產含有血紅素蛋白的基因指令。這種蛋白質的植物原料，是令肉類替代品擁有美味肉類口感的關鍵。（圖1-4）' : ''}}</div>
                            <div class="text">{{isChinese ? '除此之外，血紅素能刺激我們的味蕾，增強肉類的質地。創造出多汁、嫩滑的口感，捕捉到動物肉類的精髓。（圖5-7）' : ''}}</div>
                            <div class="text">{{isChinese ? '從大豆萊姆蛋白的DNA中提取，轉移到酵母中，在實驗室中培養。' : ''}}</div>
                            <div class="text">{{isChinese ? '血紅素捕獲氧氣並在生物體內運輸，例如牛的肌肉組織。牛肉的鮮血味來自血紅素。鐵和蛋白質也源自血紅素。' : ''}}</div>
                        </div>
                        <div class="conTitle"><span class="cursorPointer" @click="isShowTwo ? isShowTwo=false : isShowTwo=true">{{isShowTwo ? '-':'+'}}</span>{{isChinese ? '受傷影響運動的表現和成功' : 'We don’t have another 50 years to wait'}}</div>
                        <div class="content" v-if="isShowTwo">
                            <div class="text">{{isChinese ? '運動傷害不僅會造成高昂的醫療費用，更對運動員造成長期的身體和心理影響。職業運動員在一生中遭受致殘性傷害的風險為 33%，面臨著巨大的挑戰。如國家美式足球聯盟的運動中，超過 50% 的傷病影響下肢，而英格蘭超級聯賽每 100,000 小時足球比賽，就會有 1,000 人受傷。此外，62% 的職業棒球運動員在 4 月至 7 月期間受傷，突顯了這段時間的風險增加。為了解決這些問題，運動服裝公司正在開發可以監測運動員身體狀況和表現的產品。' : ''}}</div>
                        </div>
                    </div>
                    <!-- Innovator’s Dream -->
                    <div v-if="typeTwo==1">
                        <p class="title">{{isChinese ? '創科人之夢' : 'Innovator’s Dream'}}</p>
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '替代物料' : 'Alternative materials for brand to use now'}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">{{isChinese ? '創科人使用大豆血紅素的DNA，來生產含有血紅素蛋白的基因指令。這種蛋白質的植物原料，是令肉類替代品擁有美味肉類口感的關鍵。（圖1-4）' : ''}}</div>
                            <div class="text">{{isChinese ? '除此之外，血紅素能刺激我們的味蕾，增強肉類的質地。創造出多汁、嫩滑的口感，捕捉到動物肉類的精髓。（圖5-7）' : ''}}</div>
                            <div class="text">{{isChinese ? '從大豆萊姆蛋白的DNA中提取，轉移到酵母中，在實驗室中培養。' : ''}}</div>
                            <div class="text">{{isChinese ? '血紅素捕獲氧氣並在生物體內運輸，例如牛的肌肉組織。牛肉的鮮血味來自血紅素。鐵和蛋白質也源自血紅素。' : ''}}</div>
                        </div>
                        <div class="conTitle"><span class="cursorPointer" @click="isShowTwo ? isShowTwo=false : isShowTwo=true">{{isShowTwo ? '-':'+'}}</span>{{isChinese ? '智能服飾帶出最佳表現，避免傷患' : 'We don’t have another 50 years to wait'}}</div>
                        <div class="content" v-if="isShowTwo">
                            <div class="text">{{isChinese ? '運動傷害不僅會造成高昂的醫療費用，更對運動員造成長期的身體和心理影響。職業運動員在一生中遭受致殘性傷害的風險為 33%，面臨著巨大的挑戰。如國家美式足球聯盟的運動中，超過 50% 的傷病影響下肢，而英格蘭超級聯賽每 100,000 小時足球比賽，就會有 1,000 人受傷。此外，62% 的職業棒球運動員在 4 月至 7 月期間受傷，突顯了這段時間的風險增加。為了解決這些問題，運動服裝公司正在開發可以監測運動員身體狀況和表現的產品。' : ''}}</div>
                        </div>
                    </div>
                    <!-- Innovator’s Dream -->
                    <div v-if="typeTwo==2">
                        <p class="title">{{isChinese ? '創科人之夢' : 'Innovator’s Dream'}}</p>
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '替代物料' : 'Alternative materials for brand to use now'}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">{{isChinese ? '創科人使用大豆血紅素的DNA，來生產含有血紅素蛋白的基因指令。這種蛋白質的植物原料，是令肉類替代品擁有美味肉類口感的關鍵。（圖1-4）' : ''}}</div>
                            <div class="text">{{isChinese ? '除此之外，血紅素能刺激我們的味蕾，增強肉類的質地。創造出多汁、嫩滑的口感，捕捉到動物肉類的精髓。（圖5-7）' : ''}}</div>
                            <div class="text">{{isChinese ? '從大豆萊姆蛋白的DNA中提取，轉移到酵母中，在實驗室中培養。' : ''}}</div>
                            <div class="text">{{isChinese ? '血紅素捕獲氧氣並在生物體內運輸，例如牛的肌肉組織。牛肉的鮮血味來自血紅素。鐵和蛋白質也源自血紅素。' : ''}}</div>
                        </div>
                        <div class="conTitle"><span class="cursorPointer" @click="isShowTwo ? isShowTwo=false : isShowTwo=true">{{isShowTwo ? '-':'+'}}</span>{{isChinese ? '智能服飾帶出最佳表現，避免傷患' : 'We don’t have another 50 years to wait'}}</div>
                        <div class="content" v-if="isShowTwo">
                            <div class="text">{{isChinese ? '運動傷害不僅會造成高昂的醫療費用，更對運動員造成長期的身體和心理影響。職業運動員在一生中遭受致殘性傷害的風險為 33%，面臨著巨大的挑戰。如國家美式足球聯盟的運動中，超過 50% 的傷病影響下肢，而英格蘭超級聯賽每 100,000 小時足球比賽，就會有 1,000 人受傷。此外，62% 的職業棒球運動員在 4 月至 7 月期間受傷，突顯了這段時間的風險增加。為了解決這些問題，運動服裝公司正在開發可以監測運動員身體狀況和表現的產品。' : ''}}</div>
                        </div>
                    </div>
                </div>
                <!-- CLOTHING 衣 -->
                <div v-if="type==3">
                    <!-- World Problem -->
                    <div v-if="typeTwo==0">
                        <p class="title">{{isChinese ? '全球議題' : 'World Problem'}}</p>
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '垃圾堆填區裡的紡織廢料' : 'Alternative materials for brand to use now'}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">{{isChinese ? '創科人使用大豆血紅素的DNA，來生產含有血紅素蛋白的基因指令。這種蛋白質的植物原料，是令肉類替代品擁有美味肉類口感的關鍵。（圖1-4）' : ''}}</div>
                            <div class="text">{{isChinese ? '除此之外，血紅素能刺激我們的味蕾，增強肉類的質地。創造出多汁、嫩滑的口感，捕捉到動物肉類的精髓。（圖5-7）' : ''}}</div>
                            <div class="text">{{isChinese ? '從大豆萊姆蛋白的DNA中提取，轉移到酵母中，在實驗室中培養。' : ''}}</div>
                            <div class="text">{{isChinese ? '血紅素捕獲氧氣並在生物體內運輸，例如牛的肌肉組織。牛肉的鮮血味來自血紅素。鐵和蛋白質也源自血紅素。' : ''}}</div>
                        </div>
                        <div class="conTitle"><span class="cursorPointer" @click="isShowTwo ? isShowTwo=false : isShowTwo=true">{{isShowTwo ? '-':'+'}}</span>{{isChinese ? '受傷影響運動的表現和成功' : 'We don’t have another 50 years to wait'}}</div>
                        <div class="content" v-if="isShowTwo">
                            <div class="text">{{isChinese ? '運動傷害不僅會造成高昂的醫療費用，更對運動員造成長期的身體和心理影響。職業運動員在一生中遭受致殘性傷害的風險為 33%，面臨著巨大的挑戰。如國家美式足球聯盟的運動中，超過 50% 的傷病影響下肢，而英格蘭超級聯賽每 100,000 小時足球比賽，就會有 1,000 人受傷。此外，62% 的職業棒球運動員在 4 月至 7 月期間受傷，突顯了這段時間的風險增加。為了解決這些問題，運動服裝公司正在開發可以監測運動員身體狀況和表現的產品。' : ''}}</div>
                        </div>
                    </div>
                    <!-- Innovator’s Dream -->
                    <div v-if="typeTwo==1">
                        <p class="title">{{isChinese ? '創科人之夢' : 'Innovator’s Dream'}}</p>
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '替代物料' : 'Alternative materials for brand to use now'}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">{{isChinese ? '創科人使用大豆血紅素的DNA，來生產含有血紅素蛋白的基因指令。這種蛋白質的植物原料，是令肉類替代品擁有美味肉類口感的關鍵。（圖1-4）' : ''}}</div>
                            <div class="text">{{isChinese ? '除此之外，血紅素能刺激我們的味蕾，增強肉類的質地。創造出多汁、嫩滑的口感，捕捉到動物肉類的精髓。（圖5-7）' : ''}}</div>
                            <div class="text">{{isChinese ? '從大豆萊姆蛋白的DNA中提取，轉移到酵母中，在實驗室中培養。' : ''}}</div>
                            <div class="text">{{isChinese ? '血紅素捕獲氧氣並在生物體內運輸，例如牛的肌肉組織。牛肉的鮮血味來自血紅素。鐵和蛋白質也源自血紅素。' : ''}}</div>
                        </div>
                        <div class="conTitle"><span class="cursorPointer" @click="isShowTwo ? isShowTwo=false : isShowTwo=true">{{isShowTwo ? '-':'+'}}</span>{{isChinese ? '智能服飾帶出最佳表現，避免傷患' : 'We don’t have another 50 years to wait'}}</div>
                        <div class="content" v-if="isShowTwo">
                            <div class="text">{{isChinese ? '運動傷害不僅會造成高昂的醫療費用，更對運動員造成長期的身體和心理影響。職業運動員在一生中遭受致殘性傷害的風險為 33%，面臨著巨大的挑戰。如國家美式足球聯盟的運動中，超過 50% 的傷病影響下肢，而英格蘭超級聯賽每 100,000 小時足球比賽，就會有 1,000 人受傷。此外，62% 的職業棒球運動員在 4 月至 7 月期間受傷，突顯了這段時間的風險增加。為了解決這些問題，運動服裝公司正在開發可以監測運動員身體狀況和表現的產品。' : ''}}</div>
                        </div>
                    </div>
                    <!-- Innovator’s Dream -->
                    <div v-if="typeTwo==2">
                        <p class="title">{{isChinese ? '創科人之夢' : 'Innovator’s Dream'}}</p>
                        <div class="conTitle"><span class="cursorPointer" @click="isShow ? isShow=false : isShow=true">{{isShow ? '-':'+'}}</span>{{isChinese ? '替代物料' : 'Alternative materials for brand to use now'}}</div>
                        <div class="content" v-if="isShow">
                            <div class="text">{{isChinese ? '創科人使用大豆血紅素的DNA，來生產含有血紅素蛋白的基因指令。這種蛋白質的植物原料，是令肉類替代品擁有美味肉類口感的關鍵。（圖1-4）' : ''}}</div>
                            <div class="text">{{isChinese ? '除此之外，血紅素能刺激我們的味蕾，增強肉類的質地。創造出多汁、嫩滑的口感，捕捉到動物肉類的精髓。（圖5-7）' : ''}}</div>
                            <div class="text">{{isChinese ? '從大豆萊姆蛋白的DNA中提取，轉移到酵母中，在實驗室中培養。' : ''}}</div>
                            <div class="text">{{isChinese ? '血紅素捕獲氧氣並在生物體內運輸，例如牛的肌肉組織。牛肉的鮮血味來自血紅素。鐵和蛋白質也源自血紅素。' : ''}}</div>
                        </div>
                        <div class="conTitle"><span class="cursorPointer" @click="isShowTwo ? isShowTwo=false : isShowTwo=true">{{isShowTwo ? '-':'+'}}</span>{{isChinese ? '智能服飾帶出最佳表現，避免傷患' : 'We don’t have another 50 years to wait'}}</div>
                        <div class="content" v-if="isShowTwo">
                            <div class="text">{{isChinese ? '運動傷害不僅會造成高昂的醫療費用，更對運動員造成長期的身體和心理影響。職業運動員在一生中遭受致殘性傷害的風險為 33%，面臨著巨大的挑戰。如國家美式足球聯盟的運動中，超過 50% 的傷病影響下肢，而英格蘭超級聯賽每 100,000 小時足球比賽，就會有 1,000 人受傷。此外，62% 的職業棒球運動員在 4 月至 7 月期間受傷，突顯了這段時間的風險增加。為了解決這些問題，運動服裝公司正在開發可以監測運動員身體狀況和表現的產品。' : ''}}</div>
                        </div>
                    </div>
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

    const classType = ['CLOTHING','FOOD','HOUSING','TRANSPORTATION']//类名

    const type = route.query.type//获取路由参数
    const typeTwo = route.query.typeTwo//获取路由参数

    const isShow = ref(false)//是否显示
    const isShowTwo = ref(false)//是否显示
</script>
<style lang="less">
@import '~/assets/css/subPageTwo.less';
</style>