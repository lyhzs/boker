<template>
  <div class="main">
    <div class="list"  v-for="(item,index) in dataArr" :key="index">
      <h2 class="post-title">{{item.title}}</h2>
      <div class="post">
        <span class="meta">
          <i class="el-icon-data-analysis icon"></i>发表于
          <i class="details">{{item.timer}}</i>
        </span>
        <span class="post-meta-divider">|</span>
        <span class="meta">
          <i class="el-icon-pie-chart icon"></i>分类于
          <i class="details">{{item.classify}}</i>
        </span>
        <span class="post-meta-divider">|</span>
        <span class="meta">
          <i class="el-icon-notebook-2 icon"></i>本文字数
          <i class="details">{{item.bodytext.split("").length/1000}}k</i>
        </span>
        <span class="post-meta-divider">|</span>
        <span class="meta">
          <i class="el-icon-timer icon"></i>阅读时长
          <i class="details">≈ {{(item.bodytext.split("").length)/(500).toFixed(2)}} 分钟</i>
        </span>
      </div>
      <div class="maintext" v-html="item.bodytext"></div>
      <span class="post-button" @click="todetails(item.id)">阅读全文»</span>
    </div>
          
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      dataArr:[]
    };
  },
  methods: {
    todetails(id){
      this.$router.push({
        name:"Details",
        params:{
          id:id
        }
      })
    }
  },
  mounted(){
       var _this=this
       this.$http.get("/look").then(function(res) {
            // console.log(res)
           _this.$store.commit("allData",res.data.data)
            _this.dataArr=res.data.data 
      });
  },
  computed:{

  }
};
</script>


<style scoped lang="less">
.main {
  .list {
    padding: 5px 25px 25px;
    margin-bottom: 20px;
    .post-title {
      font-size: 26px;
      font-weight: 400;
      overflow-wrap: break-word;
      word-wrap: break-word;
      margin: 20px 0 15px;
    }

    .post {
      margin-top: 5px;
      margin-bottom: 20px;
      color: #999;
      font-family: "Lato", "PingFang SC", "Microsoft YaHei", sans-serif;
      font-size: 12px;
      .meta {
        .icon {
          margin-right: 5px;
        }
        .details {
          margin: 0 5px;
          font-style: normal;
        }
      }
      .post-meta-divider {
        margin: 0 0.5em;
        color: #999;
        font-family: "Lato", "PingFang SC", "Microsoft YaHei", sans-serif;
        font-size: 12px;
      }
    }
    .maintext {
      margin: 0 0 20px 0;
      line-height: 32px;
      height: 64px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .post-button {
      padding: 8px 0;
      margin-top: 20px;
      text-align: left;
      border-bottom: 2px solid #666;
      font-size: 16px;
      cursor: pointer;
    }
  }
}
</style>
