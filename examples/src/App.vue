<script setup>
// import SButton from '@vue3-ui-library/components/button'
// import SInput from '@vue3-ui-library/components/input'

import { SButton, SInput } from '@vue3-ui-library/components'
import { ref } from 'vue'

// 响应式数据
const inputValue = ref('')
const inputValue2 = ref('')
const inputValue3 = ref('')

// 事件处理函数
const handleInput = (value) => {
  console.log('Input 事件:', value)
}

const handleChange = (value) => {
  console.log('Change 事件:', value)
}

const handleCustomInput = (value) => {
  console.log('自定义处理:', value)
}

// 按钮点击事件处理
const handleButtonClick = (event, buttonType = '默认') => {
  console.log(`按钮点击: ${buttonType}按钮`, event)
}
</script>

<template>
  <p> Basic Usage </p>
  <p class="row-gap">
    <s-button @click="handleButtonClick($event, '默认')">默认按钮</s-button>
    <s-button type="primary" @click="handleButtonClick($event, '主要')">主要</s-button>
    <s-button type="success" @click="handleButtonClick($event, '成功')">成功</s-button>
    <s-button type="info" @click="handleButtonClick($event, '信息')">信息</s-button>
    <s-button type="warning" @click="handleButtonClick($event, '警告')">警告</s-button>
    <s-button type="error" @click="handleButtonClick($event, '错误')">错误</s-button>
    <s-button type="text" @click="handleButtonClick($event, '文本')">文本</s-button>
  </p>
  <p> Disabled </p>
  <p class="row-gap">
    <s-button disabled>默认按钮</s-button>
    <s-button type="primary" disabled>主要</s-button>
    <s-button type="success" disabled>成功</s-button>
    <s-button type="info" disabled>信息</s-button>
    <s-button type="warning" disabled>警告</s-button>
    <s-button type="error" disabled>错误</s-button>
    <s-button type="text" disabled>文本</s-button>
  </p>
  <p> Round </p>
  <p class="row-gap">
    <s-button round>默认按钮</s-button>
    <s-button type="primary" round>主要</s-button>
    <s-button type="success" round>成功</s-button>
    <s-button type="info" round>信息</s-button>
    <s-button type="warning" round>警告</s-button>
    <s-button type="error" round>错误</s-button>
    <s-button type="text" round>文本</s-button>
  </p>
  <p> Cricle </p>
  <p class="row-gap">
    <s-button cricle>默认按钮</s-button>
    <s-button type="primary" cricle size="mini">1</s-button>
    <s-button type="success" cricle size="small">2</s-button>
    <s-button type="info" cricle size="medium">3</s-button>
    <s-button type="warning" cricle size="large">4</s-button>
    <s-button type="error" cricle>错误</s-button>
    <s-button type="text" cricle>文本</s-button>
  </p>
  <p> Input - 基本使用 </p>
  <p class="row-gap">
    <s-input placeholder="基本输入框" />
  </p>

  <p> Input - v-model 双向绑定 </p>
  <p class="row-gap">
    <s-input v-model="inputValue" placeholder="v-model 绑定" />
    <span>输入值: {{ inputValue }}</span>
  </p>

  <p> Input - 事件监听 </p>
  <p class="row-gap">
    <s-input v-model="inputValue2" placeholder="监听 input 事件" @input="handleInput" />
    <span>输入值: {{ inputValue2 }}</span>
  </p>

  <p> Input - 多个事件监听 </p>
  <p class="row-gap">
    <s-input v-model="inputValue3" placeholder="监听多个事件" @input="handleCustomInput" @change="handleChange" />
    <span>输入值: {{ inputValue3 }}</span>
  </p>

  <p> Input - 不同尺寸 </p>
  <p class="row-gap">
    <s-input size="mini" placeholder="mini 尺寸" />
    <s-input size="small" placeholder="small 尺寸" />
    <s-input size="default" placeholder="default 尺寸" />
    <s-input size="large" placeholder="large 尺寸" />
  </p>

  <p> Input - 不同类型 </p>
  <p class="row-gap">
    <s-input type="text" placeholder="文本输入" />
    <s-input type="password" placeholder="密码输入" />
    <s-input type="email" placeholder="邮箱输入" />
    <s-input type="number" placeholder="数字输入" />
  </p>
</template>

<style scoped>
.row-gap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0 10px;
}
</style>
