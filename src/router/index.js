import Vue from 'vue'
import VueRouter from 'vue-router'
// import Singer from '../views/Singer'
// import Recommend from '../views/Recommend'
// import Rank from '../views/Rank'
// import Search from '../views/Search'

Vue.use(VueRouter)
//按需加载,导入
const Home=(resolve)=>{
  import('../views/Home').then((module)=>
    resolve(module)
)}
const Life=(resolve)=>{
  import('../views/Life').then((module)=>
    resolve(module)
)}
const Support=(resolve)=>{
  import('../views/Support').then((module)=>
    resolve(module)
)}
const HtmlCss=(resolve)=>{
  import('../components/home/HtmlCss').then((module)=>
    resolve(module)
)}
const Web=(resolve)=>{
  import('../components/home/Web').then((module)=>
    resolve(module)
)}
const PlugIn=(resolve)=>{
  import('../components/home/PlugIn').then((module)=>
    resolve(module)
)}
const BuildSite=(resolve)=>{
  import('../components/home/BuildSite').then((module)=>
    resolve(module)
)}
const Interview=(resolve)=>{
  import('../components/home/Interview').then((module)=>
    resolve(module)
)}
const Note=(resolve)=>{
  import('../components/home/Note').then((module)=>
    resolve(module)
)}
const Website=(resolve)=>{
  import('../components/home/Website').then((module)=>
    resolve(module)
)}



const routes = [
  {path:'/',redirect:'/home/htmlCss'},
  {path:'/home',redirect:'/home/htmlCss'},
//   {path:'/recommend',
//   component:Recommend,
//   children:[{
//     path:'detail/:id/:type',
//     component:Detail,
//   }]
// },
  {path:'/Home',
     component:Home,
     children:[{
      path:'htmlCss',
      component:HtmlCss,
    },{
      path:'web',
      component:Web,
    },{
      path:'plugIn',
      component:PlugIn,
    },{
      path:'buildSite',
      component:BuildSite,
    },{
      path:'interview',
      component:Interview,
    },{
      path:'note',
      component:Note,
    },{
      path:'website',
      component:Website,
    },
    ]
  },
  {path:'/Support',component:Support},
  {path:'/Life',component:Life},
]

const router = new VueRouter({
  routes:routes
})

export default router
