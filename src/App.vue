<template>
  <div id="app"> 
    <div class='dp'>
      <div class='dp__header'>
        <div class='dp__header__logo'>
          <img :src='logo' />
        </div>
        <div class='dp__header__info'>
          <div class='dp__header__info__name'>

          </div>
          <div class='dp__header__info__logout'>

          </div>
        </div>
      </div>
      <div class='dp__layout'>
         <div class='dp__layout__nav'>
           <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#ccc"
                active-text-color="#fff">
                <router-link :to="{ name: 'test'}">
                <el-menu-item index="1">
                  <i class="el-icon-menu"></i>
                  <span slot="title">
                  导航一
                  </span>
                </el-menu-item>
                </router-link>
                <router-link :to="{ name: 'Hello'}">
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                </router-link>
                <router-link :to="{ name: 'Hello'}">
                <el-menu-item index="3">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
                </router-link>
              </el-menu>
         </div>
         <div class='dp__layout__content'>
           <router-view/>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      logo: require("./assets/logo.png"),
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

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.dp {
  width: 100%;
  &__header {
    background-color: #545c64;
    height: 60px;
    &__logo {
      width: 210px;
      padding: 9px 0;
      text-align: center;
    }
  }
  &__layout {
    display: block;
    width: 100%;
    margin: 0;
    text-align: left;
    &__nav {
      display: inline-block;
      width: 210px;
    }
    &__content {
      display: inline-block;
    }
  }
  a{
   text-decoration: none;
   color: #ccc;
  }
}
</style>
