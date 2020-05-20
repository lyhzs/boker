<template>
  <div>
    <div class="block" v-title data-title="标签详情" v-if="islable">
      <h2>{{this.$route.params.id}}</h2>
      <el-timeline>
        <el-timeline-item
          :timestamp="item.timer"
          placement="top"
          v-for="(item,index1) in dataArr[this.$route.params.id].arr"
          :key="index1"
          class="box"
        >
          <el-card class="warp">
            <div>
              <h4>更新 {{item.title}}</h4>
              <p>提交于{{item.timer}}</p>
            </div>
            <div class="list" @click="todetails(item.id)"></div>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
export default {
  name: "Labeldetails",
  data() {
    return {
      // dataArr: []
    };
  },
  methods: {
    todetails(id) {
      this.$router.push({
        path: `/details/${id}`
      });
    }
  },
  mounted() {},
  computed: {
    dataArr() {
      return this.$store.getters.islable;
    },
    islable() {
      return this.$store.getters.islable;
    }
  }
};
</script>


<style scoped lang="less">
h2 {
  padding: 15px 0;
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 10px;
}
.warp {
  position: relative;
  .list {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
  }
}
</style>
