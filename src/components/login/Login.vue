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

      <!-- 文章用户管理  -->
      <div class="useradmin">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item title="用户状态查看" name="1">
          <div class="usertips">
                  <h3>当前登录用户：{{isuser}}</h3>
                  <h3> 在线状态：
                  <el-switch
                    v-model="islogin"
                    active-color="#13ce66"
                    active-text="在线"
                    inactive-text="不在线"
                    inactive-color="#ff4949"
                    @change="leavelogin"
                  ></el-switch></h3>
                  <!-- <h3>权限等级：3 <i class="el-icon-question"></i> </h3> -->
                  <h3>
                    权限等级：3 
                  <el-tooltip content="权限等级越高，可操作性越大" placement="bottom" effect="light">
                      <el-button><i class="el-icon-question"></i> </el-button>
                   </el-tooltip>
                  </h3>
          </div>
          </el-collapse-item>
          <el-collapse-item title="文章管理" name="2">
            <div class="search">
              <el-input placeholder="根据标题关键词搜索" v-model="search" clearable></el-input>
            </div>

            <el-table
              :data="tableData"
              height="450"
              style="width: 100%"
              :row-style="tableRowStyle"
              :header-cell-style="tableHeaderColor"
            >
              <el-table-column prop="timer" label="日期"></el-table-column>
              <el-table-column prop="title" label="文章标题" :show-overflow-tooltip="true"></el-table-column>
              <el-table-column prop="classify" label="分类">
                <template slot-scope="scope">
                  <el-tag type="success" disable-transitions>{{scope.row.classify}}</el-tag>
                </template>
              </el-table-column>
              <el-table-column prop="islabel" label="标签" :show-overflow-tooltip="true"></el-table-column>
              <el-table-column prop="ismy" label="是否收藏" width="80">
                <template slot-scope="scope">
                  <i :class="scope.row.ismy == 'true' ? 'el-icon-star-on' : 'el-icon-star-off'"></i>
                </template>
              </el-table-column>
              <el-table-column label="操作" width="180">
                <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                  >Delete</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-collapse-item>
          <el-collapse-item title="用户管理" name="3">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <!-- 文章修改 -->
      <div class="wzsett">
        <el-dialog title="文章修改" :visible.sync="wzsett" width="30%" :before-close="handleClose">
          <div class="list">
            <div class="left">文章时间：</div>
            <el-input class="right" placeholder="请输入账号" v-model="timer"></el-input>
          </div>
          <div class="list">
            <div class="left">文章标题：</div>
            <el-input class="right" placeholder="请输入账号" v-model="title"></el-input>
          </div>
          <div class="list">
            <div class="left">文章分类：</div>
            <el-input class="right" placeholder="请输入账号" v-model="classify"></el-input>
          </div>
          <div class="list">
            <div class="left">文章标签：</div>
            <el-input class="right" placeholder="请输入账号" v-model="islabel"></el-input>
          </div>
          <div class="list">
            <div class="left">文章摘要：</div>
            <el-input type="textarea" v-model="expl"></el-input>
          </div>
          <div class="list">
            <el-switch
              v-model="ismy"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-text="收藏"
              inactive-text="未收藏"
            ></el-switch>
          </div>

          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="handleUpadta()">提交修改</el-button>
          </span>
        </el-dialog>
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
      search: "",
      login: true, //登录注册切换
      activeName: "1",
      tableHeaderColor: {
        background: "rgb(229, 229, 229)",
        color: "rgb(97, 97, 97)"
      },
      tableRowStyle: {
        "text-align": "center",
        margin: "0 auto"
      },
      wzsett: false, //文章修改弹层
      // 修改文章
      id: "",
      timer: "",
      title: "",
      classify: "",
      islabel: "",
      ismy: "",
      expl: ""
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
    },
    handleEdit(index, row) {
      this.wzsett = true;

      this.id = row.id;
      this.timer = row.timer;
      this.title = row.title;
      this.classify = row.classify;
      this.islabel = row.islabel;
      this.expl = row.expl;
      this.ismy = row.ismy == "true" ? true : false;
    },
    handleUpadta() {
      var _this = this;
      var postData = {
        id: this.id,
        title: this.title,
        classify: this.classify,
        timer: this.timer,
        expl:
          this.expl == ""
            ? "未填写描述"
            : this.expl.replace(/[\\/"']/g, "\\$&"),
        ismy: this.ismy ? "true" : "false",
        islabel: this.islabel
      };
      this.$http.post("/updata", postData).then(function(res) {
        if (res.data.state) {
          _this.$notify({
            title: "成功",
            message: "修改成功",
            type: "success"
          });

          //修改成功重新查看数据
          _this.$http.get("/look").then(function(res) {
            _this.$store.commit("allData", res.data.data);
          });

          _this.wzsett = false;
        } else {
          _this.$notify.error({
            title: "错误",
            message: "添加失败"
          });
        }
      });
    },
    handleDelete(index, row) {
      var postid = { id: row.id };
      var _this = this;
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$http.post("/del", postid).then(function(res) {
            if (res.data.status) {
              _this.$notify({
                title: "成功",
                message: "删除成功",
                type: "success"
              });

              _this.$http.get("/look").then(function(res) {
                _this.$store.commit("allData", res.data.data);
              });
            } else {
              _this.$notify.error({
                title: "错误",
                message: "删除失败"
              });
            }
          });
        })
        .catch(() => {
          //取消删除
          this.$notify.error({
            title: "错误",
            message: "取消删除"
          });
        });
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  },
  mounted() {},
  computed: {
    islogin: {
      get: function() {
        return this.$store.state.islogin;
      },
      set: function() {}
    },
    isuser() {
      return this.$store.state.isuser;
    },
    dataArr() {
      return this.$store.getters.sortArr;
    },
    tableData() {
      //console.log(this.$store.getters.sortArr);

      return this.search == ""
        ? this.$store.getters.sortArr
        : this.dataArr.filter(item => item.title.indexOf(this.search) != -1);
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
.newdate {
  margin: 30px auto 10px;
}
.search {
  margin: 10px 0;
}
.useradmin {
  margin-top: 50px;
}
.wzsett {
  .list {
    display: flex;
    margin-bottom: 15px;
    .left {
      width: 90px;
      line-height: 40px;
    }
    .right {
      flex: 1;
    }
  }
}
.usertips{
  padding: 8px 16px;
    background-color: #ecf8ff;
    border-radius: 4px;
    border-left: 5px solid #50bfff;
    margin: 20px 0;
}
</style>
