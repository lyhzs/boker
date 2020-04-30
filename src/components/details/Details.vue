<template>
  <div v-html='deta' class="details wow pulse">
     <!-- {{this.$route.params.id}} -->
      
      <!-- {{data}} -->
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
      
    }
  },
};
</script>


<style scoped lang="less">
  .details{
    margin-top: 15px
  }
</style>
