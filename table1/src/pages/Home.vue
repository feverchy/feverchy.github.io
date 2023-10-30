<template lang="">
    <div class="HomePage">
        <!-- <button v-for="(btn, index) in buttons" :key="index" class="animate__animated" :class="getAnimationClass(index)">
        {{ btn }}
        </button> -->
        <img class="backgImg" src="../assets/images/backg_img_all.png" alt="">
        <div class="conBox">
            <img class="titleBox" src="../assets/images/home_title_img.png" alt="">
            <div class="buttonBox">
                <div class="btn animate__animated cursorPointer" v-for="(btn, index) in buttons" :key="index" :class="getAnimationClass(index)" @click="router.push({ path: '/subPage', query: { type: index }})">
                    <div class="text hover" v-if="isChinese">{{btn.china}}</div>
                    <div class="text" v-else>{{btn.eng}}</div>
                </div>
            </div>
            <div class="btnBox">
                <el-button :class="isChinese?'hover':''" @click="isChinese=true">中</el-button>
                <el-button :class="isChinese?'':'hover'" @click="isChinese=false">Eng</el-button>
            </div>
        </div>
    </div>
</template>
<script setup>
    const router = useRouter()//路由
    import { storeToRefs } from 'pinia'
    import { useStore } from '~/store/counter'
    const store = useStore()
    let { isChinese } = storeToRefs(store)

    const buttons = ref([{'eng':'CLOTHING','china':'衣'},{'eng':'FOOD','china':'食'},{'eng':'HOUSING','china':'住'},{'eng':'TRANSPORTATION','china':'行'}])

    const getAnimationClass = (index) => {
        const animations = ['animate__fadeInLeft clothing', 'animate__fadeInRight food', 'animate__fadeInUp housing', 'animate__fadeInDown transportation']
        const delay = index * 0.3 // 为每个按钮添加延迟，可以根据需要调整这个值
        return `${animations[index % animations.length]} animate__delay-${delay}s`
    }
</script>
<style lang="less">
@import '~/assets/css/Home.less';
</style>   