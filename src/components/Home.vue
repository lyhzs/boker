<template>
  <!-- 盒子 -->
  <div class="box">
    <!-- 导航条及内容主体 -->
    <div class="home">
      <Header></Header>
      <div class="main">
        <!-- 移动端app左右切换效果 -->
        <!-- <transition :name="transitionName"> -->
        <transition>
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <!-- 底部 永远固定在底部 -->
    <div class="foot">
      <Myfooter></Myfooter>
    </div>
    <!-- 工具栏（返回顶部等） -->
    <div class="index_bal">
      <transition name="fade">
        <div class="list" v-show="scroll" @click="backtop($event)">
          <i class="el-icon-arrow-up"></i>
        </div>
      </transition>
      <div class="list">
        <i class="el-icon-user"></i>
      </div>
      <div class="list">
        <i class="el-icon-search"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/Header";

export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      transitionName: "",
      scroll: false,
      timer: null
    };
  },
  methods: {
    backtop(e) {
      this.timer = setInterval(() => {
        if (document.scrollingElement.scrollTop <= 0) {
          clearInterval(this.timer);
          this.timer = null;
        } else {
          document.scrollingElement.scrollTop =
            document.scrollingElement.scrollTop - 200;
        }
      }, 50);
    }
  },
  mounted() {
    var _this = this;
    window.onscroll = function(e) {
      // console.log( e.target.scrollingElement.scrollTop );
      if (e.target.scrollingElement.scrollTop > 150) {
        _this.scroll = true;
      } else {
        _this.scroll = false;
      }
    };
  },
  //  watch: {
  //通过监听路由meta 实现左右切换特效 适用于手机app端效果
  //   $route (to, from) {
  //     if (to.meta.index > from.meta.index) {
  //       this.transitionName = 'slide-left'
  //     } else {
  //       this.transitionName = 'slide-right'
  //     }
  //   }
  // },
  components: {
    Header
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.main {
  width: 800px;
  margin: 20px auto 0;
}
.foot {
  text-align: center;
  // margin-top: 30px;
  padding: 15px;
  line-height: 30px;
  background-color: #ebeef5;
  color: #666;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  bottom: -90px;
  left: 0;
}
.box {
  height: 100%;
  padding-bottom: 120px;
  min-height: 90vh;
  position: relative;
  box-sizing: border-box;
}
.index_bal {
  position: fixed;
  bottom: 10px;
  right: 10px;
  .list {
    width: 40px;
    height: 40px;
    margin-bottom: 10px;
    background-color: #9ccafb;
    position: relative;
    i {
      display: block;
      font-size: 20px;
      color: #ffffff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
