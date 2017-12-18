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
            <span>￥{{countPrice}}</span>
          </p>
          <p class="price">
            <span>运送费：</span>
            <span>￥10</span>
          </p>
          <p class="order-total">
            <span>订单总计：</span>
            <span>￥{{countPrice + 10}}</span>
          </p>
        </div>
        <div>
          <h2>收货信息</h2>
          <p class="receiv-info address">
            <span>收货地址：</span>
            <span>{{dataAddress.adminiStration}}</span>
          </p>
          <p class="receiv-info">
            <span>收货人：</span>
            <span>{{dataAddress.fullName}}</span>
          </p>
          <p class="receiv-info">
            <span>邮编</span>
            <span>{{dataAddress.postalcode}}</span>
          </p>
          <p class="receiv-info">
            <span>电话</span>
            <span>{{dataAddress.telephone}}</span>
          </p>
        </div>
        <div class="modification"  @click="csreceipt">
          <span>修改地址</span>
          <span></span>
        </div>
        <div class="modification" @click="newAddress">
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
    <addressmanage :displayaddress="displayaddress" @returnaddress="returnaddress"  @colseAddress="colseAddress" address = "收货地址" newAddress="新增地址"></addressmanage>
  </div>
</template>

<script>
import fontCss from './../styles/fonts/font-awesome.css'
import addressmanage from './Address'
export default {
  name: 'Settlement',
  props:['totalPrice'],
  components:{
	   addressmanage
  },
  data () {
    return {
       //地址管理显示状态
    displayaddress:false,
    add:false,
    revise:true,
      dataAddress:JSON.parse(localStorage.getItem('addrestorage')),
      countPrice:JSON.parse(localStorage.getItem('totalPrice'))
    }
  },
  methods:{
       //显示修改地址
		csreceipt(){
			this.displayaddress = true
    },
    newAddress(){
      this.displayaddress = true;
		},
    //返回
		returnaddress(){
			this.displayaddress = false
		},
		//确定修改成功
		colseAddress(){
			this.displaydata = false
    },
	}
}
</script>

<style scoped lang="less">
  @import "../styles/Settlement.less";
</style>
