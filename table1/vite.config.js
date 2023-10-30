import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default ({ mode }) => {
    console.log(mode,'参数mode--->>>>')
    //参数mode为开放模式或生产模式
    //console.log(mode);  // development or product
    return defineConfig({
        resolve: {
            alias:{
                "~": pathSrc
            }
        },
        plugins: [
            vue({
                refTransform: true // 开启ref转换
            }),
            AutoImport({
                imports:['vue','vue-router'],//自动导入vue和vue-router相关函数
                resolvers: [
                    // Auto import icon components
                    // 自动导入图标组件
                    IconsResolver({
                        prefix: 'Icon',
                    }),
                    ElementPlusResolver()
                ],//配置vite自动按需引入element-plus，
            }),
            Components({
                resolvers: [
                    // Auto register icon components
                    // 自动注册图标组件
                    IconsResolver({
                        enabledCollections: ['ep'],
                    }),
                    ElementPlusResolver()
                ],//配置vite自动按需引入element-plus，
            }),
            Icons({
                autoInstall: true,
            }),
            WindiCSS()
        ]
    })
}

