<template>
  <div class="data">
    <header>
		<div>
			<span>＜</span>
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
      <span class="Choice">
        <span class="checked">男</span>
        <span>女</span>
        <span>保密</span>
     </span>
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
		 <button type="submit" class="btn btn-default">确认修改</button>
	 </div>
  </div>
</template>

<script>
export default {
  name: 'Data',
  data () {
    return {
      msg: 'data'
    }
  }
}
</script>

<style scoped lang="less">
  @import "../styles/Data.less";
</style>
