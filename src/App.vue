<template>
  <div id="app">
    <Home></Home>
    <div class="music">
         <transition name="el-fade-in-linear">
                  <div v-show="show" class="small" @click="show=!show"><i class="el-icon-headset"></i></div> 
         </transition>
          <transition name="el-fade-in-linear">
              <div  v-show="!show" class="musicbottom" >
                <div id="aplayer"> </div>
                <i class="el-icon-d-arrow-left" @click="show=!show"></i>
              </div>
                  
         </transition>

    </div>
  </div>
</template>

<script>
import Home from "@/components/Home";
// 音乐播放器
import "APlayer/dist/APlayer.min.css";
import APlayer from "APlayer";

export default {
  name: "App",
  data() {
    return {
      active: false, //数据是否请求,
      timer: null, //请求数据定时器
         show: false,
         audio:[
        {
          name: "name",
          artist: "artist",
          url: "https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.mp3",
          cover: "https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg"
        }
      ]
    };
  },
  computed: {},
  mounted() {
    //网站加载时请求数据
    var _this = this;
    if (this.active == false) {
      this.timer = setInterval(() => {
        this.$http.get("/look").then(function(res) {
           // console.log(res.data.data);
          _this.$store.commit("allData", res.data.data);
          if (res.data.status) {
            // console.log(_this.active);
            clearInterval(_this.timer);
          }
        });
      }, 2000);
    }

    //音乐播放器
    const ap = new APlayer({
      container: document.getElementById("aplayer"),
      mini: true,
      audio: this.audio
    });

  },
  methods: {},
  components: {
    Home
  }
};
</script>
<style  >
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
button,
textarea,
p,
blockquote,
th,
td {
  margin: 0;
  padding: 0;
  list-style: none;
}
body {
  background: #fff;
  color: #555;
  font-size: 14px;
  font-family: Verdana, Arial, Helvetica, sans-serif;
}
td,
th,
caption {
  font-size: 14px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  font-size: 100%;
}
address,
caption,
cite,
code,
dfn,
em,
strong,
th,
var {
  font-style: normal;
  font-weight: normal;
}
a {
  color: #555;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
img {
  border: none;
}
ol,
ul,
li {
  list-style: none;
}
input,
textarea,
select,
button {
  font: 14px Verdana, Helvetica, Arial, sans-serif;
}
table {
  border-collapse: collapse;
}
html {
  overflow-y: scroll;
}
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.clearfix {
  *zoom: 1;
}
.el-collapse-item__header,
.el-collapse-item__wrap {
  background: transparent !important;
}

::-webkit-scrollbar {
  width: 4px;
  height: 8px;
  background-color: #515a6e;
  -webkit-transition: background-color 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;
}
::-webkit-scrollbar:hover {
  background-color: #d1d1d1;
}
::-webkit-scrollbar-thumb {
  background-color: rgb(23, 35, 61, 0.6);
  height: 50px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  border-right: 1px solid #fff;
  border-left: 1px solid #fff;
  -webkit-transition: background-color 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;
}
::-webkit-scrollbar-thumb:hover,
::-webkit-scrollbar-thumb:active {
  background-color: rgb(23, 35, 61, 0.8);
  border-right: 1px solid #f1f1f1;
  border-left: 1px solid #f1f1f1;
}
::-webkit-scrollbar-track {
  background-color: #fff;
}
::-webkit-scrollbar-track:hover {
  background-color: #fff;
}

/* 转场动画 */

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  /* 启用硬件加速 */
  will-change: transform;
  transition: all 300ms;
  position: fixed;
}
/* 加载动画 */
.slide-right-enter {
  transform: translate(-100%, 0);
  transition-timing-function: ease-in;
}
.slide-left-enter {
  transform: translate(100%, 0);
  transition-timing-function: ease-in;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

/* 音乐播放器 */
.music{
  position: fixed;
  top: 40%;
  left: 0px;
}
#aplayer{

}
.small{
   transition: all 0.2s;
  font-size: 25px;
  cursor: pointer;
  opacity: 0.2;
}
.small:hover{
 transition: all 0.2s;
  opacity: 1;
}
.musicbottom {
   position: fixed;
  top: 40%;
  left: 0px;
}

.musicbottom i{
  position: absolute;
  right: -15px;
  top: 50%;
  transform:translate(-0%,-50%) ;
  cursor: pointer;
  opacity: 0.4;

}
.musicbottom i:hover{
  opacity: 1;

}
</style>
