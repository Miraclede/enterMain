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
        <div style="margin-top: 72px;font-size: 42px;color: rgba(0, 0, 0, 0.9);max-width: 294px;color:white">{{ pageData ? pageData.head.title : '-' }}</div>
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
import jxcs_1 from '@/assets/img/jxcs_1.png'
import jxcs_2 from '@/assets/img/jxcs_2.png'
import bg_img from '@/assets/img/contact_us_bg.jpg'

const router = useRouter()
const pageType = ref('')
const pageData = ref()

const goBack = ()=>{
  router.go(-1)
}

const pageInfo = ref([
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
