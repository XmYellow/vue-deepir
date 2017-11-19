<template>
  <div class="home">
    <h1>home</h1>
    <h1>{{ cart.name }}</h1>
    <p>{{ list }}</p>
    <button @click="set()">click</button>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: 'home',
  data() {
    return {
      counter: 0
    };
  },
  computed: {
    ...mapGetters('cart', [
      'cart',
      'list',
      'money'
    ])
  },

  methods: {
    ...mapActions([]),
    ...mapActions('cart', [
      'SET_CART',
      'CLEAR_CART'
    ]),
    set () {
      this.SET_CART({
        name: '你是huang'
      })
      console.log(this.$store)
      this.$http.get('www.baidu.com')
    }
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
