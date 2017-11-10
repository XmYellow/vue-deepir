<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content-sm bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content-sm bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content-sm bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content-sm bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content-xl bg-purple-light"></div></el-col>
      <el-col :span="12"><div class="grid-content-xl bg-purple-light"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24"><div class="grid-content-xl bg-purple"></div></el-col>
    </el-row>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      counter: 0
    };
  },
  computed: {
    ...mapState({})
  },

  methods: {
    ...mapActions([])
  }
};
</script>
<style lang='scss'>
.home {
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content-sm {
    border-radius: 4px;
    min-height: 100px;
  }
  .grid-content-xl {
    border-radius: 4px;
    min-height: 350px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
}
</style>
