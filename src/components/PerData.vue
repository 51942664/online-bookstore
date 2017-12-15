<template>
 <transition name="slide-fade">
  <div class="perdata" v-if="displaydata">
    <header>
		<div>
			<span @click="$emit('returnself')">&lt;</span>
			<h3>个人资料修改</h3>
		</div>
    </header>
<main>
  <form>
    <div >
      <label>昵称</label>
      <input type="text" placeholder="请输入昵称">
    </div>
    <div>
      <label>Email</label>
      <input type="text" placeholder="请填写您的安全邮箱">
    </div>
    <div >
      <label>性别</label>
      <p class="Choice">
        <span :class="{'checked':genswit}"  @click="genswitching">男</span>
        <span :class="{'checked':femalewit}" @click="femalewitching">女</span>
        <span :class="{'checked':secrecyswit}" @click="secrswitching">保密</span>
     </p>
    </div>
    <div>
      <label>生日</label>
		<input type="date">
    </div>
	  <div>
		  <label>身份证号</label>
		  <input type="text" placeholder="请输入您的18位身份证号">
	  </div>
	  <div class="last-personal">
		  <label>个人描述</label>
		  <textarea placeholder="请谈谈您对自己的认识"></textarea>
	  </div>
  </form>
</main>
	 <div class="Btn">
		 <button type="submit" class="btn btn-default" @click="modifSuccess">确认修改</button>
	 </div>
	  <!--弹出框-->
	  <popups informa="个人资料修改成功" v-if="popupShowSate" @successself="comfirmModif"></popups>
  </div>
 </transition>
</template>

<script>
	import popups from './Popups'
	export default {
		name: 'PerData',
		props:['displaydata'],
		components:{
			popups
		},
		data () {
			return {
				genswit:false,
				femalewit:false,
				secrecyswit:true,
				//确定修改成功状态值
				successs:false,
				popupShowSate: false
			}
		},
		methods:{
        // 性别选中切换
			genswitching(){
				this.genswit = !this.genswit,
				this.femalewit = false,
				this.secrecyswit = false
			},
			femalewitching(){
				this.genswit = false,
				this.femalewit = !this.femalewit,
				this.secrecyswit = false
			},
			secrswitching(){
				this.genswit = false,
				this.femalewit = false,
				this.secrecyswit = !this.secrecyswit
			},
			comfirmModif() {
			    this.$emit('colsePerData');
			},
			// 确认修改按钮触发的事件
			modifSuccess() {
				this.popupShowSate = true;
			},

		},
		computed:{

		}
	}
</script>

<style scoped lang="less">
  @import "../styles/PerData.less";
</style>
