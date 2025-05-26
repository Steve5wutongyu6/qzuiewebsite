<template>
  <div
      id="mtqx-box"
      class="mtqx-box aos-init"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease"
  >
    <div class="fourslider container">
      <div class="slider slider_four_in_line">
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

        <!-- 导航按钮 -->
        <div class="prev_button" @click="goPrev"></div>
        <div class="next_button" @click="goNext"></div>
      </div>
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

export default {
  name: 'MtqxBox',
  data() {
    return {
      currentPage: 0, // 当前页码
      intervalId: null, // 自动轮播定时器
      hoveredIndex: null, // 当前悬浮的新闻项索引

      // 新闻数据示例（共9条）
      newsList: [
        {
          source: '新福建',
          date: '2025-04-18',
          link: 'https://share.fjdaily.com/displayTemplate/news/newsDetail/398/3237648.html?isView=true',
          content: '【新福建】泉州信息工程学院在市教育系统外事暨台港澳事务工作培训会上发言',
        },
        {
          source: '东南网',
          date: '2025-04-10',
          link: 'https://i.fjsen.com/2025-04/10/content_31881174.htm',
          content: '【东南网】泉州信息工程学院“智慧农业三维可视化平台”获国家级三等奖',
        },
        {
          source: '新福建',
          date: '2025-04-10',
          link: 'https://share.fjdaily.com/displayTemplate/news/newsDetail/398/3218197.html?isShare=true&advColumnId=398',
          content: '【新福建】泉州信息工程学院“智慧农业三维可视化平台”获国家级三等奖',
        },
        {
          source: '东南网',
          date: '2025-04-07',
          link: 'http://qz.fjsen.com/2025-04/07/content_31878098.htm',
          content:
              '【东南网】泉州市各部门部署开展深入贯彻中央八项规定精神学习教育 高标准严要求推动..',
        },
        {
          source: '泉州通',
          date: '2025-04-07',
          link: 'https://share.qztqz.com/pub/template/displayTemplate/news/newsDetail/27/1547940.html?isShare=true',
          content: '【泉州通】泉州市各部门部署开展深入贯彻中央八项规定精神学习教育',
        },
        {
          source: '东南网',
          date: '2025-04-02',
          link: 'https://i.fjsen.com/2025-04/02/content_31875185.htm?page=pc',
          content: '【东南网】AI如何重塑教育生态？这场研讨会在泉州召开',
        },
        {
          source: '新福建',
          date: '2025-04-01',
          link: 'https://share.fjdaily.com/displayTemplate/news/newsDetail/398/3200764.html?isShare=true&advColumnId=398',
          content: '【新福建】AI如何重塑教育生态？这场研讨会在泉州召开',
        },
        {
          source: '台海网',
          date: '2025-04-01',
          link: 'http://m.taihainet.com/news/fujian/shms/2025-04-01/2826901.html',
          content: '【台海网】AI如何重塑教育生态？这场研讨会在泉州召开',
        },
        {
          source: '新福建',
          date: '2025-04-18',
          link: 'https://share.fjdaily.com/displayTemplate/news/newsDetail/398/3237648.html?isView=true',
          content: '【新福建】泉州信息工程学院在市教育系统外事暨台港澳事务工作培训会上发言',
        },
      ],
    };
  },
  computed: {
    totalPages() {
      // 计算总页数，实际上由于循环，这个值不再严格必要，但保留以便参考
      return this.newsList.length;
    },
    displayedNews() {
      // 每页显示4条新闻，循环显示
      const start = this.currentPage;
      const displayed = [];
      for (let i = 0; i < 4; i++) {
        displayed.push(this.newsList[(start + i) % this.newsList.length]);
      }
      return displayed;
    },
  },
  mounted() {
    // 初始化 AOS 动效
    AOS.init();

    // 启动自动轮播，每3秒切换一次
    this.startAutoSlide();
  },
  beforeUnmount() {
    // 组件销毁前清除定时器
    this.stopAutoSlide();
  },
  methods: {
    goNext() {
      this.currentPage = (this.currentPage + 4) % this.newsList.length;
    },
    goPrev() {
      this.currentPage =
          (this.currentPage - 4 + this.newsList.length) % this.newsList.length;
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
    },
    handleMouseLeave(index) {
      if (this.hoveredIndex === index) {
        this.hoveredIndex = null;
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

/* 轮播框架 */
.slider_four_in_line {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  user-select: none;
  display: flex;
}

/* 新闻项样式 */
.mtqx-item {
  flex: 0 0 25%; /* 每页4条 */
  box-sizing: border-box;
  padding: 10px;
  transition: background-color 0.3s ease;
  position: relative;
  opacity: 1;
  /* 隐藏动画类可以根据需要添加 */
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
  border-radius: 0.4rem;
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
  width: 50px;
  height: 50px;
  opacity: 0.5;
  z-index: 5000;
  cursor: pointer;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
  transform: translateY(-50%);
}

.next_button {
  right: 10px;
}

.prev_button {
  left: 10px;
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
  .mtqx-item {
    flex: 0 0 25%;
  }
}

@media (max-width: 992px) {
  .mtqx-item {
    flex: 0 0 25%;
  }
}

@media (max-width: 768px) {
  .mtqx-item {
    flex: 0 0 50%;
  }
}

@media (max-width: 576px) {
  .mtqx-item {
    flex: 0 0 100%;
  }
}
</style>
