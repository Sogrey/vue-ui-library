# Vue3 UI Library

一个基于 Vue 3 的 UI 组件库。

## 特性

- 🚀 基于 Vue 3 Composition API
- 📦 按需加载，轻量级
- 🎨 可定制主题
- 📱 响应式设计
- 🔧 TypeScript 支持

## 安装

```bash
npm install @vue3-ui-library/components
# 或
yarn add @vue3-ui-library/components
# 或
pnpm add @vue3-ui-library/components
```

## 快速开始

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import { SButton } from '@vue3-ui-library/components'

const app = createApp(App)
app.use(SButton)
app.mount('#app')
```

## 组件

- Button 按钮
- ...更多组件开发中

## 开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建
pnpm build

# 测试
pnpm test
```

## 分支说明

- `1.0` - 稳定版本分支
- `1.1` - 开发版本分支
- `main` - 主分支（暂不提交）

## 许可证

MIT