<template>
  <div id="NewsInformation">
    <div class="container">
      <div class="container text-center">
        <h1>公司动态</h1>
        <p style="color: #b2b2b2">Company News</p>
      </div>
      <!-- <div class="nav container text-center">
        <a href="javascript:;" class="active">公司新闻</a>
        <a href="javascript:;">行业动态</a>
      </div> -->
      <ul class="news-container container-fuild">
        <li v-for="(item, index) in newsList" :key="index" class="wow fadeIn">
          <div class="content">
            <p>{{ item.title }}</p>
            <!-- <p>{{ item.introduce }}</p> -->
          </div>
          <div class="time">
            <p>{{ item.date }}</p>
            <!-- <span>{{ item.year }}</span> -->
          </div>
          <div class="circle">
            <img src="@/assets/img/circle.png" />
            <i class="line center-block"></i>
          </div>
        </li>
      </ul>
      <div class="contaianer-fuild text-center more">
        <i class="glyphicon glyphicon-th"></i>
      </div>
    </div>
  </div>
</template>

<script setup name="NewsInformation">
import WOW from 'wow.js'
import { onMounted } from 'vue'
const newsList = [
  {
    id: '001',
    title: '中安互联入选《2023成都市制造业数字化转型案例集》优秀解决方案',
    introduce:
      '',
    date: '2024-01',
    year: ''
  },
  {
    id: '002',
    title: '中安工业互联荣获 “工业互联网+危化安全生产”建设全国十佳“优秀产品”',
    introduce:
      '',
    date: '2023-12',
    year: ''
  },
  {
    id: '003',
    title: '中安互联获评“成都市工业互联网特色平台”奖项',
    introduce:
      '',
    date: '2023-11',
    year: ''
  },
  {
    id: '004',
    title: '中安互联荣获四川省认定机构2023年认定报备的第一批高新技术企业！',
    introduce:
      '',
    date: '2023-11',
    year: ''
  },
  {
    id: '005',
    title: '中安互联获2023年成都市国家区块链创新应用试点项目授牌',
    introduce:
      '',
    date: '2023-09',
    year: ''
  },
  {
    id: '006',
    title: '中安互联荣获CMMI3级认证证书',
    introduce:
      '',
    date: '2023-09',
    year: ''
  },
  {
    id: '007',
    title: '中安互联申报的“国家工业互联网标识解析安全应急行业公共服务平台”进入成都市特色工业互联网平台培育库',
    introduce:
      '',
    date: '2023-08',
    year: ''
  },
  {
    id: '008',
    title: '中安互联获得工业互联网标识解析行业二级节点授牌及注册服务机构许可',
    introduce:
      '',
    date: '2023-03',
    year: ''
  },
  {
    id: '009',
    title: '中安互联荣获CEIS2022“消防技术创新十大品牌”',
    introduce:
      '',
    date: '2023-03',
    year: ''
  },
  {
    id: '0010',
    title: '中安工业互联成功入选《2022产业链供应链数字经济创新应用示范案例集》',
    introduce:
      '',
    date: '2022-11',
    year: ''
  },
  {
    id: '011',
    title: '中安互联荣获2021中国水泥行业百强供应商“智造先锋”奖',
    introduce:
      '',
    date: '2022-07',
    year: ''
  },
  {
    id: '012',
    title: '中安互联成功入选工业大数据分析与集成应用工业和信息化部重点实验室工作组成员单位',
    introduce:
      '',
    date: '2022-06',
    year: ''
  },
]
onMounted(() => {
  var wow = new WOW()
  wow.init()
})
</script>

<style scoped>
.nav {
  margin: 20px 0;
}
.nav > a {
  display: inline-block;
  text-decoration: none;
  width: 120px;
  height: 45px;
  line-height: 45px;
  color: #333;
  border: 1px solid #333;
}
.nav > a.active {
  color: #1e73be;
  border-color: #1e73be;
}
.nav > a:hover {
  color: #1e73be;
  border-color: #1e73be;
}
.news-container {
  overflow: hidden;
  margin-bottom: 0;
}
.news-container > li {
  width: 55.6%;
  height: 120px;
  float: left;
  color: #333;
  text-align: right;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
}
.news-container > li:hover {
  color: #1e73be;
  border: 1px solid #1e73be;
  cursor: pointer;
}
.news-container > li:nth-of-type(2n) {
  float: right;
  text-align: left;
}
.news-container > li > .content {
  width: 60%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  float: left;
  padding: 10px 10px 0 10px;
}
.news-container > li > .time {
  width: 20%;
  float: left;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 10px 0 0 10px;
}
.news-container > li > .time > p {
  font-size: 30px;
  margin: 5px 0;
}
.news-container > li > .circle {
  width: 20%;
  height: 100%;
  float: left;
  position: relative;
}
.news-container > li > .circle > img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 20px;
  height: 20px;
}
.news-container > li > .circle > i {
  display: block;
  width: 1px;
  height: 100%;
  background: #707070;
}
.news-container > li:nth-of-type(2n) > .content {
  float: right;
}
.news-container > li:nth-of-type(2n) > .time {
  float: right;
}
.news-container > li:nth-of-type(2n) > .circle {
  float: right;
}
.news-container > li:nth-of-type(1) > .circle > i {
  height: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
}
.more {
  font-size: 25px;
  color: #707070;
}
.more > i {
  cursor: pointer;
}
@media screen and (max-width: 767px) {
  .news-container > li {
    width: 100%;
  }
  .news-container > li > .content {
    width: 70%;
    text-align: left;
    float: right;
  }
  .news-container > li > .time {
    width: 30%;
    text-align: left;
    float: right;
  }
  .news-container > li > .circle {
    display: none;
  }
}
</style>

