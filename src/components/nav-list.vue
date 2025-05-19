<script lang="ts" setup>

</script>

<template>
  <div class="nav-list container">
    <nav class="navbar navbar-default navbar-mobile bootsnav on">
      <div id="navbar-menu" class="collapse navbar-collapse show">
        <ul class="nav navbar-nav" data-in="fadeInDown" data-out="fadeOutUp">
          <li class="dropdown">
            <a href="news-list-xxgk.html">学校概况<span></span></a>
            <ul class="dropdown-menu animated fadeOutUp">
              <li><a href="http://www.qzuie.edu.cn/news-show-24614.html">学校简介</a></li>
              <li><a href="news-list-xrld.html">现任领导</a></li>
              <li><a href="news-list-lirenlingdao.html">历任领导</a></li>
              <li><a href="http://www.qzuie.edu.cn/news-show-20742.html">校训</a></li>
              <li><a href="http://www.qzuie.edu.cn/news-show-20743.html">大事记</a></li>
              <li><a href="http://www.qzuie.edu.cn/news-show-20744.html">校长信箱</a></li>
              <li><a href="news-list-xyfg.html">校园风光</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="https://www.qzuie.edu.cn/news-list-dqjg1.html">机构设置<span></span></a>
            <ul class="dropdown-menu animated fadeOutUp">
              <li><a href="news-list-dqjg1.html">党群机关</a></li>
              <li><a href="news-list-xzjg1.html">行政机关</a></li>
              <li><a href="news-list-jxjjfdw1.html">教学及教辅单位</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="">党建群团<span></span></a>
            <ul class="dropdown-menu animated fadeOutUp">
              <li><a href="https://zzb.qzuie.edu.cn/">党务工作</a></li>
              <li><a href="https://xcb.qzuie.edu.cn/">宣传工作</a></li>
              <li><a href="https://tw.qzuie.edu.cn/">团学工作</a></li>
              <li><a href="https://gh.qzuie.edu.cn">工会工作</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="">教育教学<span></span></a>
            <ul class="dropdown-menu animated fadeOutUp">
              <li><a href="https://jwc.qzuie.edu.cn/">教育教学</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="">科学研究<span></span></a>
            <ul class="dropdown-menu animated fadeOutUp">
              <li><a href="https://kyc.qzuie.edu.cn/">科学研究</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="">招生就业<span></span></a>
            <ul class="dropdown-menu animated fadeOutUp">
              <li><a href="https://zsb.qzuie.edu.cn">招生信息</a></li>
              <li><a href="https://qziedu.jysd.com/">就业信息</a></li>
              <li><a href="https://xyh.qzuie.edu.cn/">校友工作</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="https://rzc.qzuie.edu.cn/">师资队伍<span></span></a>
            <ul class="dropdown-menu animated fadeOutUp">
              <li><a href="https://rzc.qzuie.edu.cn/">人力资源管理处</a></li>
              <li><a href="https://jsgz.qzuie.edu.cn/">教师发展中心</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="https://gjc.qzuie.edu.cn/">交流合作<span></span></a>
            <ul class="dropdown-menu animated fadeOutUp">
              <li><a href="https://gjc.qzuie.edu.cn/">国际交流</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="https://dzb.qzuie.edu.cn/">公告公示<span></span></a>
            <ul class="dropdown-menu animated fadeOutUp">
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.nav-list.container {
  padding: 0;
  background-color: transparent;
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
}

.nav.navbar-nav {
  display: flex;
  list-style: none;
}

.nav.navbar-nav li.dropdown {
  position: relative;
}

.nav.navbar-nav li.dropdown a {
  color: white;
  text-decoration: none;
  padding: 0 20px;
  display: flex;
  align-items: center;
  height: 100%;
}

.nav.navbar-nav li.dropdown ul.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #FFA500; /* 橙色背景 */
  list-style: none;
  padding: 0;
  display: none;
  z-index: 1000;
  width: 200px; /* 固定宽度 */
}

.nav.navbar-nav li.dropdown ul.dropdown-menu li {
  padding: 0;
  border-bottom: 1px solid #FF8C00; /* 子项间分隔线 */
}

.nav.navbar-nav li.dropdown ul.dropdown-menu li a {
  color: white;
  text-decoration: none;
  display: block;
  padding: 10px 20px; /* 内边距 */
}

/* 最后一个子项去除下边框 */
.nav.navbar-nav li.dropdown ul.dropdown-menu li:last-child {
  border-bottom: none;
}

/* 悬停效果 */
.nav.navbar-nav li.dropdown ul.dropdown-menu li:hover {
  background-color: #FF8C00; /* 悬停时背景颜色加深 */
}

.nav.navbar-nav li.dropdown:hover ul.dropdown-menu {
  display: block;
}
</style>
