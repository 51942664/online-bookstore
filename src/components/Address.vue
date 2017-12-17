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
      <input type="text" placeholder="请填写您的真实姓名" v-model="addDataObj.fullName">
    </div>
    <div>
      <label>联系电话</label>
      <input type="tel" placeholder="请填写我们联系你的电话号码" v-model="addDataObj.telephone">
    </div>
    <div>
      <label>邮政编码</label>
      <input type="text" placeholder="请填写您所在地区邮政编码" v-model="addDataObj.postalcode">
    </div>
    <div>
		<label>地址</label>
    <select v-model="addDataObj.province">
      <option>四川省</option>
      <option>广州省</option>
      <option>湖南省</option>
      <option>湖北省</option>
      <option>湖北省</option>
      <option>福建省</option>
    </select>
     <select v-model="addDataObj.cityData">
      <option>成都市</option>
      <option>绵阳市</option>
      <option>广元市</option>
      <option>达州市</option>
      <option>西昌市</option>
      <option>攀枝花市</option>
    </select>
     <select v-model="addDataObj.areaData">
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
      <input type="text" placeholder="请填写详细的街道、楼栋、门牌号" v-model="addDataObj.adminiStration">
    </div>
  </form>
</main>
	 <div class="Btn Btn_bt">
		 <button type="submit" class="btn btn-default" @click="btnclick">确认地址</button>
	 </div>
	  <!--弹出框-->
	  <popups informa="地址添加或者修改成功" v-if="popupHiddSate"  @successself="succModify"></popups>
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
          successs:false,
          popupHiddSate:false,
		//	地址管理储存修改对象
		  addDataObj:{
			  fullName:"",
			  telephone:"",
			  postalcode:"",
			  province:"四川省",
			  cityData:"成都市",
			  areaData:"高新区",
			  adminiStration:""
		  }
		}
	},
		methods:{
      succModify(){
        this.popupHiddSate=false;
        this.$emit('colseAddress');
		  /*地址管理存入本地，以供修改*/
        //数据储存
		  var addrestorage = JSON.stringify(this.addDataObj);
         localStorage.setItem('addrestorage',addrestorage);
      },
        // 确认修改按钮触发的事件
       btnclick(){
         this.popupHiddSate = true
       },
       getaddreData(){
           if(localStorage.getItem('addrestorage')){
               var addreData = JSON.parse(localStorage.getItem('addrestorage'));
               console.log(addreData)
               this.addDataObj = {
				   fullName:addreData.fullName,
				   telephone:addreData.telephone,
				   postalcode:addreData.postalcode,
				   province:addreData.province,
				   cityData:addreData.cityData,
				   areaData:addreData.areaData,
				   adminiStration:addreData.adminiStration
			   }
		   }else {
			 this.addDataObj = {
				   fullName:"",
					   telephone:"",
					   postalcode:"",
				       province:"四川省",
				       cityData:"成都市",
				       areaData:"高新区",
					   adminiStration:""
			   }
		   }
	   }

	},
		mounted(){
			this.getaddreData()
		}
}
</script>

<style scoped lang="less">
  @import "../styles/PerData.less";
</style>
