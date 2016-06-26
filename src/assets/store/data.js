// 首页推荐商品数据
const indexRecommend = [{
  category_name: 'fanzaoyang',
  title_image: 'http://pages.foodmall.com/custom/mobile/project/la-project/images/title1.jpg',
  items: [{
    goods_id: '730266321178087424', // 商品id
    goods_pic: 'http://pages.foodmall.com/custom/mobile/project/la-project/images/shouye/goodsimg1.jpg', // 商品图片文件名
    goods_name: '印尼狠辣虾膏辣椒酱190g',  // 商品名称
    price: '38.00', // 商品价格
    isSoldOut: false, // 是否售罄
    iconfont_lajiao: 'icon-lajiao'  // 几颗辣椒
  }, {
    goods_id: '730266321178087424', // 商品id
    goods_pic: 'http://pages.foodmall.com/custom/mobile/project/la-project/images/shouye/goodsimg4.jpg', // 商品图片文件名
    goods_name: '印尼狠辣虾膏辣椒酱190g',  // 商品名称
    price: '38.00', // 商品价格
    isSoldOut: false, // 是否售罄
    iconfont_lajiao: 'icon-lajiao'  // 几颗辣椒
  }]
}, {
  title_image: 'title2.jpg',
  items: [{
    goods_id: '730265080226140160',
    goods_pic: '',
    goods_name: '印尼狠辣虾膏辣椒酱190g',
    price: '38.00',
    isSoldOut: false,
    iconfont_lajiao: '&#xe64e;' // iconfont content
  }]
}]
const listData = {
  fanzaoyang: {
    ad_img: 'http://pages.foodmall.com/custom/mobile/project/la-project/images/adimg_fan.jpg',
    list_items: [{
      title_img: 'http://pages.foodmall.com/custom/mobile/project/la-project/images/title_hand.jpg',
      items: [{
        goods_id: '730265080226140160',
        goods_pic: 'http://pages.foodmall.com/custom/mobile/project/la-project/images/adimg_fan.jpg',
        goods_name: '印尼狠辣虾膏辣椒酱190g',
        price: '38.00',
        isSoldOut: false,
        iconfont_lajiao: 'icon-lajiao' // iconfont content
      }]
    }]
  },
  lamexian: {
    number: 111
  },
  laguanbao: {},
  tianshengla: {},
  labupa: {}
}
const memberIcons = [{
  iconItems: [{
    icon_name: '管理账号',
    icon_code: '',
    icon_link: '/mobile/user/userdata.htm',
    icon_class: 'bigicon1'
  }, {
    icon_name: '社区分享',
    icon_code: '',
    icon_link: 'http://buluo.qq.com/p/barindex.html?bid=304157&from=/mobile/peppery/member.htm',
    icon_class: 'bigicon2'
  }]
}, {
  iconItems: [{
    icon_name: '红包',
    icon_code: '',
    icon_link: '/mobile/user/coupon.htm?entry=peppery',
    icon_class: 'bigicon3'
  }, {
    icon_name: '浏览足迹',
    icon_code: '',
    icon_link: '/mobile/user/history.htm',
    icon_class: 'bigicon4'
  }, {
    icon_name: '联系客服',
    icon_code: '',
    icon_link: 'javascript:storezixun("709318122548514816")',
    icon_class: 'bigicon5'
  }]
}, {
  iconItems: [{
    icon_name: '收藏夹',
    icon_code: '',
    icon_link: '/mobile/user/favorite.htm',
    icon_class: 'bigicon6'
  }, {
    icon_name: '进入商城',
    icon_code: '',
    icon_link: '/',
    icon_class: 'bigicon7'
  }, {
    icon_name: '购物车',
    icon_code: '',
    icon_link: '/mobile/shoppingcart/shoppingcart.htm',
    icon_class: 'bigicon8'
  }]
}]
const bannerData = [{
  bannerSrc: 'http://m.foodmall.com/mobile/resources/image/peppery/newCoupon_01.jpg',
  bannerLink: 'http://wxacf11c7f7db4490b.wx.91pintuan.com'
}, {
  bannerSrc: 'http://m.foodmall.com/mobile/resources/image/peppery/banner_03.jpg',
  bannerLink: ''
}, {
  bannerSrc: 'http://m.foodmall.com/mobile/resources/image/peppery/banner_05.jpg',
  bannerLink: '/'
}]
export default {
  indexRecommend,
  listData,
  memberIcons,
  bannerData
}
