<template>
  <div class="home">
    <h2>掌上书城</h2>
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
        <BookList
        :newbook="newBook"
        :eidtbook="eidtBook"
        :hotbook="hotBook"
        />
    </div>

  </div>
</template>

<script>
import Details from './Details'
import BookList from './BookList';
import SwiperCss from "swiper/dist/css/swiper.css";
import Swiper from "swiper";

require("./../scripts/home");
export default {
  name: "Home",
  components:{
    BookList,
    Details
  },
  data() {
    return {
      activity: "双12全场图书低至1折，更有隐藏神秘惊喜",
      newBook: [],
      eidtBook: [],
      hotBook: []
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
      obtainData(){
        var $this = this;
            axios.get("./../../static/homeData.json").then(
                function(response){
                  console.log(response.data)
                   $this.newBook = response.data.newBook;
                   $this.eidtBook = response.data.eidtBook;
                   $this.hotBook = response.data.hotBook;
                }
            ).catch(
                function(error){
                    console.error("程序猿睡着了0.0")
                }
            )
        }
  },
  mounted() {
    this.runSwiper();
    this. obtainData();
  }
};
</script>

<style lang="less" scoped>
@import "../styles/home.less";
</style>