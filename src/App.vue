<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import GoTop from '@/components/GoTop.vue'
</script>

<template>
  <Header
    style="position: -webkit-sticky; /* Safari 支持 */ position: sticky;  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* 确保 header 在其他元素之上 */"
  ></Header>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
  <Footer></Footer>
  <GoTop></GoTop>
</template>

<style scoped></style>

