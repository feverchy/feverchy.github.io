<template lang="">
    <div class="IntroductionPage">
        <img class="backgImg" src="../assets/images/backg_img_all.png" alt="">
        <div class="conBox">
            <div class="textBox">
                <div class="font-avenir animate__animated animate__rotateIn" v-if="isChinese">
                    <p>待定</p>
                    <!-- <p>团结我们的社区以产生协同影响</p> -->
                </div>
                <div class="font-avenir animate__animated animate__rotateIn" v-else>
                    <p>Connecting People, Amplifying Ripples: </p>
                    <p>Uniting Our Community for Collaborative Impact</p>
                </div>
            </div>
            <div class="btnBox">
                <el-button :class="isChinese?'hover':''" @click="isChinese=true">中</el-button>
                <el-button :class="isChinese?'':'hover'" @click="isChinese=false">ENG</el-button>
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