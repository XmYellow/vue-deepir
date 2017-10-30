<template>
    <el-container>
       <el-aside width="200px">
          <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#3e3e3e"
              text-color="#ccc"
              active-text-color="#fff"
              active-background-color="#fff"
             >
              <div class='logo-box'>
                 <img :src='logo' class='logo' />
              </div>
              <router-link :to="{ name: 'test'}">
              <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">
                首页
                </span>
              </el-menu-item>
              </router-link>
              <router-link :to="{ name: 'Hello'}">
              <el-menu-item index="2">
                  <i class="el-icon-news"></i>
                  <span slot="title">数据分析</span>
              </el-menu-item>
              </router-link>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-search"></i>
                  <span>数据查询</span>
                </template>
                <router-link :to="{ name: 'Hello'}">
                  <el-menu-item index="3-1">  
                    <i class="el-icon-tickets"></i>
                    <span slot="title">条件查询</span>
                  </el-menu-item>
                </router-link>
                <router-link :to="{ name: 'test'}">
                  <el-menu-item index="3-2">
                    <i class="el-icon-picture-outline"></i>
                    <span slot="title">人脸查询</span>
                  </el-menu-item>
                </router-link>
              </el-submenu>
              <router-link :to="{ name: 'test'}">
              <el-menu-item index="4">
                  <i class="el-icon-star-on"></i>
                  <span slot="title">客户管理</span>
              </el-menu-item>
              </router-link>
              <router-link :to="{ name: 'chart'}">
              <el-menu-item index="5">
                  <i class="el-icon-picture"></i>
                  <span slot="title">图片列表</span>
              </el-menu-item>
              </router-link>
            </el-menu>
        </el-aside>
      <el-container>
       
         <el-header>Header</el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
export default {
  name: "layout",
  data() {
    return {
      logo: require("../assets/logo.png"),
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #fff;
  color: #fff;
  line-height: 60px;
}
.el-header {
  text-align: left;
  position: fixed;
  top: 0;
  width: 100%;
  left:200px;
}
.el-footer {
  text-align: center;
}
.logo-box{
  height: 100px;
}
.logo {
  margin: 0;
  padding: 30px 20px;
}
.el-aside {
  background-color:#3e3e3e;
  color: #333;
  text-align: left;
  line-height: 200px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
}
.router-link-exact-active .router-link-active >li{
  background-color: #fff;
}
.el-menu {
  border-right: none;
}
.el-main {
  background-color: #f8f8f8;
  color: #333;
  text-align: center;
  line-height: 160px;
  margin-left: 200px;
  margin-top: 60px;
}
a {
  text-decoration: none;
  color: #ccc;
}
</style>
