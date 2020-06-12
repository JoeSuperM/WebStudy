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
import CssBasic7A from '@/components/css/CssBasic7A'
import CssBasic7B from '@/components/css/CssBasic7B'
import CssBasic7C from '@/components/css/CssBasic7C'
import CssBasic8 from '@/components/css/CssBasic8'
import CssBasic9 from '@/components/css/CssBasic9'
import CssBasic10 from '@/components/css/CssBasic10'
import CssBasic11 from '@/components/css/CssBasic11'
import CssBasic12 from '@/components/css/CssBasic12'
import CssBasic13 from '@/components/css/CssBasic13'
import CssBasic14 from '@/components/css/CssBasic14'
import CssBasic15 from '@/components/css/CssBasic15'

import LeftJavaScript from '@/components/leftbar/LeftJavaScriptBar'
import JsBasic1 from '@/components/javascript/JsBasic1'
import JsBasic2 from '@/components/javascript/JsBasic2'
import JsBasic3 from '@/components/javascript/JsBasic3'
import JsBasic4 from '@/components/javascript/JsBasic4'
import JsBasic5 from '@/components/javascript/JsBasic5'
import JsBasic6 from '@/components/javascript/JsBasic6'
import JsBasic7 from '@/components/javascript/JsBasic7'
import JsBasic8 from '@/components/javascript/JsBasic8'
import JsBasic9 from '@/components/javascript/JsBasic9'
import JsBasic10 from '@/components/javascript/JsBasic10'
import JsBasic11 from '@/components/javascript/JsBasic11'
import JsBasic12 from '@/components/javascript/JsBasic12'

import LeftVue from '@/components/leftbar/LeftVueBar'
import VueBasic1 from '@/components/vue/VueBasic1'
import VueBasic2 from '@/components/vue/VueBasic2'
import VueBasic3 from '@/components/vue/VueBasic3'
import VueBasic4 from '@/components/vue/VueBasic4'
import VueBasic5 from '@/components/vue/VueBasic5'
import VueBasic6 from '@/components/vue/VueBasic6'
import VueBasic7 from '@/components/vue/VueBasic7'
import VueBasic8 from '@/components/vue/VueBasic8'
import VueBasic9 from '@/components/vue/VueBasic9'
import VueBasic10 from '@/components/vue/VueBasic10'
import VueBasic11 from '@/components/vue/VueBasic11'
import VueBasic12 from '@/components/vue/VueBasic12'

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
    path: '/css/basic7/a',
    name: 'CSS-Basic-7A',
    components: {
      default: TopMain,
      left: LeftCSS,
      right: CssBasic7A
    }
  }, {
    path: '/css/basic7/b',
    name: 'CSS-Basic-7B',
    components: {
      default: TopMain,
      left: LeftCSS,
      right: CssBasic7B
    }
  }, {
    path: '/css/basic7/c',
    name: 'CSS-Basic-7C',
    components: {
      default: TopMain,
      left: LeftCSS,
      right: CssBasic7C
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
    path: '/css/basic9',
    name: 'CSS-Basic-9',
    components: {
      default: TopMain,
      left: LeftCSS,
      right: CssBasic9
    }
  }, {
    path: '/css/basic10',
    name: 'CSS-Basic-10',
    components: {
      default: TopMain,
      left: LeftCSS,
      right: CssBasic10
    }
  }, {
    path: '/css/basic11',
    name: 'CSS-Basic-11',
    components: {
      default: TopMain,
      left: LeftCSS,
      right: CssBasic11
    }
  }, {
    path: '/css/basic12',
    name: 'CSS-Basic-12',
    components: {
      default: TopMain,
      left: LeftCSS,
      right: CssBasic12
    }
  }, {
    path: '/css/basic13',
    name: 'CSS-Basic-13',
    components: {
      default: TopMain,
      left: LeftCSS,
      right: CssBasic13
    }
  }, {
    path: '/css/basic14',
    name: 'CSS-Basic-14',
    components: {
      default: TopMain,
      left: LeftCSS,
      right: CssBasic14
    }
  }, {
    path: '/css/basic15',
    name: 'CSS-Basic-15',
    components: {
      default: TopMain,
      left: LeftCSS,
      right: CssBasic15
    }
  }, {
    path: '/js/basic1',
    name: 'Js-Basic-1',
    components: {
      default: TopMain,
      left: LeftJavaScript,
      right: JsBasic1
    }
  }, {
    path: '/js/basic2',
    name: 'Js-Basic-2',
    components: {
      default: TopMain,
      left: LeftJavaScript,
      right: JsBasic2
    }
  }, {
    path: '/js/basic3',
    name: 'Js-Basic-3',
    components: {
      default: TopMain,
      left: LeftJavaScript,
      right: JsBasic3
    }
  }, {
    path: '/js/basic4',
    name: 'Js-Basic-4',
    components: {
      default: TopMain,
      left: LeftJavaScript,
      right: JsBasic4
    }
  }, {
    path: '/js/basic5',
    name: 'Js-Basic-5',
    components: {
      default: TopMain,
      left: LeftJavaScript,
      right: JsBasic5
    }
  }, {
    path: '/js/basic6',
    name: 'Js-Basic-6',
    components: {
      default: TopMain,
      left: LeftJavaScript,
      right: JsBasic6
    }
  }, {
    path: '/js/basic7',
    name: 'Js-Basic-7',
    components: {
      default: TopMain,
      left: LeftJavaScript,
      right: JsBasic7
    }
  }, {
    path: '/js/basic8',
    name: 'Js-Basic-8',
    components: {
      default: TopMain,
      left: LeftJavaScript,
      right: JsBasic8
    }
  }, {
    path: '/js/basic9',
    name: 'Js-Basic-9',
    components: {
      default: TopMain,
      left: LeftJavaScript,
      right: JsBasic9
    }
  }, {
    path: '/js/basic10',
    name: 'Js-Basic-10',
    components: {
      default: TopMain,
      left: LeftJavaScript,
      right: JsBasic10
    }
  }, {
    path: '/js/basic11',
    name: 'Js-Basic-11',
    components: {
      default: TopMain,
      left: LeftJavaScript,
      right: JsBasic11
    }
  }, {
    path: '/js/basic12',
    name: 'Js-Basic-12',
    components: {
      default: TopMain,
      left: LeftJavaScript,
      right: JsBasic12
    }
  }, {
    path: '/vue/basic1',
    name: 'Vue-Basic-1',
    components: {
      default: TopMain,
      left: LeftVue,
      right: VueBasic1
    }
  }, {
    path: '/vue/basic2',
    name: 'Vue-Basic-2',
    components: {
      default: TopMain,
      left: LeftVue,
      right: VueBasic2
    }
  }, {
    path: '/vue/basic3',
    name: 'Vue-Basic-3',
    components: {
      default: TopMain,
      left: LeftVue,
      right: VueBasic3
    }
  }, {
    path: '/vue/basic4',
    name: 'Vue-Basic-4',
    components: {
      default: TopMain,
      left: LeftVue,
      right: VueBasic4
    }
  }, {
    path: '/vue/basic5',
    name: 'Vue-Basic-5',
    components: {
      default: TopMain,
      left: LeftVue,
      right: VueBasic5
    }
  }, {
    path: '/vue/basic6',
    name: 'Vue-Basic-6',
    components: {
      default: TopMain,
      left: LeftVue,
      right: VueBasic6
    }
  }, {
    path: '/vue/basic7',
    name: 'Vue-Basic-7',
    components: {
      default: TopMain,
      left: LeftVue,
      right: VueBasic7
    }
  }, {
    path: '/vue/basic8',
    name: 'Vue-Basic-8',
    components: {
      default: TopMain,
      left: LeftVue,
      right: VueBasic8
    }
  }, {
    path: '/vue/basic9',
    name: 'Vue-Basic-9',
    components: {
      default: TopMain,
      left: LeftVue,
      right: VueBasic9
    }
  }, {
    path: '/vue/basic10',
    name: 'Vue-Basic-10',
    components: {
      default: TopMain,
      left: LeftVue,
      right: VueBasic10
    }
  }, {
    path: '/vue/basic11',
    name: 'Vue-Basic-11',
    components: {
      default: TopMain,
      left: LeftVue,
      right: VueBasic11
    }
  }, {
    path: '/vue/basic12',
    name: 'Vue-Basic-12',
    components: {
      default: TopMain,
      left: LeftVue,
      right: VueBasic12
    }
  }]
})
