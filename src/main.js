import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

createApp(App).mount('#app')

// 初始化AOS（全局配置）
AOS.init({
    duration: 800,    // 动画时长
    offset: 120,      // 偏移量
    once: true        // 是否只执行一次
})