<template>
  <div id="app">
    <layout />
  </div>
</template>

<script>
import layout from "./layout/Layout.vue";
export default {
  name: "app",
  components: {
    layout
  },
  data() {
    return {

    };
  },
  methods: {

  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
