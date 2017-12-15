<template>
  <div class="login">
    <header>
      <h3>{{headTitle}}</h3>
    </header>
    <main>
        <div class="b-login">
          <span @click="tab">登录</span>
          <span @click="tabb">注册</span>
        </div>
        <form class="form-login" v-show="isShow1">
          <div class="b-login">
            <svg class="tel"></svg>
            <input type="text" placeholder="请输入您的手机号" id="tel">
          </div>
          <div class="b-login">
            <svg class="lock"></svg>
            <input type="password" placeholder="请输入您的密码" id="pwod">
          </div>
          <div class="b-login">
            <button>登录</button>
          </div>
        </form>
        <form class="form-login" v-show="isShow2">
          <div class="b-login">
            <svg class="tel"></svg>
            <input type="text" placeholder="请输入您的手机号" v-model="phone" id="pho">
          </div>
          <div class="b-login">
            <svg class="user"></svg>
            <input type="text" placeholder="请输入您的昵称" id="name">
          </div>
          <div class="b-login">
            <svg class="lock"></svg>
            <input type="password" placeholder="请输入您的密码" id="pwd">
          </div>
          <div class="b-login">
            <svg class="pwd"></svg>
            <input type="password" placeholder="请确认您的密码" id="pwsd">
          </div>
          <div class="b-login">
            <button>确认注册</button>
          </div>
        </form>
    </main>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props:['headTitle'],
  data () {
    return {
      isShow1:true,
      isShow2:false,
      phone:''
    }
  },
  methods:{
    tab(){
      this.isShow1 = true
      this.isShow2 = false
    },
    tabb(){
      this.isShow2 = true
      this.isShow1 = false
    }
  },
}
</script>

<style scoped lang="less">
  @import "../styles/Login.less";
</style>
