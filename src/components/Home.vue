<template>
  <div class="home">
    <div class="title">
      <h2>掌上书城</h2>
    </div>
    <div class="main">
      <!-- 轮播 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../assets/14.png">
          </div>
          <div class="swiper-slide">
            <img src="../assets/1.png">
          </div>
          <div class="swiper-slide">
            <img src="../assets/15.png">
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <!-- Add Arrows -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
      <!-- 活动 -->
      <div class="activity">
        <i class="fa fa-bullhorn fa-lg"></i>
        <div>
          <span>{{activity}}</span>
        </div>
      </div>
      <BookList :newbook="newBook" :eidtbook="eidtBook" :hotbook="hotBook" @details="showDetails" />
    </div>
    <transition name="fade">
      <Describe 
      author="作者" 
      page="页数"
      booknum="书号"
      date="出版日期" 
      v-if="show" 
      :describe = bookdetails

      @close="close" />
    </transition>
  </div>
</template>

<script>
import Describe from "./Describe";
import BookList from "./BookList";
import SwiperCss from "swiper/dist/css/swiper.css";
import Swiper from "swiper";

require("./../scripts/home");
export default {
  name: "Home",
  components: {
    BookList,
    Describe
  },
  data() {
    return {
      activity: "双12全场图书低至1折，更有隐藏神秘惊喜",
      newBook: [],
      eidtBook: [],
      hotBook: [],
      bookdetails:{},
      show: false,
      index:''
    };
  },
  methods: {
    runSwiper() {
      var swiper = new Swiper(".swiper-container", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: true
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
    },
    obtainData() {
      var $this = this;
      axios
        .get("./../../static/homeData.json")
        .then(function(response) {
          console.log(response.data);
          $this.newBook = response.data.newBook;
          $this.eidtBook = response.data.eidtBook;
          $this.hotBook = response.data.hotBook;
        })
        .catch(function(error) {
          console.error("程序猿睡着了0.0");
        });
    },
    showDetails(idx,witch) {
      this.show = !this.show;
      this.index = idx;
     var $this = this;
      console.log(idx);
      axios.get("./../../static/homeData.json").then(function(response){
        $this.bookdetails = response.data[witch][idx];
        console.log($this.bookdetails)
      }).catch(function(error){
        console.error("程序猿睡着了0.0");
      })
    },
    close() {
      this.show = !this.show;
    }
  },
  mounted() {
    this.runSwiper();
    this.obtainData();
  }
};
</script>

<style lang="less" scoped>
@import "../styles/home.less";
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>