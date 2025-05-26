<template>
  <div class="row">
    <!-- 左侧内容区 -->
    <div class="col-lg-6">
      <div class="row">
        <!-- 左侧上栏：轮播图 -->
        <div class="col-12 my-2">
          <Loop :slides="carouselSlides" />
        </div>

        <!-- 左侧下栏：左右两栏新闻展示区 -->
        <div class="col-lg-6 my-2" v-for="(news, index) in leftNewsPanels" :key="index">
          <div class="white-panel">
            <div class="thumb">
              <a
                  :href="news.link"
                  :style="{ backgroundImage: `url(${news.image})` }"
                  class="thumb-img"
              ></a>
            </div>
            <a :href="news.link" :title="news.title">
              <div class="cont">{{ news.title }}</div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- 右侧内容区 -->
    <div class="col-lg-6">
      <div class="row">
        <!-- 右侧上栏：左右两栏新闻展示区 -->
        <div class="col-lg-6 my-2" v-for="(news, index) in rightNewsPanels" :key="index">
          <div class="white-panel">
            <div class="thumb">
              <a
                  :href="news.link"
                  :style="{ backgroundImage: `url(${news.image})` }"
                  class="thumb-img"
              ></a>
            </div>
            <a :href="news.link" :title="news.title">
              <div class="cont">{{ news.title }}</div>
            </a>
          </div>
        </div>

        <!-- 右侧下栏：新闻列表 -->
        <div class="col-12 my-2">
          <div class="gsgg-box">
            <div class="list-box">
              <div class="item" v-for="(news, index) in newsList" :key="index">
                <div class="time-box">
                  <div class="day">{{ news.day }}</div>
                  <div class="month">{{ news.month }}</div>
                </div>
                <div class="txt">
                  <a :href="news.link">{{ news.title }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入 axios
import axios from 'axios';
// 引入 Loop 组件
import Loop from './Loop.vue';

export default {
  name: 'QUIENewsContent',
  components: {
    Loop,
  },
  data() {
    return {
      // 数据将从 JSON 文件中获取
      carouselSlides: [],
      leftNewsPanels: [],
      rightNewsPanels: [],
      newsList: []
    };
  },
  mounted() {
    // 从 JSON 文件中获取新闻数据
    this.fetchNewsData();
  },
  methods: {
    async fetchNewsData() {
      try {
        const response = await axios.get('/src/json/QUIENewsContent.json');
        const data = response.data;
        this.carouselSlides = data.carouselSlides;
        this.leftNewsPanels = data.leftNewsPanels;
        this.rightNewsPanels = data.rightNewsPanels;
        this.newsList = data.newsList;
      } catch (error) {
        console.error('获取新闻数据失败:', error);
      }
    }
  }
};
</script>

<style scoped>
/* 全局样式重置 */
html, body, div, span, header, ul, li, a {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
}

*, ::after, ::before {
  box-sizing: border-box;
}

body {
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
  margin: 0;
}

:root {
  --bg_color: #dfe6e9;
  --text_color: #333;
  --text_color2: rgba(255, 176, 63, 0.9);
  --primary: #007bff;
  /* 其他变量 */
}

/* 布局样式 */
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.col-lg-6 {
  flex: 0 0 50%;
  max-width: 50%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.loop-container iframe, /* 如果Loop组件使用iframe */
.loop-container video { /* 如果Loop组件使用video */
  width: 680px;
  height: 478px;
  overflow: hidden;
}

/* 白色面板样式 */
.white-panel {
  background-color: #fff;
  padding: 15px;
  width: 345px;
  height: 312px;
  box-sizing: border-box;
  transition: transform 0.3s ease; /* 为整个面板添加过渡 */
}

/* 鼠标悬停时，白色面板内的图片进行缩放 */
.white-panel:hover .thumb-img {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.white-panel a{
  font-size: 16px;
  text-decoration: none !important;
}

.white-panel a:hover {
  text-decoration: none !important;
  color: #00258f !important;
}

/* 缩略图样式 */
.thumb {
  position: relative;
  margin-top: -16.5px;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  overflow: hidden; /* 防止图片溢出 */
}

.thumb-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  display: block;
  transition: transform 0.3s ease; /* 添加过渡效果 */
}

/* 新闻标题样式 */
.cont {
  width: 100%;
  height: 112px;
  background-color: rgb(248, 248, 251);
  font-weight: bold;
  font-size: 16px;
  box-sizing: border-box;
  text-overflow: ellipsis;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.4rem;
  white-space: normal;
  overflow: hidden;
  color: rgb(35, 24, 22);
}

.cont:hover {
  color: rgb(0, 29, 138);
  text-decoration: none; /* 确保悬停时没有下划线 */
}

.cont a {
  color: inherit; /* 继承父元素颜色 */
  text-decoration: none;
  background-color: transparent;
}

/* 新闻列表样式 */
.gsgg-box {
  width: 690px;
  height: 510px;
  background-color: #f8f9fa;
  padding: 15px;
  margin-top: -12px;
  box-sizing: border-box;
}

.list-box .item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

/* 微调后的 .time-box 样式 */
.time-box {
  width: 72px;
  height: 72px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-right: 1.15rem;
}

/* 上半部分：橙底白字 */
.time-box .day {
  flex: 1;
  background-color: #ffa500; /* 橙色，可以根据具体需求调整 */
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
}

/* 下半部分：白底灰字 */
.time-box .month {
  flex: 1;
  background-color: #ffffff;
  color: #666666;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
}

/* 新闻标题链接样式 */
.txt a {
  color: #333;
  text-decoration: none;
}

.txt a:hover {
  color: #0056b3; /* 保持颜色一致 */
  text-decoration: none; /* 确保悬停时没有下划线 */
}

/* 响应式设计（可选） */
@media (max-width: 768px) {

  .white-panel {
    width: 100%;
    height: auto;
  }
}

@media (max-width: 576px) {
  .time-box {
    width: 60px;
    height: 60px;
  }
  .time-box .day {
    font-size: 1rem;
  }
  .time-box .month {
    font-size: 0.8rem;
  }
}
</style>
