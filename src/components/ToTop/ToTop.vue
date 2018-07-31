<template>
  <div id="toTop">
   <!-- v-show = "isTop" -->
        <img src="./toTop.png" alt=""  @click = "goTop"  v-show="isTop" class="topTop">
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      isTop:false,
    }
  },
  methods:{
    scrollToTop(el) {
         let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
         let browserHeight = window.outerHeight;
        if (scrollTop > browserHeight) {
              this.isTop = true
        } else {
              this.isTop = false
              
        }
    },
    goTop(){
      clearInterval(timer);
      var timer = setInterval(()=>{
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        let step = parseInt(scrollTop/10);
        document.documentElement.scrollTop -= step;			//直接给高度赋值,会调用needtotop方法
        document.body.scrollTop -= step;				//谷歌的
        if(step == 0){
          clearInterval(timer);
        }

         
      },10);
      
    }
               

  },
  mounted(){
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop); 
  }
}
</script>

<style>
.topTop{
  width:35px;
  height:35px;
  position: fixed;
  right:15px;
  bottom:20px;
  background:#fff;
  border-radius:50%;
  opacity:1;
  cursor: pointer;
  z-index:1000;
}

</style>
