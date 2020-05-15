<template>
  <div  class="details" v-title data-title="分类">
        <h3 class="title">分类</h3>
        <el-collapse v-model="activeName" accordion>
            <el-collapse-item :title="item.title+'('+item.arr.length+')'" :name="index+1"  v-for="(item,index) in dataArr" :key="index">
              <ul class="list">
                 <li v-for="(item1,index1) in item.arr" :key="index1" @click="todetails(item1.id)">
                   <i class="el-icon-tickets icon"></i>
                   {{item1.title}} 
                      <div class="time hidden-sm-and-down"> 时间 {{item1.timer}}</div>
                   </li>
              </ul>
            </el-collapse-item>          
          </el-collapse>
  </div>
</template>

<script>


export default {
  name: "Classify",
  data() {
    return {
     activeName: '1',
    //  dataArr:[]
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
      // console.log( this.$store.getters.classify )
      // this.dataArr=this.$store.getters.classify
  },
  computed: {
    dataArr(){
      return this.$store.getters.classify
    }
  },
};
</script>


<style scoped lang="less">
  .title{
    margin: 15px;
    font-size: 26px;
    text-align: center;
  }
  .el-collapse-item__header{
    background:transparent!important
  }
  .list{
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
      padding:15px 40px;
      transform:scale(1.1)
    }
  }
</style>
