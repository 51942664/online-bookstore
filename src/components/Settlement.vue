<template>
  <div class="settlement">
    <header>
      <h3>结算中心</h3>
    </header>
    <main>
      <h1>商品信息确认</h1>
      <section class="infor-confirm">
        <div v-for="(goods,index) in info" :key="goods.id">
          <h2>价格信息</h2>
          <p class="price">
            <span>商品总价：</span>
            <span>￥{{goods.price}}</span>
          </p>
          <p class="price">
            <span>运送费：</span>
            <span>￥{{goods.delivery}}</span>
          </p>
          <p class="order-total">
            <span>订单总计：</span>
            <span>￥{{orderTotal}}</span>
          </p>
        </div>
        <div v-for="(rece,index) in info" :key="rece.id">
          <h2>收货信息</h2>
          <p class="receiv-info address">
            <span>收货地址：</span>
            <span>{{rece.address}}</span>
          </p>
          <p class="receiv-info">
            <span>收货人：</span>
            <span>{{rece.name}}</span>
          </p>
          <p class="receiv-info">
            <span>邮编</span>
            <span>{{rece.postcode}}</span>
          </p>
          <p class="receiv-info">
            <span>电话</span>
            <span>{{rece.tel}}</span>
          </p>
        </div>
        <div class="modification">
          <span>修改地址</span>
          <span></span>
        </div>
        <div class="modification">
          <span>新增地址</span>
          <span></span>
        </div>
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
  props:['totalPrice'],
  data () {
    return {
      info:[
        {
          price:558,
          delivery:10,
          address:"四川省 成都市 高新区 锦城大道东段拉德方斯东楼10层2号",
          name:"从来不吃草莓",
          postcode:"610000",
          tel:"18*****7687"
        }
      ]
    }
  },
  computed:{
    orderTotal(item){
      var num = 0;
      this.info.forEach(function (item) {
        num = parseFloat(item.price) + parseFloat(item.delivery);
      });
      return num;
    }
  }
}
</script>

<style scoped lang="less">
  @import "../styles/Settlement.less";
</style>
