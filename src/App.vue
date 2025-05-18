<script setup>

import TopNavBox from "./components/top-nav-box.vue";
import NavList from "./components/nav-list.vue";
import BannerBox from "./components/banner-box.vue";
import Footer from "./components/Footer.vue";
import Test from "./components/Test.vue";
import NavTopfileBox from "./components/nav-topfile-box.vue";
import {onMounted, onUnmounted, ref} from "vue";

/*滚动监听逻辑*/
const isScrolled = ref(false);
const scrollThreshold = 100; // 滚动阈值（像素）

const handleScroll = () => {
  isScrolled.value = window.scrollY > scrollThreshold;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="app-container">

    <!-- 轮播图层：banner + 渐变 -->
    <div class="background-layer">
      <banner-box class="background-banner" />
      <div class="gradient-overlay"></div>
    </div>

    <!-- 动态导航栏 -->
    <div class="interactive-header">
      <transition name="fade">
        <div class="header-wrapper">
          <top-nav-box v-if="!isScrolled" />
          <nav-list v-if="!isScrolled" />
        </div>
      </transition>
      <transition name="fade">
        <nav-topfile-box v-show="isScrolled" :style="{ opacity: isScrolled ? 1 : 0 }" />
      </transition>

    </div>
  </div>


  <Test/>
  <div class="test-box">
    <Test/>
  </div>
  <Footer/>
</template>

<style scoped>.app-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}

/* banner 层 */
.background-layer {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  pointer-events: auto;
}

.background-banner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
  overflow: hidden;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  z-index: 1;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0)
  );
  pointer-events: none;
}

/* 可交互的 header 层 */
.interactive-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  pointer-events: auto; /* ✅ 重新启用交互 */
}

.test-box {
  position: relative;
  width: 100%;
  pointer-events: auto;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.interactive-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: background 0.3s ease;
}

.interactive-header.scrolled {
  background: #ffffff !important;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
</style>

