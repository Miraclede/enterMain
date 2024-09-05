<template>
  <div id="CompanyIntroduction">
    <div class="banner container-fuild text-center">公司介绍</div>
    <div class="container">
      <img :id="pageData[0].id" style="width: 100%" :src="pageData[0].picUrl" />

      <div class="commonTitle text-center">服务能力</div>
      <div class="comSwiper">
        <div class="comSwiper-left">
          <div
            class="comSwiper-left-item"
            v-for="(item, index) in leftList"
            :key="index"
            @click="indexNow = index,changeSwiper(index)"
            :class="indexNow == index ? 'active' : ''"
          >
            {{ item.title }}
          </div>
        </div>
        <div class="comSwiper-right">
          <swiper
            class="swipers"
            style="display: flex; justify-content: center; align-items: center"
            :modules="[Pagination, Autoplay]"
            :direction="'vertical'"
            :slides-per-view="1"
            :space-between="50"
            @slideChange="slideChange"
            lazy
            loop
            :autoplay="{
              delay: 30000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }"
          >
            <swiper-slide v-for="(item, index) in customerList" :key="index">
              <div class="comSwiper-right-text" v-if="item.text">
                {{ item.text }}
              </div>
              <img
                style="width: 100%; user-select: none"
                :src="item.icon"
                alt=""
              />
            </swiper-slide>
          </swiper>
        </div>
      </div>

      <div class="commonTitle text-center" style="margin-top: 60px">
        业务布局
      </div>
      <img :id="pageData[2].id" style="width: 100%" :src="pageData[2].picUrl" />
    </div>
  </div>
</template>

<script setup name="CompanyIntroduction">
import WOW from 'wow.js'
import { onMounted, ref } from 'vue'
import gsjs_1 from '@/assets/img/gsjs_1.png'
import gsjs_2 from '@/assets/img/gsjs_2.png'
import gsjs_3 from '@/assets/img/gsjs_3.png'
import introduce_1 from '@/assets/img/introduce_1.png'
import introduce_2 from '@/assets/img/introduce_2.png'
import introduce_3 from '@/assets/img/introduce_3.png'
import introduce_4 from '@/assets/img/introduce_4.png'
import { Navigation, Pagination, Scrollbar, A11y, Lazy, Autoplay } from 'swiper'
import Swipers from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/lazy'
import 'swiper/css/autoplay'


var swipers = new Swipers('.swipers')
console.log('mySwi',swipers)

onMounted(() => {
  var wow = new WOW()
  wow.init()
})

const refSwiper  = ref(null)

const changeSwiper=(index)=>{
  console.log('changeSwiper', index)
  // swipers.slideTo(index)
  swipers.slideNext()
  // swipers.activeIndex = index
}

const indexNow = ref(0)
const slideChange = (item) => {
  console.log(999, item.activeIndex)

  indexNow.value = item.activeIndex % 5 == 0 ? 0 : (item.activeIndex % 5) - 1
}

const leftList = [
  {
    title: '服务体系'
  },
  {
    title: '服务流程'
  },
  {
    title: '组织保障'
  },
  {
    title: '服务保障'
  }
]
const customerList = [
  {
    text: '',
    icon: introduce_1
  },
  {
    text: '围绕数智消防、标识解析、安全风险智能化管控，三大核心产品，提供从规划设计、工程施工、管理运行、平台运维及运营全价值链服务，让客户享受全程无忧的专业化服务。',
    icon: introduce_2
  },
  {
    text: '针对项目交付建立起标准化的组织保障机制，形成以稳定的项目组成员为交付主体，以资深技术专家、运营支持人员为项目支持的项目交付保障。',
    icon: introduce_3
  },
  {
    text: '',
    icon: introduce_4
  }
]
const pageData = [
  {
    id: '1',
    picUrl: gsjs_1
  },
  {
    id: '2',
    picUrl: gsjs_2
  },
  {
    id: '3',
    picUrl: gsjs_3
  }
]
</script>

<style lang="scss" scoped>
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url('../assets/img/banner1.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
.comSwiper {
  width: 100%;
  display: flex;
  height: 430px;
  padding: 16px;
  background-color: #edf4ff;

  .swiper {
    width: 100%;
    height: 100%;
  }

  &-left {
    width: 200px;
    font-size: 22px;
    text-align: center;
    box-sizing: border-box;
    border-right: 2px solid #bdd3f7;
    flex-shrink: 0;
    &-item {
      margin: 5px 0;
      padding: 8px 0;
      cursor: pointer;
    }
  }
  &-right {
    box-sizing: border-box;
    padding: 0 20px;
    &-text {
      font-size: 18px;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
.active {
  background: linear-gradient(90deg, #6b757500, #a9c6ff);
  border-right: 4px solid #306bff;
}
.row {
  margin-right: 0;
  margin-left: 0;
}
.CompanyIntroduction-container {
  padding: 100px 0;
  color: #808080;
  transition: all ease 0.5s;
}
.CompanyIntroduction-container > div > p {
  font-size: 14px;
  line-height: 2.5rem;
}
@media screen and (max-width: 997px) {
  .CompanyIntroduction-container {
    padding: 10px 0;
    color: #808080;
  }
}
</style>

