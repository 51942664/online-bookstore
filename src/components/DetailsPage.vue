<template>
    <div class="detailsPage">
        <div class="title">
            <h2>图书详情</h2>
           
            <router-link :to="{name:'home'}" tag="a"> <i></i></router-link>
        </div>
        <!-- 信息 -->
        <div class="author">
            <div class="img">
                <img src="./../assets/b1.png">
            </div>
            <div class="bookdetails">
                <p>
                    <span>作者</span>
                    <span>123123</span>
                </p>
                <p>
                    <span>页数</span>
                    <span>123123</span>
                </p>
                <p>
                    <span>书号</span>
                    <span>123123</span>
                </p>
                <p>
                   <span>出版日期</span>
                   <span>12312</span>
                </p>
                <p>
                   <span>售价</span>
                   <span class="price">12312</span>
                </p>
            </div>
        </div>
        <!-- 购买 -->
        <div class="describe">
            <p>JavaScript高级程序设计第三版</p>
            <div class="btn">
                <span>加入购物车</span>
                <span>立即购买</span>
            </div>
        </div>
        <!-- 内容摘要 -->
        <div class="abstract">
            <div class="content">
                <p>《JavaScript高级程序设计(第3版)》是JavaScript超级畅销书的最新版。ECMAScript 5和HTML5在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript增添了很多适应未来发展的新特性。
</p>
                <p>《JavaScript高级程序设计(第3版)》这一版除增加5章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象编程、Ajax与Comet服务器端通信...
</p>
            <div>内容概要</div>
            </div>
            <div class="content">
                <p>《JavaScript高级程序设计(第3版)》是JavaScript超级畅销书的最新版。ECMAScript 5和HTML5在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript增添了很多适应未来发展的新特性。
</p>
                <p>《JavaScript高级程序设计(第3版)》这一版除增加5章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象编程、Ajax与Comet服务器端通信...
</p>
            <div>内容概要</div>
            </div>
            
            <div class="content">
                <p>《JavaScript高级程序设计(第3版)》是JavaScript超级畅销书的最新版。ECMAScript 5和HTML5在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript增添了很多适应未来发展的新特性。
</p>
                <p>《JavaScript高级程序设计(第3版)》这一版除增加5章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象编程、Ajax与Comet服务器端通信...
</p>
            <div>作者简介</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "DetailsPage",
  data:{
      details:{}
  },methods:{
      
  }
};
</script>
<style lang="less">
@import "./../styles/detailspage.less";
</style>
