<template>
  <div>
    <!-- 标题 -->
    <div>
      <h3 class="title">文章标题：</h3>
      <el-input v-model="title" placeholder="请输入内容"></el-input>
    </div>
    <!-- 分类和时间选择 -->
    <div class="mate">
      <el-row class="demo-autocomplete">
        <el-col :span="12">
          <h3 class="title">选择分类</h3>
          <el-autocomplete
            class="inline-input"
            v-model="classify"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            @select="handleSelect"
          ></el-autocomplete>
        </el-col>
        <el-col :span="12">
          <h3 class="title">选择发布日期</h3>
          <el-date-picker v-model="timer" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"></el-date-picker>
        </el-col>
      </el-row>
    </div>

    <!-- 富文本 -->
    <h3 class="title">文章内容：</h3>
       
      <pre id="editor" class="editor" data-editor-lang="js" data-editor-show-annotation-ruler="false" 
      data-editor-show-overview-ruler="false" data-editor-show-folding-ruler="false"
      >
      </pre>
     



    <!-- 提交 -->
    <div class="submit">
      <el-button type="primary" @click="submit">
        提交
        <i class="el-icon-upload el-icon--right"></i>
      </el-button>
    </div>
  </div>
</template>

<script>

export default {
  name: "Issue",
  data() {
    return {
      isclearable: true,
      restaurants: [],
      title: "",
      classify: "",
      timer: ""
    };
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    loadAll() {
      return [
        { value: "css" },
        { value: "html" },
        { value: "js" },
        { value: "vue" }
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
    submit() {

      console.log(typeof this.$refs.editorContent.innerHTML); 
      var _this = this;
      var postData = {
        id: Date.parse(new Date()),
        title: this.title,
        classify: this.classify,
        bodytext: this.$refs.editorContent.innerHTML,
        timer: this.timer
      };
      this.$http.post("/add", postData).then(function(res) {
        
        if (res.data.state) {
          _this.$notify({
            title: "成功",
            message: "添加成功",
            type: "success"
          });
          _this.$router.push({
            name: "Home"
          });
        } else {
          _this.$notify.error({
            title: "错误",
            message: "添加失败"
          });
        }
      });
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
    // this.$refs.fwb.innerHTML=`<pre id="editor" class="editor" data-editor-lang="js" data-editor-show-annotation-ruler="false" 
    //   data-editor-show-overview-ruler="false" data-editor-show-folding-ruler="false"
    //   >
    //   </pre>`;

  }
};
</script>


<style scoped lang="less">
.title {
  padding: 15px 0;
}
.submit {
  margin: 20px auto;
  text-align: center;
}
#editor{
  height: 450px;
}
</style>
