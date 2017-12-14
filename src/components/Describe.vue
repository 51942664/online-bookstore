<template>
    <div class="describeBox">
        <p class="close">
            <span @click="$emit('close')">&times;</span>
        </p>
        <!-- 信息 -->
        <div class="author">
            <div class="img">
                <img :src="describe.img">
            </div>
            <div class="bookdetails">
                <p>
                    <span>{{author}}</span>
                    <span>{{describe.author}}</span>
                </p>
                <p>
                    <span>{{page}}</span>
                    <span>{{describe.page}}</span>
                </p>
                <p>
                    <span>{{booknum}}</span>
                    <span>{{describe.ISBN}}</span>
                </p>
                <p>
                   <span>{{date}}</span>
                   <span>{{describe.day}}</span>
                </p>
                <div>
                    <router-link :to="{name:'detailsPage'}" tag="a">详情</router-link>
                    <i>&gt;</i>
                </div>
            </div>
        </div>
        <!-- 描述 -->
        <div class="describe">
            <p>{{describe.name}}</p>
            <div>
                <p>{{describe.describe}}</p>
                <p>{{describe.describe_2}}</p>
            </div>
        </div>
        <!-- 单价 -->
        <div class="price">
            <span>￥{{describe.price}}</span>
            <span>1本</span>
            <span>&gt;</span>
        </div>
<!-- btn -->
    <div class="btn">
        <button type="button" :class="{'active' : col}" @click="addcssstyle">加入购物车</button>
         <button type="button" :class="{'active' : !col}" @click="addcssstyle">立即购买</button>
    </div>
   
    </div>
</template>
<script>
export default {
  name: "Describe",
  props: ["author", "page", "booknum", "date", "describe","test"],
  data() {
    return {
      col: true
    };
  },
  methods: {
    addcssstyle() {
      this.col = !this.col;
    }
  }
};
</script>
<style lang="less">
@import "./../styles/describe.less";
</style>
