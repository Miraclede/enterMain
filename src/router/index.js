import { createRouter as _createRouter, createWebHashHistory } from 'vue-router'

// const pages = import.meta.glob('../src/pages/**/*.vue')
// const routes = Object.keys(pages).map((path)=>{
//   let name = path.match(/\/pages(.*)\.vue$/)[1].toLowerCase();
//   if(name.substring(name.length - 5) == 'index'){
//     name = name.slice(0, -5);//去掉最后的index
//   }
//   return {
//     path: name === '/home' ? '/': name,
//     component: pages[path]
//   }
// })

const routes = [
  {
    path: '/',
    name: 'PageView',
    redirect: '/home',
    component: () => import('@/view/PageView.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/view/HomePage.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/basicPage',
        name: 'basicPage',
        component: () => import('@/view/BasicPage.vue'),
        meta: {
          title: '基础功能页'
        }
      },
      {
        path: '/demoView',
        name: 'demoView',
        component: () => import('@/view/DemoView.vue'),
        meta: {
          title: '案例聚焦'
        }
      },
      {
        path: '/demoViewDetail',
        name: 'demoViewDetail',
        component: () => import('@/view/DemoViewDetail.vue'),
        meta: {
          title: '案例聚焦-详情'
        }
      },
      {
        path: '/software',
        name: 'software',
        component: () => import('@/view/software.vue'),
        props: true,
        meta: {
          title: '软件产品'
        },
        children: [
          {
            path: '/software/smartTown',
            name: 'smartTown',
            component: () => import('@/view/Software_smartTown.vue'),
            props: true,
            meta: {
              title: '智能小镇管理系统'
            }
          },
          {
            path: '/software/bigData',
            name: 'bigData',
            component: () => import('@/view/Software_bigData.vue'),
            props: true,
            meta: {
              title: '大数据管理系统'
            }
          },
        ]
      },
      {
        path: '/service',
        name: 'service',
        component: () => import('@/view/Service.vue'),
        props: true,
        meta: {
          title: '行业解决方案'
        }
      },
      {
        path: '/serviceDetail',
        name: 'serviceDetail',
        component: () => import('@/view/ServiceDetail.vue'),
        props: true,
        meta: {
          title: '行业解决方案-详情'
        }
      },
      {
        path: '/newsinformation',
        name: 'newsInformation',
        component: () => import('@/view/NewsInformation.vue'),
        meta: {
          title: '公司动态'
        }
      },
      {
        path: '/companyintroduction',
        name: 'companyIntroduction',
        component: () => import('@/view/CompanyIntroduction.vue'),
        meta: {
          title: '公司介绍'
        }
      },
      {
        path: '/contactus',
        name: 'contactUs',
        component: () => import('@/view/ContactUs.vue'),
        meta: {
          title: '联系我们'
        }
      }
    ]
  }
]

export function createRouter() {
  return _createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior: () => ({ left: 0, top: 0 }),
  })
}

