<template>
<div class="book">
        <div>
            <h3>新书上架</h3>
            <ul>
                <li v-for="(booklist,index) in newbook" :key="booklist.id" @click="$emit('details',index,'newBook')">
                    <div>
                        <img :src="booklist.img">
                        <p class="name">{{booklist.name}}</p>
                        <p class="price">￥{{booklist.price}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <div>
            <h3>编辑推荐</h3>
            <ul>
                <li v-for="(booklist,index) in eidtbook" :key="booklist.id" @click="$emit('details',index,'eidtBook')">
                    <div>
                        <img :src="booklist.img">
                        <p class="name">{{booklist.name}}</p>
                        <p class="price">￥{{booklist.price}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <div>
            <h3>热门新书</h3>
            <ul>
                <li v-for="(booklist,index) in hotbook" :key="booklist.id" @click="$emit('details',index,'hotBook')">
                    <div>
                        <img :src="booklist.img">
                        <p class="name">{{booklist.name}}</p>
                        <p class="price">￥{{booklist.price}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: "BookList",
  props: ["newbook", "eidtbook", "hotbook"],
  data() {
    return {};
  }
};
</script>
<style lang="less">
@import "./../styles/booklist.less";
</style>
