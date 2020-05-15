<template>
  <div>
      <div class="title" v-title data-title="文章阅读">
        {{til}}
      </div>
    <div v-html="data" class="details wow pulse">
  </div>
  </div>
</template>
<script>
export default {
  name: "Details",
  data() {
    return {
      data:"",
      til:""
    };
  },
  methods: {
     
  },
  mounted() {
    var _this=this  
   //文章id
   // console.log(this.$route.params.id);
    this.$http.get('/lookdetails',{
            params:{
              id:_this.$route.params.id
            }
          }).then(function(res) {
            //console.log(res.data);
            //没找到文章跳转搜索页面
            if(res.data.data.length==0){_this.$router.push('/search').catch(data=>{})
            return
            }
            //将请求到的文章进行渲染
                _this.data=res.data.data[0].bodytext
                _this.til=res.data.data[0].title   
        });

  },
  computed: {
  },
};
</script>


<style scoped lang="less">
  .details{
    margin-top: 15px
  }
  .title{
    text-align: center;
    padding: 10px;
    font-size: 25px;
    margin: 20px;
    font-weight: bold
  }
</style>
