<template>
  <div id="Service">
    <div class="container text-center">
      <h1>案例聚焦</h1>
      <p style="color: #b2b2b2">Case Focus</p>
    </div>
    <div class="container">
      <div class="commonTitle text-center" style="padding-bottom: 0;margin-top: 20px;">城市公共安全</div>
      <div class="Service-container row text-center">
        <div
          class="Service-item col-xs-12 col-sm-6 col-md-3 wow slideInUp"
          v-for="(item, index) in serviceList"
          :key="index"
          @click="ServiceClick(item.type)"
        >
          <div class="Service-item-wrapper" >
            <div class="Service-item-top">
              <h4>{{ item.title }}</h4>
              <i></i>
              <p>{{ item.eng_title }}</p>
            </div>
            <div class="Service-item-img">
              <img :src="item.img" alt="服务" />
            </div>
            <div class="Service-item-border"></div>
          </div>
        </div>
      </div>

      <div class="commonTitle text-center" style="padding-bottom: 0;margin-top: 20px;">行业公共安全</div>
      <div class="Service-container row text-center">
        <div
          class="Service-item col-xs-12 col-sm-6 col-md-3 wow slideInUp"
          v-for="(item, index) in industryList"
          :key="index"
          @click="ServiceClick(item.type)"
        >
          <div class="Service-item-wrapper" >
            <div class="Service-item-top">
              <h4>{{ item.title }}</h4>
              <i></i>
              <p>{{ item.eng_title }}</p>
            </div>
            <div class="Service-item-img">
              <img :src="item.img" alt="服务" />
            </div>
            <div class="Service-item-border"></div>
          </div>
        </div>
      </div>

      <div class="commonTitle text-center" style="padding-bottom: 0;margin-top: 20px;">能源安全</div>
      <div class="Service-container row text-center">
        <div
          class="Service-item col-xs-12 col-sm-6 col-md-3 wow slideInUp"
          v-for="(item, index) in energyList"
          :key="index"
          @click="ServiceClick(item.type)"
        >
          <div class="Service-item-wrapper" >
            <div class="Service-item-top">
              <h4>{{ item.title }}</h4>
              <i></i>
              <p>{{ item.eng_title }}</p>
            </div>
            <div class="Service-item-img">
              <img :src="item.img" alt="服务" />
            </div>
            <div class="Service-item-border"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup name="Service">
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import WOW from 'wow.js'
import service1 from '@/assets/img/case_1.jpg'
import service2 from '@/assets/img/case_2.jpg'
import service3 from '@/assets/img/case_3.jpg'
import service4 from '@/assets/img/case_4.jpg'
import service5 from '@/assets/img/case_5.jpeg'
import service6 from '@/assets/img/case_6.jpg'
import service7 from '@/assets/img/case_7.jpg'
import service8 from '@/assets/img/case_8.jpeg'
import service9 from '@/assets/img/case_9.jpg'
import service10 from '@/assets/img/case_10.jpeg'
import service11 from '@/assets/img/case_11.jpeg'
import service12 from '@/assets/img/case_12.jpg'
const serviceList = [
  {
    id: 'section-1',
    title: '政府监管项目',
    eng_title: 'case',
    img: service1,
    type:'zfjg'
  },
  {
    id: 'section-2',
    title: '商业综合体项目',
    eng_title: 'case',
    img: service2,
    type:'syzht'
  },
  {
    id: 'section-3',
    title: '九小场所项目',
    eng_title: 'case',
    img: service3,
    type:'jxcs'
  },
  {
    id: 'section-4',
    title: '铁路交通项目',
    eng_title: 'case',
    img: service4,
    type:'tljt'
  },
  {
    id: 'section-5',
    title: '社区物管项目',
    eng_title: 'case',
    img: service5,
    type:'sqwg'
  },
  {
    id: 'section-6',
    title: '产业园区项目',
    eng_title: 'case',
    img: service6,
    type:'cyyq'
  },
]
const industryList = [
  {
    id: 'section-7',
    title: '化工行业项目',
    eng_title: 'case',
    img: service7,
    type:'hghy'
  },
  {
    id: 'section-8',
    title: '智慧酒窖项目',
    eng_title: 'case',
    img: service8,
    type:'zhjj'
  },
  {
    id: 'section-9',
    title: '文物行业项目',
    eng_title: 'case',
    img: service9,
    type:'wwhy'
  }
]
const energyList = [
  {
    id: 'section-10',
    title: '锂电池储能站项目',
    eng_title: 'case',
    img: service10,
    type:'ldccn'
  },
  {
    id: 'section-11',
    title: '石油石化项目',
    eng_title: 'case',
    img: service11,
    type:'sysh'
  },
  {
    id: 'section-12',
    title: '电力电网项目',
    eng_title: 'case',
    img: service12,
    type:'dldw'
  }
]

const router = useRouter()

function ServiceClick(type) {
  router.push({
    name: 'demoViewDetail',
    query: { pageType: type }
  })
}
onMounted(() => {
  var wow = new WOW()
  wow.init()
})
</script>
<style scoped>
.Service-container {
  padding: 30px 50px;
}
.Service-item {
  margin-bottom: 50px;
}
.Service-item-wrapper {
  cursor: pointer;
  background: rgba(244, 244, 244, 1);
  overflow: hidden;
  position: relative;
}
.Service-item-top {
  width: 100%;
  height: 120px;
  padding: 30px;
  text-align: center;
}
.Service-item-top > i {
  display: inline-block;
  width: 25px;
  height: 2px;
  background: #28f;
}
.Service-item-top > p {
  color: #b2b2b2;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.5s ease;
}
.Service-item-img {
  width: 100%;
  height: 150px;
  overflow: hidden;
  position: relative;
}
.Service-item-img img {
  width: 100%;
  height: 100%;
  object-fit: fill;
  transition: all 0.5s ease;
}
.Service-item-border {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 99;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
  border: 1px solid #000;
  opacity: 0;
}
.Service-item-wrapper:hover .Service-item-top > i {
  opacity: 0;
}
.Service-item-wrapper:hover .Service-item-top > p {
  opacity: 1;
  transform: translateY(-10px);
}
.Service-item-wrapper:hover .Service-item-img > img {
  transform: scale(1.1, 1.1);
}
.Service-item-wrapper:hover > .Service-item-border {
  opacity: 1;
  width: 90%;
  height: 90%;
}
</style>

