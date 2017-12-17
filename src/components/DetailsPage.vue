<template>
    <div class="detailsPage">
        <div class="title">
            <h2>图书详情</h2>
           
            <router-link :to="{name:'home'}" tag="a"> <i></i></router-link>
        </div>
        <!-- 信息 -->
        <div class="author">
            <div class="img">
                <img :src="details.img">
            </div>
            <div class="bookdetails">
                <p>
                    <span>作者</span>
                    <span>{{details.author}}</span>
                </p>
                <p>
                    <span>页数</span>
                    <span>{{details.page}}</span>
                </p>
                <p>
                    <span>书号</span>
                    <span>{{details.ISBN}}</span>
                </p>
                <p>
                   <span>出版日期</span>
                   <span>{{details.page}}</span>
                </p>
                <p>
                   <span>售价</span>
                   <span class="price">￥{{details.price}}</span>
                </p>
            </div>
        </div>
        <!-- 购买 -->
        <div class="describe">
            <p>{{details.name}}</p>
            <div class="btn">
                <span>加入购物车</span>
                <span>立即购买</span>
            </div>
        </div>
        <!-- 内容摘要 -->
        <div class="abstract">
            <div class="content">
                <p>{{details.describe}}</p>
                <p>{{details.describe_2}}</p>
            <div>内容概要</div>
            </div>
            <div class="content">
                <p>{{details.describe}}</p>
                <p>{{details.describe_2}}</p>
            <div>内容概要</div>
            </div>
            
            <div class="content">
                <p>{{details.describe}}</p>
                <p>{{details.describe_2}}</p>
            <div>作者简介</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "DetailsPage",
  data(){
      return{
        details:{}
      }
  },methods:{
    getDetails(){
        this.details = this.$route.params.value;
    }
  },mounted(){
      this.getDetails();
  }
};
</script>
<style lang="less">
@import "./../styles/detailspage.less";
</style>
