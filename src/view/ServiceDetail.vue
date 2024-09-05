<!-- 锚点跳转 -->
<template>
  <div class="serviceDetail">
    <div class="container" v-if="isYtj">
      <img style="width: 100%" :src="pageData.head.img" />
    </div>
    <div
      :style="{
        backgroundImage: `url(${pageData ? pageData.head.img : bg_img})`,
        backgroundSize: 'cover',
        'background-repeat': 'no-repeat',
        height: '350px'
      }"
      v-else
    >
      <div class="container" style="padding-top: 38px">
        <button
          class="btn"
          @click="goBack"
          style="background-color: #0052d9; color: white;width: 80px;"
        >
          返回
        </button>

        <div v-html="pageData ? pageData.head.title : '-'"></div>
      </div>
    </div>

    <!-- 导航栏 -->
    <div style="padding: 14px 30%">
      <ul class="nav nav-justified" id="myNav">
        <template v-if="pageData">
          <li
            :class="item.id == id ? 'active' : ''"
            v-for="(item, index) in pageData.serviceNavList"
            :key="index"
          >
            <a href="javascript:;" @click.stop="toSection(item.id)">{{
              item.title
            }}</a>
          </li>
        </template>
      </ul>
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
import ytj_0 from '@/assets/img/ytj_0.png'
import ytj_1 from '@/assets/img/ytj_1.png'
import ytj_2 from '@/assets/img/ytj_2.png'
import ytj_3 from '@/assets/img/ytj_3.png'
import ytj_4 from '@/assets/img/ytj_4.png'
import ytj_5 from '@/assets/img/ytj_5.png'
import dxzh_1 from '@/assets/img/dxzh_1.png'
import dxzh_2 from '@/assets/img/dxzh_2.png'
import dxzh_3 from '@/assets/img/dxzh_3.png'
import yyzh_1 from '@/assets/img/yyzh_1.png'
import yyzh_2 from '@/assets/img/yyzh_2.png'
import yyzh_3 from '@/assets/img/yyzh_3.png'
import dlhy_1 from '@/assets/img/dlhy_1.png'
import dlhy_2 from '@/assets/img/dlhy_2.png'
import dlhy_3 from '@/assets/img/dlhy_3.png'
import hgyq_1 from '@/assets/img/hgyq_1.png'
import hgyq_2 from '@/assets/img/hgyq_2.png'
import hgyq_3 from '@/assets/img/hgyq_3.png'
import cclj_1 from '@/assets/img/cclj_1.png'
import cclj_2 from '@/assets/img/cclj_2.png'
import cclj_3 from '@/assets/img/cclj_3.png'
import bg_img from '@/assets/img/header_2.png'

const router = useRouter()
const pageType = ref('')
const pageData = ref()
const isYtj = ref(false)

const id = ref('section-1')

const goBack = () => {
  router.go(-1)
}
function toSection(_id) {
  id.value = _id
  let top = document.getElementById(id.value).offsetTop
  $(window).scrollTop(top - 222)
}

//todo 监听滑动到页面顶部 重置id
const pageInfo = ref([
  {
    type: 'ytj',
    head: {
      img: ytj_0,
      title: 'ytj',
      desc: 'ytj'
    },
    serviceNavList: [
      {
        id: 'section-1',
        title: '产品概述'
      },
      {
        id: 'section-2',
        title: '产品特点'
      },
      {
        id: 'section-3',
        title: '功能介绍'
      },
      {
        id: 'section-4',
        title: '应用框图'
      },
      {
        id: 'section-5',
        title: '管理平台'
      }
    ],
    content: [
      { picUrl: ytj_1, id: 'section-1' },
      { picUrl: ytj_2, id: 'section-2' },
      { picUrl: ytj_3, id: 'section-3' },
      { picUrl: ytj_4, id: 'section-4' },
      { picUrl: ytj_5, id: 'section-5' }
    ]
  },
  {
    type: 'dxzh',
    head: {
      img: bg_img,
      title: '<div class="serveTitle">大型综合体智慧消防<p>解决方案</p></div>'
    },
    serviceNavList: [
      {
        id: 'section-1',
        title: '背景介绍'
      },
      {
        id: 'section-2',
        title: '方案概述'
      },
      {
        id: 'section-3',
        title: '核心功能'
      }
    ],
    content: [
      { picUrl: dxzh_1, id: 'section-1' },
      { picUrl: dxzh_2, id: 'section-2' },
      { picUrl: dxzh_3, id: 'section-3' }
    ]
  },
  {
    type: 'yyzh',
    head: {
      img: bg_img,
      title: '<div class="serveTitle">医院智慧消防<p>解决方案</p></div>'
    },
    serviceNavList: [
      {
        id: 'section-1',
        title: '背景介绍'
      },
      {
        id: 'section-2',
        title: '方案概述'
      },
      {
        id: 'section-3',
        title: '核心功能'
      }
    ],
    content: [
      { picUrl: yyzh_1, id: 'section-1' },
      { picUrl: yyzh_2, id: 'section-2' },
      { picUrl: yyzh_3, id: 'section-3' }
    ]
  },
  {
    type: 'dlhy',
    head: {
      img: bg_img,
      title: '<div class="serveTitle">电力行业智慧消防<p>解决方案</p></div>'
    },
    serviceNavList: [
      {
        id: 'section-1',
        title: '背景介绍'
      },
      {
        id: 'section-2',
        title: '方案概述'
      },
      {
        id: 'section-3',
        title: '核心功能'
      }
    ],
    content: [
      { picUrl: dlhy_1, id: 'section-1' },
      { picUrl: dlhy_2, id: 'section-2' },
      { picUrl: dlhy_3, id: 'section-3' }
    ]
  },
  {
    type: 'hgyq',
    head: {
      img: bg_img,
      title: '<div class="serveTitle">化工园区安全生产<p>智慧服务方案</p></div>'
    },
    serviceNavList: [
      {
        id: 'section-1',
        title: '背景介绍'
      },
      {
        id: 'section-2',
        title: '方案概述'
      },
      {
        id: 'section-3',
        title: '方案特色'
      }
    ],
    content: [
      { picUrl: hgyq_1, id: 'section-1' },
      { picUrl: hgyq_2, id: 'section-2' },
      { picUrl: hgyq_3, id: 'section-3' }
    ]
  },
  {
    type: 'cclj',
    head: {
      img: bg_img,
      title: '<div class="serveTitle">餐厨垃圾<p>智能化解决方案</p></div>'
    },
    serviceNavList: [
      {
        id: 'section-1',
        title: '背景介绍'
      },
      {
        id: 'section-2',
        title: '主要问题'
      },
      {
        id: 'section-3',
        title: '方案概述'
      }
    ],
    content: [
      { picUrl: cclj_1, id: 'section-1' },
      { picUrl: cclj_2, id: 'section-2' },
      { picUrl: cclj_3, id: 'section-3' }
    ]
  }
])
//debugger
onMounted(() => {
  pageType.value = window.location.href.split('?')[1].split('=')[1]
  pageData.value = pageInfo.value.filter(
    (item) => item.type === pageType.value
  )[0]
  //debugger
  isYtj.value = pageType.value === 'ytj'
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
    isYtj.value = pageType.value === 'ytj'
  }
)
//debugger
</script>
<style lang="scss">
.serviceDetail {
  box-sizing: border-box;

  .serveTitle {
    margin-top: 72px;
    font-size: 42px;
    color: rgba(0, 0, 0, 0.9);
    max-width: 400px;
    color: black;
  }

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

    /* 媒体查询（手机） */
    @media screen and (max-width: 768px) {
    #myNav {
      li {
        margin: 5px 0;
        border: 1px solid #ccc;
        a {
          font-size: 15px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
      li.active {
        background-color: transparent;
        border-bottom: none;
        border: 1px solid #1e73be;
        border-radius: 6px;
        // border-bottom: 3px solid #1e73be;
        a {
          color: #1e73be;
          background-color: transparent;
        }
      }
    }
  }
}
</style>
