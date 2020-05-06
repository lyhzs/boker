<template>
  <div >
    <!-- 登录状态 -->
    <div class="islogin">
       <!-- 登录 -->
      <div  class="login" v-show='login'> 

            <div class="list"> 
               <div class="left">账号：</div> 
              <el-input class="right" placeholder="请输入账号" suffix-icon="el-icon-user" v-model="input1"></el-input>
            </div>

            <div class="list">
              <div class="left">密码：</div>
              <el-input class="right" placeholder="请输入密码" suffix-icon="el-icon-view" v-model="input2" type="password"></el-input>
            </div>
          <div class="row">
              <el-button type="primary" plain @click="login=!login">注册</el-button>
              <el-button type="primary" plain @click="tologin">登录</el-button>          
          </div>
      </div>
       <!-- 注册 -->
      <div  class="login"  v-show='!login'> 

            <div class="list"> 
               <div class="left">账号：</div> 
              <el-input class="right" placeholder="请输入账号" suffix-icon="el-icon-user" v-model="input1"></el-input>
            </div>

            <div class="list">
              <div class="left">密码：</div>
              <el-input class="right" placeholder="请输入密码" suffix-icon="el-icon-view" v-model="input2" type="password"></el-input>
            </div>

            <div class="list">
              <div class="left">确认密码：</div>
              <el-input class="right" placeholder="请确认密码" suffix-icon="el-icon-view" v-model="input3" type="password"></el-input>
            </div>

          <div class="row">
              <el-button type="primary" plain @click="login=!login">登录</el-button>
              <el-button type="primary" plain @click="toregister">注册</el-button>          
          </div>
      </div>
      

    </div>
    <!-- 未登录状态 -->
    <div>

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
      login:true
    };
  },
  methods: {
      tologin() {
      var _this = this;

      var postData = {
        name:this.input1,
        password:this.input2
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
           _this.$store.commit("updateLogin",res.data.state)
            //登录成功 跳回首页
          _this.$router.push({
            name: "Home"
          });

        } else {
        // 登陆失败
            _this.input1=""
            _this.input2=""
          _this.$notify.error({
            title: "错误",
            message: "登陆失败"
          });
        }

      });

    },
    toregister(){
        this.$notify({
             title: "注册功能暂不开放",
             message: "终止操作",
            type: "warning"
          });
          this.login=true
    }
  },
  mounted() {},
  computed: {
    dataArr() {
      return this.$store.getters.sortArr;
    },
    newdataArr() {
      return this.dataArr.filter(item => item.title.indexOf(this.input) != -1);
    }
  }
};
</script>


<style scoped lang="less">

.login{
  width: 360px;
  margin: 120px auto 0;
  
  .list{
    display: flex;
    margin-bottom: 15px;
    .left{
      width: 80px;
      line-height: 40px
    }
    .right{
      flex: 1
    }

  }
  .row{
    display: flex;
    margin-top: 20px;
    button{
      flex: 1;
 
    }
  }
}
</style>
