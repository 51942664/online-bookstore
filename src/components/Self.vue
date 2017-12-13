<template>
  <div class="self">
    <header>
      <h3>个人中心</h3>
    </header>
    <main>
        <div></div>
        <div>
          <img src="../../src/assets/12.png">
          <p>从来不吃草莓</p>
        </div>
        <div class="main-count">
          <p>设置个人资料 <span></span></p>
          <p>收货地址管理<span></span></p>
        </div>
        <div class="main-count">
          <p>我的订单 <span></span></p>
          <p>我的评价 <span></span></p>
        </div>
        <div class="main-count">
        <p>商品收藏<span></span></p>
        <p>店铺收藏<span></span></p>
        <p>浏览记录<span></span></p>
      </div>
    </main>
    <footer>
      <button>退出登录</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Self',
  data () {
    return {
      msg: 'self'
    }
  }
}
</script>

<style scoped lang="less">
  @import "../styles/Self.less";
</style>
