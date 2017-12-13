<template>
  <div class="classify">
    <header>
      <h3>分类</h3>
    </header>
   <main>
    <div class="sear">
      <span></span>
      <input class="seacher" type="text" placeholder="请输入您想查找的图片名称进行搜索">
    </div>
     <ul>
       <li v-for="book in bookList">
         <div>
           <img :src="book.img">
         </div>
         <div class="tilte_li">
           <h4>{{book.name}}</h4>
           <p class="svg_img">{{book.author}} <span></span></p>
           <p>￥ {{book.price}}</p>
         </div>
       </li>
     </ul>
   </main>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'Classify',
  components: {
  },
  data () {
    return {
      msg: 'classify',
      bookList: []
    }
  },
  methods:{
     //使用axios进行数据请求
    loadBookInfo(){
      axios.get('./static/data.json').then((res) =>{
        // 如果请求成功，将bookList空数组替换为请求到的数组
        this.bookList = res.data;
        console.log(this.bookList)
      })
    }
  },
  created() {
    // 执行书库列表加载
    this.loadBookInfo();
  }
}
</script>

<style scoped lang="less">
  @import "../styles/Classify.less";
</style>
