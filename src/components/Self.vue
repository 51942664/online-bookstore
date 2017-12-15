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
		  <p @click="perdata">设置个人资料 <span></span></p>
		  <p @click="csreceipt">收货地址管理<span></span></p>
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
	  <personaldata :displaydata="displaydata" @returnself="returnself"  @colsePerData="colsePerData"></personaldata>
	  <addressmanage :displayaddress="displayaddress" @returnaddress="returnaddress"  @colseAddress="colseAddress"></addressmanage>
    <Login 
      head-title="登录/注册"
    />
  </div>
</template>

<script>

import Login from "./Login"
import personaldata from './PerData'
import addressmanage from './Address'
export default {
  name: 'Self',
  components:{
    Login,
    personaldata,
		addressmanage
  },

  data () {
    return {
		displaydata:false,
		displayaddress:false
    }
  },

	methods:{
       //显示个人资料
		perdata(){
		    this.displaydata = true
		},
       //显示修改地址
		csreceipt(){
			this.displayaddress = true
		},
    //返回
		returnself(){
			this.displaydata = false
		},
		returnaddress(){
			this.displayaddress = false
		},
		//确定修改成功
		colsePerData() {
		    this.displaydata = false
		},
		colseAddress(){
			this.displaydata = false
		}
	}
}
</script>
<style scoped lang="less">
  @import "../styles/Self.less";
</style>
