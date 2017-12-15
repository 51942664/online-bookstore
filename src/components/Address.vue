<template>
<transition name="slide-fade">
  <div class="address perdata" v-if="displayaddress">
    <header>
		<div>
			<span @click="$emit('returnaddress')">&lt;</span>
			<h3>收货地址</h3>
		</div>
    </header>
<main>
  <form>
    <div >
      <label>姓名</label>
      <input type="text" placeholder="请填写您的真实姓名">
    </div>
    <div>
      <label>联系电话</label>
      <input type="tel" placeholder="请填写我们联系你的电话号码">
    </div>
    <div>
      <label>邮政编码</label>
      <input type="text" placeholder="请填写您所在地区邮政编码">
    </div>
    <div>
    <select>
      <option>四川省</option>
      <option>广州省</option>
      <option>湖南省</option>
      <option>湖北省</option>
      <option>湖北省</option>
      <option>福建省</option>
    </select>
     <select>
      <option>成都市</option>
      <option>绵阳市</option>
      <option>广元市</option>
      <option>达州市</option>
      <option>西昌市</option>
      <option>攀枝花市</option>
    </select>
     <select>
      <option>高新区</option>
      <option>武侯区</option>
      <option>锦江区</option>
      <option>青羊区</option>
      <option>双流区</option>
      <option>天府新区</option>
    </select>
    </div>
    <div>
      <label>详细地址</label>
      <input type="text" placeholder="请填写详细的街道、楼栋、门牌号">
    </div>
  </form>
</main>
	 <div class="Btn Btn_bt">
		 <button type="submit" class="btn btn-default" @click="btnclick">确认地址</button>
	 </div>
	  <!--弹出框-->
	  <popups :shw="shw" :informa="modify"></popups>
  </div>
</transition>
</template>

<script>
	import popups from './Popups'
	export default {
		name: 'Address',
		props:['displayaddress'],
		components:{
			popups
		},
		data () {
			return {
				shw:false,
				modify:'地址添加或者修改成功',
			}
		},
		methods:{
			btnclick(){
				this.shw = true
			}
		}
	}
</script>

<style scoped lang="less">
  @import "../styles/PerData.less";
</style>
