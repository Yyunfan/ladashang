<template>
  <div class="conWrap">
    <div class="list-banner">
      <img src="../assets/images/banner_mall.jpg" />
    </div>
    <div class="ad-img">
      <a href="http://m.foodmall.com/mobile/goodsDetail.htm?id=744731527228694528">
        <img src="../assets/images/xueyu.jpg" />
      </a>
    </div>
    <div class="ad-img">
      <a href="http://m.foodmall.com/mobile/storeCoupon.htm">
        <img src="../assets/images/hongbao.jpg" />
      </a>
    </div>
    <section v-for="item in indexData">
      <!-- 标题 -->
      <div class="title-img">
        <img :src="item.title_image" alt="" />
        <a v-link="{ path: '/goodsList/' + item.category_name }" class="btn-more">更多<i class="fm_app_font"></i></a>
      </div>
      <!-- 商品列表 -->
      <div class="goods-con">
        <ul class="list">
          <li class="goodswrap" v-for="list in item.items">
            <a :href="`http://m.foodmall.com/mobile/goodsDetail.htm?id=${list.goods_id}`">
              <div class="goodspic">
                <img :src="list.goods_pic" />
                <div class="mark" id="mark" v-show="list.isSoldOut">
                  <div class="icon_no"></div>
                </div>
              </div>
              <div class="goodsinfo">
                <h3>{{list.goods_name}}</h3>
                <div class="price">
                  <span>
                    ¥
                    <b class="price">{{list.price}}</b>
                  </span>
                  <div class="la-icon">
                    <i class="fm_app_font"></i>
                    <!-- 辣椒个数 -->
                    <i class="fm_app_font lajiao" :class="list.iconfont_lajiao"></i>
                  </div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
import goodsData from '../assets/store/data'
export default {
  name: 'home',
  data () {
    return {
      indexData: goodsData.indexRecommend
    }
  }
}
</script>
