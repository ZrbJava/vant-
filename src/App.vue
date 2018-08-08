<template>
  <div id="app">
    <to-top></to-top>
    <selected ></selected>
    <!-- <cart></cart> -->
  </div>
</template>

<script>
import Selected from "@/components/Selected.vue"
import cart from "@/components/cart/cart"
import ToTop from "@/components/ToTop/ToTop"
export default {
  components:{
    Selected,
    ToTop,
    cart
  },
  data() {
    return{
      
    }
   
  },
  created(){
    // alert(navigator.userAgent);
    
  }
}

</script>

<style>

</style>
