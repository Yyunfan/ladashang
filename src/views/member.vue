<template>
  <div class="member-center">
    <div class="loginbanner" v-if="!isLogin">
      <div class="btn-login">
        <a @click="handleClick">登录</a>
      </div>
      <a>
        <img src="../assets/images/img-slider2.jpg" style="width: 100%;" />
      </a>
    </div>
    <!-- 登录后 -->
    <div v-else>
      <!-- 幻灯片 Start-->
    <div class="banner" id="sliderBanner">
      <swipe class="my-swipe">
        <swipe-item v-for="banner in bannerImgs">
          <a :href="banner.bannerLink">
            <img :src="banner.bannerSrc" />
          </a>
        </swipe-item>
      </swipe>
    </div>
    <!-- 幻灯片 End-->
    </div>
    <!-- 登录后 -->
    <div class="la-list">
      <ul>
        <li>
          <a href="javascript:locateTo('/mobile/order/myOrders.htm?orderStatus=dfk&amp;from=/mobile/peppery/member.htm')">
            <div class="innerbox">
              <div class="text-num">{{orderNumber.dfk}}</div>
              <div class="text-title">待付款</div>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:locateTo('/mobile/order/myOrders.htm?orderStatus=dfh&amp;from=/mobile/peppery/member.htm')">
            <div class="innerbox">
              <div class="text-num">{{orderNumber.dfh}}</div>
              <div class="text-title">待发货</div>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:locateTo('/mobile/order/myOrders.htm?orderStatus=dsh&amp;from=/mobile/peppery/member.htm')">
            <div class="innerbox">
              <div class="text-num">{{orderNumber.dsh}}</div>
              <div class="text-title">待收货</div>
            </div>
          </a>
        </li>
        <li class="li-dpj">
          <a href="javascript:locateTo('/mobile/order/myOrders.htm?orderStatus=dpj&amp;from=/mobile/peppery/member.htm')">
            <div class="innerbox">
              <div class="text-num">{{orderNumber.dpj}}</div>
              <div class="text-title">待评价</div>
            </div>
          </a>
        </li>
        <li class="li-last">
          <a href="javascript:locateTo('/mobile/order/myOrders.htm?orderStatus=all&amp;from=/mobile/peppery/member.htm')">
            <div class="innerbox">
              <i class="row"></i>
              <i class="fm_app_font icon"></i>
              <div class="text-title">全部订单<i class="fm_app_font"></i></div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="iconlink">
      <ul v-for="number in memberIcons">
        <li v-for="icon in number.iconItems">
          <a href="icon.icon_link">
            <div class="innerwrap">
              <i class="fm_app_font" :class="icon.icon_class">{{icon.icon_code}}</i>
              <div class="bigtitle">{{icon.icon_name}}</div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import { Swipe, SwipeItem } from 'vue-swipe'
  import goodsData from '../assets/store/data'
  export default {
    data () {
      return {
        isLogin: false,
        memberIcons: goodsData.memberIcons,
        bannerImgs: goodsData.bannerData,
        orderNumber: {
          'dfk': 0,
          'dfh': 0,
          'dsh': 0,
          'dpj': 0
        }
      }
    },
    methods: {
      handleClick (event) {
        event.preventDefault()
        // mock login，这里进行登录操作,类似ajax post操作,服务端response_code返回成功后设置isLogin为true，返回待付款数目对象填充到data里面
        this.isLogin = true
        this.orderNumber = {
          'dfk': 23,
          'dfh': 21,
          'dsh': 3,
          'dpj': 4
        }
        return false
      }
    },
    components: {
      Swipe,
      SwipeItem
    }
  }
</script>
<style src="vue-swipe/dist/vue-swipe.css"></style>
<style>
  .swipe-item a {
    display: block;
  }
  .swipe, .swipe-item img {
    height: 7.36rem;
  }
  .active {
    display: block;
    height: 7.36rem;
  }
</style>
