import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import TopMain from '@/components/TopTableBar'
import Welcome from '@/components/Welcome'

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
import HtmlBasic12 from '@/components/html/HtmlBasic12'

import LeftCSS from '@/components/leftbar/LeftCssBar'
import CssBasic1 from '@/components/css/CssBasic1'
import CssBasic2 from '@/components/css/CssBasic2'
import CssBasic3 from '@/components/css/CssBasic3'
import CssBasic4 from '@/components/css/CssBasic4'
import CssBasic5 from '@/components/css/CssBasic5'
import CssBasic6 from '@/components/css/CssBasic6'
import CssBasic7 from '@/components/css/CssBasic7'
import CssBasic8 from '@/components/css/CssBasic8'

import LeftJavaScript from '@/components/leftbar/LeftJavaScriptBar'
import LeftVue from '@/components/leftbar/LeftVueBar'


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'TopMain',
    components: {
      default: TopMain,
      left: LeftHtml,
      right: Welcome
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
    path: '/html/basic12',
    name: 'HTML-Basic-12',
    components: {
      default: TopMain,
      left: LeftHtml,
      right: HtmlBasic12
    }
  }, {
    path: '/css',
    name: 'CSS',
    components: {
      default: TopMain,
      left: LeftCSS,
      right: CssBasic1
    }
  }, {
    path: '/css/basic1',
    name: 'CSS-Basic-1',
    components: {
      default: TopMain,
      left: LeftCSS,
      right: CssBasic1
    }
  }, {
    path: '/css/basic2',
    name: 'CSS-Basic-2',
    components: {
      default: TopMain,
      left: LeftCSS,
      right: CssBasic2
    }
  }, {
    path: '/css/basic3',
    name: 'CSS-Basic-3',
    components: {
      default: TopMain,
      left: LeftCSS,
      right: CssBasic3
    }
  }, {
    path: '/css/basic4',
    name: 'CSS-Basic-4',
    components: {
      default: TopMain,
      left: LeftCSS,
      right: CssBasic4
    }
  }, {
    path: '/css/basic5',
    name: 'CSS-Basic-5',
    components: {
      default: TopMain,
      left: LeftCSS,
      right: CssBasic5
    }
  }, {
    path: '/css/basic6',
    name: 'CSS-Basic-6',
    components: {
      default: TopMain,
      left: LeftCSS,
      right: CssBasic6
    }
  }, {
    path: '/css/basic7',
    name: 'CSS-Basic-7',
    components: {
      default: TopMain,
      left: LeftCSS,
      right: CssBasic7
    }
  }, {
    path: '/css/basic8',
    name: 'CSS-Basic-8',
    components: {
      default: TopMain,
      left: LeftCSS,
      right: CssBasic8
    }
  }, {
    path: '/javaScript',
    name: 'JavaScript',
    components: {
      default: TopMain,
      left: LeftJavaScript,
      right: Welcome
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
