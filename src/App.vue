<template>
  <div id="app">
       <Home></Home>

 
  </div>
</template>

<script>
import Home from "@/components/Home";

export default {
  name: "App",
  data() {
    return {
  
    };
  },
  computed:{
     
  },
  mounted() {
     var _this = this;
     this.$http.get("/look").then(function(res) { _this.$store.commit("allData", res.data.data); });
   },
  methods: {

  },
  components: {
    Home
  }
};
</script>
<style  >
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,button,textarea,p,blockquote,th,td { margin:0; padding:0; list-style: none;}
body { background:#fff; color:#555; font-size:14px; font-family: Verdana, Arial, Helvetica, sans-serif; }
td,th,caption { font-size:14px; }
h1, h2, h3, h4, h5, h6 { font-weight:normal; font-size:100%; }
address, caption, cite, code, dfn, em, strong, th, var { font-style:normal; font-weight:normal;}
a { color:#555; text-decoration:none; }
a:hover { text-decoration:underline; }
img { border:none; }
ol,ul,li { list-style:none; }
input, textarea, select, button { font:14px Verdana,Helvetica,Arial,sans-serif; }
table { border-collapse:collapse; }
html {overflow-y: scroll;}
.clearfix:after {content: "."; display: block; height:0; clear:both; visibility: hidden;}
.clearfix { *zoom:1; }
.el-collapse-item__header,.el-collapse-item__wrap{
    background:transparent!important
  }

::-webkit-scrollbar{
    width: 3px;
    height: 8px;
    background-color: #515a6e;
    -webkit-transition: background-color .3s ease-in-out;
    transition: background-color .3s ease-in-out;
}
::-webkit-scrollbar:hover{
    background-color: #d1d1d1;
}
::-webkit-scrollbar-thumb{
    background-color: rgb(23, 35, 61, 0.6);
    height: 50px;
    -webkit-border-radius:5px;
    border-radius:5px;
    border-right: 1px solid #fff;
    border-left: 1px solid #fff;
    -webkit-transition: background-color .3s ease-in-out;
    transition: background-color .3s ease-in-out;
}
::-webkit-scrollbar-thumb:hover,
::-webkit-scrollbar-thumb:active{
    background-color:rgb(23, 35, 61, 0.8);
    border-right: 1px solid #f1f1f1;
    border-left: 1px solid #f1f1f1;
}
::-webkit-scrollbar-track{
    background-color:#fff;
}
::-webkit-scrollbar-track:hover{
    background-color:#fff;
}
</style>
