<template>
  <div v-title data-title="逆水行舟,不进则退">
    <div
      v-if="loading"
      v-loading="loading"
      class="loading"
      element-loading-text="数据加载中"
      element-loading-background="rgba(0, 0, 0, 0)"
    >
      <!-- 请求数据中 -->
    </div>

    <transition name="fade">
       <div class="main" v-show="!loading">
      <div class="list" v-for="(item,index) in dataArr" :key="index">
        <h2 class="post-title" @click="todetails(item.id)">{{item.title}}</h2>
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
        <div class="maintextwarp">
          <div class="maintext" v-html="item.bodytext"></div>
          <i class="el-icon-full-screen" @click="todetails(item.id)"></i>
        </div>
        
        <span class="post-button" @click="todetails(item.id)">阅读全文»</span>
      </div>
      <!-- 分页 -->
      <div class="togglepg">
        <el-pagination
          background
          layout="prev, pager, next"
          :page-size="5"
          :total="allDataArr.length"
          @current-change="pageChange"
          @prev-click="pagePrev"
          @next-click="pageNext"
        ></el-pagination>
      </div> 
    </div>

    </transition>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      // allDataArr: []所有数据,
      // dataArr:[] 首页渲染的5条数据,

      // loading:true 数据加载慢时出现的加载圈,
      flag: 1 //分页标识
    };
  },
  methods: {
    todetails(id) {
      this.$router.push({
        name: "Details",
        params: {
          id: id
        }
      });
    },
    pageChange(val) {
      this.flag = val;
    },
    pagePrev(val) {
      this.flag = val;
    },
    pageNext(val) {
      this.flag = val;
    }
  },
  mounted() {},
  computed: {
    allDataArr() {
      // console.log(this.$store.getters.sortArr);

      return this.$store.getters.sortArr;
    },
    dataArr() {
      return this.allDataArr.slice((this.flag - 1) * 5, this.flag * 5);
    },
    loading() {
      return this.allDataArr.length > 0 ? false : true;
      // return true
    }
  }
};
</script>


<style scoped lang="less">
.main {
  .list {
    padding: 25px 25px 25px;
    margin: 20px 0;
    box-shadow: 0 0 5px rgba(202, 203, 203, 0.8);
    transition: all 0.25s;
    .post-title {
      font-size: 26px;
      font-weight: 400;
      overflow-wrap: break-word;
      word-wrap: break-word;
      margin-top: 20px;
      margin-bottom:15px;
      margin-left: 0px;
      transition: all 0.25s;
    }
    .post-title:hover{
         color: #61B3E6;
        margin-left: 15px;
        transition: all 0.25s;
        cursor: url(/static/images/fcous.cur),auto;
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
    .maintextwarp{
      position: relative;
       transition: all .5s;
     .maintext {
      margin: 0 0 20px 0;
      line-height: 32px;
      min-height: 56px;
      max-height: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
        border:1px solid transparent;

          padding:5px
      }
      i{
        position: absolute;
        right: 5px;
        bottom: 10px;
        font-size: 20px;
        cursor: pointer;
        // display: none;
        transition: all .5s;
        opacity: 0;
      }
    }

    .maintext:hover {
     box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
      overflow: auto;
     border:1px solid #ccc;
  cursor: s-resize;
    }
    .maintextwarp:hover i{
      transition: all .5s;
      //  display: block;
       opacity: 1;
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

  .togglepg {
    display: block;
    margin: 0 auto;
  }
  .loading {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
  }
}

  @media screen and  (max-width: 992px)  {
      .main{
        width: 95%!important;
        margin: 0 auto
      }
}
</style>
