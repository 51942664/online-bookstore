<template>
  <div class="shopping">
    {{msg}}
    <div class="device" id="page-cart">
        <header>
            <span class="header-title">购物清单</span>
            <span class="header-edit" @click="toggleDelBtn">
                <span v-show="!delFlag">编辑</span>
                <span v-show="delFlag">完成</span>
            </span>
        </header>
        <div class="page">
            <div class="empty-states" v-if="cart.length === 0">
                <span>这里是空的，快去逛逛吧</span>    
            </div>
            <ul class="goods-list cart-list" v-else>

                <li class="goods-item" v-for="(item, index) in cart" :key="item.id">
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
                        <p class="goods-title">{{ item.name }}</p>
                        <div class="goods-price">
                            <span>¥<b>{{ item.price }}</b></span>
                        </div>
                        <span class="des">库存{{ item.stock }}件</span>
                        <div class="goods-num">
                            <div class="num-btn" @click="changeQty(true, item)">+</div>
                            <input class="show-num" type="number" :value=item.quantity>
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
            <div class="action-btn buy-btn">去结算({{ selectedNum }})</div>
            <div class="action-btn del-btn" @click="delGoods">删除({{ selectedNum }})</div>
            <div class="total">合计：<span>¥<b>{{ totalPrice }}</b></span></div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shopping',
  data() {
    return {
      msg: 'shopping',
      checkAllFlag: false,
    selectedNum: 0,
    delFlag: false,
    cart: [{
        id: 1001,
        name: 'JavaScript高级程序设计',
        price: 558,
        type: 4,
        quantity: 1,
        subtotal: 558,
        checked: false,
        sales: 1872,
        img: 'src/assets/b1.png'
    }]
    // cart: []
    }
    
  },
  methods: {

        /**
         * @method 增减单品数量
         * @param {Boolean} isAdd 是否增加
         * @param {Number} index 商品下标
         */
        changeQty: function (isAdd, item) {
            var num = item.quantity,
                stock = item.stock;

            if (isAdd && num < stock) {
                this.$set(item, 'quantity', ++num);
            } else if (!isAdd && num > 1) {
                this.$set(item, 'quantity', --num);
            }

            this.$set(item, 'subtotal', (item.price * num).toFixed(1));
        },

        /**
         * @method 选择商品
         * @param {Object} item 商品对象
         */
        selectGoods: function (item) {
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
        checkAll: function () {
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
        toggleDelBtn: function () {
            this.delFlag = !this.delFlag;
        },

        /**
         * @method 删除商品
         */
        delGoods: function () {
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
            // for (var i = 0; i < cart.length; i++) {
            //     cart[i].checked && cart.splice(i--, 1);
            // };

            // 重置 被选商品数量、全选状态、删除状态
            this.selectedNum = 0;
            this.checkAllFlag = false;
            this.delFlag = !this.delFlag;
        }
  },
  computed: {
        /**
         * @method 已选商品的总额
         */
        totalPrice: function () {
            var num = 0;
            this.cart.forEach(function (item) {
                item.checked && (num += parseFloat(item.subtotal));
            });
            return num;
        }
    }
}
</script>

<style lang="less">
  @import "../styles/Shopping.less";
</style>
