<template lang="">
    
</template>
<script setup>
    const TIMEOUT = 60 * 1000 // 60秒
    const timer = ref(null)
    const router = useRouter()

    const resetTimer = () => {
        clearTimeout(timer.value)
        console.log('1')
        timer.value = setTimeout(() => {
            router.push('/') // 跳轉到首頁
        }, TIMEOUT)
    }

    onMounted(() => {
        resetTimer()
        window.addEventListener('mousemove', resetTimer)
        window.addEventListener('keypress', resetTimer)
    })

    onUnmounted(() => {
        clearTimeout(timer.value)
        window.removeEventListener('mousemove', resetTimer)
        window.removeEventListener('keypress', resetTimer)
    })
</script>
<style lang="">
    
</style>