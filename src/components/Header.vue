<template>
  <!-- 头部整体盒子 -->
  <div id="header" class="container-fuild">
    <!-- 头部顶部 -->
    <div class="header-top container-fuild hidden-xs">
      <div class="container">
        <div
          class="server pull-left"
          style="display: flex; align-items: center"
        >
          <span class="glyphicon glyphicon-earphone"></span>{{ phone }}
          <span
            style="margin-left: 24px"
            class="glyphicon glyphicon-envelope"
          ></span
          >{{ email }}
        </div>
      </div>
    </div>
    <!-- 电脑导航 -->
    <div class="header-nav container hidden-xs">
      <!-- 导航logo -->
      <div class="header-nav-logo">
        <img src="@/assets/img/logo_color.png" />
      </div>
      <!-- 导航内容 -->
      <ul class="header-nav-wrapper">
        <li
          v-for="(item, index) in navList"
          :key="index"
          :class="index == navIndex ? 'active' : ''"
          @click="navClick(index, item.name)"
        >
          <router-link :to="item.path">
            {{ item.name }}
            <span
              v-if="item.children.length > 0"
              class="glyphicon glyphicon-menu-down"
            ></span>
          </router-link>
          <dl v-if="item.children.length > 0">
            <template v-for="(i, n) in item.children" :key="n">
              <dt>
                <div v-if="i.children" :class="i.children ? 'middleMenu' : ''">
                  {{ i.name }}
                </div>
                <router-link v-else :to="i.path">{{ i.name }}</router-link>
              </dt>
              <dd v-for="(i_i, i_n) in i.children" :key="i_n">
                <router-link
                  :to="{ path: i_i.path, query: { pageType: i_i.type } }"
                  >{{ i_i.name }}</router-link
                >
              </dd>
            </template>
          </dl>
        </li>
      </ul>
    </div>
    <!-- 手机导航 -->
    <div class="header-nav-m container-fuild visible-xs">
      <div class="header-nav-m-logo">
        <img
          class="center-block"
          src="@/assets/img/logo_color.png"
          alt="logo"
        />
      </div>
      <!-- 导航栏 -->
      <div class="header-nav-m-menu text-center">
        {{ menuName }}
        <div
          class="header-nav-m-menu-wrapper"
          data-toggle="collapse"
          data-target="#menu"
          @click="menuClick"
        >
          <span :class="menuClass"></span>
        </div>
        <!-- 导航内容 -->
        <ul
          id="menu"
          class="header-nav-m-wrapper collapse"
          style="height: 400px; overflow-y: auto"
        >
          <template
            v-for="(item, index) in navList"
            :key="index"
            @click="phoneClick(index, item.name)"
          >
            <!-- 2级菜单 -->
            <ul v-if="item.children.length > 0">
              <template v-for="(item_1, index_1) in item.children">
                <!-- 3级菜单 -->
                <ul v-if="item_1.children.length > 0">
                  <template
                    v-for="(item_2, index_2) in item_1.children"
                    :key="index_2"
                  >
                    <li
                      style="
                        color: white;
                        font-size: 12px;
                        border-bottom: 1px dashed #eee;
                      "
                      data-toggle="collapse"
                      data-target="#menu"
                      @click="menuClick"
                    >
                      <router-link
                        style="color: white; font-size: 12px"
                        :to="{
                          path: item_2.path,
                          query: { pageType: item_2.type }
                        }"
                      >
                        {{ item_2.name }}
                        <i class="underline"></i>
                      </router-link>
                    </li>
                  </template>
                </ul>
                <li v-else>
                  <router-link :to="item_1.path">
                    {{ item_1.name }}
                    <i class="underline"></i>
                  </router-link>
                </li>
              </template>
            </ul>
            <!-- 1级菜单 -->
            <li
              data-toggle="collapse"
              data-target="#menu"
              @click="menuClick, navClick(index, item.name)"
              v-else
            >
              <router-link :to="item.path">
                {{ item.name }}
                <i class="underline"></i>
              </router-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
const phone = import.meta.env.VITE_APP_PHONE
const email = import.meta.env.VITE_APP_EMAIL
const navIndex = ref('')
navIndex.value = sessionStorage.getItem('navIndex')
  ? sessionStorage.getItem('navIndex')
  : 0
const menuName = ref('首页')
const menuClass = ref('glyphicon glyphicon-menu-down')
const router = useRouter()
const navList = [
  {
    name: '首页',
    path: '/home',
    children: []
  },
  {
    name: '产品及服务',
    path: '',
    children: [
      {
        name: '平台产品及服务',
        path: '',
        children: [
          {
            name: '国家工业互联网标识解析安全应急行业公共服务平台',
            path: '/basicPage',
            type: 'bsjx'
          },
          {
            name: '城市安全运营平台',
            path: '/basicPage',
            type: 'csaq'
          }
        ]
      },
      {
        name: '标准工具软件系统',
        path: '',
        children: [
          {
            name: '消防物联监测预警系统',
            path: '/basicPage',
            type: 'xfwl'
          },
          {
            name: '消防安全智能巡检系统',
            path: '/basicPage',
            type: 'xfaq'
          },
          {
            name: '智慧消防隐患排查治理系统',
            path: '/basicPage',
            type: 'zhxf'
          },
          {
            name: '安全风险与隐患排查治理管理系统',
            path: '/basicPage',
            type: 'aqfx'
          },
          {
            name: '安全生产信息管理系统',
            path: '/basicPage',
            type: 'aqsc'
          },
          {
            name: '生产设备管理系统',
            path: '/basicPage',
            type: 'scsb'
          }
        ]
      },
      {
        name: '硬件产品及服务',
        path: '',
        children: [
          {
            name: '智慧消防一体机',
            path: '/serviceDetail',
            type: 'ytj'
          }
        ]
      }
    ]
  },
  {
    name: '行业解决方案',
    path: '/service',
    children: []
  },
  {
    name: '案例聚焦',
    path: '/demoView',
    children: []
  },
  {
    name: '公司动态',
    path: '/newsinformation',
    children: []
  },
  {
    name: '公司介绍',
    path: '/companyintroduction',
    children: []
  },
  {
    name: '联系我们',
    path: '/contactus',
    children: []
  }
]
const lastQuery = ref()
watch(
  () => router.currentRoute.value,
  (newValue, oldValue) => {
    if (newValue.query.pageType) {
      console.log('保存啦')
      lastQuery.value = newValue.query.pageType
    } else {
      if (oldValue.path && newValue.path == oldValue.path) {
      } else {
        console.log('清空啦')

        lastQuery.value = ''
      }
    }

    console.log(
      'header:',
      newValue,
      oldValue,
      'query',
      lastQuery.value || 'null'
    )
    if (newValue.path == '/basicPage') {
      navIndex.value = 1
      menuName.value = '产品及服务'
    } else if (newValue.path == '/serviceDetail') {
      if (newValue.query.pageType == 'ytj') {
        navIndex.value = 1
        menuName.value = '产品及服务'
      } else {
        navIndex.value = 2
        menuName.value = '行业解决方案'
      }
    } else if (newValue.path == '/demoViewDetail') {
      navIndex.value = 3
      menuName.value = '案例聚焦'
    } else {
      let index = navList.findIndex((item) => item.path == newValue.path)

      navIndex.value = index
      menuName.value = navList[index].name
    }
  }
)
function navClick(index, name) {
  if (navList[index].path) {
    navIndex.value = index
    sessionStorage.setItem('navIndex', index)
    menuName.value = name
  } else {
    console.log(99999, lastQuery.value)

    if (lastQuery.value) {
      router.push({
        path: router.currentRoute.value.path,
        query: { pageType: lastQuery.value }
      })
    }
  }
}
function phoneClick(index, name) {
  console.log('phoneClick', index, name)

  menuName.value = name
}
function menuClick() {
  if (menuClass.value == 'glyphicon glyphicon-menu-down') {
    menuClass.value = 'glyphicon glyphicon-menu-up'
  } else {
    menuClass.value = 'glyphicon glyphicon-menu-down'
  }
}
</script>

<style lang="scss" scoped>
.middleMenu {
  color: #525252;
  font-weight: bold;
}

/* 顶部 */
#header {
  background: #f4f4f4;
  transition: all ease 0.6s;
}

#header .header-top {
  height: 50px;
  color: #fff;
  font-size: 16px;
  line-height: 50px;
  background-color: var(--color-primary);
}

/* 顶部的图标 */
#header .header-top span {
  margin: 0 8px;
}

/* 导航栏 */
#header .header-nav {
  height: 110px;
}

/* 导航栏logo */
#header .header-nav .header-nav-logo {
  width: 100px;
  height: 100%;
  float: left;
  position: relative;
}

/* 导航栏logo图片 */
#header .header-nav .header-nav-logo img {
  width: 182px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

/* 导航栏 导航容器 */
#header .header-nav-fixed .header-nav-wrapper {
  line-height: 50px;
}

#header .header-nav .header-nav-wrapper {
  line-height: 110px;
  float: right;
  margin: 0;
  max-width: 1000px;
}

/* 导航栏 每个导航 */
#header .header-nav .header-nav-wrapper > li {
  float: left;
  margin: 0 15px;
  position: relative;
}

/* 导航栏 每个导航下面的 a 链接 */
#header .header-nav .header-nav-wrapper > li > a {
  color: #000;
  font-size: 15px;
  font-weight: bold;
  padding: 15px 0;
  position: relative;
}

/* 导航栏 每个导航下面的 a 链接的下划线 */
#header .header-nav .header-nav-wrapper > li > a > i {
  display: block;
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  opacity: 0;
  transition: all 0.6s ease;
  background-color: #1e73be;
}

/* 导航栏 每个导航下面的 a 链接的右侧小三角 */
#header .header-nav .header-nav-wrapper > li > a > span {
  font-size: 12px;
  transition: transform ease 0.5s;
}

/* 导航栏 每个导航下面的 a 链接 鼠标滑上去的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover {
  color: #1e73be;
  text-decoration: none;
}

/* 导航栏 每个导航下面的 a 链接 鼠标滑上去下划线的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover .underline {
  opacity: 1;
  width: 100%;
  left: 0;
}

/* 导航栏 每个导航下面的 a 链接 鼠标滑上去三角标的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover span {
  transform: rotate(180deg);
}

/* 导航栏 每个导航下面的 a 链接 鼠标点击后的样式 */
#header .header-nav .header-nav-wrapper > li.active > a {
  color: #1e73be;
  text-decoration: none;
  border-bottom: 2px solid #1e73be;
}

/* 导航栏 每个导航下面的二级导航容器 */
#header .header-nav .header-nav-wrapper > li > dl {
  display: none;
  position: absolute;
  width: 230px;
  top: 80%;
  left: 0;
  z-index: 999999;
  box-shadow: 0 0 3px 1px #ccc;
  background: #fff;
}

/* 导航栏 每个导航下面的二级导航容器的每个导航 */
#header .header-nav .header-nav-wrapper > li > dl > dt {
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

#header .header-nav .header-nav-wrapper > li > dl > dd {
  width: 100%;
  padding: 10px 10px 10px 25px;
  border-bottom: 1px solid #ccc;
}

/* 导航栏 每个导航下面的二级导航容器的每个导航 当鼠标滑上时的样式*/
#header .header-nav .header-nav-wrapper > li > dl > dt > a:hover {
  text-decoration: none;
}

#header .header-nav .header-nav-wrapper > li > dl > dd > a:hover {
  text-decoration: none;
}

/* 导航栏 滑上一级导航显示二级导航 */
#header .header-nav .header-nav-wrapper > li:hover dl {
  display: block;
}

#header .header-nav .header-nav-wrapper > li > dl > dt:hover {
  cursor: pointer;
  background: #ccc;
}

#header .header-nav .header-nav-wrapper > li > dl > dd:hover {
  cursor: pointer;
  background: #ccc;
}

@media screen and (max-width: 992px) and (min-width: 765px) {
  /* 导航栏logo */
  #header .header-nav .header-nav-logo {
    display: none;
  }

  .Service-item-top {
    font-size: 20px;
  }
}

//小屏幕适配
@media screen and (max-width: 765px) {
  #header .header-nav-m {
    position: relative;
  }

  /* 导航栏logo容器 */
  #header .header-nav-m .header-nav-m-logo {
    height: 80px;
    position: relative;
  }

  /* 导航栏logo图片 */
  #header .header-nav-m .header-nav-m-logo img {
    width: 95px;
    height: 45px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }

  /* 导航栏  菜单容器 */
  #header .header-nav-m .header-nav-m-menu {
    color: #fff;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    background: #474747;
    position: relative;
  }

  /* 导航栏 菜单图标 */
  #header .header-nav-m .header-nav-m-menu-wrapper {
    position: absolute;
    top: 50%;
    right: 20px;
    margin-top: -20px;
    width: 50px;
    height: 40px;
    color: #fff;
    z-index: 999999;
    font-size: 12px;
  }

  /* 导航栏 */
  #header .header-nav-m .header-nav-m-wrapper {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    background: #474747;
    z-index: 9999999;
  }

  /* 导航栏 每个导航 */
  #header .header-nav-m .header-nav-m-wrapper > li {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
  }

  /* 导航栏 每个导航下面的 a 链接 */
  #header .header-nav-m .header-nav-m-wrapper > li > a {
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    padding: 15px 0;
    position: relative;
  }

  /* 导航栏 每个导航下面的 a 链接的右侧小三角 */
  #header .header-nav .header-nav-wrapper > li > a > span {
    font-size: 10px;
  }
}
</style>

