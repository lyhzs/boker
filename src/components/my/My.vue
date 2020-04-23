<template>
<div class="main">
  <div class="list">
        <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="今日出行费用" name="1">
       <el-input v-model="trip" placeholder="今日出行费用"></el-input>
      </el-collapse-item>
      <el-collapse-item title="今日饮食费用" name="2">
        <el-input v-model="bite" placeholder="今日饮食费用"></el-input>
      </el-collapse-item>
      <el-collapse-item title="其他杂项费用" name="3">
        <el-input v-model="other" placeholder="其他杂项费用"></el-input>
      </el-collapse-item>
    </el-collapse>
  </div>
  <div class="list">
        <el-collapse v-model="activeName1" accordion>
      <el-collapse-item title="今日出行费用" name="1">
       <el-input v-model="trip" placeholder="今日出行费用"></el-input>
      </el-collapse-item>
      <el-collapse-item title="今日饮食费用" name="2">
        <el-input v-model="bite" placeholder="今日饮食费用"></el-input>
      </el-collapse-item>
      <el-collapse-item title="其他杂项费用" name="3">
        <el-input v-model="other" placeholder="其他杂项费用"></el-input>
      </el-collapse-item>
    </el-collapse>
  </div>
</div>
</template>

<script>
 export default {
   name:"My",
    data() {
      return {
          activeName: '1',
          activeName1: '1',
          trip:0,
          bite:0,
          other:0


      };
    },
    methods: {
   
    }
  }
</script>


<style scoped lang="less">
 .main{
   display: flex;

   .list{
    flex:1;
    padding:20px 250px ;
    margin: 0px auto;
    background-color: #fff;
   }
 }
</style>
