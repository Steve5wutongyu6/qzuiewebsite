<template>
  <!-- 去掉 data-ride="carousel" 属性，仅保留 "carousel" 类用于 CSS -->
  <div id="myCustomCarousel" class="carousel">
    <!-- 分页指示器（右下角、横线样式） -->
    <ol class="carousel-indicators custom-indicators">
      <li
          v-for="(slide, index) in slides"
          :key="index"
          :class="{ active: currentSlide === index }"
          @click="goToSlide(index)"
      ></li>
    </ol>

    <!-- 轮播内容 -->
    <div class="carousel-inner">
      <div
          v-for="(slide, index) in slides"
          :key="index"
          :class="['carousel-item', { active: currentSlide === index }]"
          :data-aos="aosAnimation"
      >
        <!-- 图片链接 & 背景图 -->
        <a
            :href="slide.link"
            :style="{ backgroundImage: 'url(' + slide.image + ')' }"
            class="carousel-item-img"
        ></a>

        <!-- 左下角标题 -->
        <div class="image-label">
          <p>{{ slide.title }}</p>
        </div>
      </div>
    </div>

    <!-- 左右切换按钮 -->
    <button
        class="carousel-control-prev"
        type="button"
        @click="prevSlide"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span> <!-- 提高可访问性 -->
    </button>
    <button
        class="carousel-control-next"
        type="button"
        @click="nextSlide"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span> <!-- 提高可访问性 -->
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

// 示例轮播数据：标题由用户自定义
const slides = [
  {
    image: new URL('../assets/img/1.jpg', import.meta.url).href,
    title: '我是图片一的标题',
    link: 'https://example.com/1'  // 移除链接末尾的空格
  },
  {
    image: new URL('../assets/img/2.jpg', import.meta.url).href,
    title: '我是图片二的标题',
    link: 'https://example.com/2'
  },
  {
    image: new URL('../assets/img/3.jpg', import.meta.url).href,
    title: '我是图片三的标题',
    link: 'https://example.com/3'
  }
];

const currentSlide = ref(0);
const intervalTime = 5000; // 自动播放间隔（毫秒）
let slideInterval = null;
const aosAnimation = 'fade-up'; // AOS动画类型

/** 跳转到指定索引的幻灯片 */
const goToSlide = (index) => {
  console.log('跳转到幻灯片索引:', index);  // 调试用
  currentSlide.value = index;
  resetInterval();
};

/** 上一张 */
const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
  resetInterval();
};

/** 下一张 */
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
  resetInterval();
};

/** 清除并重启自动播放 */
const resetInterval = () => {
  clearInterval(slideInterval);
  startInterval();
};

/** 开始自动播放 */
const startInterval = () => {
  slideInterval = setInterval(nextSlide, intervalTime);
};

onMounted(() => {
  // 初始化 AOS（如果需要的话）
  AOS.init({
    duration: 1000,
    once: false
  });

  // 启动自定义自动轮播
  startInterval();
});

onUnmounted(() => {
  // 页面卸载时停止计时器
  clearInterval(slideInterval);
});
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
}

/* 轮播内部结构保持不变，高度可自定义 */
.carousel-inner {
  position: relative;
  height: 400px;
  width: 100%;
  overflow: hidden;
}

.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.carousel-item.active {
  opacity: 1;
  z-index: 1;
}

.carousel-item-img {
  display: block;
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center;
}

/* 左下角标题 */
.image-label {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  z-index: 2;
  font-size: 1rem;
  color: #fff;
  text-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.5);
}

/* 可根据需要保留或删除此“原轮播标题” */
.carousel-caption {
  position: absolute;
  bottom: 2rem;
  right: 1.5rem; /* 也可以 left，随需求修改 */
  z-index: 2;
  max-width: 50%;
  text-align: right;
}
.carousel-caption p {
  font-size: 1.25rem;
  color: #fff;
  margin: 0;
  text-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.5);
}

/* 分页指示器改成三个横线（—— —— ——）并移到右下角 */
.carousel-indicators.custom-indicators {
  position: absolute;
  bottom: 1rem;
  right: 1rem; /* 如果想改在左下角，可改 left:1rem; right:auto; */
  left: auto;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex; /* 横向排列 */
  flex-direction: row;
  z-index: 2;
}

/* 短横线指示器样式 */
.carousel-indicators.custom-indicators li {
  cursor: pointer;
  background: none;
  border: none;
  border-radius: 0;
  width: auto;
  height: auto;
  margin: 0 0.3rem; /* 两条线之间的间距 */
  position: relative;
}

/* 用伪元素添加“—”字符 */
.carousel-indicators.custom-indicators li::before {
  content: '—';
  color: #fff;
  font-size: 1.25rem;
  font-weight: 400;
  transition: all 0.3s ease;
}

/* 当前激活线条更粗或更大 */
.carousel-indicators.custom-indicators li.active::before {
  font-weight: 900; /* 加粗 */
  font-size: 1.5rem; /* 放大 */
  color: #fff;
}

/* 去除超级链接文字“Previous / Next” */
.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  padding: 0;
  background: none;
  border: 0;
  opacity: 0.5;
  transition: opacity 0.15s ease;
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
  opacity: 1;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background: no-repeat center center;
  background-size: 100% 100%;
}

/* 可选：调整按钮图标，可以根据需要自定义 */
.carousel-control-prev-icon {
  background-image: url('data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTguMjUsMjBDMTguMjUsMjAsMTguMjUsMjAsMTAuMjUsMTEuMDg2OTkxMjM3MzQ5MjI5MjIsczIsMlMyNywwLDQwMHssIHRvIDU2MnK0oIk5MZV0vdHV0YT4iLz48L3N2Zz4='); /* 替换为实际图标 */
}

.carousel-control-next-icon {
  background-image: url('data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNSwxMCBjLTIuMTAxNSwwLTMsMi44OC00LDUgMS40MSwzLjEgNC4xMSw1LDU1LC4gKj0wLjIgSDFgiLz48L3N2Zz4='); /* 替换为实际图标 */
}
</style>
