<!-- IntheMedia.vue -->
<template>
  <div class="standard-content-box aos-init aos-animate" data-aos="fade-up">
    <div class="main-title container">
      <div class="title-img">
        <span>In the Media</span>
        <h1>媒体泉信</h1>
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
    <div class="full-width-container">
      <NewsLoop />
    </div>
  </div>
</template>

<script>
import titleIconPath from '../assets/img/title-icon.png';
import mengImagePath from '../assets/img/meng.png';
import NewsLoop from "./mtqx-box.vue";

export default {
  name: 'IntheMedia',
  components: { NewsLoop },
  data() {
    return {
      titleIcon: titleIconPath,
      mengImage: mengImagePath
    };
  },
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
  position: absolute;
  right: 0;
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

.full-width-container {
  width: 99.5vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.standard-content-box *,
.standard-content-box *::before,
.standard-content-box *::after {
  box-sizing: border-box;
}
</style>
