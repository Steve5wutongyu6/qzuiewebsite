<template>
  <div
      id="mtqx-box"
      class="mtqx-box aos-init"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease"
  >
    <div class="fourslider container">
      <!-- 轮播容器 -->
      <div class="slider_four_in_line">
        <!-- 内部滑动容器 -->
        <div class="slider_inner" :style="sliderStyle">
          <!-- 单个新闻条目 -->
          <div
              v-for="(news, index) in newsList"
              :key="index"
              class="mtqx-item"
              @mouseenter="hoveredIndices.add(index)"
              @mouseleave="hoveredIndices.delete(index)"
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

        <!-- 导航按钮 -->
        <div class="next_button" @click="goNext"></div>
        <div class="prev_button" @click="goPrev"></div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 如果需要在本组件中使用 AOS，可在此处引入并初始化
 * npm install aos --save
 */
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'NewsLoop',
  data() {
    return {
      currentPage: 0, // 当前页索引
      intervalId: null, // 自动轮播定时器
      hoveredIndices: new Set(), // 记录当前悬浮的条目索引

      // 新闻数据示例，共 9 条
      newsList: [
        {
          source: '新福建',
          date: '2025-04-18',
          link: 'https://share.fjdaily.com/displayTemplate/news/newsDetail/398/3237648.html?isView=true',
          content: '【新福建】泉州信息工程学院在市教育系统外事暨台港澳事务工作培训会上发言'
        },
        {
          source: '东南网',
          date: '2025-04-10',
          link: 'https://i.fjsen.com/2025-04/10/content_31881174.htm',
          content: '【东南网】泉州信息工程学院“智慧农业三维可视化平台”获国家级三等奖'
        },
        {
          source: '新福建',
          date: '2025-04-10',
          link: 'https://share.fjdaily.com/displayTemplate/news/newsDetail/398/3218197.html?isShare=true&advColumnId=398',
          content: '【新福建】泉州信息工程学院“智慧农业三维可视化平台”获国家级三等奖'
        },
        {
          source: '东南网',
          date: '2025-04-07',
          link: 'http://qz.fjsen.com/2025-04/07/content_31878098.htm',
          content: '【东南网】泉州市各部门部署开展深入贯彻中央八项规定精神学习教育 高标准严要求推动..'
        },
        {
          source: '泉州通',
          date: '2025-04-07',
          link: 'https://share.qztqz.com/pub/template/displayTemplate/news/newsDetail/27/1547940.html?isShare=true',
          content: '【泉州通】泉州市各部门部署开展深入贯彻中央八项规定精神学习教育'
        },
        {
          source: '东南网',
          date: '2025-04-02',
          link: 'https://i.fjsen.com/2025-04/02/content_31875185.htm?page=pc',
          content: '【东南网】AI如何重塑教育生态？这场研讨会在泉州召开'
        },
        {
          source: '新福建',
          date: '2025-04-01',
          link: 'https://share.fjdaily.com/displayTemplate/news/newsDetail/398/3200764.html?isShare=true&advColumnId=398',
          content: '【新福建】AI如何重塑教育生态？这场研讨会在泉州召开'
        },
        {
          source: '台海网',
          date: '2025-04-01',
          link: 'http://m.taihainet.com/news/fujian/shms/2025-04-01/2826901.html',
          content: '【台海网】AI如何重塑教育生态？这场研讨会在泉州召开'
        },
        {
          source: '新福建',
          date: '2025-04-18',
          link: 'https://share.fjdaily.com/displayTemplate/news/newsDetail/398/3237648.html?isView=true',
          content: '【新福建】泉州信息工程学院在市教育系统外事暨台港澳事务工作培训会上发言'
        }
      ]
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.newsList.length / 4)
    },
    sliderStyle() {
      return {
        width: `${(this.newsList.length / 4) * 100}%`,
        transform: `translateX(-${this.currentPage * 100}%)`,
        transition: 'transform 0.5s ease'
      }
    }
  },
  mounted() {
    // 初始化 AOS 动效
    AOS.init()

    // 启动自动轮播
    this.startAutoSlide()
  },
  beforeUnmount() {
    // 组件销毁前清除定时器
    this.stopAutoSlide()
  },
  methods: {
    goNext() {
      this.currentPage = (this.currentPage + 1) % this.totalPages
    },
    goPrev() {
      this.currentPage =
          (this.currentPage - 1 + this.totalPages) % this.totalPages
    },
    startAutoSlide() {
      this.intervalId = setInterval(() => {
        this.goNext()
      }, 3000)
    },
    stopAutoSlide() {
      if (this.intervalId) {
        clearInterval(this.intervalId)
        this.intervalId = null
      }
    }
  }
}
</script>

<style scoped>
/* 背景样式及布局 */
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

/* 容器宽度与位置控制 */
.fourslider.container {
  width: 100%;
  max-width: 1440px; /* 根据需要调整 */
  margin: 0 auto;
  position: relative;
}

/* 轮播外框 */
.slider_four_in_line {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

/* 内部滑动容器 */
.slider_inner {
  display: flex;
  width: 100%;
}

/* 单个新闻条目的样式 */
.mtqx-item {
  flex: 0 0 25%; /* 一次展示四个 */
  box-sizing: border-box;
  padding: 10px;
  transition: background-color 0.5s ease;
  background-color: rgba(0, 0, 0, 0); /* 默认透明背景 */
}

/* 鼠标悬浮时背景变白，均匀渐变 */
.mtqx-item:hover {
  background-color: rgba(255, 255, 255, 1);
}

/* 内部内容布局 */
.position-box {
  width: 100%;
  height: 100%;
  position: relative;
}

.bottom {
  /* 根据原样式需要调整或保留 */
}

/* 链接样式 */
.mtqx-item a {
  display: block;
  color: #231816; /* 默认文字颜色 */
  text-decoration: none;
  width: 100%;
  height: 100%;
  transition: color 0.3s ease;
}

.mtqx-item a:hover {
  color: #001D8A; /* 悬浮时文字颜色变化 */
}

/* 内容主体 */
.cont {
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  height: 100%;
  box-sizing: border-box;
}

/* 标题样式 */
.title {
  font-size: 1.2rem;
  border-left: 2px solid #FFB03F;
  padding-left: 0.5rem;
}

/* 内容文字样式 */
.txt {
  font-size: 1rem;
  text-align: justify;
}

/* 导航按钮样式 */
.next_button,
.prev_button {
  position: absolute;
  top: 50%;
  width: 50px;
  height: 50px;
  border: 1px solid #000;
  background: #fff;
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
}

.next_button::after {
  border-left: 15px solid #000;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  transform: translate(-50%, -50%);
}

.prev_button::after {
  border-right: 15px solid #000;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  transform: translate(-50%, -50%);
}

/* 鼠标悬浮时导航按钮更明显 */
.next_button:hover,
.prev_button:hover {
  opacity: 1;
}

/* 响应式调整 */
@media (max-width: 1200px) {
  .mtqx-item {
    flex: 0 0 25%; /* 保持四个条目 */
  }
}

@media (max-width: 992px) {
  .mtqx-item {
    flex: 0 0 33.3333%; /* 三个条目 */
  }
}

@media (max-width: 768px) {
  .mtqx-item {
    flex: 0 0 50%; /* 两个条目 */
  }
}

@media (max-width: 576px) {
  .mtqx-item {
    flex: 0 0 100%; /* 一个条目 */
  }
}
</style>
