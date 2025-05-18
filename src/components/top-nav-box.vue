<script setup lang="ts">

</script>

<template>
  <div class="top-nav-box">
    <div class="nav-box container">
      <div class="nav-left">
        <img src="../assets/img/logo-bai.png" class="img1">
        <img src="../assets/img/zxhy.png" class="img2">
      </div>
      <div class="nav-right">
        <div class="link-box">
          <a href="">学生</a><span>|</span>
          <a href="">教工</a><span>|</span>
          <a href="https://xyh.qzuie.edu.cn/">校友</a><span>|</span>
          <a href="">访客</a><span>|</span>
          <a href="https://www.qzuie.edu.cn/news-show-20744.html">校长信箱</a><span>|</span>
          <a href="https://lib.qzuie.edu.cn">图书馆</a>
        </div>
        <div class="search-box">
          <div class="close-but"><img src="../assets/img/sousuo.png"></div>
          <div><a href="https://english.qzuie.edu.cn" target="_blank"><img src="../assets/img/en.png"></a></div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.top-nav-box {
  background-color: transparent;
  color: white;
  position: relative;
  border-bottom: 1px solid #fff;
}

.nav-left {
  display: flex;
  align-items: center; /* 垂直居中 */
  gap: 20px; /* 图片之间的间距 */
}

.nav-box.container {
  height: 5.65rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-left .img1, .nav-left .img2 {
  max-width: 100%; /* 最大宽度为容器宽度 */
  height: auto; /* 自动调整高度 */
}

.nav-right {
  display: flex;
  align-items: center; /* 垂直居中 */
}

.nav-right .search-box {
  margin-left: 1.65rem;
  display: flex;
  align-items: center; /* 垂直居中 */
}

.nav-right .link-box a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
}

.nav-right .search-box .close-but img, .nav-right .search-box div img {
  height: 30px;
  margin: 0 10px; /* 图标之间的间距 */
}



</style>
