<template>
  <div class="conWrap">
    <div class="ad-img">
      <img :src="listData.ad_img" />
    </div>
    <section v-for="item in listData.list_items">
      <div class="title-img">
        <img :src="item.title_img" />
      </div>
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
                  <span>¥<b class="price">{{list.price}}</b></span>
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
    name: 'goodsList',
    data () {
      return {
        listData: goodsData.listData[this.$route.params.url]
      }
    }
  }
</script>
