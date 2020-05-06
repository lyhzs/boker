<template>
    <div class="header">
      <div class="main">
        <div class="logo" @click="backHome()">
          <span>
            <i>Mr.li</i>
          </span>
        </div>
        <div class="nav">
          <ul class="clearfix">
            <li>
              <router-link :to="{path:'/'}" exact>
                <i class="el-icon-s-home"></i>首页
              </router-link>
            </li>
            <li>
              <router-link :to="{path:'/classify'}">
                <i class="el-icon-s-ticket"></i>分类
              </router-link>
            </li>
            <li>
              <router-link :to="{path:'/pigeonhole'}">
                <i class="el-icon-s-cooperation"></i>归档
              </router-link>
            </li>
            <li>
              <router-link :to="{path:'/interaction'}">
                <i class="el-icon-s-promotion"></i>互动
              </router-link>
            </li>
             <li>
              <router-link :to="{path:'/login'}">
                <i class="el-icon-s-check"></i>权限
              </router-link>
            </li>
            <li>
              <router-link :to="{path:'/issue'}">
                <i class="el-icon-share"></i>发布
              </router-link>
            </li>
            <li>
              <router-link :to="{path:'/about'}">
                <i class="el-icon-s-custom"></i>关于
              </router-link>
            </li>
            <li>
              <router-link :to="{path:'/search'}">
                <i class="el-icon-search"></i>搜索
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <a
        href="https://github.com/lyhzs"
        class="github-corner"
        title="Follow me on GitHub"
        aria-label="Follow me on GitHub"
        rel="noopener"
        target="_blank"
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 250 250"
          style="fill:#FD6C6C; color:#fff; position: absolute; top: 0; border: 0; right: 0;"
          aria-hidden="true"
        >
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
          <path
            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
            fill="currentColor"
            style="transform-origin: 130px 106px;"
            class="octo-arm"
          />
          <path
            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
            fill="currentColor"
            class="octo-body"
          />
        </svg>
      </a>
      <i class="el-icon-collection-tag sc" @click="_addFavorite"></i>
    </div>

</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      navList: [
        { name: "/", navItem: "首页" },
        { name: "/issue", navItem: "问题汇总" },
        { name: "/my", navItem: "个人中心" },
        { name: "/about", navItem: "关于我" }
      ]
    };
  },
  methods: {
    backHome() {
      this.$router.push("/");
    },
    _addFavorite() {
      var url = window.location;
      var title = document.title;
      var ua = navigator.userAgent.toLowerCase();
      var _this=this
      if (ua.indexOf("360se") > -1) {
           _this.$notify.error({
            title: "添加失败",
            message: "您的浏览器不支持,请按 Ctrl+D 手动收藏!"
          });
      }
      else if (ua.indexOf("msie 8") > -1) {
          window.external.AddToFavoritesBar(url, title); //IE8
      }
      else if (document.all) {//IE类浏览器
        try{
         window.external.addFavorite(url, title);
        }catch(e){
          _this.$notify.error({
            title: "添加失败",
            message: "您的浏览器不支持,请按 Ctrl+D 手动收藏!"
          });
        }
      }
      else if (window.sidebar) {//firfox等浏览器；
          window.sidebar.addPanel(title, url, "");
      }
      else {
           _this.$notify.error({
            title: "添加失败",
            message: "您的浏览器不支持,请按 Ctrl+D 手动收藏!"
          });
      }
    }
  }
};
</script>


<style scoped lang="less">
.header {
  position: relative;
  background-color: rgba(0,0,0,.1);
  .main {
    height: 85px;
    width: 800px;
    margin: 0 auto;
    padding: 20px 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;

    .logo {
      width: 45px;
      cursor: pointer;
      span {
        display: block;
        height: 40px;
        width: 40px;
        // border-top: 2px solid #222;
        // border-bottom: 2px solid #222;
        text-align: center;
        line-height: 40px;
        position: relative;
        transition: all 0.5s;
        i {
          font-size: 22px;
          font-weight: bolder;
          position: relative;
          left: -8px;
        }
        :after{
          content: "";
          position: absolute;
          top: -8px;
          right: 10%;
          width: 80%;
          height: 2px;
          background: #222
        }
        :before{
           content: "";
          position: absolute;
          bottom: -8px;
          left: 10%;
          width: 80%;
          height: 2px;
          background: #222
        }
   
      }
      span:hover{
         :after{
           animation: topleave 1s ;
        }
        :before{
           animation: topleave 1s ;
          }
      }
     @keyframes topleave {
       0%{
          width: 0%;
       }
     
       100%{
          width: 80%;
       }
     }

    }
    .nav {
      flex: 1;
      ul {
        .active {
          color: #000;
          background: #9ccafb;
        }
        width: 650px;
        display: block;
        margin: 0 auto;
        li {
          i {
            margin-right: 5px;
          }
          a {
            box-sizing: border-box;
            height: 26px;
            line-height: 26px;
            cursor: pointer;
            float: left;
            color: #555;
            background-color: transparent;
            margin-right: 3px;
            padding: 0 10px;
            border: none;
            border-radius: 2px;
            transition-duration: 0.2s;
            transition-timing-function: ease-in-out;
            transition-delay: 0s;

            list-style: none;
            text-decoration: none;
          }
          a:hover {
            color: #000;
            background: #9ccafb;
          }
        }
      }
    }
  }
  .github-corner {
    position: absolute;
    top: 0;
    right: 0;
    transition: all 0.2s;
    :hover {
      .octo-arm {
        animation: git 0.5s infinite;
      }
    }
    @keyframes git {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(25deg);
      }
      50% {
        transform: rotate(0deg);
      }
      75% {
        transform: rotate(-25deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }
  .sc {
    position: fixed;
    font-size: 26px !important;
    top: -4px;
    left: 20px;
    color: #222;
    cursor: pointer;
  }
  .sc:hover {
    color: red;
  }
}
</style>
