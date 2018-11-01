import Vue from 'vue'
import Router from 'vue-router'
import Floatmark from '@/components/Floatmark'
import Floattype1 from '@/components/pages/Floattype1';
import Floattype2 from '@/components/pages/Floattype2';
import Floattype3 from '@/components/pages/Floattype3';
import Floattype4 from '@/components/pages/Floattype4';
import Floattype5 from '@/components/pages/Floattype5';
import Video from '@/components/pages/videopop'
import Input from '@/components/pages/inputpop'
import Opinion from '@/components/pages/opinion'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Floatmark',
      component: Floatmark,
      children: [
        {
          path: '/floattype1',
          name: 'Floattype1',
          component: Floattype1
        },
        {
          path: '/floattype2',
          name: 'Floattype2',
          component: Floattype2
        },
        {
          path: '/floattype3',
          name: 'Floattype3',
          component: Floattype3
        },
        {
          path: '/floattype4',
          name: 'Floattype4',
          component: Floattype4
        },
        {
          path: '/floattype5',
          name: 'Floattype5',
          component: Floattype5
        },
        {
          path: '/videopop',
          name: 'Videopop',
          component: Video
        },
        {
          path: '/inputpop',
          name: 'Inputpop',
          component: Input
        },
        {
          path: '/opinionpop',
          name: 'Opinionpop',
          component: Opinion
        },

      ]
    }
  ]
})
