<template>
    <div class="details">
        <p class="close">
            <span @click="$emit('close')">&times;</span>
        </p>
        <!-- 信息 -->
        <div class="author">
            <div class="img">
                <img src="./../assets/b1.png">
            </div>
            <div class="bookdetails">
                <p>
                    <span>{{author}}</span>
                    <span>Nicholas C. Zakas</span>
                </p>
                <p>
                    <span>{{page}}</span>
                    <span>730</span>
                </p>
                <p>
                    <span>{{booknum}}</span>
                    <span>B00CBBJS5Y</span>
                </p>
                <p>
                   <span>{{date}}</span>
                   <span>2012年3月1日</span>
                </p>
                <div>
                    <span>详情</span>
                    <i>&gt;</i>
                </div>
            </div>
        </div>
        <!-- 描述 -->
        <div class="describe">
            <p>JavaScript高级程序设计（第三版）</p>
            <div>
                <p>《JavaScript高级程序设计(第3版)》是JavaScript超级畅销书的最新版。ECMAScript 5和HTML5在标准之争中双双胜出，使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript增添了很多适应未来发展的新特性。
</p>
                <p>《JavaScript高级程序设计(第3版)》这一版除增加5章全新内容外，其他章节也有较大幅度的增补和修订，新内容篇幅约占三分之一。全书从JavaScript语言实现的各个组成部分——语言核心、DOM、BOM、事件模型讲起，深入浅出地探讨了面向对象编程、Ajax与Comet服务器端通信...
</p>
            </div>
        </div>
        <!-- 单价 -->
        <div class="price">
            <span>￥69.30</span>
            <span>3本</span>
            <span>&gt;</span>
        </div>
<!-- btn -->
    <div class="btn">
        <button type="button">加入购物车</button>
         <button type="button" class="shop">立即购买</button>
    </div>
    </div>
    
</template>
<script>
export default {
  name: "BookDetails",
        props: ['author','page','booknum','date'],
        data() {
            return {
            };
        }
}
</script>
<style lang="less">
@import './../styles/bookdetails.less';
</style>
