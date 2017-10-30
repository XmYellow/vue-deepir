<template>
  <div>
    {{ msg }}
    <div class='test'>
     <h1>ddd</h1>
    </div>
    <div class='test'>
     <h1>ddd</h1>
    </div>
    <div class='test'>
     <h1>ddd</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .test{
   height: 300px;
 }
</style>
