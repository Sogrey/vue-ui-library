// 每个组件的文件夹下都有一个index.js文件
// 用于向外默认和按需导出当前的封装好的组件

import Input from './src/index.vue'

import { componentInstall } from '@vue3-ui-library/utils'

// 按需导出
export const VInput = componentInstall(Input)

// 默认导出
export default VInput

