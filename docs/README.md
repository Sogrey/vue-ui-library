# Vue3 UI Library 文档

## 概述

Vue3 UI Library 是一个基于 Vue 3 Composition API 构建的现代化 UI 组件库，提供高质量的组件和良好的开发体验。

## 快速开始

### 安装

```bash
# 使用 npm
npm install @vue3-ui-library/components

# 使用 yarn
yarn add @vue3-ui-library/components

# 使用 pnpm
pnpm add @vue3-ui-library/components
```

### 完整引入

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import Vue3UILibrary from '@vue3-ui-library/components'

const app = createApp(App)
app.use(Vue3UILibrary)
app.mount('#app')
```

### 按需引入

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import { SButton, SInput } from '@vue3-ui-library/components'

const app = createApp(App)
app.use(SButton)
app.use(SInput)
app.mount('#app')
```

## 组件文档

### Button 按钮

#### 基础用法

```vue
<template>
  <s-button>默认按钮</s-button>
  <s-button type="primary">主要按钮</s-button>
  <s-button type="success">成功按钮</s-button>
  <s-button type="warning">警告按钮</s-button>
  <s-button type="error">错误按钮</s-button>
  <s-button type="info">信息按钮</s-button>
  <s-button type="text">文本按钮</s-button>
</template>
```

#### 禁用状态

```vue
<template>
  <s-button disabled>禁用按钮</s-button>
  <s-button type="primary" disabled>禁用主要按钮</s-button>
</template>
```

#### 不同尺寸

```vue
<template>
  <s-button size="mini">迷你按钮</s-button>
  <s-button size="small">小按钮</s-button>
  <s-button size="medium">中等按钮</s-button>
  <s-button size="large">大按钮</s-button>
</template>
```

#### 圆角和圆形

```vue
<template>
  <s-button round>圆角按钮</s-button>
  <s-button cricle>圆形按钮</s-button>
  <s-button type="primary" cricle size="mini">1</s-button>
</template>
```

#### 事件处理

```vue
<template>
  <s-button @click="handleClick">点击我</s-button>
</template>

<script setup>
const handleClick = (event) => {
  console.log('按钮被点击了', event)
}
</script>
```

#### Button Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| type | 按钮类型 | string | primary / success / warning / error / info / text | - |
| nativeType | 原生按钮类型 | string | button / submit / reset | button |
| size | 按钮尺寸 | string | mini / small / medium / large | medium |
| round | 是否圆角 | boolean | - | false |
| cricle | 是否圆形 | boolean | - | false |
| disabled | 是否禁用 | boolean | - | false |

#### Button Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击事件 | event: Event |

### Input 输入框

#### 基础用法

```vue
<template>
  <s-input placeholder="请输入内容" />
</template>
```

#### 双向绑定

```vue
<template>
  <s-input v-model="inputValue" placeholder="v-model 绑定" />
  <span>输入值: {{ inputValue }}</span>
</template>

<script setup>
import { ref } from 'vue'

const inputValue = ref('')
</script>
```

#### 不同尺寸

```vue
<template>
  <s-input size="mini" placeholder="mini 尺寸" />
  <s-input size="small" placeholder="small 尺寸" />
  <s-input size="default" placeholder="default 尺寸" />
  <s-input size="large" placeholder="large 尺寸" />
</template>
```

#### 不同类型

```vue
<template>
  <s-input type="text" placeholder="文本输入" />
  <s-input type="password" placeholder="密码输入" />
  <s-input type="email" placeholder="邮箱输入" />
  <s-input type="number" placeholder="数字输入" />
</template>
```

#### 事件监听

```vue
<template>
  <s-input 
    v-model="inputValue" 
    placeholder="监听事件"
    @input="handleInput"
    @change="handleChange"
  />
</template>

<script setup>
import { ref } from 'vue'

const inputValue = ref('')

const handleInput = (value) => {
  console.log('Input 事件:', value)
}

const handleChange = (value) => {
  console.log('Change 事件:', value)
}
</script>
```

#### Input Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| modelValue | 绑定值 | string | - | '' |
| type | 输入框类型 | string | text / password / email / number | text |
| size | 输入框尺寸 | string | mini / small / default / large | default |
| placeholder | 占位文本 | string | - | - |
| id | 输入框 id | string | - | - |
| name | 输入框 name | string | - | - |

#### Input Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| input | 输入事件 | value: string |
| change | 变更事件 | value: string |
| update:modelValue | v-model 更新事件 | value: string |

## 主题定制

组件库支持主题定制，可以通过 CSS 变量进行样式覆盖。

### 颜色主题

```css
:root {
  --sgy-primary-color: #409eff;
  --sgy-success-color: #67c23a;
  --sgy-warning-color: #e6a23c;
  --sgy-error-color: #f56c6c;
  --sgy-info-color: #909399;
}
```

### 尺寸定制

```css
:root {
  --sgy-font-size-mini: 12px;
  --sgy-font-size-small: 14px;
  --sgy-font-size-default: 16px;
  --sgy-font-size-large: 18px;
}
```

## 开发指南

### 项目结构

```
vue3-ui-library/
├── packages/           # 核心包
│   ├── components/     # 组件源码
│   ├── hooks/         # 工具函数
│   └── utils/         # 工具函数
├── examples/          # 示例项目
├── docs/              # 文档
└── README.md          # 项目说明
```

### 开发环境

```bash
# 克隆项目
git clone https://github.com/Sogrey/vue-ui-library.git
cd vue3-ui-library

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建组件库
pnpm build

# 运行测试
pnpm test
```

### 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 常见问题

### Q: 如何自定义组件样式？
A: 可以通过 CSS 变量或深度选择器进行样式覆盖。

### Q: 支持 TypeScript 吗？
A: 是的，组件库完全支持 TypeScript。

### Q: 支持 SSR 吗？
A: 支持服务端渲染。

### Q: 浏览器兼容性如何？
A: 支持现代浏览器和 IE11+。

## 更新日志

### v1.0.0 (2024-10-30)
- ✨ 初始版本发布
- ✨ 添加 Button 组件
- ✨ 添加 Input 组件
- ✨ 支持主题定制

## 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 联系方式

- GitHub: [https://github.com/Sogrey/vue-ui-library](https://github.com/Sogrey/vue-ui-library)
- 邮箱: sogrey@example.com

---

感谢使用 Vue3 UI Library！如果遇到问题或有建议，欢迎提交 Issue 或 Pull Request。