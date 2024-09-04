<template>
  <div id="CompanyIntroduction">
    <div class="banner container-fuild text-center">公司介绍</div>
    <div class="container">
      <div v-for="(i, i_n) in pageData" :key="i_n">
        <img :id="i.id" style="width: 100%" :src="i.picUrl" />
      </div>
    </div>
  </div>
</template>

<script setup name="CompanyIntroduction">
import WOW from 'wow.js'
import { onMounted } from 'vue'
import gsjs_1 from "@/assets/img/gsjs_1.png"
import gsjs_2 from "@/assets/img/gsjs_2.png"
import gsjs_3 from "@/assets/img/gsjs_3.png"
onMounted(() => {
  var wow = new WOW()
  wow.init()
})
const pageData = [
  {
    id: '1',
    picUrl: gsjs_1,
  },
  {
    id: '2',
    picUrl: gsjs_2,
  },
  {
    id: '3',
    picUrl: gsjs_3,
  },
]
</script>

<style scoped>
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

