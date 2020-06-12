<template>
  <div id="app">
    <div id="content1" v-show="isLogin">
      <div class="top-container">
        <top></top>
      </div>
      <div class="content">
        <div class="left-container">
          <left></left>
        </div>
        <div class="right-container">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <div id="content2" v-show="!isLogin">
      <login></login>
    </div>
  </div>
</template>

<script>
  import Left from './components/include/left'
  import Top from './components/include/top'
  import Login from './components/user/login'
  import {store} from './store/store'

  export default {
    name: 'App',
    components: {
      Left,
      Top,
      Login
    },
    computed: {
        currentUser(){
          return this.$store.state.currentUser
        },
        isLogin(){
          return this.$store.state.isLogin
        },
        isAdmin(){
          return this.$store.state.isLogin
        }
      },
  }
</script>

<style scoped>
  .content {
    display: flex;
    /* margin-top: -5px; */
  }

  .left-container {
    min-width: 200px;
    margin-top: -1px;
  }

  .right-container {
    flex: 1
  }
</style>