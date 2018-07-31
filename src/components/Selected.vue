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
                          <special></special>
                        </div>
                        <div v-show="active == 1">
                          <h1>发动机件</h1>
                          <special></special>
                        </div>
                        <div v-show="active == 2">
                          <h1>液压件</h1>
                          <special></special>
                        </div>
                        <div v-show="active == 3">
                          <h1>电器件</h1>
                          <special></special>
                        </div>
                        <div v-show="active == 4">
                          <h1>密封件</h1>
                          <special></special>
                        </div>
                        <div v-show="active == 5">
                          <h1>油品</h1>
                          <special></special>
                        </div>
                        
                      
                    </van-pull-refresh>
                </van-tab>
            </van-tabs>
             <!-- 底部 -->
            <div>
                <img src="../assets/cartIcon.png" alt="" class="cartIcon">
                <!-- <img src="../assets/cartIcon.png" alt="" class="cartIcon"> -->
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
    test() {
      console.log(this.active);
      // alert(this.active);
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
    }
  },
  created() {}
};
</script>

<style lang="less" >
html,
body {
  box-sizing: border-box;
}
.van-tab--active {
  color: #f05b29;
}
.van-tabs__line {
  background-color: #f05b29;
}
.tabItem {
  box-sizing: border-box;
  overflow: hidden;
}
// 抢光了部分
.imgBox {
  position: relative;
  margin-right: 18px;
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
.shopList {
  padding: 0 15px;
}
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
// 底部购物车状态
.cartIcon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  position: fixed;
  left: 15px;
  bottom: 22px;
  overflow: hidden;
  z-index: 100;
}

// 回到顶部
.finish {
  height: 40px;
  width: 100%;
  line-height: 40px;
  background: #f5f5f5;
  text-align: center;
  color: #b4b4b4;
  font-size: 12px;
}
</style>
