<template>
  <div @keydown.enter="tologin" v-title data-title="权限">
    <!-- 未登录状态 -->
    <div class="islogin" v-if="!islogin">
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
          <div class="left">确认密码：</div>
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
    </div>
    <!-- 登录状态 -->
    <div v-if="islogin">
      <div class="header">
        <div>欢迎登录：{{isuser}}</div>
        <div>
          在线状态：
          <el-switch
            v-model="islogin"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="leavelogin"
          ></el-switch>
        </div>
        <div>权限等级：3</div>
      </div>
      <!-- 分割线  -->
      <el-divider></el-divider>

      <!-- 活跃记录 -->
      <div class="newdate">
        <el-calendar v-model="value"></el-calendar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      login: true, //登录注册切换
      value: new Date()
    };
  },
  methods: {
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
    toregister() {
      this.$notify({
        title: "注册功能暂不开放",
        message: "终止操作",
        type: "warning"
      });
      this.login = true;
    },
    leavelogin() {
      this.$confirm("确认退出?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$store.commit("updateLogin", false);
          this.$notify({
            type: "success",
            message: "退出成功!"
          });
          this.$router.push("/").catch(data => {});
        })
        .catch(() => {
          this.$notify({
            type: "info",
            message: "已取消退出"
          });
        });
    }
  },
  mounted() {
    // var lett = this;
    // document.onkeydown = function(e) {
    //   var key = window.event.keyCode;
    //   if (key == 13) {
    //     lett.tologin();
    //   }
    // };
  },
  computed: {
    islogin: {
      get: function() {
        return this.$store.state.islogin;
      },
      set: function() {}
    },
    isuser() {
      return this.$store.state.isuser;
    }
  }
};
</script>


<style scoped lang="less">
.login {
  width: 360px;
  margin: 120px auto 0;

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
.header {
  display: flex;
  div {
    flex: 1;
    text-align: center;
  }
}
.newdate {
  margin: 30px auto 10px;
}
</style>
