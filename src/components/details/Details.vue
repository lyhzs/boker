<template>
  <div>
      <!-- {{this.$route.params.id}}
        {{this.$store.state.dataArr[this.$route.params.id]}} -->
        {{data}}
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
    this.data=this.$store.state.dataArr[this.$route.params.id]
  }
};
</script>


<style scoped lang="less">

</style>
