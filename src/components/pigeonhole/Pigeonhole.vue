<template>
  <div>
    <div class="block">

        <div class="list" v-for="(itemdataArr,index) in dataArr" :key="index"> 
          <h2>{{itemdataArr.title}}</h2>
                <el-timeline>
                  <el-timeline-item
                    :timestamp="item.timer"
                    placement="top"
                    v-for="(item,index1) in itemdataArr.data"
                    :key="index1"
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
    //    _this.$notify({
    //          title: "删除功能检测未完善",
    //          message: "终止操作",
    //         type: "warning"
    //       });
    // return

     
    if(this.$store.state.islogin){
       //登陆成功 权限功能未开放
      //二次确认
       this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

       this.$http.post("/del",postid).then(function(res) {
        if (res.data.status) {
          _this.$notify({
            title: "成功",
            message: "删除成功",
            type: "success"
          });

          _this.$http.get("/look").then(function(res) { _this.$store.commit("allData", res.data.data); });
        
        } else {
          _this.$notify.error({
            title: "错误",
            message: "删除失败"
          });
        }
      });
        }).catch(() => {
        //取消删除
          this.$notify.error({
            title: "错误",
            message: "取消删除"
          });

        });
    }else{
    //登陆失败 权限功能未开放
         _this.$notify({
             title: "删除失败",
             message: "终止操作",
            type: "warning"
          });
        this.$router.push({name:"Login"})

    }
   },
  },
  mounted() {
    // this.dataArr = this.$store.state.dataArr;
  },
  computed: {
    dataArr(){
        //  console.log(this.$store.getters.sortArr)
        var oldarr=this.$store.getters.sortArr
        var yeararr=[]
        var newarr=[] //同年月的数据

         // newarr.push([{ title:"", data:1 }])

        oldarr.forEach(element => {
           yeararr.push(`${element.timer.split('-')[0]}年${element.timer.split('-')[1]}月`)
        });

            for(var i=0; i<yeararr.length; i++){
                for(var j=i+1; j<yeararr.length; j++){
                    if(yeararr[i]==yeararr[j]){         //第一个等同于第二个，splice方法删除第二个
                        yeararr.splice(j,1);
                        j--;
                    }
                }
            }

 

           for(var z=0;z<yeararr.length; z++){
                 newarr.push( {
                   title:  yeararr[z],
                   data: oldarr.filter(item=>`${item.timer.split('-')[0]}年${item.timer.split('-')[1]}月`==yeararr[z])
                 }  )
             }
         console.log(newarr)

      return newarr;
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
.list {
  h2{
    padding: 15px 0;
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 10px;
  }
}
</style>
