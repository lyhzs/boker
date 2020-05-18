<template>
  <div>
    <!-- 发布 -->
    <div class="issue" v-show="islogin" v-title data-title="发布">
      <el-collapse v-model="activeName" accordion>
        <!-- 文章选项 -->
        <el-collapse-item name="1">
          <template slot="title">
            文章标题/描述/说明等
            <i class="header-icon el-icon-s-operation" style="margin-left:10px"></i>
          </template>
          <!-- 标题 -->
          <div>
            <h3 class="title">文章标题：</h3>
            <el-input v-model="title" placeholder="请输入内容"></el-input>
          </div>
          <!-- 标题 -->
          <div>
            <h3 class="title">文章描述：</h3>
            <el-input v-model="explain" placeholder="请输入描述"></el-input>
          </div>
          <!-- 分类 -->
          <div class="mate">
            <el-row class="demo-autocomplete">
              <el-col :span="8">
                <h3 class="title">选择分类</h3>
                <el-autocomplete
                  class="inline-input"
                  v-model="classify"
                  :fetch-suggestions="querySearch"
                  placeholder="请输入内容"
                  @select="handleSelect"
                ></el-autocomplete>
              </el-col>
              <!-- 时间选择 -->
              <el-col :span="8">
                <h3 class="title">选择发布日期</h3>
                <el-date-picker
                  v-model="timer"
                  type="date"
                  placeholder="选择日期"
                  value-format="yyyy-MM-dd"
                ></el-date-picker>
              </el-col>
              <!-- 选择标签 -->
              <el-col :span="8">
                <h3 class="title">选择标签</h3>
                <el-select
                  v-model="islabel"
                   collapse-tags
                  multiple
                  filterable
                  allow-create
                  default-first-option
                  placeholder="请选择文章标签"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-col>
              <!-- 是否加入收藏 -->
              <el-col :span="8">
                <h3 class="title">是否加入收藏</h3>
                <el-switch v-model="ismy" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
              </el-col>
            </el-row>
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            文章编辑
            <i class="header-icon el-icon-s-order" style="margin-left:10px"></i>
          </template>
          <!-- 富文本 -->
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
        </el-collapse-item>
      </el-collapse>
    </div>
    <!-- 登录注册 -->
    <div class="loginbox" v-show="!islogin" @keydown.enter="tologin">
      <div class="main">
        <!-- 登录 -->
        <div class="login" v-show="login">
          <div class="list">
            <div class="left">账号：</div>
            <el-input
              class="right"
              placeholder="请输入账号"
              suffix-icon="el-icon-user"
              v-model="username"
            ></el-input>
          </div>

          <div class="list">
            <div class="left">密码：</div>
            <el-input
              class="right"
              placeholder="请输入密码"
              suffix-icon="el-icon-view"
              v-model="userpass"
              type="password"
            ></el-input>
          </div>
          <div class="row sett" >
             <el-checkbox v-model="checked" >7天内免登录</el-checkbox>
             <el-link type="primary">忘记密码</el-link>
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
            <el-input
              class="right"
              placeholder="请输入账号"
              suffix-icon="el-icon-user"
              v-model="username"
            ></el-input>
          </div>

          <div class="list">
            <div class="left">密码：</div>
            <el-input
              class="right"
              placeholder="请输入密码"
              suffix-icon="el-icon-view"
              v-model="userpass"
              type="password"
            ></el-input>
          </div>

          <div class="list">
            <div class="left">确认：</div>
            <el-input
              class="right"
              placeholder="请确认密码"
              suffix-icon="el-icon-view"
              v-model="alignpass"
              type="password"
            ></el-input>
          </div>

          <div class="row">
            <el-button type="primary" plain @click="login=!login">登录</el-button>
            <el-button type="primary" plain @click="toregister">注册</el-button>
          </div>
        </div>
        <i class="close el-icon-circle-close" @click="closelogin"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Issue",
  data() {
    return {
      activeName: "1", //手风琴切换
      restaurants: [],
      login: true, //登录注册切换
      // 提交的内容
      title: "", //提交的标题
      explain: "", //提交的说明
      classify: "", //提交的分类
      timer: "", //提交的时间
      content: "", //提交的富文本内容
      showModuleName: false,
      options: [
        {
          value: "vue",
          label: "vue"
        },
        {
          value: "js",
          label: "js"
        },
        {
          value: "css",
          label: "css"
        },
        {
          value: "面试",
          label: "面试"
        },
        {
          value: "我的收藏",
          label: "我的收藏"
        },
        {
          value: "node",
          label: "node"
        }
      ], //标签选择器
      ismy: false, //提交的是否收藏
      islabel: [], //提交的选择标签
      // 登录注册的内容
      username: "", //登录框账号
      userpass: "", //登录框密码
      alignpass: "", //确认密码
      checked:true,//免验证
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
        timer: this.timer == "" ? new Date() : this.timer,
        expl: this.explain == "" ? "未填写描述" : this.explain.replace(/[\\/"']/g, "\\$&"),
        ismy: this.ismy ? "true" : "false",
        islabel: this.islabel == "" ? "未选择标签" : this.islabel.toString(),
       
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
        name: this.username,
        password: this.userpass,
         ischecked: this.checked ? "true" : "false",//免验证登录
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
          _this.$store.commit("updateuser", _this.username);
        } else {
          // 登陆失败
          _this.username = "";
          _this.userpass = "";
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
    closelogin() {
      this.$router.push("/");
    }
  },
  computed: {
    //登录状态验证
    islogin() {
      return this.$store.state.islogin;
    }
  },
  created(){

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
      .sett{
        padding: 0 10px;
        position: relative;
        a{
         position: absolute;
         right: 10px;
        }
      }
    }
  }

  .close {
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
    opacity: 0.5;
    transition: all 0.3s;
  }
  .close:hover {
    opacity: 1;
    transform: rotate(360deg);
    transition: all 0.3s;
  }
}
</style>
