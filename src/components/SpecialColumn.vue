<template>
  <div class="special-column-vue">
    <div class="s7">
      <div class="w16">
        <div class="tit">
          <div>
            <h2><img src="../assets/img/tit-icon7.png" alt="">专题专栏</h2>
            <h3>Special Column</h3>
          </div>
        </div>
        <div class="picScroll-left1">
          <div class="bd">
            <div class="tempWrap">
              <ul class="picList" :style="{ width: totalWidth + 'px', left: currentLeft + 'px' }">
                <li v-for="(item, index) in clonedItems" :key="'clone-start-' + index" class="clone">
                  <div class="pic">
                    <a :href="item.link" target="_blank">
                      <!--                      <img :src="getImageUrl(item.imgSrc)" :alt="item.alt || 'Image'">-->
                      <img :src="item.imgSrc" :alt="item.alt || 'Image'">
                    </a>
                  </div>
                </li>
                <li v-for="(item, index) in items" :key="'original-' + index">
                  <div class="pic">
                    <a :href="item.link" target="_blank">
                      <img :src="item.imgSrc" :alt="item.alt || 'Image'">
                    </a>
                  </div>
                </li>
                <li v-for="(item, index) in clonedItems" :key="'clone-end-' + index" class="clone">
                  <div class="pic">
                    <a :href="item.link" target="_blank">
                      <img :src="item.imgSrc" :alt="item.alt || 'Image'">
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="hd">
            <a class="prev" @click="scrollPrev"><img src="../assets/img/PREVIOUS.png" alt="Previous"></a>
            <a class="next" @click="scrollNext"><img src="../assets/img/ic_next_black3.png" alt="Next"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import study55 from '../assets/img/study55.png';
import zy2 from '../assets/img/zy_2.jpg';
import zy1 from '../assets/img/zy_1.jpg';
import zy4 from '../assets/img/zy_4.jpg';
import hexImage from '../assets/img/6EAAA2499A278C49D54D92406F15BC33.jpg';


export default {
  name: 'SpecialColumn',
  data() {
    return {
      items: [
        {imgSrc: study55, link: 'https://xcb.qzuie.edu.cn/ '},
        {imgSrc: zy2, link: 'https://xcb.qzuie.edu.cn/ '},
        {imgSrc: zy1, link: 'https://pgw.qzuie.edu.cn/ '},
        {imgSrc: zy4, link: 'https://xcb.qzuie.edu.cn/ '},
        {imgSrc: hexImage, link: 'https://xcb.qzuie.edu.cn/news-list-lilunxuexi.html '}
      ],
      itemWidth: 340,
      margin: 20,
      currentIndex: 0,
      totalItemsToShow: 4,
      isTransitioning: false,
      autoScrollInterval: null,
      autoScrollDelay: 5000,
    };
  },
  computed: {
    clonedItems() {
      return this.items;
    },
    totalOriginalItems() {
      return this.items.length;
    },
    totalListItems() {
      return this.totalOriginalItems + 2 * this.clonedItems.length;
    },
    totalWidth() {
      return this.totalListItems * (this.itemWidth + this.margin);
    },
    currentLeft() {
      return -(this.clonedItems.length * (this.itemWidth + this.margin)) + (this.currentIndex * (this.itemWidth + this.margin));
    }
  },
  methods: {
    /*    getImageUrl(name) {
          try {
            return require(`${name}`);
          } catch (e) {
            console.warn(`Image not found: ${name}`);
            return '';
          }
        },*/
    scrollNext() {
      if (this.isTransitioning) return;
      this.isTransitioning = true;
      this.currentIndex++;
      if (this.currentIndex >= this.totalOriginalItems) {
        setTimeout(() => {
          this.isTransitioning = false;
          this.currentIndex = 0;
        }, 500);
      } else {
        setTimeout(() => {
          this.isTransitioning = false;
        }, 500);
      }
      this.resetAutoScroll();
    },
    scrollPrev() {
      if (this.isTransitioning) return;
      this.isTransitioning = true;
      this.currentIndex--;
      if (this.currentIndex < 0) {
        setTimeout(() => {
          this.isTransitioning = false;
          this.currentIndex = this.totalOriginalItems - 1;
        }, 500);
      } else {
        setTimeout(() => {
          this.isTransitioning = false;
        }, 500);
      }
      this.resetAutoScroll();
    },
    startAutoScroll() {
      this.autoScrollInterval = setInterval(() => {
        this.scrollNext();
      }, this.autoScrollDelay);
    },
    stopAutoScroll() {
      clearInterval(this.autoScrollInterval);
      this.autoScrollInterval = null;
    },
    resetAutoScroll() {
      this.stopAutoScroll();
      this.startAutoScroll();
    }
  },
  mounted() {
    this.startAutoScroll();
  },
  beforeUnmount() {
    this.stopAutoScroll();
  }
};
</script>

<style scoped>
.special-column-vue {
}

.s7 {
  z-index: 9;
  margin-top: 50px;
  margin-bottom: 50px;
}

.w16 {
  width: 1440px;
  max-width: 95%;
  margin: 0 auto;
}

.tit {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;
}

.tit > div {
  padding-left: 8px;
  display: block;
  align-items: center;
}

.tit > div h2 {
  font-size: 32px;
  line-height: 1.3;
  color: #000000;
  position: relative;
  margin: 0;
  display: flex;
  align-items: center;
}

.tit > div h2 img {
  margin-right: 10px;
  vertical-align: middle;
  height: auto;
  max-height: 35px;
}

.tit > div h3 {
  font-size: 13px;
  font-weight: normal;
  line-height: 18px;
  color: #606060;
  margin-top: 0.64px;
  font-family: "sysong", sans-serif;
  position: relative;
  margin-left: 50px;
}

.picScroll-left1 {
  overflow: hidden;
  position: relative;
}

.picScroll-left1 .bd {
}

.picScroll-left1 .tempWrap {
  overflow: hidden;
  position: relative;
  width: calc(v-bind(totalItemsToShow) * (v-bind(itemWidth) + v-bind(margin)) - v-bind(margin));
  margin: 0 auto;
}

.picScroll-left1 .picList {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  position: relative;
  transition: left 0.5s ease-in-out;
}

.picScroll-left1 .picList li {
  flex-shrink: 0;
  width: v-bind(itemWidth+ 'px');
  margin-right: v-bind(margin+ 'px');
  overflow: hidden;
  text-align: center;
}

.picScroll-left1 .picList li .pic {
}

.picScroll-left1 .picList li .pic a {
  display: block;
}

.picScroll-left1 .picList li .pic img {
  border-radius: 15px;
  display: block;
  width: 300px;
  height: 150px;
  object-fit: cover;
  margin: 0 auto;
}

.picScroll-left1 .hd {
  overflow: hidden;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.picScroll-left1 .hd .prev,
.picScroll-left1 .hd .next {
  cursor: pointer;
  border: 0.16px solid #E45B3F;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}

.picScroll-left1 .hd .prev {
  margin-right: 60px;
}

.picScroll-left1 .hd .prev:hover,
.picScroll-left1 .hd .next:hover {
  background-color: #E45B3F;
}

.picScroll-left1 .hd .prev:hover img,
.picScroll-left1 .hd .next:hover img {
  filter: brightness(0) invert(1);
}

.picScroll-left1 .hd .prev img,
.picScroll-left1 .hd .next img {
  max-width: 50%;
  max-height: 50%;
}

@font-face {
  font-family: 'sysong';
}
</style>