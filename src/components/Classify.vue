<template>
  <div class="classify">
    <header>
      <h3>分类</h3>
    </header>
   <main>
    <div class="sear">
      <span></span>
      <input class="seacher" @keyup="searchBook(val)" v-model="val" type="text" placeholder="请输入您想查找的图片名称进行搜索">
    </div>
     <ul>
		 <li v-if="hidd">
			 <span>------------对不起,您输入的内容不存在------------</span>
		 </li>
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
		 <!--加载更多-->
		 <li class="loadmore" v-if="loadshow" @click="loadm">
		  <p>
			<span>加载更多</span>
			<span></span>
		   </p>
		 </li>
     </ul>
   </main>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'Classify',
  data () {
    return {
      msg: 'classify',
      bookList: [],

	   val:'',
		matching:null,
   //加载更多状态
		loadshow:true,
		num:4,
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
    },
     //匹配搜索框的值
	  searchBook(val){
      //如果输入值为空的时候等于原数组
		  if(val.trim() === ""){
           this.matching = this.bookList;
		  }
		  else {
		  // 将满足条件的对象数组项返回为一个新的对象那数组
			this.matching = this.bookList.filter((item) =>{
				// 将搜索框输入的值作为正则搜索条件
             const matchReg = new RegExp(val,'ig');
				// 匹配书名或作者名
				return matchReg.test(item.name) || matchReg.test(item.author);
			})
		  }
	  },
	  loadm(){
		  this.num += 4
	  }
  },
computed: {
	// 匹配的图书列表
	bookFilter(){
		// 如果输入值为空格的时候
	    if(!this.matching){
			this.loadshow = true
			// 显示原有图书列表
		return this.bookList.slice(0,this.num);
		}
		// 如果存在输入匹配的结果
		else if(this.matching.length){
			// 获得匹配项数组
			this.loadshow = false
			return this.matching;
		}
	},
  //判断输入框状态
	hidd(){
	    if(this.bookFilter){
	        return false
		}else {
	        return true
		}
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
