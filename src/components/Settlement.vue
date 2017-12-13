<template>
  <div class="settlement">
    <header>
      <h3>结算中心</h3>
    </header>
    <main>
      <h1>商品信息确认</h1>
      <section class="infor-confirm">
        <div>
          <h2>价格信息</h2>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Settlement',
  data () {
    return {
      msg: 'settlement'
    }
  }
}
</script>

<style scoped lang="less">
  @import "../styles/Settlement.less";
</style>
