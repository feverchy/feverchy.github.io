<template lang="">
    <div class="subPage" :class="classType[type]">
        <img src="../assets/images/subPage_backg.png" alt="" class="backgImg">
        <div class="conBox">
            <!-- CLOTHING 衣 -->
            <div class="content" v-if="type==0">

                <div class="title animate__animated animate__fadeInDown" :class="isChinese ? 'hover': ''">{{isChinese ? '衣' : 'CLOTHING'}}</div>
                <div class="caseBox" v-if="isNewPage">
                    <div class="case cursorPointer animate__animated animate__fadeInLeft" @click="isNewPage=false,cose=1">
                        <div class="caseCon">
                            <p class="text">{{isChinese ? '案例1' : 'CASE 1'}}</p>
                            <p class="textTwo">{{isChinese ? '時尚又環保' : 'SUSTAINABLE FASHION'}}</p>
                        </div>
                    </div>
                    <div class="case cursorPointer animate__animated animate__fadeInRight" @click="isNewPage=false,cose=2">
                        <div class="caseCon">
                            <p class="text">{{isChinese ? '案例2' : 'CASE 2'}}</p>
                            <p class="textTwo">{{isChinese ? '應用於運動員的科技' : 'TECHNOLOGY FOR ATHLETES'}}</p>
                        </div>
                    </div>
                </div>
                <div class="caseBox hover" v-else>
                    <div class="case cursorPointer animate__animated animate__fadeInLeft" @click="cose==1 ? router.push({ path: '/subPageTwo', query: { type: type, typeTwo: 0 }}) : router.push({ path: '/subPageThree', query: { type: type, typeTwo: 0 }})">
                        <div class="caseCon">
                            <p class="textTwo">{{isChinese ? '全球議題' : 'World Problem'}}</p>
                        </div>
                    </div>
                    <div class="case cursorPointer animate__animated animate__fadeInRight" @click="cose==1 ? router.push({ path: '/subPageTwo', query: { type: type, typeTwo: 1 }}) : router.push({ path: '/subPageThree', query: { type: type, typeTwo: 1 }})">
                        <div class="caseCon">
                            <p class="textTwo">{{isChinese ? '創科人之夢' : 'Innovator’s Dream'}}</p>
                        </div>
                    </div>
                    <div class="case cursorPointer animate__animated animate__fadeInUp" @click="cose==1 ? router.push({ path: '/subPageTwo', query: { type: type, typeTwo: 2 }}) : router.push({ path: '/subPageThree', query: { type: type, typeTwo: 2 }})">
                        <div class="caseCon">
                            <p class="textTwo">{{isChinese ? '對世界、市場、及目標客戶的影響​' : 'Effects to the World, Market, Target Group'}}</p>
                        </div>
                    </div>
                </div>

            </div>
            <!-- FOOD 食 -->
            <div class="content" v-if="type==1">

                <div class="title animate__animated animate__fadeInDown" :class="isChinese ? 'hover': ''">{{isChinese ? '食' : 'FOOD'}}</div>
                <div class="caseBox" v-if="isNewPage">
                    <div class="case cursorPointer animate__animated animate__fadeInLeft" @click="isNewPage=false,cose=1">
                        <div class="caseCon">
                            <p class="text">{{isChinese ? '案例1' : 'CASE 1'}}</p>
                            <p class="textTwo">{{isChinese ? '肉類替代品' : 'ALTERNATIVE MEAT'}}</p>
                        </div>
                    </div>
                    <div class="case cursorPointer animate__animated animate__fadeInRight" @click="isNewPage=false,cose=2">
                        <div class="caseCon">
                            <p class="text">{{isChinese ? '案例2' : 'CASE 2'}}</p>
                            <p class="textTwo">{{isChinese ? '智能回收垃圾桶' : 'SMART RECYCLE BIN'}}</p>
                        </div>
                    </div>
                </div>
                <div class="caseBox hover" v-else>
                    <div class="case cursorPointer animate__animated animate__fadeInLeft" @click="cose==1 ? router.push({ path: '/subPageTwo', query: { type: type, typeTwo: 0 }}) : router.push({ path: '/subPageThree', query: { type: type, typeTwo: 0 }})">
                        <div class="caseCon">
                            <p class="textTwo">{{isChinese ? '全球議題' : 'World Problem'}}</p>
                        </div>
                    </div>
                    <div class="case cursorPointer animate__animated animate__fadeInRight" @click="cose==1 ? router.push({ path: '/subPageTwo', query: { type: type, typeTwo: 1 }}) : router.push({ path: '/subPageThree', query: { type: type, typeTwo: 1 }})">
                        <div class="caseCon">
                            <p class="textTwo">{{isChinese ? '創科人之夢' : 'Innovator’s Dream'}}</p>
                        </div>
                    </div>
                    <div class="case cursorPointer animate__animated animate__fadeInUp" @click="cose==1 ? router.push({ path: '/subPageTwo', query: { type: type, typeTwo: 2 }}) : router.push({ path: '/subPageThree', query: { type: type, typeTwo: 2 }})">
                        <div class="caseCon">
                            <p class="textTwo">{{isChinese ? '對世界、市場、及目標客戶的影響​' : 'Effects to the World, Market, Target Group'}}</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <!-- HOUSING 住 -->
            <div class="content" v-if="type==2">

                <div class="title animate__animated animate__fadeInDown" :class="isChinese ? 'hover': ''">{{isChinese ? '住' : 'HOUSING'}}</div>
                <div class="caseBox" v-if="isNewPage">
                    <div class="case cursorPointer animate__animated animate__fadeInLeft" @click="isNewPage=false,cose=1">
                        <div class="caseCon">
                            <p class="text">{{isChinese ? '案例1' : 'CASE 1'}}</p>
                            <p class="textTwo">{{isChinese ? '組裝合成建築' : 'MODULAR CONSTRUCTION'}}</p>
                        </div>
                    </div>
                    <div class="case cursorPointer animate__animated animate__fadeInRight" @click="isNewPage=false,cose=2">
                        <div class="caseCon">
                            <p class="text">{{isChinese ? '案例2' : 'CASE 2'}}</p>
                            <p class="textTwo">{{isChinese ? '運用實境技術設計裝修' : 'AR INTERIOR DESIGN'}}</p>
                        </div>
                    </div>
                </div>
                <div class="caseBox hover" v-else>
                    <div class="case cursorPointer animate__animated animate__fadeInLeft" @click="cose==1 ? router.push({ path: '/subPageTwo', query: { type: type, typeTwo: 0 }}) : router.push({ path: '/subPageThree', query: { type: type, typeTwo: 0 }})">
                        <div class="caseCon">
                            <p class="textTwo">{{isChinese ? '全球議題' : 'World Problem'}}</p>
                        </div>
                    </div>
                    <div class="case cursorPointer animate__animated animate__fadeInRight" @click="cose==1 ? router.push({ path: '/subPageTwo', query: { type: type, typeTwo: 1 }}) : router.push({ path: '/subPageThree', query: { type: type, typeTwo: 1 }})">
                        <div class="caseCon">
                            <p class="textTwo">{{isChinese ? '創科人之夢' : 'Innovator’s Dream'}}</p>
                        </div>
                    </div>
                    <div class="case cursorPointer animate__animated animate__fadeInUp" @click="cose==1 ? router.push({ path: '/subPageTwo', query: { type: type, typeTwo: 2 }}) : router.push({ path: '/subPageThree', query: { type: type, typeTwo: 2 }})">
                        <div class="caseCon">
                            <p class="textTwo">{{isChinese ? '對世界、市場、及目標客戶的影響​' : 'Effects to the World, Market, Target Group'}}</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <!-- TRANSPORTATION 行 -->
            <div class="content" v-if="type==3">

                <div class="title animate__animated animate__fadeInDown" :class="isChinese ? 'hover': ''">{{isChinese ? '行' : 'TRANSPORTATION'}}</div>
                <div class="caseBox" v-if="isNewPage">
                    <div class="case cursorPointer animate__animated animate__fadeInLeft" @click="isNewPage=false,cose=1">
                        <div class="caseCon">
                            <p class="text">{{isChinese ? '案例1' : 'CASE 1'}}</p>
                            <p class="textTwo">{{isChinese ? '移動服務' : 'MOBILITY AS A SERVICE'}}</p>
                        </div>
                    </div>
                    <div class="case cursorPointer animate__animated animate__fadeInRight" @click="isNewPage=false,cose=2">
                        <div class="caseCon">
                            <p class="text">{{isChinese ? '案例2' : 'CASE 2'}}</p>
                            <p class="textTwo">{{isChinese ? '新能源交通工具' : 'NEW ENERGY VEHICLES'}}</p>
                        </div>
                    </div>
                </div>
                <div class="caseBox hover" v-else>
                    <div class="case cursorPointer animate__animated animate__fadeInLeft" @click="cose==1 ? router.push({ path: '/subPageTwo', query: { type: type, typeTwo: 0 }}) : router.push({ path: '/subPageThree', query: { type: type, typeTwo: 0 }})">
                        <div class="caseCon">
                            <p class="textTwo">{{isChinese ? '全球議題' : 'World Problem'}}</p>
                        </div>
                    </div>
                    <div class="case cursorPointer animate__animated animate__fadeInRight" @click="cose==1 ? router.push({ path: '/subPageTwo', query: { type: type, typeTwo: 1 }}) : router.push({ path: '/subPageThree', query: { type: type, typeTwo: 1 }})">
                        <div class="caseCon">
                            <p class="textTwo">{{isChinese ? '創科人之夢' : 'Innovator’s Dream'}}</p>
                        </div>
                    </div>
                    <div class="case cursorPointer animate__animated animate__fadeInUp" @click="cose==1 ? router.push({ path: '/subPageTwo', query: { type: type, typeTwo: 2 }}) : router.push({ path: '/subPageThree', query: { type: type, typeTwo: 2 }})">
                        <div class="caseCon">
                            <p class="textTwo">{{isChinese ? '對世界、市場、及目標客戶的影響​' : 'Effects to the World, Market, Target Group'}}</p>
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
    const cose = ref(1)//关闭按钮


    const classType = ['CLOTHING','FOOD','HOUSING','TRANSPORTATION']//类名

    const returnPage = () => {
        if(isNewPage.value){
            //返回上一頁
            router.back()
        }else{
            isNewPage.value = true
        }
    }
</script>
<style lang="less">
@import '~/assets/css/subPage.less';
</style>