<template>
  <div class="data">
    <header>
      <span></span>
      <h3>个人资料修改</h3>
    </header>
<main>
  <form class="form-inline">
    <div class="form-group">
      <label class="sr-only" for="exampleInputEmail3">昵称</label>
      <input type="email" class="form-control" id="exampleInputEmail3" placeholder="请输入昵称">
    </div>
    <div class="form-group">
      <label class="sr-only" for="exampleInputPassword3">Email</label>
      <input type="password" class="form-control" id="exampleInputPassword3" placeholder="请填写您的安全邮箱">
    </div>
    <div class="form-group">
      <label class="sr-only" for="exampleInputEmail3">性别</label>
      <p>
        <span class="checkbox">男</span>
        <span>女</span>
        <span>保密</span>
     </p>
    </div>
    <div>
      <label>生日</label>
    </div>
    <button type="submit" class="btn btn-default">Sign in</button>
  </form>
</main>
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
