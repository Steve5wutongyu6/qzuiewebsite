<template>
  <div class="standard-content-box aos-init aos-animate" data-aos="fade-up">
    <div class="main-title container">
      <div class="title-img">
        <span>Teaching and Research</span>
        <h1>教学科研</h1>
      </div>
      <div class="more-box">
        <img :src="titleIcon" alt="title icon" />
        <a href="https://www.qzuie.edu.cn/news-list-jiaoxuekeyan.html">查看更多</a>
      </div>
      <div class="line-box"></div>
      <div class="meng-img">
        <img :src="mengImage" alt="meng" />
      </div>
    </div>
    <div class="container">
      <!-- 两栏布局 -->
      <div class="row">
        <div class="col-lg-6 mb-4">
          <div class="white-panel left-pannel all h-100">
            <!-- 左侧内容区 -->
            <Loop :slides="slides" />
          </div>
        </div>

        <div class="col-lg-6 mb-4">
          <div class="white-panel right-panel all h-100">
            <!-- 右侧内容区 -->
            <div class="p-4">
              <div class="list-box">
                <div class="item" v-for="(news, index) in rightNewsItems" :key="index">
                  <div class="img-box">
                    <img :src="news.image" alt="新闻图片" />
                  </div>
                  <div class="txt-box">
                    <div class="txt">
                      <a :href="news.link">{{ news.title }}</a>
                      <span>{{ news.date }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> <!-- end of row -->
    </div> <!-- end of container -->
  </div> <!-- end of standard-content-box -->
</template>

<script>
// 引入 axios
import axios from 'axios';
// 引入 Loop 组件
import Loop from "./Loop.vue";

export default {
  name: 'TeachingandResearch',
  components: { Loop },
  data() {
    return {
      titleIcon: '',
      mengImage: '',
      slides: [],
      rightNewsItems: []
    };
  },
  mounted() {
    // 从 JSON 文件中获取数据
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('/src/json/TeachingandResearch.json');
        const data = response.data;
        this.titleIcon = data.titleIcon;
        this.mengImage = data.mengImage;
        this.slides = data.slides;
        this.rightNewsItems = data.rightNewsItems;
      } catch (error) {
        console.error('获取教学科研数据失败:', error);
      }
    }
  }
};
</script>

<style scoped>
.standard-content-box {
  font-family: sans-serif;
  padding-top: 30px;
  padding-bottom: 30px;
}

.main-title {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 3.55rem auto 1rem auto;
  position: relative;
  padding-bottom: 1.5rem;
}

.main-title .title-img {
  text-align: left;
}

.main-title .title-img span {
  font-size: 18px;
  color: #777;
  display: block;
}

.main-title .title-img h1 {
  font-size: 36px;
  color: #333;
  margin: 5px 0 0 0;
  font-weight: bold;
}

.main-title .more-box {
  display: flex;
  align-items: center;
}

.main-title .more-box img {
  margin-right: 8px;
  height: 16px;
  width: auto;
}

.main-title .more-box a {
  font-size: 16px;
  color: #007bff;
  text-decoration: none;
  white-space: nowrap;
}

.main-title .more-box a:hover {
  text-decoration: underline;
}

.main-title .line-box {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: #dee2e6;
}

.main-title .meng-img {
  display: flex;
  margin-left: 72.5%;
}

.main-title .meng-img {
  position: absolute;
  right: 0; /* 右侧对齐 */
}

.main-title .meng-img img {
  height: 50px;
  display: block;
}

.title-img span {
  width: 190px;
  white-space: nowrap;
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1440px;
  }
}

.row {
  display: flex;
}

.standard-content-box *,
.standard-content-box *::before,
.standard-content-box *::after {
  box-sizing: border-box;
}

.col-lg-6 {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

@media (min-width: 992px) {
  .col-lg-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

.white-panel.right-panel {
  background-color: rgba(123, 198, 233, 1);
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.white-panel.left-pannel {
  background-color: #fff; /* 或者你想要的颜色，比如透明 transparent */
  overflow: visible; /* 确保轮播图不被裁切 */
  z-index: 200;
}

.white-panel:hover {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.carouselExampleIndicators2 {
  height: 100%;
}

/* 响应式间距优化 */
.mb-4 {
  margin-bottom: 1.5rem;
}

.h-100 {
  height: 100%;
}

.p-4 {
  width: 690px;
  height: 524px;
  padding: 1.5rem;
}

.m-0 {
  margin: 0;
}

.list-box {
  display: flex;
  flex-direction: column;
  gap: 1rem; /* 项目之间的间距 */
}

.item {
  display: flex;
  align-items: center;
  height: 8.55rem;
  border-bottom: 1px solid #d6d6d6;
  color: #fff;
}

.list-box .txt-box {
  flex: 1;
  width: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.img-box {
  width: 228px;
  height: 140px;
  margin-right: 1.15rem;
  margin-bottom: 15px;
  overflow: hidden; /* 确保内容不会溢出 */
  position: relative; /* 用于定位 img */
}

.img-box img {
  width: 100%; /* 宽度占满 .img-box */
  height: 100%; /* 高度占满 .img-box */
  object-fit: cover; /* 保持图片比例并裁剪以适应容器 */
  display: block; /* 去除底部空白隙 */
  transition: transform 0.5s ease; /* 平滑过渡效果 */
}

.img-box img:hover {
  transform: scale(1.1); /* 缩放效果 */
}

.txt-box .txt a {
  font-size: 1.1rem;
  flex: 1;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

.txt-box .txt a:hover {
  text-decoration: none;
  color: #001D8A;
}

.txt-box .txt span {
  display: block;
  font-size: 1.1rem;
  color: white;
  margin-top: 0.5rem;
}

.white-panel {
  display: flex;
  flex-direction: column;
  height: 100%; /* 父容器占满 */
}
</style>
