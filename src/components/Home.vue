<template>
  <div class="home">
    <Header></Header>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="foot"></div>
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
<style scoped>
.main {
  width: 800px;
  margin: 20px auto 0;
}
</style>
