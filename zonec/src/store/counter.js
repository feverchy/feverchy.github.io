import { defineStore } from 'pinia'

// 创建一个新的 store 实例
export const useStore = defineStore({
    id: 'user',
    state: () => {
        return {
            token: '',//用戶token
            isChinese: false,//是否中文
        }
    },
    getters: {},
    actions: {
        
    },
    // 开启数据缓存
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'my_user',
                storage: localStorage,
            }
        ]
    }
})

// export default useStore