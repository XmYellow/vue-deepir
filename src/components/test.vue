<template>
  <div>
    <div class="container-fluid main-box">
      <div class="row">
      
        <div class="col-sm-7 col-sm-offset-3 main-content">
        
          <div >
        
            {{ counter }}
         
            <button v-on:click="counter += 1">增加 1</button>
          </div>
       
         
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import { mapState,mapActions } from 'vuex'
export default {
  data(){
     return {
       counter:0,
    
     }
     
  },
  computed: {
    ...mapState({
     
    })
  },  

  methods:{
    ...mapActions([

    ]),    
   
  }
}
</script>
