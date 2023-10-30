<template lang="">
    <div class="IntroductionPage">
        <img class="backgImg" src="../assets/images/backg_img_all.png" alt="">
        <div class="conBox">
            <div class="leftBox"></div>
            <div class="rightBox"></div>
            <div class="textBox">
                <div class="animate__animated animate__rotateIn" v-if="isChinese">
                    <p>點滴發生  泛起漣漪  創造深遠影響</p>
                </div>
                <div class="animate__animated animate__rotateIn" v-else>
                    <p>Every happening creates immense impacts,</p>
                    <p>like a droplet sparking off ripples.</p>
                </div>
            </div>
            <div class="btnBox">
                <el-button :class="isChinese?'hover':''" @click="isChinese=true">中</el-button>
                <el-button :class="isChinese?'':'hover'" @click="isChinese=false">Eng</el-button>
            </div>
            <el-button class="bottomBtn" @click="router.push('/Home')"><el-icon><ArrowRight /></el-icon></el-button>
        </div>
    </div>
</template>
<script setup>
    const router = useRouter()//路由
    import { storeToRefs } from 'pinia'
    import { useStore } from '~/store/counter'
    const store = useStore()
    let { isChinese } = storeToRefs(store)
</script>
<style lang="less">
@import '~/assets/css/Introduction.less';
</style>