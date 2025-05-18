<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue'

// 图片列表
const banners = [
  {src: '/src/assets/img/bannerss.jpg', alt: 'Banner 1'},
  {src: '/src/assets/img/bannersss2.jpg', alt: 'Banner 2'},
  {src: '/src/assets/img/bannerss3.jpg', alt: 'Banner 3'},
  {src: '/src/assets/img/bannerss4.jpg', alt: 'Banner 4'}
]

// 当前索引
const currentIndex = ref(0)

// 自动播放间隔时间
const intervalTime = 3000
let intervalId: number | null = null

// 切换到指定索引
const goToIndex = (index: number) => {
  currentIndex.value = index
  resetInterval()
}

// 下一张
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % banners.length
  resetInterval()
}

// 重置自动播放计时器
const resetInterval = () => {
  if (intervalId !== null) {
    clearInterval(intervalId)
    intervalId = window.setInterval(nextSlide, intervalTime)
  }
}

// 初始化自动播放
onMounted(() => {
  intervalId = window.setInterval(nextSlide, intervalTime)
})

// 组件卸载时清除定时器
onUnmounted(() => {
  if (intervalId !== null) {
    clearInterval(intervalId)
  }
})
</script>


<template>
  <div class="banner-box">
    <!-- 轮播图容器 -->
    <div class="slideshow">
      <!-- 渐变层（仅作用于轮播图） -->
      <div class="banner-gradient"></div>

      <!-- 图片项 -->
      <div class="carousel-container">
        <div v-for="(banner, index) in banners" :key="index" class="carousel-item" :class="{ active: index === currentIndex }">
          <img :src="banner.src" :alt="banner.alt"/>
        </div>
      </div>

      <!-- 分页指示器 -->
      <ul class="slick-dots">
        <li v-for="(banner, index) in banners" :key="index" :class="{ active: index === currentIndex }" @click="goToIndex(index)">
          <button type="button">{{ index + 1 }}</button>
        </li>
      </ul>
    </div>

    <!-- 探索泉信按钮 -->
    <div class="goto-main">
      <div>
        <span>探索泉信</span>
        <img src="../assets/img/sjx-bottom.png" alt="Arrow Down"/>
      </div>
    </div>
  </div>
</template>

<style scoped>.banner-box {
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.slideshow {
  width: 100%;
  height: 100%;
  position: relative;
}

/* 轮播图渐变层 */
.banner-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0)
  );
  z-index: 1;
  pointer-events: none;
}

.carousel-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.9s ease-in-out, transform 0.9s ease-in-out;
  will-change: transform, opacity;
  pointer-events: none;
}

.carousel-item.active {
  opacity: 1;
  z-index: 1;
  transform: scale(1.05);
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 分页指示器样式 */
.slick-dots {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 8px;
  z-index: 10;
  pointer-events: auto;
}

.slick-dots li {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background-color 0.3s;
}

.slick-dots li.active {
  background-color: #fff;
}

.slick-dots button {
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  color: transparent;
  cursor: pointer;
}

/* 探索泉信按钮样式 */
.goto-main {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 10;
}

.goto-main div {
  display: inline-block;
}

.goto-main span {
  font-size: 16px;
  color: #fff;
  margin-bottom: 10px;
  display: block;
  text-shadow: 0 0 5px #000; /* 增强对比度 */
}

.goto-main img {
  width: 20px;
}
</style>