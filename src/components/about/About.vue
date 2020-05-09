<template>
  <div>
    <h3>博客说明</h3>
      <el-timeline>
        <el-timeline-item timestamp="2020/5/09" placement="top">
          <el-card>
            <h4> 优化发布页逻辑</h4>
            <p>保存文章编辑状态,退出时询问等页面完善</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2020/5/07" placement="top">
          <el-card>
            <h4> 优化权限等页面</h4>
            <p>注册功能未开放 目前只供个人练习使用</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/04/20" placement="top">
          <el-card>
            <h4>提交 Github </h4>
            <p>github博客项目地址 <el-link type="primary" href="https://github.com/lyhzs/boker"> 博客项目 </el-link></p>
            <p>github博客后台项目地址 <el-link type="primary" href="https://github.com/lyhzs/bokerjk"> 博客后台项目 </el-link></p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2020/04/1" placement="top">
          <el-card>
            <h4>博客搭建</h4>
            <p>前端采用vue+elementui搭建，后台接口为express+mysql搭建</p>
            <p>页面主体参考<el-link type="primary" href="https://www.myong.top"> Mr.yong </el-link></p>
          </el-card>
        </el-timeline-item>
      </el-timeline>

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
