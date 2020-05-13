<template>
  <div>
      <div class="title" v-title data-title="文章阅读">
        {{detatitle}}
      </div>
    <div v-html='deta' class="details wow pulse">
     <!-- {{this.$route.params.id}} -->
      
      <!-- {{data}} -->
  </div>
  </div>
</template>

<script>


export default {
  name: "Details",
  data() {
    return {
      data:""
    };
  },
  methods: {
     
  },
  mounted() {
      this.$store.commit("lookdetails",this.$route.params.id)
     if(this.$store.state.details.length==0){
      this.$router.push("/search")
    }
  },
  computed: {
    deta(){
        if(this.$store.state.details.length!=0){return  this.$store.state.details[0].bodytext}  
    },
    detatitle(){
        if(this.$store.state.details.length!=0){return  this.$store.state.details[0].title}  
    }
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
