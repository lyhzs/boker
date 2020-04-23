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
    <div id="wangeditor">
      <div ref="editorElem" style="text-align:left;"></div>
    </div>

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
import E from "wangeditor";

export default {
  name: "Issue",
  data() {
    return {
      isclearable: true,
      restaurants: [],
      title: "",
      classify: "",
      timer: "",
      editor: null, //实例化富文本编辑器
      editorContent: "" //富文本内容
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
      var _this = this;
      var postData = {
        id: Date.parse(new Date()),
        title: this.title,
        classify: this.classify,
        bodytext: this.editorContent,
        timer: this.timer
      };

  //  console.log(typeof postData.bodytext);
    
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

    this.editor = new E(this.$refs.editorElem);
    // 编辑器的事件，每次改变会获取其html内容
    this.editor.customConfig.zIndex = 100
    this.editor.customConfig.onchange = html => {
      this.editorContent = html ;
      //this.catchData(this.editorContent); // 把这个html通过catchData的方法传入父组件
    };
    this.editor.customConfig.menus = [
      // 菜单配置
      "head", // 标题
      "bold", // 粗体
      "fontSize", // 字号
      "fontName", // 字体
      "italic", // 斜体
      "underline", // 下划线
      "strikeThrough", // 删除线
      "foreColor", // 文字颜色
      "backColor", // 背景颜色
      "link", // 插入链接
      "list", // 列表
      "justify", // 对齐方式
      "quote", // 引用
      "emoticon", // 表情
      "image", // 插入图片
      "table", // 表格
      "code", // 插入代码
      "undo", // 撤销
      "redo" // 重复
    ];
    this.editor.create(); // 创建富文本实例
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

</style>
