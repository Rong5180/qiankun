<template>
  <div id="app">
    <el-menu :router="true" mode="horizontal">
      <el-menu-item index="/">
        <span slot="title">Home</span>
      </el-menu-item>
      <!--引用其他子应用-->
      <el-menu-item index="/app/vue">
        <span slot="title">qiankun-vue</span>
      </el-menu-item>
      <el-menu-item index="/app/react">
        <span slot="title">qiankun-react</span>
      </el-menu-item>
    </el-menu>
    <router-view></router-view>
    <div id="container"></div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
