import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import TopMain from '@/components/TopTableBar'
import LeftHtml from '@/components/leftbar/LeftHtmlBar'
import HtmlBasic1 from '@/components/html/HtmlBasic1'
import HtmlBasic2 from '@/components/html/HtmlBasic2'
import HtmlBasic3 from '@/components/html/HtmlBasic3'
import HtmlBasic4 from '@/components/html/HtmlBasic4'

import LeftCSS from '@/components/leftbar/LeftCssBar'
import LeftJavaScript from '@/components/leftbar/LeftJavaScriptBar'
import LeftVue from '@/components/leftbar/LeftVueBar'
import MainContent from '@/components/MainContent'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'TopMain',
      components: {
        default: TopMain,
        left: LeftHtml,
        right: HelloWorld
      }
    },
    {
      path: '/html',
      name: 'HTML',
      components: {
        default: TopMain,
        left: LeftHtml,
        right: HtmlBasic1
      }
    },
    {
      path: '/html/basic1',
      name: 'HTML-Basic-1',
      components: {
        default: TopMain,
        left: LeftHtml,
        right: HtmlBasic1
      }
    },
    {
      path: '/html/basic2',
      name: 'HTML-Basic-2',
      components: {
        default: TopMain,
        left: LeftHtml,
        right: HtmlBasic2
      }
    },
    {
      path: '/html/basic3',
      name: 'HTML-Basic-3',
      components: {
        default: TopMain,
        left: LeftHtml,
        right: HtmlBasic3
      }
    },
    {
      path: '/html/basic4',
      name: 'HTML-Basic-4',
      components: {
        default: TopMain,
        left: LeftHtml,
        right: HtmlBasic4
      }
    },
    {
      path: '/css',
      name: 'CSS',
      components: {
        default: TopMain,
        left: LeftCSS,
        right: MainContent
      }
    },
    {
      path: '/javaScript',
      name: 'JavaScript',
      components: {
        default: TopMain,
        left: LeftJavaScript,
        right: MainContent
      }
    },
    {
      path: '/vue',
      name: 'Vue',
      components: {
        default: TopMain,
        left: LeftVue,
        right: HelloWorld
      }
    }
  ]
})
