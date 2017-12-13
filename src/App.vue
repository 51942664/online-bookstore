<template>
  <div id="app">
      <ul class="nav">
        <router-link :to="{name:'home'}" tag="li" exact>
          <i class="fa fa-home"></i>
          <p>首页</p>
          </router-link>
        <router-link :to="{name:'classify'}" tag="li">
          <i class="fa fa-sitemap"></i>
          <p>分类</p>
          </router-link>
        <router-link :to="{name:'shopping'}" tag="li">
          <i class="fa fa-shopping-cart"></i>
          <p>购物车</p>
          </router-link>
        <router-link :to="{name:'self'}" tag="li">
          <i class="fa fa-user"></i>
          <p>我</p>
          </router-link>
        <!--资料管理-->
        <router-link :to="{name:'data'}" tag="li">
          <i class="fa fa-user"></i>
          <p>Data</p>
          </router-link>
      </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
body,h1,h2,h3,div,ul,li,p{
  margin: 0;
  padding: 0;
}
#app {
  font: 20px  'Avenir', Helvetica,'Microsoft YaHei', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
ul{
  list-style: none;
}
.nav{
  width: 100%;
  list-style: none;
  display: flex;
  position: fixed;
  bottom: 0;
  z-index: 10;
  li{
    width: 25%;
    text-align: center;
    height: 50px;
    line-height: 50px;
    border-top: 1px solid #eeeeee;
    cursor: pointer;
    position: relative;
    z-index: 99;
    background-color: rgb(255,255,255);
    &.router-link-active{
      color: rgba(51, 153, 51,0.9);
    }
    i{
      position: relative;
      top: -10px;
      font-size: 23px;
    }
    p{
      position: relative;
      top: -38px;
      font-style: bold;
      font-size: 16px;
    }
  }
}
.bookstore{
  line-height: 50px;
  height: 50px;
  text-align: center;
  background-color: #000101;
  color: #fff;
}
</style>
