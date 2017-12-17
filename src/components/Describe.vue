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
                    <router-link :to="{name:'detailsPage',params:{value:getDescribe}}" tag="a">详情</router-link>
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
            <button type="button" @click="addShopCar">加入购物车</button>
            <router-link :to="{name:'settlement'}" tag="a">
                <button type="button" class="active" @click="purchase">立即购买</button>
            </router-link>
        </div>
        <!-- 遮罩 -->
        <div v-if="showMask" class="mask">
            <div>{{buy}}</div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Describe",
        props: ["describe", "author", "page", "booknum", "date", "test"],
        data() {
            return {
                getDescribe: {},
                buy: "已添加成功，在购物车等亲",
                showMask: false,
                describeObj: {}
            };
        },
        methods: {
            getDescribeObj() {
                this.getDescribe = this.$props.describe;
                console.log(this.getDescribe)
            },
            // 本地缓存，让购物车获取数据
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
            addShopCar() {
                var $this = this;
                this.showMask = !this.showMask;
                // 存放数据;
                this.describeObj = {
                    img: this.$props.describe.img,
                    name: this.$props.describe.name,
                    author: this.$props.describe.author,
                    price: this.$props.describe.price
                };
                // 判断本地缓存是否已经有值;
                if (!localStorage.getItem('describe')) {
                    this.add('describe', this.describeObj);
                } else {
                    var name = this.describeObj.name
                    var getdescrube = JSON.parse(localStorage.getItem('describe')),
                        getdescrubeLength = getdescrube.length;
                    for (var i = 0; i < getdescrubeLength; i++) {
                        if (name === getdescrube[i].name) {
                              setTimeout(function () {
                                $this.buy = "亲，已经在购物车，请勿重复添加哦";
                                return;
                              })
                        } else {
                            this.add('describe', this.describeObj);
                        }
                    }
                }
                setTimeout(function () {
                    $this.showMask = !$this.showMask;
                }, 2000);
            },
            purchase() {
                this.describeObj = {
                    img: this.$props.describe.img,
                    name: this.$props.describe.name,
                    author: this.$props.describe.author,
                    price: this.$props.describe.price
                };
                var describe = JSON.stringify(this.describeObj)
                localStorage.setItem('buy', describe);
            }
        },
        mounted() {
            setTimeout(() => {
                this.getDescribeObj();
            }, 1000);
        }
    }

</script>
<style lang="less">
    @import "./../styles/describe.less";
</style>