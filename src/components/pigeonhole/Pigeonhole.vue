<template>
  <div>
    <div class="block">
      <el-timeline>
        <el-timeline-item
          :timestamp="item.timer"
          placement="top"
          v-for="(item,index) in dataArr"
          :key="index"
          class="box"
        >
          <el-card class="warp">
            <div class="list">
              <h4>更新 {{item.title}}</h4>
              <p>提交于 {{item.timer}}</p> 
            </div>
             <div class="del" @click="del(item.id)">
                删除
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
      // dataArr: []
    };
  },
  methods: {
   open(id){
    
     this.$prompt('请输入二级密码', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });

   },
   del(id){
    
      var postid={id}
      var _this = this;

    //暂时中止删除
       _this.$notify({
             title: "删除功能检测未完善",
             message: "终止操作",
            type: "warning"
          });
    return

      this.$http.post("/del",postid).then(function(res) {
        
        if (res.data.status) {
          _this.$notify({
            title: "成功",
            message: "删除成功",
            type: "success"
          });

          _this.$http.get("/look").then(function(res) { _this.$store.commit("allData", res.data.data); });
          _this.dataArr = this.$store.state.dataArr;
        } else {
          _this.$notify.error({
            title: "错误",
            message: "删除失败"
          });
        }
      });
   },
  },
  mounted() {
    // this.dataArr = this.$store.state.dataArr;
  },
  computed: {
    dataArr(){
      return this.$store.getters.sortArr;
    }
  },
};
</script>


<style scoped lang="less">
.warp{
   position: relative;
   transition: all 0.2s;
    .del{
       transition: all 0.2s;
    position: absolute;
    right: 0px;
    top: 0%;
    height: 100%;
    line-height: 78px;
    text-align: center;
    background-color: #fb7171;
    width: 0px;
    color: #fff;
    opacity: 0;
  }
}
.warp:hover{
   position: relative;
   transition: all 0.2s;
    .del{
       transition: all 0.2s;
    position: absolute;
    right: 0px;
    top: 0%;
    height: 100%;
    line-height: 78px;
    text-align: center;
    background-color: #fb7171;
    width: 40px;
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
}
</style>
