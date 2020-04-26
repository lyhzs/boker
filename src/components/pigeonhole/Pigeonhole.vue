<template>
  <div>
    <div class="block">
      <el-timeline>
        <el-timeline-item :timestamp="item.timer" placement="top" v-for="(item,index) in dataArr" :key="index" >
          <el-card >
            <div @click="todetails(item.id)">
            <h4>更新 {{item.title}} </h4>
            <p> 提交于 {{item.timer}}</p>
            </div>
           
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pigeonhole",
  data() {
    return {
      dataArr:[]
    };
  },
  methods: {
     todetails(id) {
       console.log(123456);
       
      this.$router.push({
        name: "Details",
        params: {
          id: id
        }
      });
    }
  },
  mounted() {
    this.dataArr=this.$store.state.dataArr

  }
};
</script>


<style scoped lang="less">
</style>
