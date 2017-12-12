<template>
  <div id="app">
      <ul class="nav">
        <router-link :to="{name:'home'}" tag="li" exact>
          <i class="fa fa-home"></i>
          <p>Home</p>
          </router-link>
        <router-link :to="{name:'classify'}" tag="li">
          <i class="fa fa-sitemap"></i>
          <p>Classify</p>
          </router-link>
        <router-link :to="{name:'shopping'}" tag="li">
          <i class="fa fa-shopping-cart"></i>
          <p>Shopping</p>
          </router-link>
        <router-link :to="{name:'self'}" tag="li">
          <i class="fa fa-user"></i>
          <p>Self</p>
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
#app {
  font: 20px  'Avenir', Helvetica,'Microsoft YaHei', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.nav{
  width: 100%;
  list-style: none;
  display: flex;
  position: fixed;
  bottom: 0;
  li{
    width: 25%;
    text-align: center;
    height: 50px;
    line-height: 50px;
    border-top: 1px solid #eeeeee;
    cursor: pointer;
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
      top: -42px;
    }
  }
}
</style>
