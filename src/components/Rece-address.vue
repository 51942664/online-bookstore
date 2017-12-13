<template>
  <div class="rece-address">
    <header>
      <h3>收货地址</h3>
    </header>
    <main>
        <form>
          <div>
            <span>姓名</span> 
            <input type="text" placeholder="请填写您的真实姓名">
          </div>
          <div>
            <span>联系电话</span> 
            <input type="text" placeholder="请填写我们联系您的电话号码">
          </div>
          <div>
            <span>邮政编码</span> 
            <input type="text" placeholder="请填写您所在地区的邮政编码">
          </div>
        </form>
    </main>
  </div>
</template>

<script>
export default {
  name: 'rece-address',
  data () {
    return {
      msg: 'rece-address'
    }
  }
}
</script>

<style scoped lang="less">
  @import "../styles/Rece-address.less";
</style>
