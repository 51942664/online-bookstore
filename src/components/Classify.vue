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
       <li v-for="(book,index) in bookList" :key="book.id">
         <router-link :to="{name:'detailsPage',params:{value:getDescribe[index]}}" tag="a"> 
           <div>
           <img :src="book.img">
         </div>
         <div class="tilte_li">
           <h4>{{book.name}}</h4>
           <p class="svg_img">{{book.author}} 
             <span></span>
             </p>
           <p>￥ {{book.price}}
           </p>
         </div>
          </router-link>
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
      bookList: [],
      getDescribe:[]
    }
  },
  methods:{
     //使用axios进行数据请求
    loadBookInfo(){
      axios.get('./static/data.json').then((res) =>{
        // 如果请求成功，将bookList空数组替换为请求到的数组
        this.bookList = res.data;
      })
    },
    // 获取数据
    getDescribeObj(){
       axios.get('./static/data.json').then((resopnse) =>{ 
         this.getDescribe = resopnse.data
      }).catch(function(error){
        console.error("程序员吃饭去了，刷新试试看!!")
      })
    }
  },
  created() {
    // 执行书库列表加载
    this.loadBookInfo();
  },
  mounted(){
    this. getDescribeObj();
  }
}
</script>

<style scoped lang="less">
  @import "../styles/Classify.less";
</style>
