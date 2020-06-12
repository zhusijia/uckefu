<template>
  <el-container id="app-content">
    <el-header>
      <top></top>
    </el-header>
    <el-container class="main-container">
      <el-aside width="200px"><left></left></el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import Left from './components/include/left'
  import Top from './components/include/top'
  import Login from './components/user/login'
  import { store } from './store/store'

  export default {
    name: 'App',
    components: {
      Left,
      Top,
      Login
    },
    computed: {
      currentUser() {
        return this.$store.state.currentUser
      },
      isLogin() {
        return this.$store.state.isLogin
      },
      isAdmin() {
        return this.$store.state.isAdmin
      }
    },
  }
</script>

<style lang="stylus" scoped>
  #app-content 
    height 100%
    .el-header
      padding 0
    .main-container
      height calc(100vh - 60px)
</style>