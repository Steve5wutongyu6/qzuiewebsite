<script setup lang="ts">

</script>

<template>
  <footer>
    <div class="container">
      <div class="row">
        <!-- 左侧内容 -->
        <div class="col-lg-8">
          <div class="row footer-box">
            <!-- 联系信息 -->
            <div class="col-lg-6">
              <div class="logo">
                <img src="../assets/img/logo-bai.png" alt="Logo">
              </div>
              <div class="coll-my">联系我们</div>
              <p>学校地址：福建省泉州市丰泽区博东路249号</p>
              <p>学校电话：0595-22767537</p>
              <p>学校邮编：362000</p>
              <p>招生热线：0595-22789708 22789808</p>
            </div>

            <!-- 快速链接 -->
            <div class="col-lg-6">
              <div class="foot-link">
                <div class="title">快速链接</div>
                <div class="link-box row">
                  <!-- 链接项 -->
                  <div class="link-item col-lg-6 col-6 col-sm-4 my-1">
                    <img src="../assets/img/foot1.png" alt="教务系统">
                    <a href="https://jwgl.qzuie.edu.cn/Logon.do?method=logon&amp;issso=1">教务系统</a>
                  </div>
                  <div class="link-item col-lg-6 col-6 col-sm-4 my-1">
                    <img src="../assets/img/foot5.png" alt="成果展示">
                    <a href="">成果展示</a>
                  </div>
                  <div class="link-item col-lg-6 col-6 col-sm-4 my-1">
                    <img src="../assets/img/foot2.png" alt="教学平台">
                    <a href="http://qziedu.fy.chaoxing.com/portal">教学平台</a>
                  </div>
                  <div class="link-item col-lg-6 col-6 col-sm-4 my-1">
                    <img src="../assets/img/foot6.png" alt="校务公开">
                    <a href="">校务公开</a>
                  </div>
                  <div class="link-item col-lg-6 col-6 col-sm-4 my-1">
                    <img src="../assets/img/foot3.png" alt="OA平台">
                    <a href="http://oa.qzuie.edu.cn:9081/">OA平台</a>
                  </div>
                  <div class="link-item col-lg-6 col-6 col-sm-4 my-1">
                    <img src="../assets/img/foot7.png" alt="电子邮件">
                    <a href="https://mail.qzuie.edu.cn/">电子邮件</a>
                  </div>
                  <div class="link-item col-lg-6 col-6 col-sm-4 my-1">
                    <img src="../assets/img/foot4.png" alt="图书馆">
                    <a href="https://lib.qzuie.edu.cn">图书馆</a>
                  </div>
                  <div class="link-item col-lg-6 col-6 col-sm-4 my-1">
                    <img src="../assets/img/foot8.png" alt="校报">
                    <a href="https://xcb.qzuie.edu.cn/news-list-qxxb.html">校报</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧预留 -->
        <div class="col-lg-4"></div>
      </div>

      <!-- 版权信息 -->
      <div class="copyright">版权所有 © 泉州信息工程学院 备案号：闽ICP备05015349号</div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  min-height: 22.5rem;
  /*背景图片不要超过页面大小*/
  background-size: cover;
  background: url("../assets/img/foot_bg.jpg") no-repeat center;
  height: 451px;
  color: #fff;
  font-size: 0.9rem;
  padding: 2.75rem 0;
  box-sizing: border-box;
  text-align: left;
}

footer .copyright {
  text-align: center;
  margin-top: 2rem;
}

.footer-box .coll-my {
  font-size: 1.1rem;
  margin: 1rem 0 1.25rem 0;
}

footer .foot-link .title {
  margin-bottom: 1rem;
}

footer .foot-link .link-box {
  text-align: left;
}

footer .foot-link .link-box img {
  width: 2.7rem;
  height: 2.7rem;
}

footer .foot-link .link-box a {
  color: white;
  text-decoration: none;
}

footer .foot-link .link-box a:hover {
  color: #FFB03F;
}

footer .col-lg-8 {
  padding-left: 150px;
}

footer  {

}

.footer-box {
  display: flex;
}

/*link-box row 每两个元素一行*/
@media (min-width: 992px) {
  .footer-box .link-box {
    display: flex;
    flex-wrap: wrap;
  }

  @media (min-width: 1200px) {
    .footer-box .link-box .link-item {
      width: 35%;
    }
  }
}



footer .link-box{
  padding-left: 50px;
}

footer .title{
  font-size: 20px;
  margin-left: 50px;
}

footer .copyright {
  font-size: 20px;
  font-family: 'Raleway', sans-serif;
  text-align: center;
}

footer .col-lg-6 {
  font-family: 'Raleway', sans-serif;
  text-size: 50px;
}
</style>
