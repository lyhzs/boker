<template>
  <div>
    <!-- 发布 -->
    <div class="issue" v-show="islogin" v-title data-title="发布">
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
            <el-date-picker
              v-model="timer"
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
            ></el-date-picker>
          </el-col>
        </el-row>
      </div>
      <!-- 富文本 -->
      <h3 class="title">文章内容：</h3>
      <div>
        <vue-html5-editor
          :content="content"
          :height="500"
          ref="editor"
          @change="updateData"
          :show-module-name="showModuleName"
          :auto-height="true"
        ></vue-html5-editor>
      </div>
      <!-- 提交 -->
      <div class="submit">
        <el-button type="primary" @click="submit">
          提交
          <i class="el-icon-upload el-icon--right"></i>
        </el-button>
      </div>
    </div>
    <!-- 登录注册 -->
    <div class="loginbox" v-show="!islogin"  @keydown.enter="tologin">
      <div class="main">
        <!-- 登录 -->
        <div class="login" v-show="login">
          <div class="list">
            <div class="left">账号：</div>
            <el-input class="right" placeholder="请输入账号" suffix-icon="el-icon-user" v-model="input1"></el-input>
          </div>

          <div class="list">
            <div class="left">密码：</div>
            <el-input
              class="right"
              placeholder="请输入密码"
              suffix-icon="el-icon-view"
              v-model="input2"
              type="password"
            ></el-input>
          </div>
          <div class="row">
            <el-button type="primary" plain @click="login=!login">注册</el-button>
            <el-button type="primary" plain @click="tologin">登录</el-button>
          </div>
        </div>
      <!-- 注册 -->
      <div class="login" v-show="!login">
        <div class="list">
          <div class="left">账号：</div>
          <el-input class="right" placeholder="请输入账号" suffix-icon="el-icon-user" v-model="input1"></el-input>
        </div>

        <div class="list">
          <div class="left">密码：</div>
          <el-input
            class="right"
            placeholder="请输入密码"
            suffix-icon="el-icon-view"
            v-model="input2"
            type="password"
          ></el-input>
        </div>

        <div class="list">
          <div class="left">确认：</div>
          <el-input
            class="right"
            placeholder="请确认密码"
            suffix-icon="el-icon-view"
            v-model="input3"
            type="password"
          ></el-input>
        </div>

        <div class="row">
          <el-button type="primary" plain @click="login=!login">登录</el-button>
          <el-button type="primary" plain @click="toregister">注册</el-button>
        </div>
      </div>
        <i class="close el-icon-circle-close" @click="closelogin"> </i>

      </div>
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
      timer: "",
      content: "",
      showModuleName: false,
      flag: true,
       login: true, //登录注册切换
         input1: "",
      input2: "",
      input3: "",

    };
  },
  methods: {
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    loadAll() {
      return this.$store.getters.issueArr;
    },
    handleSelect(item) {
      console.log(item);
    },
    //提交文章
    submit() {
      var _this = this;
      if (!this.$store.state.islogin) {
        this.$notify.error({
          message: "请先登录",
          position: "top-right"
        });
        this.$router.push({ name: "Login" });
        return;
      }

      var postData = {
        id: Date.parse(new Date()),
        title: this.title == "" ? "未命名标题" : this.title,
        classify: this.classify == "" ? "未命名分类" : this.classify,
        bodytext: this.content.replace(/[\\"']/g, "\\$&"), //转义 存到数据库中
        timer: this.timer == "" ? new Date() : this.timer
      };
      this.$http.post("/add", postData).then(function(res) {
        if (res.data.state) {
          _this.$notify({
            title: "成功",
            message: "添加成功",
            type: "success"
          });
          //添加成功清除本地localstore
          localStorage.removeItem("temporary");
          //添加成功重新查看数据
          _this.$http.get("/look").then(function(res) {
            _this.$store.commit("allData", res.data.data);
          });
          //清空content内容
          _this.content = "";
          //添加成功跳回首页
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
    },
    //富文本编辑
    updateData: function(data) {
      // sync content to component
      this.content = data;
    },
        //登录
     tologin() {
      var _this = this;
      var postData = {
        name: this.input1,
        password: this.input2
      };

      this.$http.post("/login", postData).then(function(res) {
        if (res.data.state) {
          // 登陆成功
          _this.$notify({
            title: "成功",
            message: "登录成功",
            type: "success"
          });

          //更新vuex中登录状态
          _this.$store.commit("updateLogin", res.data.state);
          _this.$store.commit("updateuser", _this.input1);

        } else {
          // 登陆失败
          _this.input1 = "";
          _this.input2 = "";
          _this.$notify.error({
            title: "错误",
            message: "登陆失败"
          });
        }
      });
    },
    //注册
    toregister() {
      this.$notify({
        title: "注册功能暂不开放",
        message: "终止操作",
        type: "warning"
      });
      this.login = true;
    },
    //关闭登录
    closelogin(){
        this.$router.push('/')
    }
  },
  computed: {
        //登录状态验证
    islogin() {
      return this.$store.state.islogin;
    }
  },
  mounted() {
    //分类联想展示
    this.restaurants = this.loadAll();
    //保存本地的编辑文本
    if (localStorage.getItem("temporary")) {
      this.content = localStorage.getItem("temporary");
    }
  },
  beforeRouteLeave(to, form, next) {
    // 判读文档是否有内容
    if (this.content != "") {
      this.$confirm("是否保留已编辑的文档?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          //保存到本地localStorage中
          localStorage.setItem("temporary", this.content);
          next();
        })
        .catch(() => {
          //取消保留 直接离开
          localStorage.removeItem("temporary");
          next();
        });
    } else {
      next();
    }
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
#editor {
  height: 450px;
}
.loginbox {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 7;
  background-color: rgba(0, 0, 0, 0.4);
  .main {
    display: inline-block;
    width: 420px;
    padding-bottom: 10px;
    vertical-align: middle;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    font-size: 18px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    text-align: left;
    overflow: hidden;
    backface-visibility: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .login {
  width: 360px;
  margin: 45px auto 30px;
  position: relative;
  .list {
    display: flex;
    margin-bottom: 15px;
    .left {
      width: 80px;
      line-height: 40px;
    }
    .right {
      flex: 1;
    }
  }
  .row {
    display: flex;
    margin-top: 20px;
    button {
      flex: 1;
    }
  }
}
  }

  .close{
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
    opacity: 0.5;
    transition: all .3s
  }
  .close:hover{
   opacity: 1;
   transform: rotate(360deg);
   transition: all .3s
  }
}
</style>
