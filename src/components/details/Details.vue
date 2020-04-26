<template>
  <div v-html='this.$store.state.details[0].bodytext' class="details wow pulse">
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
    // console.log(this.$store.state.details[0]);
    
  }
};
</script>


<style scoped lang="less">
  .details{
    margin-top: 15px
  }
</style>
