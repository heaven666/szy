// 用来设置全局的组件，暴露到全局，给其他任何组件使用
import Vue from 'vue'

import IconSvg from './icon-svg/Index.vue'

/**
 *  Register components globally
 * */
const components = {
  'icon-svg': IconSvg
}

Object.keys(components).forEach(key => Vue.component(key, components[key]))
