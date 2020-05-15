<template>
  <div>
    <div class="top" v-title data-title="搜索">
      <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
    </div>
    <div class="main">
      
           <ul class="list">
                 <li v-for="(item,index) in newdataArr" :key="index" @click="todetails(item.id)">
                   <i class="el-icon-tickets icon"></i>
                   {{item.title}} 
                      <div class="time hidden-sm-and-down"> 时间 {{item.timer}}</div>
                   </li>
            </ul>
        
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      input:""
    };
  },
  methods: {
     todetails(id) {
           this.$router.push({
       path: `/details/${id}`,
      });
    }
  },
  mounted() {
      
  },
  computed: {
    dataArr(){
      return this.$store.getters.sortArr
    },
    newdataArr(){
      // 搜索页面只展示最新的20条数据
      // if(this.input==""){return this.$store.getters.sortArr.splice(0,20)}
      return this.input==""?this.$store.getters.sortArr.slice(0,20):this.dataArr.filter(item=>item.title.indexOf(this.input)!=-1)
    }
  }
};
</script>


<style scoped lang="less">

  .list{
    margin-top: 20px;
    li{
      padding:15px;
      line-height:20px;
      transition:all .2s;
      box-sizing:border-box;
      cursor:pointer;
      .time{
        float:right
      }
    }
    li:hover{
      background-color: #ffe6e6;
    }
  }
</style>
