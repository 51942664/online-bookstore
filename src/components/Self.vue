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
      <div>
        <p>设置个人资料</p>
        <p>收货地址管理</p>
      </div>
      <div>
        <p>我的订单</p>
        <p>我的评价</p>
      </div>
      <div>
      <p>商品收藏</p>
      <p>店铺收藏</p>
      <p>浏览记录</p>
    </div>
    </main>
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
