<template>
  <div>
    <div class="title" v-title data-title="互动">互动</div>
    <!-- 壁纸轮播图 -->
    <div class="img">
      <!-- <img src="static/images/liu1.jpg" /> -->
      <div class="swiper">
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div class="swiper-slide" :key="index" v-for="(item,index) in banners">
              <img :src="item" />
              
            </div>
          </div>
          <!-- <div class="swiper-pagination"></div> -->
        </div>
      </div>
    </div>


  </div>
</template>

<script>
    // 轮播图 
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";


export default {
  name: "Interaction",
  data() {
    return {
      banners: [
        "static/images/liu1.jpg",
        "static/images/liu2.jpg",
        "static/images/liu3.jpg"
      ],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        loop: true
      }
    };
  },
  methods: {
    
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  mounted() {

  }
};
</script>


<style scoped lang="less">
.title {
  font-size: 26px;
  text-align: center;
  padding: 20px;
}
.img {
  width: 100%;
  // height: 500px;
  overflow: hidden;
  img {
    // width: 40%;
    // display: block;
    // margin: 20px auto;
    width: 100%;
  }
}
.swiper {
  width: 40%;
  margin: 20px auto;
  .swiper-wrapper {
    height: 180px;


  }
}

</style>
