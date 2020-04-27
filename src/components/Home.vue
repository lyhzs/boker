<template>
<!-- 盒子 -->
<div class="box">
  <!-- 导航条及内容主体 -->
    <div class="home">
      <Header></Header>
      <div class="main">
        <router-view></router-view>
      </div>
    </div> 
    <!-- 底部 永远固定在底部 -->
     <div class="foot">
        <Myfooter></Myfooter>
    </div>
</div>
  
</template>

<script>
import Header from "@/components/header/Header";
export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
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
.foot{
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
.box{
  height: 100%;
  padding-bottom: 120px;
  min-height: 90vh;
  position: relative;
  box-sizing: border-box
}

</style>
