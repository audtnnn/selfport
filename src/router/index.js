import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MainView from '@/views/MainView.vue'
import EventView from '@/views/EventView.vue'
import CustomerView from '@/views/CustomerView.vue'
import SurveyView from '@/views/SurveyView.vue'
import ResultComponentView from '@/views/ResultComponentView.vue'
import PracticeView from '@/views/PracticeView.vue'
Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        { path:"/", name:"home", component:HomeView},
        { path:"/main", name:"main", component:MainView},
        { path:"/event", name:"event", component:EventView},
        { path:"/customer", name:"customer", component:CustomerView},
        { path:"/survey", name:"survey", component:SurveyView},
        { path:"/result", name:"result", component:ResultComponentView},
        { path:"/practice", name:"practice", component:PracticeView}
    ],
})

router.beforeEach((to, from, next) => {
  // 페이지 이동 전에 스크롤을 맨 위로 이동
  window.scrollTo(0, 0);
  next();
});

export default router;
