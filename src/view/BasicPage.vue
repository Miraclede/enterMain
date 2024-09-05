<!-- 图片展示 -->
<template>
  <div class="container basicPage">
    <div v-for="(i, i_n) in pageData.content" :key="i_n">
      <img style="width: 100%" :src="i.picUrl" />
    </div>
    <div v-if="pageData.list">
      <div class="commonTitle text-center">优势亮点</div>
      <div class="row text-center hoverlist">
        <div
          class="col-xs-12 col-sm-6 col-md-6"
          v-for="(i, i_n) in pageData.list"
          :key="i_n"
        >
          <div
            :style="{
              backgroundImage: `url(${i.img})`,
              backgroundSize: 'cover',
              'background-repeat': 'no-repeat',
              height: '350px',
              margin: '10px',
            }"
          >
            <div class="card">
              <div class="card-title">{{ i.title }}</div>
              <div class="card-detail">{{ i.detail }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted, watch } from 'vue'
import bsjx_1 from '@/assets/img/bsjx_1.png'
import bsjx_2 from '@/assets/img/bsjx_2.png'
import bsjx_3 from '@/assets/img/bsjx_3.png'
import bsjx_4 from '@/assets/img/bsjx_4.png'
import csaq_1 from '@/assets/img/csaq_1.png'
import csaq_2 from '@/assets/img/csaq_2.png'
import csaq_3 from '@/assets/img/csaq_3.png'
import csaq_4 from '@/assets/img/csaq_4.png'
import xfwl_1 from '@/assets/img/xfwl_1.png'
import xfwl_2 from '@/assets/img/xfwl_2.png'
import xfaq from '@/assets/img/xfaq.png'
import zhxf from '@/assets/img/zhxf.png'
import aqfx_1 from '@/assets/img/aqfx_1.png'
import aqfx_2 from '@/assets/img/aqfx_2.png'
import aqsc_1 from '@/assets/img/aqsc_1.png'
import aqsc_2 from '@/assets/img/aqsc_2.png'
import scsb_1 from '@/assets/img/scsb_1.png'
import scsb_2 from '@/assets/img/scsb_2.png'
import hover_1 from '@/assets/img/hover_1.jpeg'
import hover_2 from '@/assets/img/hover_2.jpeg'
import hover_3 from '@/assets/img/hover_3.png'
import hover_4 from '@/assets/img/hover_4.png'
import hover_5 from '@/assets/img/hover_5.png'
import hover_6 from '@/assets/img/hover_6.jpg'
import hover_7 from '@/assets/img/hover_7.jpg'
import hover_8 from '@/assets/img/hover_8.jpg'
import hover_9 from '@/assets/img/hover_9.jpg'
import hover_10 from '@/assets/img/hover_10.jpg'
import hover_11 from '@/assets/img/hover_11.jpg'

const router = useRouter()
const pageType = ref('')
const pageData = ref([])

const pageInfo = ref([
  {
    type: 'bsjx',
    content: [
      { picUrl: bsjx_1 },
      { picUrl: bsjx_2 },
      { picUrl: bsjx_3 },
      { picUrl: bsjx_4 }
    ]
  },
  {
    type: 'csaq',
    content: [
      { picUrl: csaq_1 },
      { picUrl: csaq_2 },
      { picUrl: csaq_3 },
      { picUrl: csaq_4 }
    ]
  },
  {
    type: 'xfwl',
    content: [{ picUrl: xfwl_1 }, { picUrl: xfwl_2 }]
  },
  {
    type: 'xfaq',
    content: [{ picUrl: xfaq }]
  },
  {
    type: 'zhxf',
    content: [{ picUrl: zhxf }]
  },
  {
    type: 'aqfx',
    content: [{ picUrl: aqfx_1 }, { picUrl: aqfx_2 }],
    list: [
      {
        img: hover_1,
        title: '信息化与智能化结合',
        detail:
          '充分利用信息化手段，结合智能分析技术，实现对安全生产风险的全面、精准、动态管理。提升风险管理效率，确保风险识别的及时性和准确性，辅助企业迅速响应并有效控制风险。'
      },
      {
        img: hover_2,
        title: '风险分级管控与动态监控',
        detail:
          '通过分级管控机制，对识别出的风险进行分级，并实施动态监控。辅助企业针对不同等级风险采取差异化应对措施，有效避免资源浪费，同时确保高风险区域得到优先处理，降低事故发生的可能性。'
      },
      {
        img: hover_3,
        title: '高效的隐患排查治理',
        detail:
          '系统集成自动化扫描、人工上报及智能分析等多种隐患排查方式，能快速、准确地定位潜在隐患。通过隐患的分级管理和闭环治理流程，确保隐患得到及时整改，形成持续改进的良性循环。'
      },
      {
        img: hover_4,
        title: '提升安全管理效率与效果',
        detail:
          '通过自动化、智能化的管理手段，该系统显著降低企业在安全管理方面的人力成本和时间成本。同时，由于风险识别和隐患排查的及时性和准确性得到提升，企业的安全管理效果得到显著增强，有助于企业实现风险最小化、隐患零容忍的安全生产目标。'
      }
    ]
  },
  {
    type: 'aqsc',
    content: [{ picUrl: aqsc_1 }, { picUrl: aqsc_2 }],
    list: [
      {
        img: hover_5,
        title: '全面性与准确性',
        detail:
          '系统覆盖企业安全管理的各个方面，确保信息的全面性与准确性，为决策提供可靠依据。'
      },
      {
        img: hover_6,
        title: '合规性与时效性',
        detail:
          '实时更新并管理安全生产法律法规与规章制度，确保企业始终处于合规状态，及时响应政策变化。'
      },
      {
        img: hover_7,
        title: '定制化与灵活性',
        detail:
          '支持根据企业实际情况进行定制化开发，满足企业个性化需求，同时保持系统的灵活性与可扩展性。'
      },
      {
        img: hover_8,
        title: '高效协同',
        detail:
          '促进企业内部各部门之间的信息共享与协同工作，提升整体安全管理效率与响应速度。'
      }
    ]
  },
  {
    type: 'scsb',
    content: [{ picUrl: scsb_1 }, { picUrl: scsb_2 }],
    list: [
      {
        img: hover_9,
        title: '经济效益',
        detail:
          '系统通过预防事故、减少损失、提升生产效率和降低生产成本，直接为企业节省资金。确保生产线的稳定运行，减少因故障和事故导致的停工时间和资源浪费，同时提高产品质量和市场竞争力，为企业带来持续的经济增长动力。'
      },
      {
        img: hover_10,
        title: '社会效益',
        detail:
          '系统的实施显著提升员工的安全保障，促进企业的社会责任感和公众形象的塑造。通过减少安全事故的发生，保护员工的生命安全，降低对环境的负面影响，促进社会的和谐稳定。'
      },
      {
        img: hover_11,
        title: '管理效益',
        detail:
          '系统通过优化管理流程、提高管理效率和质量，为企业带来显著的管理变革。引入先进的管理理念和技术手段，实现生产过程的实时监控和数据分析，为管理层提供精准的决策支持。'
      }
    ]
  },
])

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
    // console.log(newValue, oldValue)
    pageType.value = newValue.pageType
    pageData.value = pageInfo.value.filter(
      (item) => item.type === pageType.value
    )[0]
  }
)
</script>
<style lang="scss">
.basicPage {
  box-sizing: border-box;

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
