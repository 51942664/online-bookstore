<template>
    <div class="detailsPage">
        <div class="title">
            <h2>图书详情</h2>

            <router-link :to="{name:'home'}" tag="a">
                <i></i>
            </router-link>
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
                <span @click="addShoppingCar">加入购物车</span>
                 <router-link :to="{name:'settlement'}" tag="a">
                <span @click="buyCommodity">立即购买</span>
                </router-link>
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
        data() {
            return {
                details: {},
                describeObj:''
            }
        }, methods: {
            getDetails() {
                this.details = this.$route.params.value;
            },
            // 添加数据函数;
            add(key, infos) {
                var Data = null;
                if (localStorage[key]) {
                    Data = JSON.parse(localStorage[key]);
                } else {
                    Data = [];
                }
                Data.push(infos);
                localStorage[key] = JSON.stringify(Data);
            },
            addShoppingCar() {
                // 获取本地数据;
                this.describeObj = {
                    img: this.$route.params.value.img,
                    name: this.$route.params.value.name,
                    author: this.$route.params.value.author,
                    price: this.$route.params.value.price
                };
                // 判断本地缓存是否已经有值;
                if (!localStorage.getItem('describe')) {
                    this.add('describe', this.describeObj);
                    alert("添加成功");
                } else {
                    var name = this.describeObj.name
                    var getdescrube = JSON.parse(localStorage.getItem('describe')),
                        getdescrubeLength = getdescrube.length;
                    for (var i = 0; i < getdescrubeLength; i++) {
                        if (name === getdescrube[i].name) {
                            alert("亲，已经在购物车，请勿重复添加哦");
                            return;
                        } else {
                            this.add('describe', this.describeObj);
                        }
                    }
                }
            },
            // 跳转支付页，将本页数据放入缓存.
            buyCommodity() {
                this.describeObj = this.$route.params.value.price
                var describe = JSON.stringify(this.describeObj)
                localStorage.setItem('buy', describe);
            }
        }, mounted() {
            this.getDetails();
        }
    };
</script>
<style lang="less">
    @import "./../styles/detailspage.less";
</style>