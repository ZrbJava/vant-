<template>
    <div>
          <!-- 专场商品列表 -->
          
        <van-list v-model="loading"  :finished="finished" @load="loadMore" >
            
        <!-- 专场 -->
        <div class="Special">清风专场</div>
                <!-- 热卖 -->
                <div class="shopList">
                    <div class="itemTop">
                    <div class="item" v-for="(item,index) in img" :key="index" @click="goAppDetail">
                        <div class="imgBox">
                            <img class="shopImg" v-lazy="item"  alt="">
                            <!-- 抢光了 -->
                            <div class="endBox" v-show="index % 2 == 0">
                            <span style="font-size:16px">抢光了</span>
                            <span style="font-size:10px">SOLD OUT</span>
                            </div>
                        </div>
                        <div class="shopName">水山 SB45 破碎锤修理包 下部油封</div>
                        <div class="price">
                            <div>
                                <span>￥250</span>
                                
                            </div>
                                <img src="../assets/cart.png" alt="" class="cart" @click="shopCart">
                                <!-- <cart @addCart="addCart" class="cart"></cart> -->
                        </div>
                    </div>
                </div>
                <!-- 热卖下的商品列表 -->
                <div class="shopItem" v-for="(imgs,index) in imgList" :key="index" @click="goAppDetail">
                        <!-- <img class="shopImg" v-lazy="img" src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3008997697,2144665381&fm=58&bpow=491&bpoh=491" alt=""> -->
                        <div class="imgBox">
                            <img v-lazy="imgs" class="shopImgs">
                            <!-- 抢光了 -->
                            <div class="endBox" v-show="index == 1 || index == 5 || index == 9">
                            <span style="font-size:16px">抢光了</span>
                            <span style="font-size:10px">SOLD OUT</span>
                            </div>
                        </div>
                        <div class="right">
                            <div class="shopTitle">卡特CAT 通用 柴油滤芯 364-52</div>
                            <div class="fireHot">火爆推荐</div>
                            <div class="price">
                                <div>
                                    <span> <span style="font-size:12px">￥</span> 250</span>
                                    <span style="font-size:12px;color:#999;text-decoration: line-through;" >￥200</span>
                                </div>
                                <img src="../assets/cart.png" alt="" class="cart" @click="shopCart">
                            </div>
                         
                        </div>
                </div>
                <!-- 专场结束位置 -->
        </div>
        <div class="finish" v-show="finished">已经到底部了</div>
       
        </van-list>
          
       
    </div>
</template>

<script>
import {mapState,mapMutations} from "vuex";
import {  Lazyload, List } from "vant";
import Cart from "./cart/cart"
import Vue from "vue";
// options 为可选参数，无则不传
Vue.use(Lazyload);
// import { Lazyload } from 'vant';
export default {
  components: {
    List,
    Cart
  },
  name: "App",
  data() {
    return {
      // count: 0,
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
      ],
     
    };
  },
  methods: {
    ...mapMutations(["addCart"]),
    shopCart(){
      // alert(this.count)
      this.addCart();
      this.$emit("addCart",this.count);
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
    goAppDetail(){
      var u = navigator.userAgent;
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      // alert('是否是Android：'+isAndroid);
      // alert('是否是iOS：'+isiOS);
      // alert("你倒是出来啊");
      
       if(isAndroid){
          window.zhangwoAndroid.JumpShopDetail("1530",13674,);
       }else if(isiOS){
        //  执行ios代码
       }
    },
  },
  computed:{
    ...mapState(["count"]),
  },
  created(){
   
  }
  
};
</script>

<style lang="less" >
.van-tabs--line .van-tabs__wrap{
  position: fixed;
  left:0;
  top:0;
}

// 抢光了部分
.imgBox {
  position: relative;
  flex:0;
}
.right{
    flex:1;
    padding-left:18px;
    box-sizing:border-box;
}
.endBox {
  width: 80px;
  height: 80px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // line-height:80px;
  text-align: center;
  background: rgba(0, 0, 0, 0.49);
  color: #fff;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.banner {
  width: 100%;
  height: 342px;
  background: #f6bc4e;
}
.hot {
  width: 100%;
  height: 140px;
  background: #d8d8d8;
}
.hotBox .hot:last-child {
  margin-bottom: 8px;
}
/* 专场 */
.Special {
  width: 100%;
  height: 126px;
  background: blue;
  margin-bottom: 10px;
}
// 专场商品列表
// .shopList {
  
// }
.itemTop {
  display: flex;
  justify-content: space-between;
  .item {
    font-size: 12px;
    color: #333333;
    width: 100px;
  }
  .shopName {
    margin-bottom: 5px;
  }
  .shopImg {
    width: 100px;
    height: 100px;
    margin-bottom: 4px;
  }
  .price {
    font-size: 14px;
    color: #f05b29;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .cart {
    width: 22px;
    height: 22px;
    border-radius: 22px;
  }
}
// 商品列表
.shopItem {
  margin-top: 34px;
  width: 100%;
  height: 130px;
  display: flex;
  padding: 0 15px;
  box-sizing: border-box;
  // background:green;
  box-shadow: 0px 1px 0px 0px rgba(238, 238, 238, 1);
  border-bottom: 1px solid #eeeeee;
  display: flex;
  .shopImgs {
    width: 120px;
    height: 120px;
  }
  .shopTitle {
    margin-bottom: 24px;
  }
  .fireHot {
    box-sizing: border-box;
    font-size: 10px;
    border-radius: 10px;
    border: 1px solid #f5a623;
    color: #f5a623;
    padding: 2px 5px;
    display: inline-block;
    font-weight: 600px;
    margin-bottom: 5px;
  }
  .price {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    color: #f05b29;
    .cart {
      width: 22px;
      height: 22px;
    }
  }
}

// 没有更多数据
.finish {
  height: 40px;
  width: 100%;
  line-height: 40px;
  background: #f5f5f5;
  text-align: center;
  color: #b4b4b4;
  font-size: 12px;
 
}
// 购物车的数量


// 新增加的

/* 小球落下的最终位置 */
 .ball{
    //  position: fixed;
     left: 32px;
     bottom: 22px;
     z-index: 99900;
     transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41); /*贝塞尔曲线*/
 }
 .inner{
     width: 16px;
     height: 16px;
     border-radius: 50%;
     background-color: rgb(0,160,220);
     transition: all 0.4s linear;
}
// 新增加的

 .ball{
    //  position: fixed;
     left: 32px;
     bottom: 22px;
     z-index: 200;
     transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41); /*贝塞尔曲线*/
 }
 .inner{
     width: 16px;
     height: 16px;
     border-radius: 50%;
     background-color: rgb(0,160,220);
     transition: all 0.4s linear;
}

</style>
