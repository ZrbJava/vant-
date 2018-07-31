<template>
  <div id="app">
    <to-top></to-top>
    <selected></selected>
  </div>
</template>

<script>
import Selected from "@/components/Selected.vue"
import ToTop from "@/components/ToTop/ToTop"
export default {
  components:{
    Selected,
    ToTop
  },
  name: 'App',
  // data() {
  //   return {
  //     active: 2,
  //     tab:["精选","发动机件","液压件","电器件","密封件","油品"]
  //   };
  // }
}
</script>

<style>

</style>
