<template>
  <div class="shopping">
    <header>
      <h3>购物车</h3>
    </header>
    <div class="device" id="page-cart" v-if="shoppingShow">
        
        <div class="page">
            <div class="empty-states" v-if="cart.length === 0">
                <span>这里是空的，快去逛逛吧</span>    
            </div>
            <ul class="goods-list cart-list" v-else>
                <section>
                    <span class="header-title">购物清单</span>
                    <span class="header-edit" @click="toggleDelBtn">
                    <span v-show="!delFlag">编辑</span>
                    <span v-show="delFlag">完成</span>
                    </span>
                </section>
                <li class="goods-item" v-for="item in cart" :key="item.id">
                    <div class="item-selector">
                        <div class="icon-selector" v-bind:class="{'selector-active': item.checked}" @click="selectGoods(item)">
                            <svg t="1504061791962" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2922" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12">
                                <path d="M908.288 127.488l-537.6 537.6-254.976-254.976L0 525.824l254.976 254.976 115.712 115.712L486.4 780.8l537.6-537.6z"
                                    fill="#ffffff" p-id="2923"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="goods-img">
                        <img v-bind:src="item.img" v-bind:alt="item.name">
                    </div>
                    <div class="goods-info">
                        <p class="goods-title" :title="item.name">{{item.name}}</p>
                        <p class="goods-author" :title="item.author">{{item.author}}</p>
                        <div class="goods-price">
                            <span>¥<b>{{ item.price }}</b></span>
                        </div>
                        <div class="goods-num">
                            <div class="num-btn" @click="changeQty(true, item)">+</div>
                            <input class="show-num" type="number" :value="quantity">
                            <div class="num-btn" @click="changeQty(false, item)">-</div>
                        </div>
                    </div>
                </li>
            </ul>

        </div>
        <div class="action-bar" v-bind:class="{ 'del-box': delFlag }">
            <!-- del-box -->
            <div class="g-selector" @click="checkAll">
                <div class="item-selector">
                    <div class="icon-selector" v-bind:class="{'selector-active': checkAllFlag}">
                        <svg t="1504061791962" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2922" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12">
                            <path d="M908.288 127.488l-537.6 537.6-254.976-254.976L0 525.824l254.976 254.976 115.712 115.712L486.4 780.8l537.6-537.6z"
                                fill="#ffffff" p-id="2923"></path>
                        </svg>
                    </div>
                </div>
                <span>全选</span>
            </div>
            <router-link :to="{name: 'settlement'}" class="action-btn buy-btn" tag="div" :total-price="totalPrice" >去结算({{ selectedNum }})</router-link>
            <div class="action-btn del-btn" @click="delGoods">删除({{ selectedNum }})</div>
            <div class="total">合计：<span>¥<b>{{ totalPrice }}</b></span></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shopping',
  data() {
// console.log(arr.length)
    return {
        msg: 'shopping',
        checkAllFlag: false,
        selectedNum: 0,
        quantity: 1,
        delFlag: false,
        shoppingShow:false,
        cart: JSON.parse(localStorage.getItem('describe'))
        
    }
    
  },
  methods: {
      stateQuery(){
        if(localStorage.getItem('userName')){
          this.shoppingShow = true;
        }else{
            alert("该用户还没登录或注册，请登录或注册")
          this.$router.push({
              path: "/self"
            });
        }
      },
        /**
         * @method 增减单品数量
         * @param {Boolean} isAdd 是否增加
         * @param {Number} index 商品下标
         */
        changeQty(isAdd, item) {
            var num = this.quantity;
            if (isAdd && num < 5) {
                this.$set(item, 'quantity', ++num);
            } else if (!isAdd && num > 1) {
                this.$set(item, 'quantity', --num);
            }

            this.$set(item,(item.price * num).toFixed(1));
        },

        /**
         * @method 选择商品
         * @param {Object} item 商品对象
         */
        selectGoods(item) {
            // 状态值取反，并根据状态值对selectedNum进行加减
            item.checked = !item.checked;
            item.checked ? ++this.selectedNum : --this.selectedNum;
            // 设置全选
            this.selectedNum === this.cart.length 
                ? this.checkAllFlag = true 
                : this.checkAllFlag = false
        },

        /**
         * @method 全选
         */
        checkAll() {
            var self = this;
            this.checkAllFlag = !this.checkAllFlag;

            this.cart.forEach(function (item) {
                if (self.checkAllFlag) {
                    // 全选
                    item.checked = true;
                    self.selectedNum = self.cart.length;
                } else {
                    // 取消全选
                    item.checked = false;
                    self.selectedNum = 0;
                }
            });
        },

        /**
         * @method 切换删除按钮
         */
        toggleDelBtn() {
            this.delFlag = !this.delFlag;
        },

        /**
         * @method 删除商品
         */
        delGoods() {
            /**
             * !提示：
             * 每次遍历删除数组元素时，会减少数组长度，所以不能缓存length
             * 也不能用forEach方法，因为它会自动缓存数组的长度
             * 这里还可以用filter
             */
            var cart = this.cart;
            this.cart = cart.filter(function (item) {
                return !item.checked
            });
            // 重置 被选商品数量、全选状态、删除状态
            this.selectedNum = 0;
            this.checkAllFlag = false;
            this.delFlag = !this.delFlag;
        }
    },
    mounted(){
        this.stateQuery();
    },
    computed: {
        /**
         * @method 已选商品的总额
         */
        totalPrice() {
            var num = 0;
            this.cart.forEach(function (item) {
                // console.log(this.quantity)
                item.checked && (num += parseFloat(item.price));
            });
            return num;
        }
    }
}
</script>

<style lang="less">
  @import "../styles/Shopping.less";
</style>
