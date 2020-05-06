<template>
  <div>
    <h3>关于我</h3>

    <div>网名：林以行</div>
    <div>就读大学：中国石油大学</div>
    <div>工作单位：北京市任网行科技有限公司</div>
    <div>
      擅长技术：
      <br />精通H5技术开发，擅长、elementUI、LayUI等框架的开发，
      <br />精通jQuery、Bootstrap、AJAX、LayUI、EasyUI、Javascript、 Html5、CSS3等前端页面技术，
      <br />熟练使用VUE，iView开发系统，
      <br />
    </div>
    <div>职业：前端开发工程师</div>
    <div>
      个人简介：
      <br />一个正在努力奋斗的前端
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {}
};
</script>


<style scoped lang="less">
  div{
    text-align: left;
    font-size: 16px;
    line-height: 25px;

  }
  h3{
    text-align: center;
    font-size: 26px;
    font-weight: bold;
    margin:20px auto 40px
  }
</style>
