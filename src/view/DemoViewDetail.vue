<template>
  <div class="demoViewDetail">
    <div
      :style="{
        backgroundImage: `url(${pageData ? pageData.head.img : bg_img})`,
        backgroundSize: 'cover',
        'background-repeat': 'no-repeat',
        height: '350px'
      }"
    >
      <div class="container" style="padding-top: 38px;">
        <button class="btn" @click="goBack" style="background-color: #0052D9;color: white;">返回</button>
        <div style="margin-top: 72px;font-size: 42px;color: rgba(0, 0, 0, 0.9);max-width: 294px;color:black">{{ pageData ? pageData.head.title : '-' }}</div>
      </div>
    </div>

    <!-- 图片 -->
    <div v-if="pageData" class="container">

      <div v-for="(i, i_n) in pageData.content" :key="i_n">
        <img :id="i.id" style="width: 100%" :src="i.picUrl" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted, watch } from 'vue'
import zfjg_1 from '@/assets/img/zfjg_1.png'
import zfjg_2 from '@/assets/img/zfjg_2.png'
import syzht_1 from '@/assets/img/syzht_1.png'
import syzht_2 from '@/assets/img/syzht_2.png'
import jxcs_1 from '@/assets/img/jxcs_1.png'
import jxcs_2 from '@/assets/img/jxcs_2.png'
import tljt_1 from '@/assets/img/tljt_1.png'
import tljt_2 from '@/assets/img/tljt_2.png'
import sqwg_1 from '@/assets/img/sqwg_1.png'
import sqwg_2 from '@/assets/img/sqwg_2.png'
import cyyq_1 from '@/assets/img/cyyq_1.png'
import cyyq_2 from '@/assets/img/cyyq_2.png'
import hghy_1 from '@/assets/img/hghy_1.png'
import hghy_2 from '@/assets/img/hghy_2.png'
import zhjj_1 from '@/assets/img/zhjj_1.png'
import zhjj_2 from '@/assets/img/zhjj_2.png'
import wwhy_1 from '@/assets/img/wwhy_1.png'
import wwhy_2 from '@/assets/img/wwhy_2.png'
import ldccn_1 from '@/assets/img/ldccn_1.png'
import ldccn_2 from '@/assets/img/ldccn_2.png'
import sysh_1 from '@/assets/img/sysh_1.png'
import sysh_2 from '@/assets/img/sysh_2.png'
import dldw_1 from '@/assets/img/dldw_1.png'
import dldw_2 from '@/assets/img/dldw_2.png'

import bg_img from '@/assets/img/header_2.png'

const router = useRouter()
const pageType = ref('')
const pageData = ref()

const goBack = ()=>{
  router.go(-1)
}

const pageInfo = ref([
  {
    type: 'zfjg',
    head: {
      img: bg_img,
      title: '案例聚焦',
      desc: 'zfjg'
    },
    content: [
      { picUrl: zfjg_1 },
      { picUrl: zfjg_2 }
    ]
  },
  {
    type: 'syzht',
    head: {
      img: bg_img,
      title: '案例聚焦',
      desc: 'syzht'
    },
    content: [
      { picUrl: syzht_1 },
      { picUrl: syzht_2 }
    ]
  },
  {
    type: 'jxcs',
    head: {
      img: bg_img,
      title: '案例聚焦',
      desc: 'jxcs'
    },
    content: [
      { picUrl: jxcs_1 },
      { picUrl: jxcs_2 }
    ]
  },
  {
    type: 'tljt',
    head: {
      img: bg_img,
      title: '案例聚焦',
      desc: 'tljt'
    },
    content: [
      { picUrl: tljt_1 },
      { picUrl: tljt_2 }
    ]
  },
  {
    type: 'sqwg',
    head: {
      img: bg_img,
      title: '案例聚焦',
      desc: 'sqwg'
    },
    content: [
      { picUrl: sqwg_1 },
      { picUrl: sqwg_2 }
    ]
  },
  {
    type: 'cyyq',
    head: {
      img: bg_img,
      title: '案例聚焦',
      desc: 'cyyq'
    },
    content: [
      { picUrl: cyyq_1 },
      { picUrl: cyyq_2 }
    ]
  },
  {
    type: 'hghy',
    head: {
      img: bg_img,
      title: '案例聚焦',
      desc: 'hghy'
    },
    content: [
      { picUrl: hghy_1 },
      { picUrl: hghy_2 }
    ]
  },
  {
    type: 'zhjj',
    head: {
      img: bg_img,
      title: '案例聚焦',
      desc: 'zhjj'
    },
    content: [
      { picUrl: zhjj_1 },
      { picUrl: zhjj_2 }
    ]
  },
  {
    type: 'dldw',
    head: {
      img: bg_img,
      title: '案例聚焦',
      desc: 'dldw'
    },
    content: [
      { picUrl: dldw_1 },
      { picUrl: dldw_2 }
    ]
  },
  {
    type: 'ldccn',
    head: {
      img: bg_img,
      title: '案例聚焦',
      desc: 'ldccn'
    },
    content: [
      { picUrl: ldccn_1 },
      { picUrl: ldccn_2 }
    ]
  },
  {
    type: 'sysh',
    head: {
      img: bg_img,
      title: '案例聚焦',
      desc: 'sysh'
    },
    content: [
      { picUrl: sysh_1 },
      { picUrl: sysh_2 }
    ]
  },
  {
    type: 'dldw',
    head: {
      img: bg_img,
      title: '案例聚焦',
      desc: 'dldw'
    },
    content: [
      { picUrl: dldw_1 },
      { picUrl: dldw_2 }
    ]
  },
])
//debugger
onMounted(() => {
  pageType.value = window.location.href.split('?')[1].split('=')[1]
  pageData.value = pageInfo.value.filter(
    (item) => item.type === pageType.value
  )[0]
})

// 监听router.currentRoute.value.path 变化
watch(
  () => router.currentRoute.value.query,
  (newValue, oldValue) => {
    //debugger
    pageType.value = newValue.pageType
    pageData.value = pageInfo.value.filter(
      (item) => item.type === pageType.value
    )[0]
  }
)
//debugger
</script>
<style lang="scss">
.demoViewDetail {
  box-sizing: border-box;

  #myNav {
    li {
      a {
        font-size: 15px;
        color: rgba(0, 0, 0, 0.6);
      }
      &:hover {
        a {
          color: #1e73be;
          background-color: #1e73be11;
        }
      }
    }
    li.active {
      background-color: transparent;
      border-bottom: 3px solid #1e73be;
      a {
        color: #1e73be;
        background-color: transparent;
      }
    }
  }

  .hoverlist {
    .card {
      transition: all 0.5s;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      background-color: rgba(0, 0, 0, 0.3);
      padding: 10%;
      display: flex;
      flex-direction: column;
      color: white;
      justify-content: center;
      &-title {
        font-size: 30px;
        font-weight: bold;
      }
      &-detail {
        font-size: 20px;
        margin-top: 10px;
        display: none;
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0.8);
        .card-detail {
          display: block;
        }
      }
    }
  }
}
</style>
