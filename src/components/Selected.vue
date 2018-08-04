<template>
    <div class="tabItem">
        <!-- 精选 -->
            <van-tabs v-model="active" swipeable  @change="test">
                <van-tab v-for="(item,index) in tab" :title="item" :key="index" >
                    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" >
                      <!-- 精选 -->
                        <div v-show="active == 0">
                          <div class="banner"></div>
                          <div class="hotBox">
                              <div class="hot">1</div>
                              <div class="hot">2</div>
                          </div>
                           <!-- 专场商品列表 -->
                          <!-- <van-list v-model="loading"  :finished="finished" @load="loadMore" >
                            专场
                           
                            <div class="finish" v-show="finished">已经到底部了</div>
                          </van-list> -->
                          <h1 @click="toLoginTest">跳转登录</h1>
                          <h1 @click="toLoginTest">跳转登录</h1>
                          <h1 @click="toLoginTest">跳转登录</h1>
                          <h1 @click="toLoginTest">跳转登录</h1>
                          <hr>
                          <h1 @click="getUserInfo">getUserInfo</h1>
                          <special @addCart="addCart"></special>
                        </div>
                        <div v-show="active == 1">
                          <h1>发动机件</h1>
                          <special @addCart="addCart"></special>
                        </div>
                        <div v-show="active == 2">
                          <h1>液压件</h1>
                          <special @addCart="addCart" ></special>
                        </div>
                        <div v-show="active == 3">
                          <h1>电器件</h1>
                          <special @addCart="addCart"></special>
                        </div>
                        <div v-show="active == 4">
                          <h1>密封件</h1>
                          <special @addCart="addCart" ></special >
                        </div>
                        <div v-show="active == 5">
                          <h1>油品</h1>
                          <special @addCart="addCart" ></special>
                        </div>
                        
                      
                    </van-pull-refresh>
                </van-tab>
            </van-tabs>
             <!-- 底部购物车 -->
            <div class="cartBox" @click="toAppShopCart">
                <div class="bradge" v-show="count > 0">{{count}}</div>
                <img src="../assets/cartIcon.png" alt="" class="cartIcon">            
            </div>
            
           
       
      
    </div>
</template>


<script>
import { Tab, Tabs, Icon, Lazyload, List } from "vant";
import Special from "@/components/Special.vue";
import Vue from "vue";
// import { Lazyload } from 'vant';

// options 为可选参数，无则不传
Vue.use(Lazyload);
// import { Lazyload } from 'vant';
export default {
  components: {
    Tab,
    Tabs,
    Icon,
    List,
    Special
  },
  name: "App",
  data() {
    return {
      list: [],
      count: 0,
      isLoading: false,
      loading: false, //初始化loading状态
      finished: false, //是否已经加载完毕
      active: 0,
      tab: ["精选", "发动机件", "液压件", "电器件", "密封件", "油品"],
      img: [
        "https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg",
        "https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg",
        "https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg"
      ],
      imgList: [
        "https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg",
        "https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg",
        "https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg",
        "https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg",
        "https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg",
        "https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg",
        "https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg",
        "https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg",
        "https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg",
        "https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg",
        "https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg",
        "https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg",
        "https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg",
        "https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg",
        "https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg",
        "https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg",
        "https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg",
        "https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg",
        "https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg",
        "https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg",
        "https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg"
      ]
    };
  },
  methods: {
    test(){

    },
    getUserInfo(){
      var UserInfo = window.zhangwoAndroid.getUserInfo();
      // console.log();
      // alert("你最帅");
      // alert(JSON.parse(UserInfo));
      console.log();
      alert(JSON.parse(UserInfo)[0]);
      alert(JSON.parse(UserInfo)[1]);
    },
   addCart(count){
     console.log(count);
    //  alert(count);
     this.count = count;
   },
  //  条状登录测试
  toLoginTest(){
    window.zhangwoAndroid.JumpToLogin();
  },
   toAppShopCart(){
      var u = navigator.userAgent;
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端      
       if(isAndroid){
         var isLogin = false;
        //  判断是否有token没有的的话就表示没有登录，则跳到登录界面
          if(isLogin){
            window.zhangwoAndroid.JumpToLogin();
          }else{
            // 否则跳到购物车页面
            window.zhangwoAndroid.JumpToShopCartActivity();
          }
       }else if(isiOS){
        //  执行ios代码
       }
    
   },
    // 下拉刷新
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    // 上拉加载

    loadMore() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.imgList.push(
            "https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg"
          );
        }
        this.loading = false;

        if (this.imgList.length >= 80) {
          this.finished = true;
        }
      }, 500);
    },
  },
  created() {
    alert(111);
    // let UserInfo = window.zhangwoAndroid.getUserInfo();
    let UserInfo = [];
    let token_id = JSON.parse(UserInfo)[0];
    let dev_token = JSON.parse(UserInfo)[1];
    alert(token_id)
    alert(dev_token)
    if( token_id == "" && dev_token == "" ){
      alert(22222);
        window.zhangwoAndroid.JumpToLogin();
    }
  }
};
</script>

<style lang="less" >

html,
body {
  box-sizing: border-box;
}

.tabItem {
  box-sizing: border-box;
  overflow: hidden;
  .van-tab--active {
    color: #f05b29;
  }
  .van-tabs__line {
    background-color: #f05b29;
  }
}
.cartBox{
  width: 36px;
  height: 36px;
  position: fixed;
  left: 15px;
  bottom: 22px;
  z-index: 100;
}
// 底部购物车状态
.cartIcon {
  width:100%;
  height:100%;
  border-radius: 50%;

}
// 底部购物车
.bradge{
  width:20px;
  height:20px;
  
  border-radius: 50%;
  font-size:9px;
  color:#fff;
  background:#F05B29;
  text-align:center;
  line-height:20px;
  position: absolute;
  top: -8px;
  right: -4px;
}


</style>
