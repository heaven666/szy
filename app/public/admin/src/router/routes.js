import getStaticRoutes from './staticRoutes'

// 主页
// const Main = () => import('@/views/layout/Main.vue')
// // 首页
// const HomePage = () => import('@/views/homePage/Index.vue')
// // 收藏
// const CollectionPage = () => import('@/views/collectionPage/Index.vue')
// // 云笔记
// const EditorPage = () => import('@/views/editorPage/Index.vue')
// // 日程安排
// const SchedulePage = () => import('@/views/schedulePage/Index.vue')
// // 消息列表
// const NewsLit = () => import('@/views/newsList/Index.vue')
// // 消息详情
// const NewsDetail = () => import('@/views/newsList/newDetail.vue')
const getRoutes = () => [
  // {
  //   path: '/main',
  //   name: 'Main',
  //   component: Main,
  //   children: [
  //     {
  //       name: 'HomePage',
  //       path: 'homePage',
  //       component: HomePage
  //     },
  //     {
  //       name: 'CollectionPage',
  //       path: 'collectionPage',
  //       component: CollectionPage
  //     },
  //     {
  //       name: 'EditorPage',
  //       path: 'editorPage',
  //       component: EditorPage
  //     },
  //     {
  //       name: 'SchedulePage',
  //       path: 'schedulePage',
  //       component: SchedulePage
  //     },
  //     {
  //       name: 'NewsList',
  //       path: 'newsList',
  //       component: NewsLit
  //     },
  //     {
  //       name: 'NewsDetail',
  //       path: 'newsDetail',
  //       component: NewsDetail
  //     }
  //   ]
  // },
  ...getStaticRoutes()
]
export default getRoutes
