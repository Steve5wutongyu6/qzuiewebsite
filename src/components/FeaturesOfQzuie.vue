<script>
import titleIconPath from '../assets/img/title-icon.png';
import mengImagePath from '../assets/img/meng.png';
import qxts1ImagePath from '../assets/img/qxts1.png';
import qxts2ImagePath from '../assets/img/qxts2.png';
import qxts3ImagePath from '../assets/img/qxts3.png';

export default {
  name: 'SpecialColumn',
  data() {
    return {
      titleIcon: titleIconPath,
      mengImage: mengImagePath,
      qxts1Image: qxts1ImagePath,
      qxts2Image: qxts2ImagePath,
      qxts3Image: qxts3ImagePath,
    };
  },
};
</script>

<template>
  <div class="qxts-box aos-init aos-animate" data-aos="fade-up">
    <div class="main-title container">
      <div class="title-img">
        <span>Features of QUIE</span>
        <h1>泉信特色</h1>
      </div>
      <div class="more-box">
        <img :src="titleIcon" alt="title icon" />
        <a href="https://gjc.qzuie.edu.cn/">查看更多</a>
      </div>
      <div class="line-box"></div>
      <div class="meng-img">
        <img :src="mengImage" alt="meng" />
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 my-2">
          <div class="white-panel all">
            <div class="thumb">
              <a
                  href="https://gjc.qzuie.edu.cn/"
                  :style="{ backgroundImage: 'url(' + qxts1Image + ')' }"
                  class="thumb-img"
              ></a>
            </div>
            <a class="acont" href="https://gjc.qzuie.edu.cn/">
              <div class="cont">国际交流</div>
            </a>
          </div>
        </div>
        <div class="col-lg-4 my-2">
          <div class="white-panel all">
            <div class="thumb">
              <a
                  href=""
                  :style="{ backgroundImage: 'url(' + qxts2Image + ')' }"
                  class="thumb-img"
              ></a>
            </div>
            <div class="line"></div>
            <a class="acont" href="">
              <div class="cont">泉信视觉</div>
            </a>
          </div>
        </div>
        <div class="col-lg-4 my-2">
          <div class="white-panel all yellow">
            <div class="thumb">
              <a
                  href="https://xgc.qzuie.edu.cn/"
                  :style="{ backgroundImage: 'url(' + qxts3Image + ')' }"
                  class="thumb-img"
              ></a>
            </div>
            <div class="line"></div>
            <a class="acont" href="https://xgc.qzuie.edu.cn/">
              <div class="cont">校园文化</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
[data-aos^=fade][data-aos^=fade].aos-animate {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
}

[data-aos^=fade][data-aos^=fade] {
  opacity: 0;
  transition-property: opacity, -webkit-transform;
  transition-property: opacity, transform;
  transition-property: opacity, transform, -webkit-transform;
}

[data-aos=fade-up] {
  -webkit-transform: translate3d(0, 60px, 0);
  transform: translate3d(0, 60px, 0);
}

[data-aos][data-aos][data-aos-easing=ease],
body[data-aos-easing=ease] [data-aos] {
  transition-timing-function: ease;
}

[data-aos][data-aos][data-aos-duration="1000"],
body[data-aos-duration="1000"] [data-aos] {
  transition-duration: 1s;
}

[data-aos].aos-animate {
  pointer-events: auto;
}

[data-aos] {
  pointer-events: none;
}

.qxts-box {
  font-family: sans-serif;
  padding-top: 30px;
  padding-bottom: 30px;
}

.main-title {
  position: relative;
  text-align: center;
  margin-bottom: 40px;
}

.main-title .title-img {
  display: inline-block;
  position: relative;
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
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
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
}

.main-title .more-box a:hover {
  text-decoration: underline;
}

.main-title .line-box {
  height: 2px;
  background-color: #eee;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.main-title .meng-img {
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.main-title .meng-img img {
  height: 30px;
  display: block;
}

.white-panel {
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.white-panel:hover {
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.white-panel.all .thumb {
  width: 100%;
  padding-top: 56.25%;
  position: relative;
  overflow: hidden;
}

.white-panel.all .thumb .thumb-img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  display: block;
  transition: transform 0.3s ease;
}

.white-panel.all .thumb .thumb-img:hover {
  transform: scale(1.05);
}

.white-panel .line {
  height: 1px;
  background-color: #f0f0f0;
  margin: 0 15px;
}

.white-panel .acont {
  display: block;
  padding: 15px;
  text-decoration: none;
  color: inherit;
  text-align: center;
  flex-grow: 1;
}

.white-panel .acont .cont {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.white-panel.yellow {
  border-left: 5px solid #ffc107;
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
    max-width: 1140px;
  }
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.col-lg-4 {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

@media (min-width: 992px) {
  .col-lg-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
}

.my-2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}

.qxts-box *,
.qxts-box *::before,
.qxts-box *::after {
  box-sizing: border-box;
}
</style>