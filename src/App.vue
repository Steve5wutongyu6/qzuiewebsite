<script setup>

import TopNavBox from "./components/top-nav-box.vue";
import NavList from "./components/nav-list.vue";
import BannerBox from "./components/banner-box.vue";

</script>

<template>
  <div class="app-container">

    <!-- 轮播图层：banner + 渐变 -->
    <div class="background-layer">
      <banner-box class="background-banner" />
      <div class="gradient-overlay"></div>
    </div>

    <!-- 单独保留 header 内容层（可交互） -->
    <div class="interactive-header">
      <top-nav-box />
      <nav-list />
    </div>

  </div>
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
</style>

