<template>
  <div id="HomePage">
    <!-- 轮播图 -->
    <swiper
      id="swiper"
      :modules="[Navigation, Pagination, Scrollbar, A11y, Lazy, Autoplay]"
      :slides-per-view="1"
      :space-between="0"
      lazy
      loop
      autoplay
      :pagination="{
        clickable: true
      }"
    >
      <swiper-slide
        class="banner-swiper"
        v-for="(item, index) in swiperList"
        :key="index"
      >
        <img class="swiper-lazy" :data-src="item.img" alt="轮播图" />
        <div class="swiper-lazy-preloader"></div>
        <div class="swiper-slide-title">
          <h1>{{ item.title }}</h1>
          <p>{{ item.content }}</p>
        </div>
      </swiper-slide>
    </swiper>

    <!-- 应急行业公共服务平台  -->
    <div id="bigData" class="container-fuild">
      <div class="commonTitle text-center">平台产品及服务</div>
      <div class="row bigData-container">
        <div
          style="text-align: center; display: flex; justify-content: center"
          class="col-xs-12 col-sm-12 col-md-6 wow zoomIn"
        >
          <div style="max-width: 600px">
            <img
              class="img-responsive"
              src="@/assets/img/img1.png"
              alt="大数据管理系统"
            />
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6">
          <h2 class="bigData-title" @click="basicClick('bsjx')">
            国家工业互联网标识解析安全应急行业公共服务平台
          </h2>
          <p style="margin-bottom: 3rem; font-size: 16px">
            简介：公共服务平台是以服务、工具及技术等形式为安全应急产业生态圈中其他成员提供解决方案的线上综合性平台。通过工业互联网标识解析，链接生产商、供应商、服务商、终端用户，强化监管单位运营能力。推动安全应急行业产品交易、全生命周期管理、质量追溯、区块链存证、产品在线监控、售后服务等业务协同。
          </p>
          <p class="pull-left" style="font-size: 24px">电脑/手机 全设备支持</p>
          <p
            class="pull-right"
            @click="basicClick('bsjx')"
            style="font-size: 15px; color: #1e73be"
          >
            了解更多<span class="glyphicon glyphicon-menu-right"></span>
          </p>
        </div>
      </div>
    </div>

    <!-- 城市安全运营平台  -->
    <div id="bigData" style="padding-top: 0" class="container-fuild">
      <div class="row bigData-container">
        <div class="col-xs-12 col-sm-12 col-md-6">
          <h2 @click="basicClick('csaq')" class="bigData-title">
            城市安全运营平台
          </h2>
          <p style="margin-bottom: 3rem; font-size: 16px">
            简介：城市安全运营平台为集智慧应急、资源整合、体系构建与产业促进于一体的综合管理平台，整合区域安全应急产业资源，促进安全应急产业生态圈的形成，构建完整的安全应急产业链，为城市安全运营提供可复制、可推广的长效运营模式，并实现集成产品的输出。通过迭代升级与深化开发，实现与省市平台及“一网统管”的无缝融合，同时与区级部门、街道系统紧密衔接，高效运用安全管理工具，全方位提升城市安全运营能力。
          </p>
          <p class="pull-left" style="font-size: 24px">电脑/手机 全设备支持</p>
          <p
            @click="basicClick('csaq')"
            class="pull-right"
            style="font-size: 15px; color: #1e73be"
          >
            了解更多<span class="glyphicon glyphicon-menu-right"></span>
          </p>
        </div>
        <div
          style="text-align: center; display: flex; justify-content: center"
          class="col-xs-12 col-sm-12 col-md-6 wow zoomIn"
        >
          <div style="max-width: 600px">
            <img
              class="img-responsive"
              src="@/assets/img/img2.png"
              alt="大数据管理系统"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- 标准工具软件系统 -->
    <div id="customer" class="container-fuild">
      <div class="container customer-container">
        <p class="commonTitle text-center">标准工具软件系统</p>
        <swiper
          style="background-color: white"
          class="swiper-container customer-swiper hidden-xs"
          :modules="modules"
          :slides-per-view="1"
          :space-between="0"
          navigation
          loop
          :autoplay="{
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }"
          :pagination="{
            clickable: true
          }"
        >
          <swiper-slide
            class="swiper-slide customer-block"
            style="padding: 30px 80px;"
            v-for="(item, index) in customerList"
            :key="index"
          >
            <div class="customer-logo">
              <img class="center-block" :src="item.logo" alt="logo" />
            </div>
            <div class="customer-title">{{ item.title }}</div>

            <div class="customer-content1">
              <small>{{ item.content }}</small>
              <p
                @click="basicClick(item.type)"
                class="pull-right"
                style="font-size: 15px; color: #1e73be"
              >
                了解更多<span class="glyphicon glyphicon-menu-right"></span>
              </p>
            </div>
            <div class="customer-content2">{{ item.remark }}</div>
          </swiper-slide>
        </swiper>

        <!-- 移动端 -->
        <div class="row visible-xs customer-block">
          <div
            class="col-xs-12"
            v-for="(item, index) in customerList"
            :key="index"
          >
            <div class="customer-logo">
              <img class="center-block" :src="item.logo" alt="logo" />
            </div>
            <div class="customer-yh">
              <img src="@/assets/img/yinhao.png" alt="引号" />
            </div>
            <div class="customer-content1">
              <small>{{ item.content }}</small>
            </div>
            <div class="customer-content2">
              <small>{{ item.title }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 硬件产品及服务  -->
    <div id="bigData" style="padding-bottom: 0" class="container-fuild">
      <div class="commonTitle text-center">硬件产品及服务</div>
      <div class="row bigData-container">
        <div
          style="text-align: center; display: flex; justify-content: center"
          class="col-xs-12 col-sm-12 col-md-6 wow zoomIn"
        >
          <div style="max-width: 600px">
            <img
              class="img-responsive"
              src="@/assets/img/ytj.png"
              alt="大数据管理系统"
            />
          </div>
        </div>
        <div
          style="
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-height: 350px;
          "
          class="col-xs-12 col-sm-12 col-md-6"
        >
          <h2 @click="serviceClick('ytj')" class="bigData-title">智慧消防一体机</h2>
          <p style="margin-bottom: 3rem; font-size: 16px">
            智慧消防一体机专为有消安一体化监管需求的场所设计，通过物联网技术，低成本快速实现远程监控与日常监管，提升消防管理效率与安全。集大数据、云计算于一体，实现水压、电气火灾等多维度监测与报警，界面直观展示隐患。兼容各品牌传感器，灵活配置，覆盖全消防设备监测。作为数字孪生平台，内置可视化大屏，支持定制数据展示。该一体机是我司与消防专家共创的城市级消防全生态解决方案，助力消防智能化升级。
          </p>
          <p
            @click="serviceClick('ytj')"
            style="font-size: 15px; color: #1e73be"
          >
            了解更多<span class="glyphicon glyphicon-menu-right"></span>
          </p>
        </div>
      </div>
    </div>

    <!-- 为什么选择我们 -->
    <div id="whyChooseUs" class="conatiner-fuild">
      <div class="container">
        <div class="whyChooseUs-title text-center">
          <p>荣誉资质</p>
        </div>

        <swiper
          :modules="modules"
          :slides-per-view="4"
          :space-between="10"
          lazy
          loop
          :autoplay="{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }"
          class="my-swiper"
          :speed="6000"
        >
          <swiper-slide
            class="honor-swiper"
            v-for="(item, index) in serverList"
            :key="index"
          >
            <div
              class="server-block wow slideInUp"
              onmouseenter="this.style.color='#28f';this.style.borderColor='#28f'"
              onmouseleave="this.style.color='#666';this.style.borderColor='#ccc'"
            >
              <p
                class="text-center"
                style="
                  display: inline-block;
                  min-height: 55px;
                  text-align: center;
                  width: 100%;
                "
              >
                {{ item.title }}
              </p>
              <img class="center-block" :src="item.logo" alt="logo" />
              <div
                class="text-center"
                style="min-height: 85px"
                v-html="item.content"
                onmouseenter="this.style.color='#28f'"
                onmouseleave="this.style.color='#ccc'"
              ></div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup name="HomePage">
import WOW from 'wow.js'
import { useRouter } from 'vue-router'
import { getCurrentInstance, onMounted, ref } from 'vue'
import { Navigation, Pagination, Scrollbar, A11y, Lazy, Autoplay } from 'swiper'
const company = import.meta.env.VITE_APP_COMPANYNAME
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/lazy'
import 'swiper/css/autoplay'

import banner1 from '@/assets/img/banner1.png'
import banner2 from '@/assets/img/banner2.jpg'

import logo_hp from '@/assets/img/logo_hp.png'
import logo_kk from '@/assets/img/logo_kk.png'
import logo_toyota from '@/assets/img/logo_toyota.png'
import tool1 from '@/assets/img/tool1.png'
import tool2 from '@/assets/img/tool2.png'
import tool3 from '@/assets/img/tool3.png'
import tool4 from '@/assets/img/tool4.png'
import tool5 from '@/assets/img/tool5.png'
import tool6 from '@/assets/img/tool6.png'

import img_tel from '@/assets/img/img_ry1.png'
import img_computer from '@/assets/img/img_ry2.png'
import img_qq from '@/assets/img/img_ry3.png'
import img_skill from '@/assets/img/img_ry4.png'
import img_skill5 from '@/assets/img/img_ry5.png'
import img_skill6 from '@/assets/img/img_ry6.png'
import img_skill7 from '@/assets/img/img_ry7.png'

const router = useRouter()

const swiperList = [
  {
    img: banner1,
    title: '中安工业互联网（成都）有限公司',
    content: '中国数智消防创领者'
  },
  {
    img: banner2,
    title: '中安工业互联网（成都）有限公司',
    content: '全国首家标识解析安全应急行业节点运营商'
  },
  {
    img: banner1,
    title: '中安工业互联网（成都）有限公司',
    content: '以工业互联  助安全应急'
  },
  {
    img: banner2,
    title: '国家工业互联网标识解析安全应急行业公共服务平台',
    content: '数智消防 ｜ 智改数转 ｜ 工业互联网+安全生产'
  }
]

const modules = [Navigation, Pagination, Scrollbar, A11y, Lazy, Autoplay]

const customerList = [
  {
    logo: tool1,
    title: '消防物联监测预警系统',
    content: '全面接入、在线监测、消安联动、实时预警。',
    remark: '数智消防',
    type: 'xfwl'
  },
  {
    logo: tool2,
    title: '消防安全智能巡检系统',
    content: '智能化巡检，数字化存证。',
    remark: '数智消防',
    type: 'xfaq'
  },
  {
    logo: tool3,
    title: '智慧消防隐患排查治理系统',
    content: '隐患闭环管理、助力监督预警',
    remark: '数智消防',
    type: 'zhxf'
  },
  {
    logo: tool4,
    title: '安全风险与隐患排查治理管理系统',
    content: '风险分级动态管控、隐患排查治理闭环管理、机制运行成效监督预警。',
    remark: '工业＋安全生产',
    type: 'aqfx'
  },
  {
    logo: tool5,
    title: '安全生产信息管理系统',
    content: '全线信息数字化管理，一键掌控。',
    remark: '工业＋安全生产',
    type: 'aqsc'
  },
  {
    logo: tool6,
    title: '生产设备管理系统',
    content: '状态监测、故障预警、全生命周期精细化管理。',
    remark: '智改数转',
    type: 'scsb'
  }
]

const serverList = [
  {
    logo: img_tel,
    title: '国家工业互联网标识注册服务许可证',
    content:
      '2022年9月，获四川省通信管理局颁发的“工业互联网标识注册服务机构许可证”'
  },
  {
    logo: img_computer,
    title: '四川省科技型中小企业',
    content:
      '2022年8月4日，中安互联经四川省科技厅认证，获批2022年度第九批科技型中小企业'
  },
  {
    logo: img_qq,
    title: '工信部重点实验室大数据与实体经济融合工作组成员',
    content:
      '2022年6月29日，获国家工业信息安全发展研究中心颁发的”2022年-2024年大数据与实体经济融合工作组成员单位'
  },
  {
    logo: img_skill,
    title: '2021年示范应用场景',
    content:
      '2022年6月，获成都市新经济发展委员会颁发的“2021年度基于物联网等城市智慧消防管理示范场景”'
  },
  {
    logo: img_skill5,
    title: '2021年年度中国水泥行业智造先锋供应商',
    content:
      '2022年7月19日，获中国水泥网颁发的“2021年度中国水泥行业智造先锋供应商”'
  },
  {
    logo: img_skill6,
    title: '2022年产业数字经济创新应用案例',
    content: '2022年11月15日，中安互联案例入围“2022产业数字经济创新案例”'
  },
  {
    logo: img_skill7,
    title: 'CEIE2022“消防技术创新十大品牌”',
    content:
      '2023年2月28日，获CEIS2022第四届中国应急安全(消防)产业峰会颁发的“消防技术创新十大品牌”'
  }
]

function basicClick(type) {
  router.push({
    name: 'basicPage',
    query: { pageType: type }
  })
}

function serviceClick(type) {
  router.push({
    name: 'serviceDetail',
    query: { pageType: type }
  })
}

// const { proxy } = getCurrentInstance() //获取上下文实例，ctx=vue2的this
onMounted(() => {
  // console.log('mounted', proxy)
  // console.log(proxy.$wow, '------')
  /* wowjs动画 */
  new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
  }).init()
})
</script>

<style lang="scss" scoped>
.my-swiper .swiper-wrapper {
  transition-timing-function: linear !important;
}
/* 整体盒子 */
#HomePage {
  width: 100%;
}

/* 顶部轮播图 */
#swiper {
  width: 100%;
  height: 600px;
}

#swiper .banner-swiper {
  width: 100%;
  height: 100%;
  position: relative;
}

#swiper .banner-swiper img {
  width: 100%;
  height: 100%;
}

#swiper .banner-swiper .swiper-slide-title {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999999;
  width: 100%;
  height: 100%;
  color: #fff;
  background: rgba(51, 51, 51, 0.534);
  text-align: center;
  line-height: 80px;
}

#swiper .banner-swiper .swiper-slide-title > h1 {
  font-size: 50px;
  margin-top: 12%;
}

#swiper .banner-swiper .swiper-slide-title > p {
  font-size: 20px;
  margin-top: 1%;
  font-weight: 700;
}

/* 大数据管理系统 */
#bigData {
  padding: 100px;
  transition: all ease 0.6s;
  box-sizing: border-box;
}

#bigData .bigData-title {
  padding-bottom: 10px;
  font-size: 36px;
  border-bottom: 1px solid #ccc;
}

#bigData p {
  font-size: 14px;
  color: #333;
  line-height: 2rem;
}

#bigData .bigData-device {
  margin: 50px 0 20px;
}

/* 您身边的IT专家 */
#contactUs {
  color: #fff;
  height: 400px;
  background: url('../assets/img/contact_us_bg.jpg') 0 0 no-repeat;
  background-size: 100% 100%;
  transition: all ease 0.6s;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}

#contactUs .contactUs-container {
  // padding-top: 50px;
}

#contactUs .contactUs-container button {
  width: 300px;
  height: 50px;
  margin-top: 36px;
}

#contactUs .contactUs-container .contactUs-contactWay span {
  display: inline-block;
  width: 48px;
  height: 48px;
  margin: 30px;
}

#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(1) {
  background: url('../assets/img/weixin.png') 0 0 no-repeat;
  background-size: 100% 100%;
}

#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(2) {
  background: url('../assets/img/weibo.png') 0 0 no-repeat;
  background-size: 100% 100%;
}

#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(3) {
  background: url('../assets/img/twitter.png') 0 0 no-repeat;
  background-size: 100% 100%;
}

/* 客户评价 */
#customer {
  padding: 50px 0;
  box-sizing: border-box;
  background: #efefef;
  transition: all ease 0.6s;
}

#customer .customer-title {
  font-size: 24px;
  color: #333;
  margin: 0 0 16px;
}

#customer .customer-block {
  background: #fff;
  padding: 30px 80px;
}

#customer .customer-logo img {
  width: 94px;
  height: 94px;
  border: 1px solid #ccc;
}

#customer .customer-yh img {
  width: 34px;
  height: 34px;
}

#customer .customer-content1 {
  padding-bottom: 20px;
  text-align: center;
  font-size: 12px;
  border-bottom: 1px solid #0ce9f1;
}

#customer .customer-content2 {
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding-top: 12px;
  color: #007aff;
}

#customer .customer-title {
  width: 100%;
  text-align: center;
  padding-top: 34px;
}

/* 为什么选择我们 */
#whyChooseUs {
  padding: 100px;
}

#whyChooseUs .whyChooseUs-title {
  margin-bottom: 50px;
}

#whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
  font-size: 30px;
  font-weight: 500;
}

#whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
  font-size: 14px;
}

#whyChooseUs .server-block {
  padding: 28px 24px;
  border: 1px solid #ccc;
  border-bottom: 5px solid #ccc;
  box-sizing: border-box;
}

#whyChooseUs .server-block img {
  width: 148px;
  height: 148px;
}

#whyChooseUs .server-block > p {
  font-size: 18px;
  color: #333;
}

#whyChooseUs .server-block > div {
  color: #ccc;
}

/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  #swiper {
    height: 200px;
  }

  #bigData {
    padding: 30px;
  }

  #bigData .bigData-title {
    font-size: 20px;
  }

  #bigData .bigData-device {
    font-size: 20px;
    margin: 10px 0 10px;
  }

  #contactUs {
    height: 200px;
    transition: all ease 0.6s;
  }

  #contactUs .contactUs-container {
    padding-top: 0;
  }

  #contactUs .contactUs-container h1 {
    font-size: 25px;
  }

  #contactUs .contactUs-container h3 {
    font-size: 18px;
  }

  #contactUs .contactUs-container button {
    width: 200px;
    height: 30px;
    margin-top: 20px;
  }

  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 28px;
    height: 28px;
    margin: 10px;
  }

  #customer {
    padding: 30px 0;
    box-sizing: border-box;
    background: #fff;
  }

  #customer .customer-title {
    font-size: 16px;
    font-weight: bold;
  }

  #customer .customer-logo img {
    width: 48px;
    height: 48px;
  }

  #customer .customer-block {
    padding: 30px;
  }

  #customer .customer-block > div {
    padding: 30px 0;
  }

  #whyChooseUs {
    padding: 20px 0;
    transition: all ease 0.6s;
  }

  #whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
    font-size: 20px;
    font-weight: 700;
  }

  #whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
    font-size: 12px;
  }

  #whyChooseUs .server-block {
    padding: 50px 0;
    border: 1px solid #ccc;
    border-bottom: 5px solid #ccc;
  }

  #whyChooseUs .server-block img {
    width: 48px;
    height: 48px;
  }

  #whyChooseUs .server-block > p {
    font-size: 20px;
    margin: 30px 0;
  }

  #whyChooseUs .server-block > div {
    color: #ccc;
  }
}

/* 媒体查询（平板） */
@media screen and (min-width: 768px) and (max-width: 996px) {
  #swiper {
    height: 400px;
  }

  #bigData {
    padding: 60px;
  }

  #bigData .bigData-title {
    font-size: 30px;
  }

  #bigData .bigData-device {
    font-size: 30px;
    margin: 30px 0 15px;
  }

  #contactUs {
    height: 300px;
  }

  #contactUs .contactUs-container {
    padding-top: 50px;
  }

  #contactUs .contactUs-container h1 {
    font-size: 30px;
  }

  #contactUs .contactUs-container h3 {
    font-size: 20px;
  }

  #contactUs .contactUs-container button {
    width: 300px;
    height: 50px;
    margin-top: 30px;
  }

  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin: 15px;
  }

  #customer .customer-title {
    font-size: 24px;
  }

  #whyChooseUs {
    padding: 20px 0;
  }
}
</style>

