<script setup lang="ts">
</script>

<template>
  <div class="nav-topfile-box">
    <div class="nav-list container">
      <div class="logo">
        <img src="../assets/img/logo.png" alt="Logo">
      </div>
      <nav class="navbar navbar-default navbar-mobile bootsnav on">
        <div class="collapse navbar-collapse show" id="navbar-menu">
          <ul class="nav navbar-nav" data-in="fadeInDown" data-out="fadeOutUp">
            <!-- 学校概况 -->
            <li class="dropdown">
              <router-link to="/news-list-xxgk" class="nav-link">
                学校概况<span></span>
              </router-link>
              <ul class="dropdown-menu animated fadeOutUp">
                <li>
                  <a href="http://www.qzuie.edu.cn/news-show-24614.html" target="_blank" rel="noopener noreferrer">学校简介</a>
                </li>
                <li>
                  <router-link to="https://www.qzuie.edu.cn/news-list-xrld.html">现任领导</router-link>
                </li>
                <li>
                  <router-link to="https://www.qzuie.edu.cn/news-list-lirenlingdao.html">历任领导</router-link>
                </li>
                <li>
                  <a href="http://www.qzuie.edu.cn/news-show-20742.html" target="_blank" rel="noopener noreferrer">校训</a>
                </li>
                <li>
                  <a href="http://www.qzuie.edu.cn/news-show-20743.html" target="_blank" rel="noopener noreferrer">大事记</a>
                </li>
                <li>
                  <a href="http://www.qzuie.edu.cn/news-show-20744.html" target="_blank" rel="noopener noreferrer">校长信箱</a>
                </li>
                <li>
                  <router-link to="https://www.qzuie.edu.cn/news-list-xyfg.html">校园风光</router-link>
                </li>
              </ul>
            </li>

            <!-- 机构设置 -->
            <li class="dropdown">
              <router-link to="/news-list-dqjg1" class="nav-link">
                机构设置<span></span>
              </router-link>
              <ul class="dropdown-menu animated fadeOutUp">
                <li>
                  <router-link to="https://www.qzuie.edu.cn/news-list-dqjg1.html">党群机关</router-link>
                </li>
                <li>
                  <router-link to="https://www.qzuie.edu.cn/news-list-xzjg1.html">行政机关</router-link>
                </li>
                <li>
                  <router-link to="https://www.qzuie.edu.cn/news-list-jxjjfdw1.html">教学及教辅单位</router-link>
                </li>
              </ul>
            </li>

            <!-- 党建群团 -->
            <li class="dropdown">
              <a href="#" class="nav-link" @click.prevent>
                党建群团<span></span>
              </a>
              <ul class="dropdown-menu animated fadeOutUp">
                <li>
                  <a href="https://zzb.qzuie.edu.cn/" target="_blank" rel="noopener noreferrer">党务工作</a>
                </li>
                <li>
                  <a href="https://xcb.qzuie.edu.cn/" target="_blank" rel="noopener noreferrer">宣传工作</a>
                </li>
                <li>
                  <a href="https://tw.qzuie.edu.cn/" target="_blank" rel="noopener noreferrer">团学工作</a>
                </li>
                <li>
                  <a href="https://gh.qzuie.edu.cn" target="_blank" rel="noopener noreferrer">工会工作</a>
                </li>
              </ul>
            </li>

            <!-- 教育教学 -->
            <li class="dropdown">
              <a href="#" class="nav-link" @click.prevent>
                教育教学<span></span>
              </a>
              <ul class="dropdown-menu animated fadeOutUp">
                <li>
                  <a href="https://jwc.qzuie.edu.cn/" target="_blank" rel="noopener noreferrer">教育教学</a>
                </li>
              </ul>
            </li>

            <!-- 科学研究 -->
            <li class="dropdown">
              <a href="#" class="nav-link" @click.prevent>
                科学研究<span></span>
              </a>
              <ul class="dropdown-menu animated fadeOutUp">
                <li>
                  <a href="https://kyc.qzuie.edu.cn/" target="_blank" rel="noopener noreferrer">科学研究</a>
                </li>
              </ul>
            </li>

            <!-- 招生就业 -->
            <li class="dropdown">
              <a href="#" class="nav-link" @click.prevent>
                招生就业<span></span>
              </a>
              <ul class="dropdown-menu animated fadeOutUp">
                <li>
                  <a href="https://zsb.qzuie.edu.cn" target="_blank" rel="noopener noreferrer">招生信息</a>
                </li>
                <li>
                  <a href="https://qziedu.jysd.com/" target="_blank" rel="noopener noreferrer">就业信息</a>
                </li>
                <li>
                  <a href="https://xyh.qzuie.edu.cn/" target="_blank" rel="noopener noreferrer">校友工作</a>
                </li>
              </ul>
            </li>

            <!-- 师资队伍 -->
            <li class="dropdown">
              <a href="https://rzc.qzuie.edu.cn/" class="nav-link" target="_blank" rel="noopener noreferrer">
                师资队伍<span></span>
              </a>
              <ul class="dropdown-menu animated fadeOutUp">
                <li>
                  <a href="https://rzc.qzuie.edu.cn/" target="_blank" rel="noopener noreferrer">人力资源管理处</a>
                </li>
                <li>
                  <a href="https://jsgz.qzuie.edu.cn/" target="_blank" rel="noopener noreferrer">教师发展中心</a>
                </li>
              </ul>
            </li>

            <!-- 交流合作 -->
            <li class="dropdown">
              <a href="https://gjc.qzuie.edu.cn/" class="nav-link" target="_blank" rel="noopener noreferrer">
                交流合作<span></span>
              </a>
              <ul class="dropdown-menu animated fadeOutUp">
                <li>
                  <a href="https://gjc.qzuie.edu.cn/" target="_blank" rel="noopener noreferrer">国际交流</a>
                </li>
              </ul>
            </li>

            <!-- 公告公示 -->
            <li class="dropdown">
              <a href="https://dzb.qzuie.edu.cn/" class="nav-link" target="_blank" rel="noopener noreferrer">
                公告公示<span></span>
              </a>
              <ul class="dropdown-menu animated fadeOutUp">
                <!-- 如果有子菜单项，可以在这里添加 -->
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.nav-topfile-box {
  display: block;
  width: 100%;
  position: relative;
  z-index: 100;
  background-color: #fff !important;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 20px;
}

.nav-list.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.logo img {
  height: 60px; /* 根据实际logo大小调整 */
}

.navbar {
  display: flex;
  align-items: center;
  height: 60px;
}

.nav.navbar-nav {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav.navbar-nav li.dropdown {
  position: relative;
}

.nav-link {
  color: black; /* 修改为黑色以与现有样式一致 */
  text-decoration: none;
  padding: 0 20px;
  display: flex;
  align-items: center;
  height: 100%;
  font-weight: bold;
}

.nav-link:hover {
  color: black; /* 保持悬停颜色一致 */
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

.nav.navbar-nav li.dropdown ul.dropdown-menu li router-link {
  color: white;
  text-decoration: none;
  display: block;
  padding: 10px 20px; /* 内边距 */
}

.nav.navbar-nav li.dropdown ul.dropdown-menu li:last-child {
  border-bottom: none;
}

.nav.navbar-nav li.dropdown ul.dropdown-menu li:hover {
  background-color: #FF8C00; /* 悬停时背景颜色加深 */
}

.nav.navbar-nav li.dropdown:hover ul.dropdown-menu {
  display: block;
}

#navbar-menu a.router-link-active {
  color: black;
  font-weight: bold;
}
</style>
