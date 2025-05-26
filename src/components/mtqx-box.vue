<template>
  <div
      id="mtqx-box"
      class="mtqx-box aos-init"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease"
  >
    <div class="fourslider container">
      <!-- 动画过渡区域仅包含新闻项容器 -->
      <transition :name="transitionName" mode="out-in">
        <div
            class="news-container"
            :key="currentPage"
        >
          <div class="slider_four_in_line">
            <!-- 动态渲染新闻项 -->
            <div
                v-for="(news, index) in displayedNews"
                :key="index"
                class="mtqx-item"
                @mouseenter="handleMouseEnter(index)"
                @mouseleave="handleMouseLeave(index)"
            >
              <div class="position-box">
                <div class="bottom"></div>
                <a :href="news.link" target="_blank">
                  <div class="cont">
                    <div class="title">
                      <div class="name">{{ news.source }}</div>
                      <div class="time">{{ news.date }}</div>
                    </div>
                    <div class="txt">{{ news.content }}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <!-- 导航按钮保持在外部，避免参与动画 -->
      <div class="prev_button" @click="goPrev" aria-label="Previous"></div>
      <div class="next_button" @click="goNext" aria-label="Next"></div>
    </div>
  </div>
</template>

<script>
/**
 * 确保已安装并引入 AOS 库：
 * npm install aos --save
 */
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios'; // 引入 axios

export default {
  name: 'MtqxBox',
  data() {
    return {
      currentPage: 0, // 当前页码
      intervalId: null, // 自动轮播定时器
      hoveredIndex: null, // 当前悬浮的新闻项索引
      direction: 'next', // 动画方向

      newsList: [], // 新闻数据将从 JSON 文件中获取
    };
  },
  computed: {
    totalPages() {
      // 计算总页数，基于每页显示4条新闻
      return Math.ceil(this.newsList.length / 4);
    },
    displayedNews() {
      if (this.newsList.length === 0) return [];
      // 每页显示4条新闻，循环显示
      const start = (this.currentPage * 4) % this.newsList.length;
      const displayed = [];
      for (let i = 0; i < 4; i++) {
        displayed.push(this.newsList[(start + i) % this.newsList.length]);
      }
      return displayed;
    },
    transitionName() {
      return this.direction === 'next' ? 'slide-next' : 'slide-prev';
    },
  },
  mounted() {
    // 初始化 AOS 动效
    AOS.init();

    // 从 JSON 文件中获取新闻数据
    this.fetchNewsData();

    // 启动自动轮播，每3秒切换一次
    this.startAutoSlide();
  },
  beforeUnmount() {
    // 组件销毁前清除定时器
    this.stopAutoSlide();
  },
  methods: {
    async fetchNewsData() {
      try {
        // 从json/mtqx-box.json文件中获取新闻数据
        const response = await axios.get('/src/json/mtqx-box.json');
        this.newsList = response.data;
      } catch (error) {
        console.error('获取新闻数据失败:', error);
      }
    },
    goNext() {
      if (this.newsList.length === 0) return;
      this.direction = 'next';
      this.currentPage = (this.currentPage + 1) % this.totalPages;
    },
    goPrev() {
      if (this.newsList.length === 0) return;
      this.direction = 'prev';
      this.currentPage =
          (this.currentPage - 1 + this.totalPages) % this.totalPages;
    },
    startAutoSlide() {
      this.intervalId = setInterval(() => {
        this.goNext();
      }, 3000); // 3秒
    },
    stopAutoSlide() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    },
    handleMouseEnter(index) {
      this.hoveredIndex = index;
      this.stopAutoSlide(); // 悬停时停止自动轮播
    },
    handleMouseLeave(index) {
      if (this.hoveredIndex === index) {
        this.hoveredIndex = null;
        this.startAutoSlide(); // 鼠标离开时恢复自动轮播
      }
    },
  },
};
</script>

<style scoped>
/* 背景及布局 */
#mtqx-box {
  width: 100%;
  background-color: rgba(123, 198, 233, 1);
  background-image: url('../assets/img/mtqx.png'); /* 确保图片路径正确 */
  background-size: cover;
  height: 21.6rem;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-position: center;
}

/* 容器样式 */
.fourslider.container {
  width: 100%;
  max-width: 1440px; /* 根据需要调整 */
  margin: 0 auto;
  position: relative;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
}

/* 新闻项容器，用于动画 */
.news-container {
  width: 100%;
  display: flex;
  position: relative;
}

/* 轮播框架 */
.slider_four_in_line {
  width: 100%;
  height: 100%;
  display: flex;
  padding-left: 80px; /* 增加内边距 */
  padding-right: 80px; /* 增加内边距 */
  transition: transform 0.5s ease;
}

/* 新闻项样式 */
.mtqx-item {
  flex: 0 0 25%; /* 每页4条 */
  box-sizing: border-box;
  padding: 10px;
  transition: background-color 0.3s ease;
  position: relative;
  opacity: 1;
}

/* 背景颜色变化 */
.mtqx-item:hover {
  background-color: #ffffff;
}

/* 内容布局 */
.position-box {
  width: 100%;
  height: 100%;
  position: relative;
}

.bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  border-radius: 1.0rem;
  background-color: #fff;
  transform-origin: bottom;
  transition: all 0.5s;
}

.cont {
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  height: 100%;
  box-sizing: border-box;
}

.title {
  font-size: 1.2rem;
  border-left: 2px solid #ffb03f;
  padding-left: 0.5rem;
}

.txt {
  font-size: 1rem;
  text-align: justify;
}

/* 链接样式 */
.mtqx-item a {
  display: block;
  color: white; /* 默认文字颜色 */
  text-decoration: none;
  width: 100%;
  height: 100%;
  transition: color 0.3s ease;
}

.mtqx-item a:hover {
  color: #001d8a; /* 悬停时文字颜色变化 */
}

/* 导航按钮样式 */
.next_button,
.prev_button {
  position: absolute;
  top: 50%;
  width: 50px; /* 根据需要调整按钮大小 */
  height: 50px; /* 根据需要调整按钮大小 */
  z-index: 5000;
  cursor: pointer;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
  transform: translateY(-50%);
}

.next_button {
  right: 20px; /* 调整与右侧内边距的距离 */
}

.prev_button {
  left: 20px; /* 调整与左侧内边距的距离 */
}

/* 箭头样式 */
.next_button::after,
.prev_button::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-style: solid;
  transform: translate(-50%, -50%);
}

.next_button::after {
  border-width: 10px 0 10px 15px;
  border-color: transparent transparent transparent #000;
}

.prev_button::after {
  border-width: 10px 15px 10px 0;
  border-color: transparent #000 transparent transparent;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .slider_four_in_line {
    padding-left: 60px;
    padding-right: 60px;
  }

  .mtqx-item {
    flex: 0 0 25%;
  }

  .next_button,
  .prev_button {
    width: 40px;
    height: 40px;
    line-height: 40px;
  }

  .next_button {
    right: 15px;
  }

  .prev_button {
    left: 15px;
  }
}

@media (max-width: 992px) {
  .mtqx-item {
    flex: 0 0 25%;
  }
}

@media (max-width: 768px) {
  .slider_four_in_line {
    padding-left: 50px;
    padding-right: 50px;
  }

  .mtqx-item {
    flex: 0 0 50%;
  }

  .next_button,
  .prev_button {
    width: 35px;
    height: 35px;
    line-height: 35px;
  }

  .next_button {
    right: 10px;
  }

  .prev_button {
    left: 10px;
  }
}

@media (max-width: 576px) {
  .mtqx-item {
    flex: 0 0 100%;
  }
}

/* 切换动画效果 */
.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: transform 0.5s ease;
}

.slide-next-enter-from {
  transform: translateX(100%);
}

.slide-next-enter-to {
  transform: translateX(0);
}

.slide-next-leave-from {
  transform: translateX(0);
}

.slide-next-leave-to {
  transform: translateX(-100%);
}

.slide-prev-enter-from {
  transform: translateX(-100%);
}

.slide-prev-enter-to {
  transform: translateX(0);
}

.slide-prev-leave-from {
  transform: translateX(0);
}

.slide-prev-leave-to {
  transform: translateX(100%);
}
</style>
