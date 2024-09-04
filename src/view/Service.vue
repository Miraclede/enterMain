<template>
  <div id="Service">
    <div class="container text-center">
      <h1>行业解决方案</h1>
      <p style="color: #b2b2b2">Service capability</p>
    </div>
    <div class="container">
      <div class="Service-container row text-center" style="display: flex;gap: 10px;justify-content: center;">
        <!-- col-xs-12 col-sm-6 col-md-3 -->
        <div
          class="Service-item  wow slideInUp"
          style="width: 20%;"
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
    </div>
  </div>
</template>
<script setup name="Service">
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import WOW from 'wow.js'
import service1 from '@/assets/img/service1.jpg'
import service2 from '@/assets/img/service2.jpg'
import service3 from '@/assets/img/service3.jpg'
import service4 from '@/assets/img/service4.jpg'
import service5 from '@/assets/img/service1.jpg'
const serviceList = [
  {
    id: 'section-1',
    title: '大型综合体智慧消防解决方案',
    eng_title: 'Solution',
    img: service1,
    type:'dxzh'
  },
  {
    id: 'section-2',
    title: '医院智慧消防解决方案',
    eng_title: 'Solution',
    img: service2,
    type:'yyzh'
  },
  {
    id: 'section-3',
    title: '电力行业智慧消防解决方案',
    eng_title: 'Solution',
    img: service3,
    type:'dlhy'
  },
  {
    id: 'section-4',
    title: '化工园区安全生产智慧服务方案',
    eng_title: 'Solution',
    img: service4,
    type:'hgyq'
  },
  {
    id: 'section-5',
    title: '餐厨垃圾智能化解决方案',
    eng_title: 'Solution',
    img: service5,
    type:'cclj'
  },
]

const router = useRouter()

function ServiceClick(type) {
  router.push({
    name: 'serviceDetail',
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
  overflow: hidden;
}
.Service-item-img img {
  width: 100%;
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

