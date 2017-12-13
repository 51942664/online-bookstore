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
          <p class="price">
            <span>商品总价：</span>
            <span>￥128.60</span>
          </p>
          <p class="price">
            <span>运送费：</span>
            <span>￥10.00</span>
          </p>
          <p class="order-total">
            <span>订单总计：</span>
            <span>￥10.00</span>
          </p>
        </div>
        <div>
          <h2>收货信息</h2>
          <p class="receiv-info address">
            <span>收货地址：</span>
            <span>四川省 成都市 高新区 锦城大道东段拉德方斯东楼10层2号</span>
          </p>
          <p class="receiv-info">
            <span>收货人：</span>
            <span>从来不吃草莓</span>
          </p>
          <p class="receiv-info">
            <span>邮编</span>
            <span>610000</span>
          </p>
          <p class="receiv-info">
            <span>电话</span>
            <span>18*****7687</span>
          </p>
        </div>
        <router-link :to="{name: 'rece-address'}" class="modification" tag="div">
          <span>修改地址</span>
          <span></span>
        </router-link>
        <router-link :to="{name: 'rece-address'}" class="modification" tag="div">
          <span>新增地址</span>
          <span></span>
        </router-link>
      </section>
      <h1>选择支付方式</h1>
      <section class="infor-confirm">
        <div class="modification">
          <svg class="weixin"></svg>
          <span class="f18">微信支付</span>
          <span></span>
        </div>
        <div class="modification">
          <svg class="zhifubao"></svg>
          <span class="f18">支付宝</span>
          <span></span>
        </div>
        <div class="modification">
          <svg class="bank-card"></svg>
          <span class="f18">银行卡</span>
          <span></span>
        </div>
        <div class="modification">
          <svg class="credit-card"></svg>
          <span class="f18">信用卡</span>
          <span></span>
        </div>
        <div class="modification">
          <svg class="visa"></svg>
          <span class="f18">VISA</span>
          <span></span>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import fontCss from './../styles/fonts/font-awesome.css'
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
