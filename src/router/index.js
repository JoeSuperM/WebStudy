import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import TopMain from '@/components/TopTableBar'
import LeftHtml from '@/components/leftbar/LeftHtmlBar'
import HtmlBasic1 from '@/components/html/HtmlBasic1'
import HtmlBasic2 from '@/components/html/HtmlBasic2'
import HtmlBasic3 from '@/components/html/HtmlBasic3'
import HtmlBasic4 from '@/components/html/HtmlBasic4'
import HtmlBasic5 from '@/components/html/HtmlBasic5'
import HtmlBasic6 from '@/components/html/HtmlBasic6'
import HtmlBasic7 from '@/components/html/HtmlBasic7'
import HtmlBasic8 from '@/components/html/HtmlBasic8'
import HtmlBasic9 from '@/components/html/HtmlBasic9'
import HtmlBasic10 from '@/components/html/HtmlBasic10'
import HtmlBasic11 from '@/components/html/HtmlBasic11'

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
  }, {
    path: '/html',
    name: 'HTML',
    components: {
      default: TopMain,
      left: LeftHtml,
      right: HtmlBasic1
    }
  }, {
    path: '/html/basic1',
    name: 'HTML-Basic-1',
    components: {
      default: TopMain,
      left: LeftHtml,
      right: HtmlBasic1
    }
  }, {
    path: '/html/basic2',
    name: 'HTML-Basic-2',
    components: {
      default: TopMain,
      left: LeftHtml,
      right: HtmlBasic2
    }
  }, {
    path: '/html/basic3',
    name: 'HTML-Basic-3',
    components: {
      default: TopMain,
      left: LeftHtml,
      right: HtmlBasic3
    }
  }, {
    path: '/html/basic4',
    name: 'HTML-Basic-4',
    components: {
      default: TopMain,
      left: LeftHtml,
      right: HtmlBasic4
    }
  }, {
    path: '/html/basic5',
    name: 'HTML-Basic-5',
    components: {
      default: TopMain,
      left: LeftHtml,
      right: HtmlBasic5
    }
  }, {
    path: '/html/basic6',
    name: 'HTML-Basic-6',
    components: {
      default: TopMain,
      left: LeftHtml,
      right: HtmlBasic6
    }
  }, {
    path: '/html/basic7',
    name: 'HTML-Basic-7',
    components: {
      default: TopMain,
      left: LeftHtml,
      right: HtmlBasic7
    }
  }, {
    path: '/html/basic8',
    name: 'HTML-Basic-8',
    components: {
      default: TopMain,
      left: LeftHtml,
      right: HtmlBasic8
    }
  }, {
    path: '/html/basic9',
    name: 'HTML-Basic-9',
    components: {
      default: TopMain,
      left: LeftHtml,
      right: HtmlBasic9
    }
  }, {
    path: '/html/basic10',
    name: 'HTML-Basic-10',
    components: {
      default: TopMain,
      left: LeftHtml,
      right: HtmlBasic10
    }
  }, {
    path: '/html/basic11',
    name: 'HTML-Basic-11',
    components: {
      default: TopMain,
      left: LeftHtml,
      right: HtmlBasic11
    }
  }, {
    path: '/css',
    name: 'CSS',
    components: {
      default: TopMain,
      left: LeftCSS,
      right: MainContent
    }
  }, {
    path: '/javaScript',
    name: 'JavaScript',
    components: {
      default: TopMain,
      left: LeftJavaScript,
      right: MainContent
    }
  }, {
    path: '/vue',
    name: 'Vue',
    components: {
      default: TopMain,
      left: LeftVue,
      right: HelloWorld
    }
  }]
})
