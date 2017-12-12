<template>
  <div id="app">
      <ul class="nav">
        <router-link :to="{name:'home'}" tag="li" exact>Home</router-link>
        <router-link :to="{name:'classify'}" tag="li">Classify</router-link>
        <router-link :to="{name:'shopping'}" tag="li">Shopping</router-link>
        <router-link :to="{name:'self'}" tag="li">Self</router-link>
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
  }
}
</style>
