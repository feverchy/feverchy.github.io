<template lang="">
    <div id="app" class="CoverPage" ref="backgroundDiv" @click="router.push('/Introduction')">
        <img src="../assets/images/home_title_img.png" alt="">
    </div>
</template>
<script setup>
    const router = useRouter()//路由
    import $ from "jquery"
    import "jquery.ripples"


    const backgroundDiv = ref(null)//获取背景div
    onMounted(() => {
        //初始化背景
        $(backgroundDiv.value).ripples({
            resolution: 256,
            dropRadius: 20,
            perturbance: 0.03,
        })
    })

</script>
<style lang="less">
@import '~/assets/css/Cover.less';
</style>